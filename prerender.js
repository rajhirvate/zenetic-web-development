
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
        // Output directly to dist (where Vercel expects it)
        // Note: dist/static is where the client build is. We will move those files to dist root after rendering.
        // Wait, Vercel expects everything in 'dist'.
        // Current flow: build:client -> dist/static. build:server -> dist/server.
        // We want final structure in 'dist'. 
        // So we will copy everything from dist/static to dist, then overwrite with prerendered HTMLs.

        const outputDir = toAbsolute('dist');
        const staticDir = toAbsolute('dist/static');

        // Ensure dist exists (it should)
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Move all files from dist/static to dist (flattening the structure)
        // We do this before writing HTMLs so we don't need to copy individual assets
        if (fs.existsSync(staticDir)) {
            fs.cpSync(staticDir, outputDir, { recursive: true });
        }

        // Process routes
        for (const url of routesToPrerender) {
            const helmetContext = {};
            const appHtml = render(url, helmetContext);
            const { helmet } = helmetContext;

            // Construct Canonical URL
            const canonicalUrl = `https://zenetic.in${url === '/' ? '' : url}`;

            // Inject content and helmet data
            // We strip the existing title/meta/canonical if present in template to avoid duplicates, 
            // OR we just rely on Helmet to have generated them and we inject them.
            // Simplified approach: Replace specific placeholder or append to head.

            const helmetTitle = helmet.title.toString();
            const helmetMeta = helmet.meta.toString();
            const helmetLink = helmet.link.toString();

            // Note: We need to replace empty div with appHtml
            const html = template
                .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
                .replace(`<!--app-html-->`, appHtml)
                // Replace the head content with our dynamic SEO data
                // We assume the index.html has a comment <!--app-head--> or we just append to </head>
                // To be safe, let's insert before </head>
                .replace(`</head>`, `${helmetTitle}\n${helmetMeta}\n${helmetLink}\n</head>`);

            // Determine path
            const filePath = url === '/' ? 'index.html' : `${url.substring(1)}/index.html`
            const fullPath = toAbsolute(`dist/${filePath}`) // Write to dist directly

            // Ensure dir exists
            const dirname = path.dirname(fullPath)
            if (!fs.existsSync(dirname)) {
                fs.mkdirSync(dirname, { recursive: true })
            }

            fs.writeFileSync(fullPath, html)
            console.log('pre-rendered:', fullPath)
        }

        // Clean up temporary folders
        fs.rmSync(toAbsolute('dist/static'), { recursive: true, force: true });
        fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true });

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

        fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
        console.log('sitemap generated: dist/sitemap.xml');

        // Copy .htaccess if it exists in public (Vite usually copies public to dist/static, so it's likely already moved)
        // If not, we can leave it.


    })()
