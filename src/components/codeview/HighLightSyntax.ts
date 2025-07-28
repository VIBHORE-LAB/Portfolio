export function highlightSyntax(code: string): string {
  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const escaped = escapeHtml(code);

  return escaped
    .replace(
      /\b(import|export|const|let|var|function|class|interface|type)\b/g,
      '<span class="text-code-keyword font-semibold text-purple-400">$1</span>'
    )
    .replace(
      /(\/\/[^\n]*)/g,
      '<span class="text-code-comment italic text-gray-400">$1</span>'
    )
    .replace(
      /(&#039;.*?&#039;|&quot;.*?&quot;)/g,
      '<span class="text-code-string text-green-400">$1</span>'
    )
    .replace(
      /(:\s*)(\d+)/g,
      '$1<span class="text-code-number text-blue-400">$2</span>'
    );
}
