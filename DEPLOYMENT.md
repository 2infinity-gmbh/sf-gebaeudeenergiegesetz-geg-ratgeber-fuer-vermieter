# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Astro
4. Deploy!

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Option 3: Cloudflare Pages
1. Push code to GitHub
2. Connect repository in Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Option 4: Manual Static Hosting
1. Run `npm run build`
2. Upload `dist/` folder to any web server
3. Done!

## Environment Variables

No environment variables required for basic setup.

## Domain Configuration

Point your domain **gebaeudeenergiegesetz-geg-ratgeber-fuer-vermieter.de** to your hosting provider:

### DNS Records
```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: gebaeudeenergiegesetz-geg-ratgeber-fuer-vermieter.de
```

### SSL/TLS
All recommended hosting providers provide free SSL certificates via Let's Encrypt.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify articles display properly
- [ ] Check mobile responsiveness
- [ ] Test social media preview (OG image)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (if needed)
- [ ] Monitor Core Web Vitals

## Performance Tips

Your site is already optimized, but for even better performance:
- Enable Brotli compression on your server
- Set proper cache headers (hosting providers usually do this)
- Consider adding a CDN (Cloudflare, etc.)
- Optimize the OG image (compress to <200KB)

## Updating Content

To add new articles:
1. Create new `.md` file in `src/content/articles/`
2. Add frontmatter (title, description, pubDate, etc.)
3. Write content in Markdown
4. Run `npm run build`
5. Deploy updated `dist/` folder

The homepage and article listing will automatically include new articles!
