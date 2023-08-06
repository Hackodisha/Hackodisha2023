export default function sitemap() {
  const routes = ["/"].map((route) => ({
    url: `https://hackodisha.tech${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
