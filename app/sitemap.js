export default function sitemap() {
  return ["/", "/studio", "/table", "/studio/contact", "/terms", "/privacy", "/refunds"].map((path) => ({
    url: `https://www.un-make.com${path}`,
  }));
}
