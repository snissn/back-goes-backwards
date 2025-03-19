class TOCHandler extends Paged.Handler {
  beforeParsed(content) {
    const doc = content.ownerDocument;
    const toc = doc.createElement("section");
    toc.id = "toc";
    toc.innerHTML = "<h1>Table of Contents</h1><ul id='toc-list'></ul>";
    content.insertBefore(toc, content.firstChild);

    const list = toc.querySelector("#toc-list");
    const headings = content.querySelectorAll("h1, h2, h3");
    const seenLabels = new Set();

    headings.forEach((el, index) => {
      const tagLevel = el.tagName.toLowerCase();
      const refId = `ref-${index}`;
      const rawText = el.textContent?.trim();
      if (!rawText) return;

      const label = rawText;
      if (seenLabels.has(label)) return;
      seenLabels.add(label);

      el.id = el.id || refId;
      el.setAttribute("data-ref", refId);

      const li = doc.createElement("li");
      li.classList.add(`toc-level-${tagLevel}`); // ← ADD CLASS HERE

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


