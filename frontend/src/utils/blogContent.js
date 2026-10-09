import { parseFragment, serialize } from "parse5";
import { normalizeArticleLinks } from "./articleLinks.js";

export const processBlogContent = (content = "") => {
  const fragment = parseFragment(normalizeArticleLinks(content));
  const toc = [];
  const ids = new Set();
  const textOf = (node) => node.nodeName === "#text" ? node.value : (node.childNodes || []).map(textOf).join("");
  const visit = (node) => {
    if (node.attrs) {
      const style = node.attrs.find((attr) => attr.name === "style");
      if (style) style.value = style.value.replace(/background-color\s*:[^;]+/gi, "background-color: transparent");
      if (node.tagName === "h2" || node.tagName === "h3") {
        const text = textOf(node).replace(/\s+/g, " ").trim();
        const existing = node.attrs.find((attr) => attr.name === "id");
        const base = existing?.value || text.replace(/\s+/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "") || "section";
        let id = base;
        for (let suffix = 2; ids.has(id); suffix++) id = `${base}-${suffix}`;
        ids.add(id);
        if (existing) existing.value = id;
        else node.attrs.push({ name: "id", value: id });
        toc.push({ id, text, level: node.tagName });
      }
    }
    (node.childNodes || []).forEach(visit);
  };
  visit(fragment);
  return { html: serialize(fragment), toc };
};
