#pagedjs-cli 'https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html' -o pagejs.pdf --outline-tags "h1,h2,h3" --warn

#wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://snissn.github.io/back-goes-backwards/medical-foundation/combined.html

#pagedjs-cli ./snissn.github.io/back-goes-backwards/medical-foundation/combined/combined.html \
#  -o pagejs.pdf \
#  --outline-tags "h1,h2,h3,h4" \
#  --additional-script ./toc.js \
#  --style layout.css --style ./toc.css --style page-override.css


#new

pagedjs-cli snissn.github.io/back-goes-backwards/medical-foundation/newgen/outlines/combined/combined.html \
  -o 'body.pdf' \
  --outline-tags "h1,h2,h3,h4" \
  --additional-script ./toc.js \
  --style layout.css --style ./toc.css --style page-override.css




gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile='./The Back Goes Backwards: Integrating Biomechanics into Modern Medicine By Michael Seiler and Dr. Katherine E. Gallardo, MD.pdf' lo-res-cover.pdf body.pdf
