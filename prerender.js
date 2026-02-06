
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// List of routes to prerender
const routesToPrerender = [
    '/',
    '/service/web-design-development-pune',
    '/service/wordpress-development-pune',
    '/service/react-nextjs-development-pune',
    '/service/landing-page-design-pune',
    '/service/ecommerce-website-development-pune'
]

    ; (async () => {
        // Copy everything from dist/static to out
        // Actually we should build into out directly or move it. 
        // For now, let's assume we render into dist/static and then move.
        // Actually the plan is:
        // 1. Build Client -> dist/static
        // 2. Build Server -> dist/server
        // 3. Render -> dist/static/index.html etc.

        // Ensure we process each route
        for (const url of routesToPrerender) {
            const appHtml = render(url)

            // Construct Canonical URL
            const canonicalUrl = `https://zenetic.in${url === '/' ? '' : url}`;

            // Inject content and canonical tag
            const html = template
                .replace(`<!--app-html-->`, appHtml)
                .replace(`</head>`, `<link rel="canonical" href="${canonicalUrl}" />\n</head>`);
            // Also inject title/meta here if we want dynamic reading, but useEffect does it client side. 
            // For proper SEO, we might want to regex replace title/meta based on the page content if we had a helmet solution.
            // But since we use simple useEffect, the initial HTML won't have the unique meta for subpages mostly.
            // Wait, that's a problem. React Helmet Async is better for SSG.
            // But for now, putting ANY content is better than empty div.

            // Determine path
            const filePath = url === '/' ? 'index.html' : `${url.substring(1)}/index.html`
            const fullPath = toAbsolute(`out/${filePath}`)

            // Ensure dir exists
            const dirname = path.dirname(fullPath)
            if (!fs.existsSync(dirname)) {
                fs.mkdirSync(dirname, { recursive: true })
            }

            fs.writeFileSync(fullPath, html)
            console.log('pre-rendered:', fullPath)
        }

        // Copy assets from dist/static to out
        // We can use fs.cpSync in Node 16+
        fs.cpSync(toAbsolute('dist/static/assets'), toAbsolute('out/assets'), { recursive: true })
        fs.cpSync(toAbsolute('dist/static/logo.png'), toAbsolute('out/logo.png'))
        fs.cpSync(toAbsolute('dist/static/raj.webp'), toAbsolute('out/raj.webp'))
        fs.cpSync(toAbsolute('public/.htaccess'), toAbsolute('out/.htaccess')) // Copy .htaccess

        // Generate Sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesToPrerender.map(route => {
            const url = `https://zenetic.in${route === '/' ? '' : route}`;
            const priority = route === '/' ? '1.0' : '0.8';
            return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
        }).join('\n')}
</urlset>`;

        fs.writeFileSync(toAbsolute('out/sitemap.xml'), sitemap);
        console.log('sitemap generated: out/sitemap.xml');

    })()
