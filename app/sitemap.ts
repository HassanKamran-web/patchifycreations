export default async function sitemap() {
  const baseUrl = 'https://www.patchifycreations.com/';
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/digitizing`, lastModified: new Date() },
    { url: `${baseUrl}/vector-art`, lastModified: new Date() },
  ];
}
