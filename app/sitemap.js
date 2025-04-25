export default async function sitemap() {
    const baseUrl = "https://dowryai.netlify.app";
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily", // yearly
        priority: 1,
      },
      {
        url: `${baseUrl}/get-balance`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  }
  