import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwind from '@astrojs/tailwind';
import { sanityConfig } from './src/utils/sanity-client';

// https://astro.build/config
export default defineConfig({
     site: 'https://c1euro.com',
    image: {
        domains: ['cdn.sanity.io']
    },
    integrations: [
        sanity(sanityConfig),
        tailwind({
            applyBaseStyles: false
        })
    ],
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' }
        }
    },
    server: {
        port: 3000
    }
});

export function get() {
  const robotsContent = `
  User-agent: *
  Allow: /
  
  Sitemap: https://c1euro.com/sitemap.xml
  `;
  
  return new Response(robotsContent, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

