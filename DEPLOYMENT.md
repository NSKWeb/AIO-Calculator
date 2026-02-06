# CalcTools - Deployment Guide

## Quick Start

### Option 1: Using npm (Recommended)
```bash
npm install
npm start
```
Visit http://localhost:3000

### Option 2: Direct File Access
Simply open `index.html` in a browser.

### Option 3: Python HTTP Server
```bash
python -m http.server 8000
```

### Option 4: PHP Built-in Server
```bash
php -S localhost:8000
```

## Production Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm install`
3. Set publish directory: `.` (root)
4. Deploy!

### Vercel
1. Connect your repository to Vercel
2. Set build command: `npm install`
3. Set output directory: `.` (root)
4. Deploy!

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch to deploy
4. Save and wait for deployment

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `.htaccess` is uploaded if using Apache
3. Update any hardcoded URLs if needed

## Customization

### Changing Site Name
- Replace "CalcTools" in all HTML files
- Update meta titles and descriptions

### Adding New Tools
1. Create new HTML file in `/tools/` directory
2. Follow existing tool page structure
3. Add link to homepage tools grid
4. Update sitemap.xml

### Styling
- Edit `assets/css/style.css` for visual changes
- CSS variables defined at the top for easy theming

## Performance Optimization

The site is already optimized with:
- Minified CSS (when deployed)
- Client-side JavaScript (no server requests)
- Lazy loading ready structure
- SEO meta tags on all pages

## SEO Checklist

- [x] Meta titles and descriptions on all pages
- [x] Canonical URLs
- [x] Semantic HTML structure
- [x] robots.txt
- [x] sitemap.xml
- [x] Mobile responsive design
- [x] Fast loading times
- [x] Internal linking

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Regular Updates
- Keep sitemap.xml current when adding pages
- Update copyright year in footer
- Review and update legal pages annually

### Monitoring
- Monitor page load times
- Check for broken links
- Review tool accuracy periodically

---

For questions or issues, refer to README.md or open an issue in the repository.
