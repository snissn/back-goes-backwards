#!/usr/bin/env swift

import AppKit
import Foundation
import Vision

guard CommandLine.arguments.count == 2 || CommandLine.arguments.count == 3 else {
    fputs("usage: vision_ocr.swift [--boxes] IMAGE\n", stderr)
    exit(2)
}

let boxesMode = CommandLine.arguments.count == 3 && CommandLine.arguments[1] == "--boxes"
let imagePath = CommandLine.arguments.last!
guard
    let image = NSImage(contentsOfFile: imagePath),
    let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
    fputs("could not read image: \(imagePath)\n", stderr)
    exit(1)
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
request.recognitionLanguages = ["zh-Hans", "en-US"]

let handler = VNImageRequestHandler(cgImage: cgImage)
try handler.perform([request])

let observations = (request.results ?? []).sorted {
    let verticalDelta = $0.boundingBox.midY - $1.boundingBox.midY
    if abs(verticalDelta) > 0.012 {
        return verticalDelta > 0
    }
    return $0.boundingBox.minX < $1.boundingBox.minX
}

for observation in observations {
    if let candidate = observation.topCandidates(1).first {
        if boxesMode {
            let box = observation.boundingBox
            let width = CGFloat(cgImage.width)
            let height = CGFloat(cgImage.height)
            let padding: CGFloat = 4
            let x1 = max(0, floor(box.minX * width - padding))
            let y1 = max(0, floor((1 - box.maxY) * height - padding))
            let x2 = min(width - 1, ceil(box.maxX * width + padding))
            let y2 = min(height - 1, ceil((1 - box.minY) * height + padding))
            // Instructional art occupies the center of each crop. Restrict
            // automated cleanup to the outer band so facial features, garment
            // marks, props, and movement arrows can never be mistaken for text.
            let touchesEdge =
                y1 < height * 0.18 || y2 > height * 0.82 ||
                x1 < width * 0.12 || x2 > width * 0.88
            let isHorizontalText =
                candidate.string.count >= 2 &&
                box.width / max(box.height, 0.001) > 1.2
            if touchesEdge && isHorizontalText {
                print("rectangle \(Int(x1)),\(Int(y1)) \(Int(x2)),\(Int(y2))")
            }
        } else {
            print(candidate.string)
        }
    }
}
