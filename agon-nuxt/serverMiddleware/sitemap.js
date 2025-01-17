import fetch from 'node-fetch';

export default async function (req, res, next) {
    // Only handle requests for /sitemap.xml
    if (req.url === '/sitemap.xml') {
        const strapiBaseUrl = process.env.STRAPI_BASE_URL || 'http://localhost:1337';

        try {
            // Fetch data from Strapi API
            const response = await fetch(`${strapiBaseUrl}/api/sitemaps?filters[PageURL][$ne]=null`);
            const result = await response.json();

            // Ensure the result has the expected structure
            if (result?.data && Array.isArray(result.data)) {
                const routes = result.data.map((item) => `/${item.PageURL}`).join('\n');

                // Create a basic XML structure for the sitemap
                const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${routes.map(route => `
            <url>
              <loc>http://localhost:3000${route}</loc>
            </url>`).join('')}
        </urlset>`;

                // Set the content type to XML
                res.setHeader('Content-Type', 'application/xml');
                res.statusCode = 200;
                res.end(sitemap);
            } else {
                res.statusCode = 500;
                res.end('<error>Invalid data format from Strapi</error>');
            }
        } catch (error) {
            console.error('Error fetching sitemap data:', error);
            res.statusCode = 500;
            res.end('<error>Failed to fetch sitemap data</error>');
        }
    } else {
        next(); // Pass on the request if it's not for /sitemap.xml
    }
}
