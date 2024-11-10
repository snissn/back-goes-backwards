#!/bin/bash

# Function to check if a PDF engine is installed
check_engine() {
    if ! command -v "$1" &> /dev/null; then
        echo "Error: $1 is not installed. Please install $1 to use this option."
    else
        AVAILABLE_ENGINES+=("$1")
    fi
}

# Initialize an array to store available engines
AVAILABLE_ENGINES=()

# Check for each PDF engine and add it to the list if available
check_engine xelatex
check_engine wkhtmltopdf
check_engine pdflatex
check_engine lualatex
check_engine weasyprint
check_engine prince
check_engine context

# Output filenames
output_filename="The_Back_Goes_Backwards"

# Generate PDF with each available engine
for engine in "${AVAILABLE_ENGINES[@]}"; do
    echo "Generating PDF with $engine..."
    output_file="${output_filename}-${engine}.pdf"

    if pandoc --metadata title="The Back Goes Backwards" README.md -o "$output_file" --pdf-engine="$engine"; then
        echo "Successfully created $output_file."
    else
        echo "Failed to create $output_file using $engine."
    fi
done

# If no engines are available, print a message
if [ ${#AVAILABLE_ENGINES[@]} -eq 0 ]; then
    echo "No compatible PDF engines found. Please install one of the following: xelatex, wkhtmltopdf, pdflatex, lualatex, weasyprint, prince, context."
    exit 1
fi


