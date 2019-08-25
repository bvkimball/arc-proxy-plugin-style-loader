let type = "application/javascript;charset=utf8";

function transform(body) {
  return `
    // Create our shared stylesheet:
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(\`${body}\`);
    // Apply the stylesheet to a document:
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  `;
}

module.exports = function styleLoader(key, { headers, body }) {
  return {
    headers: { ...headers, "content-type": type },
    body: transform(body)
  };
};
