import Foundation
import Vision
import ImageIO

struct Candidate: Codable {
    let text: String
    let confidence: Float
}

struct OCRLine: Codable {
    let x: Double
    let y: Double
    let width: Double
    let height: Double
    let candidates: [Candidate]
}

struct OCRPage: Codable {
    let image: String
    let lines: [OCRLine]
}

func loadCGImage(path: String) throws -> CGImage {
    let url = URL(fileURLWithPath: path) as CFURL
    guard let source = CGImageSourceCreateWithURL(url, nil),
          let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        throw NSError(domain: "vision-ocr", code: 1,
                      userInfo: [NSLocalizedDescriptionKey: "Unable to load \(path)"])
    }
    return image
}

let arguments = Array(CommandLine.arguments.dropFirst())
guard arguments.count >= 2 else {
    fputs("Usage: vision_ocr <output.json> <image> [image ...]\n", stderr)
    exit(2)
}

let outputPath = arguments[0]
let imagePaths = Array(arguments.dropFirst())
var pages: [OCRPage] = []

for imagePath in imagePaths {
    let image = try loadCGImage(path: imagePath)
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = true
    request.recognitionLanguages = ["zh-Hans", "zh-Hant", "en-US"]
    request.minimumTextHeight = 0.004

    let handler = VNImageRequestHandler(cgImage: image, orientation: .up, options: [:])
    try handler.perform([request])

    let observations = (request.results ?? []).sorted {
        if abs($0.boundingBox.midY - $1.boundingBox.midY) > 0.008 {
            return $0.boundingBox.midY > $1.boundingBox.midY
        }
        return $0.boundingBox.minX < $1.boundingBox.minX
    }

    let lines = observations.map { observation in
        OCRLine(
            x: observation.boundingBox.minX,
            y: observation.boundingBox.minY,
            width: observation.boundingBox.width,
            height: observation.boundingBox.height,
            candidates: observation.topCandidates(3).map {
                Candidate(text: $0.string, confidence: $0.confidence)
            }
        )
    }
    pages.append(OCRPage(image: imagePath, lines: lines))
}

let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
let data = try encoder.encode(pages)
try data.write(to: URL(fileURLWithPath: outputPath), options: .atomic)
