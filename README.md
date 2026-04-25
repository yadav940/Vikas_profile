# Vikas Yadav - Professional Portfolio

A modern, fully responsive portfolio website for Vikas Yadav, a Pharmacy Graduate specializing in herbal formulation and AI-driven pharmaceutical research.

## 🎨 Features

### Design
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Mobile-First Approach** - Optimized for all screen sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessibility** - Semantic HTML and keyboard navigation support

### Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional summary with personal details
3. **Technical Skills** - 6 key skill areas with icons
4. **Professional Experience** - Timeline view of work experience
5. **Education & Certifications** - Academic background and credentials
6. **Projects & Awards** - Academic projects and achievements
7. **Contact** - Multiple ways to connect with interactive cards

### Interactive Features
- Sticky navigation bar with mobile menu toggle
- Smooth scrolling between sections
- Scroll animations for elements
- Hover effects on cards and buttons
- Keyboard navigation (ESC to close menu)
- Active nav link highlighting based on scroll position
- Social media and contact links

## 📁 File Structure

```
Vikas_profile/
├── index.html              # Main HTML file
├── styles.css              # Responsive CSS (mobile-first)
├── script.js               # JavaScript for interactivity
├── Vikas_Yadav_Complete_CV.pdf  # Resume PDF
└── README.md               # This file
```

## 🚀 How to Use

### Option 1: Local File System
1. Open `index.html` directly in your web browser
2. The portfolio will work offline as it uses CDN for Font Awesome icons

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```
Then open `http://localhost:8000` in your browser

### Option 3: Deploy Online
- **GitHub Pages** - Push to GitHub and enable Pages in repository settings
- **Netlify** - Drag and drop the folder or connect via Git
- **Vercel** - Similar to Netlify, very easy setup
- **Traditional Hosting** - Upload files via FTP to your web server

## 📱 Responsive Breakpoints

| Device | Width | Optimization |
|--------|-------|--------------|
| Mobile | < 480px | Single column, touch-friendly buttons |
| Tablet | 481-768px | Two columns where applicable |
| Desktop | > 769px | Three columns, full feature set |

## 🎯 Customization

### Colors
Edit the CSS variables in `styles.css` (lines 15-32):
```css
:root {
    --primary-color: #0066cc;      /* Main blue */
    --secondary-color: #1e90ff;    /* Hover blue */
    --dark-color: #1a1a1a;         /* Dark text/bg */
    --light-color: #f5f5f5;        /* Light bg */
    /* ... more colors ... */
}
```

### Content
- Edit text in `index.html`
- Update links in hero section and contact section
- Modify social media URLs
- Update CV download link

### Fonts
The portfolio uses Google Fonts integration via CDN. To change fonts:
1. Add `@import` in `styles.css`
2. Update the `font-family` in the `body` selector

### Sections
- To add/remove sections, edit `index.html` and add corresponding styles in `styles.css`
- Follow the existing structure for consistency

## 🔧 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- Lightweight - No heavy frameworks
- Fast load time - ~200KB total (HTML+CSS+JS)
- Optimized images - None included (uses Font Awesome icons)
- CDN resources - Font Awesome from cdnjs

## ✨ Key Highlights

### Mobile Optimization
- Touch-friendly button sizes
- Readable text at all sizes
- Hamburger menu for navigation
- Optimized spacing and padding

### Animations
- Fade-in effects on scroll
- Smooth hover transitions
- Timeline animations
- No performance impact (uses CSS animations)

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support

## 📝 Content Sections Detail

### Skills (6 Cards)
- Formulation & R&D
- Pharmaceutical AI
- Analytical Techniques
- Regulatory & Clinical
- Communication
- Digital Tools

### Experience (Timeline)
- Industrial Trainee @ Vellinton Healthcare (2025)
- Clinical Intern @ District Women Hospital (2024)

### Education (3 Levels)
- B.Pharm (2022-2026)
- Intermediate 12th (2020)
- High School 10th (2018)

### Projects (3 Cards)
- 8th Sem Project: Herbal Mosquito Repellent Gel
- 7th Sem Project: Turmeric & Curcumin Research
- Achievement: First Prize - World Pharmacist Day

## 🔗 Links

- **Email**: vikas.yad8726@gmail.com
- **Phone**: +91 6388261389
- **LinkedIn**: [Profile Link]
- **ORCID**: 0009-0003-6021-9821

## 📅 Last Updated
April 25, 2026

## 📄 License
This portfolio template is free to use and modify for personal use.

---

**Created with ❤️ for Vikas Yadav's Professional Portfolio**