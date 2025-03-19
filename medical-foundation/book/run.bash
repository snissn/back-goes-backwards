#pagedjs-cli 'https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html' -o pagejs.pdf --outline-tags "h1,h2,h3" --warn

#wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html

pagedjs-cli ./snissn.github.io/back-goes-backwards/medical-foundation/combined.html \
  -o pagejs.pdf \
  --outline-tags "h1,h2,h3" \
  --additional-script ./toc.js \
  --width 152.4 --height 228.6 \
  --style ./toc.css --style layout.css --style page-override.css


