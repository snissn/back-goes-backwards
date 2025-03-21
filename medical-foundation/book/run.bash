#pagedjs-cli 'https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html' -o pagejs.pdf --outline-tags "h1,h2,h3" --warn

#wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html

pagedjs-cli ./snissn.github.io/back-goes-backwards/medical-foundation/combined/combined.html \
  -o pagejs.pdf \
  --outline-tags "h1,h2,h3" \
  --additional-script ./toc.js \
  --style layout.css --style ./toc.css --style page-override.css


