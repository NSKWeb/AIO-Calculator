# CalcTools - Free Online Calculators & Generators

A fully responsive, SEO-optimized multi-tool website with multiple calculators and generators. All tools are frontend-based with no backend or heavy processing required.

## Features

- **8 Interactive Tools:**
  - Asphalt Calculator - Calculate asphalt requirements and estimated costs
  - Car Speed Test - Estimate vehicle speed based on distance and time
  - Flight Speed Estimator - Calculate average aircraft speed
  - One Rep Max Calculator - Estimate maximum lifting capacity and training percentages
  - SAT Score Estimator - Convert raw SAT scores to scaled scores
  - Couple Name Generator - Create fun combined names for couples
  - Headcanon Generator - Generate random creative headcanons for characters
  - Surname Generator - Generate unique surnames in various themes

- **SEO Optimized:**
  - Proper meta tags and descriptions
  - Semantic HTML structure
  - Canonical URLs
  - SEO-friendly page structure

- **Mobile-First Design:**
  - Fully responsive layout
  - Touch-friendly interface
  - Works perfectly on all devices

- **Privacy-Focused:**
  - No user data collection
  - All calculations happen in the browser
  - No server-side processing

## Tech Stack

- Pure HTML, CSS, and JavaScript
- No frameworks or dependencies required
- Static site architecture
- Mobile-first responsive design

## Project Structure

```
/
├── index.html              # Homepage
├── tools/                  # Tool pages
│   ├── asphalt-calculator.html
│   ├── car-speed-test.html
│   ├── flight-speed-estimator.html
│   ├── one-rep-max-calculator.html
│   ├── sat-score-estimator.html
│   ├── couple-name-generator.html
│   ├── headcanon-generator.html
│   └── surname-generator.html
├── legal/                  # Legal pages
│   ├── about-us.html
│   ├── privacy-policy.html
│   └── disclaimer.html
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       └── main.js         # Utility functions
└── package.json            # Project configuration
```

## Getting Started

### Prerequisites
- Node.js (optional, for running local server)

### Installation

1. Clone or download the repository

2. Run a local server:

```bash
# Using npm (requires Node.js)
npm install
npm start

# Or using Python
python -m http.server 8000

# Or using PHP
php -S localhost:8000
```

3. Open your browser to `http://localhost:3000` (or the port specified)

### Direct File Access

Since this is a static site, you can also simply open `index.html` directly in your browser. However, some features may work better when served through a web server.

## Deployment

This static site can be deployed to any static hosting service:

- **Netlify:** Drag and drop the project folder
- **Vercel:** Connect your repository
- **GitHub Pages:** Push to a repository and enable Pages
- **AWS S3:** Upload to an S3 bucket with static website hosting
- **Any web server:** Upload files to any web server

## Usage

All tools work directly in the browser:

1. Navigate to any tool from the homepage
2. Enter your inputs in the form
3. Click the calculate/generate button
4. View instant results
5. Results are displayed with proper formatting

## Features

- **Instant Calculations:** All calculations happen immediately in the browser
- **Input Validation:** Clear error messages for invalid inputs
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Internal Linking:** Easy navigation between tools
- **Related Tools:** Each tool page shows related tools for exploration
- **Privacy First:** No data collection or server-side processing

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use and modify for your needs.

## Contributing

Contributions are welcome! Feel free to:
- Add new calculators or generators
- Improve existing tools
- Fix bugs
- Enhance the design

## Support

For issues or questions, please open an issue in the repository.

---

**CalcTools** - Free, fast, and privacy-focused online tools for everyone.
