#alias pandock='docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/extra'
#pandock src/combined_output.md -o book.`date +%s`.pdf --template eisvogel --listings

docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/extra $1 -o book.`date +%s`.pdf --template eisvogel --listings

