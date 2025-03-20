class TOCHandler extends Paged.Handler {
  beforeParsed(content) {
    const doc = content.ownerDocument;

    // Build TOC
    const toc = doc.createElement("section");
    toc.id = "toc";
    toc.innerHTML = "<h1>Table of Contents</h1><ul id='toc-list'></ul>";

const placeholder = content.querySelector("#toc-placeholder");
if (placeholder && placeholder.parentNode) {
  placeholder.parentNode.replaceChild(toc, placeholder);
} else {
  content.insertBefore(toc, content.firstChild); // fallback
}


    const list = toc.querySelector("#toc-list");
    const headings = content.querySelectorAll("h1, h2, h3");
    const seenLabels = new Set();

    headings.forEach((el, index) => {
      const tagLevel = el.tagName.toLowerCase();
      const refId = `ref-${index}`;
      const label = el.textContent?.trim();
      if (!label || seenLabels.has(label)) return;
      seenLabels.add(label);

      // Add TOC data-ref
      el.id = el.id || refId;
      el.setAttribute("data-ref", refId);

      const li = doc.createElement("li");
      li.classList.add(`toc-level-${tagLevel}`);

      const a = doc.createElement("a");
      a.href = `#${el.id}`;
      a.textContent = label;

      const pageSpan = doc.createElement("span");
      pageSpan.classList.add("toc-page");
      pageSpan.setAttribute("data-ref-target", refId);

      li.appendChild(a);
      li.appendChild(pageSpan);
      list.appendChild(li);
    });

    // Now: safely wrap *standalone* H1s in .chapter-title blocks (NOT the TOC title)
    const allH1s = Array.from(content.querySelectorAll("h1"));
    allH1s.forEach(h1 => {
      if (h1.closest("#toc")) return; // skip TOC heading

      const next = h1.nextElementSibling;
      const isStandalone =
        (!next || !/^(p|ul|ol|div|section)$/i.test(next.tagName)) &&
        !h1.classList.contains("no-chapter-title");

      if (isStandalone) {
        const wrapper = doc.createElement("section");
        wrapper.classList.add("chapter-title");

        const inner = doc.createElement("div");
        inner.classList.add("chapter-heading");

        h1.parentNode.insertBefore(wrapper, h1);
        wrapper.appendChild(inner);
        inner.appendChild(h1);
      }
    });
  }

  afterRendered(pages) {
    const refMap = new Map();
    pages.forEach((page, pageIndex) => {
      page.element.querySelectorAll('[data-ref]').forEach(el => {
        const ref = el.getAttribute("data-ref");
        if (ref) refMap.set(ref, pageIndex + 1);
      });
    });

    document.querySelectorAll('.toc-page').forEach(span => {
      const target = span.getAttribute("data-ref-target");
      const pageNum = refMap.get(target);
      span.textContent = pageNum || '';
    });
  }
}

Paged.registerHandlers(TOCHandler);


