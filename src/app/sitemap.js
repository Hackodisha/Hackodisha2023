export default function sitemap() {
  const routes = ["/"].map((route) => ({
    url: `https://www.hackodisha.tech${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
