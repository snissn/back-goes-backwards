alias pandock='docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/extra'
pandock src/combined_output.md -o example.pdf --template eisvogel --listings

