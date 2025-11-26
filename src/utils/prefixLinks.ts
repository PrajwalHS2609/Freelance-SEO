export function prefixLinks(html: string, country: string) {
  if (!country) return html;

  return html.replace(
    /https:\/\/freelanceseo\.co\.in(\/[^"']*)/g,
    `https://freelanceseo.co.in/${country}$1`
  );
}
