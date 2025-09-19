# 🚀 Portfolio Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- Portfolio code ready for deployment

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest and most reliable option for Next.js applications.

#### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Settings**
   - Framework Preset: Next.js
   - Root Directory: `bilels`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

#### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd bilels
   vercel
   ```

4. **Follow prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

### 2. Netlify

#### Automatic Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository

2. **Configure Build Settings**
   - Base directory: `bilels`
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

#### Manual Deployment

1. **Build the project**
   ```bash
   cd bilels
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --dir=out
   ```

### 3. GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Configure next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload to S3**
   - Create S3 bucket
   - Upload contents of `out` folder
   - Enable static website hosting

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure caching rules

### 5. DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean App Platform
   - Create new app from GitHub

2. **Configure Settings**
   - Source: GitHub repository
   - Type: Web Service
   - Build Command: `cd bilels && npm run build`
   - Run Command: `cd bilels && npm start`

3. **Deploy**
   - Click "Create Resources"
   - Wait for deployment

## 🔧 Environment Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-emailjs-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-emailjs-public-key

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/bilelayari
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/bilel-ayari
NEXT_PUBLIC_EMAIL=ba336158@gmail.com
```

### Production Environment

Set these variables in your deployment platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **AWS**: Lambda Environment Variables or Parameter Store

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Install image optimization tools
   npm install --save-dev imagemin imagemin-webp
   ```

2. **Minify CSS/JS**
   ```bash
   # Already handled by Next.js build process
   npm run build
   ```

3. **Check Bundle Size**
   ```bash
   npm run build
   # Check .next/analyze.html for bundle analysis
   ```

### Post-Deployment

1. **Enable Compression**
   - Gzip/Brotli compression (usually automatic)
   - CDN compression settings

2. **Set Cache Headers**
   ```javascript
   // next.config.js
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/static/:path*',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ]
     },
   }
   ```

3. **Monitor Performance**
   - Google PageSpeed Insights
   - WebPageTest
   - Lighthouse CI

## 🔒 Security Considerations

### Security Headers

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### HTTPS

- Most platforms provide HTTPS by default
- Ensure SSL certificates are valid
- Use HSTS headers for security

## 📈 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
   - Go to Google Analytics
   - Create new property
   - Get measurement ID

2. **Add to Next.js**
   ```javascript
   // pages/_app.js
   import Script from 'next/script'
   
   export default function App({ Component, pageProps }) {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
         <Component {...pageProps} />
       </>
     )
   }
   ```

### Vercel Analytics

1. **Install Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to _app.js**
   ```javascript
   import { Analytics } from '@vercel/analytics/react'
   
   export default function App({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     )
   }
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Images Not Loading**
   - Check image paths
   - Ensure images are in `public` folder
   - Verify Next.js image optimization

3. **Styling Issues**
   - Check Tailwind CSS configuration
   - Verify CSS imports
   - Clear browser cache

4. **Deployment Errors**
   - Check build logs
   - Verify environment variables
   - Ensure all dependencies are installed

### Debug Commands

```bash
# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Build and check for errors
npm run build

# Start production server locally
npm start
```

## 📞 Support

If you encounter issues:

1. **Check Documentation**
   - Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
   - Vercel docs: [vercel.com/docs](https://vercel.com/docs)
   - Netlify docs: [docs.netlify.com](https://docs.netlify.com)

2. **Community Support**
   - GitHub Issues
   - Stack Overflow
   - Discord communities

3. **Contact**
   - Email: ba336158@gmail.com
   - GitHub: [github.com/bilelayari](https://github.com/bilelayari)

---

**Happy Deploying! 🚀**
