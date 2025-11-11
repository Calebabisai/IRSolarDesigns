# 🌞 IR Solar Designs - Professional Solar Permit Design Platform

LINK APP:
![IR Solar Designs](irsolardesigns.netlify.app)

A modern, professional web application for solar permit design services. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Professional Solar Permit Packages**: Complete documentation including site plans, electrical diagrams, and structural analysis
- **Interactive Service Catalog**: Detailed breakdown of services with tabbed interface
- **Contact Form Integration**: Netlify Forms for seamless client communication
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags and Open Graph integration for better search visibility
- **Dark Mode Support**: Enhanced user experience with theme switching
- **Performance Optimized**: Fast loading times with optimized images and lazy loading

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Hosting**: Netlify
- **Version Control**: Git & GitHub

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IRSolarDesign.git
   cd IRSolarDesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
IRSolarDesign/
├── public/                    # Static assets
│   ├── images/               # Image files
│   │   ├── IR_ICON.png      # Favicon
│   │   ├── home-image.jpg   # Hero image
│   │   ├── HOMEONE.jpg      # Gallery image 1
│   │   ├── HOMETWO.webp     # Gallery image 2
│   │   ├── HOMETHREE.webp   # Gallery image 3
│   │   ├── TESTHOME.jpg     # Services example 1
│   │   ├── TESTSLD.jpg      # Services example 2
│   │   └── contact-image.jpg # Contact page image
│   └── _redirects           # Netlify routing config
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Benefits.tsx    # Benefits section component
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── SeoHead.tsx     # SEO meta tags component
│   │
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── Services.tsx    # Services page
│   │   ├── Pricing.tsx     # Pricing page
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact page with form
│   │
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind directives
│
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite build configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Components

### Navigation (Navbar.tsx)
- Responsive navigation with mobile menu
- Smooth scroll effects
- Active route highlighting
- Transparent background on home page

### Benefits Section (Benefits.tsx)
- 4-column grid layout (responsive)
- Animated card entrance
- Dark mode support
- Icon integration with Lucide React

### SEO Component (SeoHead.tsx)
- Dynamic meta tags
- Open Graph protocol support
- Twitter Card integration
- Customizable per page

### Contact Form (Contact.tsx)
- Netlify Forms integration
- Client-side validation
- Success/error notifications
- Honeypot spam protection
- Email notifications via Netlify

## Pages Overview

### Home (`/`)
- Hero section with background image
- Benefits showcase
- Image gallery
- Call-to-action buttons

### Services (`/services`)
- Service cards with icons
- Permit plan details with numbered list
- Interactive tabs for requirements
- Example permit images with hover effects

### Pricing (`/pricing`)
- Pricing tiers (placeholder)
- Feature comparison
- Clear call-to-action

### About (`/about`)
- Company information
- Team introduction
- Mission and values

### Contact (`/contact`)
- Contact form with Netlify integration
- Contact information
- Business hours
- Location details

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.js`)
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
    },
  },
  plugins: [],
}
```

### Vite Config (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // For relative paths in production
})
```

### Netlify Redirects (`public/_redirects`)
```
/*    /index.html   200
```
This ensures React Router works correctly on Netlify.

## Environment Setup

No environment variables are currently required. All configuration is handled through static files.

## Deployment

### Netlify irsolardesigns.netlify.app

## Performance Optimizations

- **Image optimization**: WebP format for modern browsers
- **Lazy loading**: Images load as needed
- **Code splitting**: React Router handles route-based splitting
- **Minification**: Vite automatically minifies production builds
- **Tree shaking**: Unused code is removed during build

## Common Issues & Solutions

### Images not loading in production
- Ensure images are in `public/images/` folder
- Use absolute paths: `/images/filename.jpg`
- Check case sensitivity (Linux servers are case-sensitive)

### Tailwind styles not working
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 404 errors on refresh
- Ensure `_redirects` file is in `public/` folder
- Content should be: `/*    /index.html   200`

### Forms not submitting
- Check that form has `data-netlify="true"` attribute
- Verify hidden form in `index.html` matches React form fields
- Check Netlify Forms dashboard for submissions

## Security

- Honeypot field prevents basic spam bots
- Form validation on client and server side
- No sensitive data stored in frontend code
- HTTPS enforced via Netlify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved by IR Solar Designs.

## Author

**IR Solar Designs Team/ Calebabisai**

- Website: [irsolardesigns.netlify.app]
- Email: [gelndcaleb@gmail.com]
- Location: [MID, Mexico]

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Netlify for seamless hosting and forms

---

Made with by IR Solar Designs
