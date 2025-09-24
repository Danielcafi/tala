# Tala Philippines Website Clone

A complete clone of the Tala.ph website built with HTML, CSS, and JavaScript. This is a static website that can be easily deployed to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)
1. Fork this repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your forked repository
5. Vercel will automatically detect the configuration and deploy

### Option 2: Deploy with Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## 📁 Project Structure

```
TALA/
├── public/                 # Static files for deployment
│   ├── index.html         # Main homepage
│   ├── borrow.html        # Borrow page
│   ├── styles.css         # All styles
│   ├── script.js          # JavaScript functionality
│   └── [images]/          # All image assets
├── vercel.json            # Vercel configuration
├── package.json           # Project metadata
└── README.md             # This file
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or use live-server directly
npm start
```

## ✨ Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Elements**: 
  - Smooth carousel for customer testimonials
  - Phone mockup with dynamic image switching
  - Mobile navigation menu
  - Video integration with YouTube
- **Performance Optimized**: 
  - Image preloading
  - Optimized CSS and JavaScript
  - Proper caching headers
- **SEO Ready**: Meta tags, structured data, and accessibility features

## 🎨 Pages

- **Homepage** (`index.html`): Complete Tala.ph homepage clone
- **Borrow Page** (`borrow.html`): Loan application page with interactive features

## 🔧 Configuration

The project is configured for optimal Vercel deployment:

- **Output Directory**: `public/`
- **Build Command**: No build process needed (static site)
- **Caching**: Optimized cache headers for images and assets
- **Routing**: All routes properly configured

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Deployment Checklist

- ✅ All files in `public/` directory
- ✅ `vercel.json` configured
- ✅ `package.json` updated
- ✅ All image files renamed (no spaces)
- ✅ CSS syntax errors fixed
- ✅ JavaScript functionality working
- ✅ Responsive design tested

## 🔗 Live Demo

Once deployed, your site will be available at:
`https://your-project-name.vercel.app`

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

---

**Ready to deploy!** 🎉