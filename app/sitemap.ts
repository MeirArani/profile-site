export default async function sitemap() {
  let routes = ['', '/work'].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
