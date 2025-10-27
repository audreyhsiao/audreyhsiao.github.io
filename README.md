# Audrey Hsiao's Portfolio Website

A responsive personal portfolio website showcasing my projects, skills, and experience in Computer Science, AI/ML, and Full-Stack Development.

🔗 **Live Site**: [audreyhsiao.github.io](https://audreyhsiao.github.io)

## 📸 A Quick Look  
<img width="1511" alt="image" src="https://github.com/audreyhsiao/audreyhsiao.github.io/assets/51323445/9ebfd3f7-95d1-4dee-bc0c-993b99c0894a">

---

## ✨ Features

### 🎨 Modern UI/UX
- **Dark Theme**: Full-bleed dark background (`#0b0b0b`) with white header for clean contrast
- **Glassmorphism Modals**: Translucent frosted glass effect for project details
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and hover effects throughout

### 🚀 Interactive Project Showcase
- **Two Project Sections**:
  - **AI/ML Applications**: LLM orchestration, model fine-tuning, and PyTorch training projects
  - **Selected Projects**: Database systems, full-stack apps, data analysis, and more
- **Click-to-Expand Cards**: Each project opens a detailed glassmorphism modal with:
  - Problem statement
  - Solution built
  - Your role
  - Impact & highlights
  - Tech stack
  - Project images (flexible 1-3+ images per project)
- **Dynamic Image Display**: Projects can have different numbers of images; no images = auto-hide section
- **Side-by-Side Image Layout**: Support for multiple images displayed in a responsive grid

### 🎥 Project Demo Section
- Two-column layout (text left, video right)
- Embedded YouTube video with privacy-friendly `youtube-nocookie.com`
- Responsive 16:9 aspect ratio
- Mobile-friendly stacking

### 🎭 Animated Avatar
- Circular video avatar (300x300px) with autoplay
- Smooth loop, optimized for performance
- Automatic fallback to static image if needed
- Respects `prefers-reduced-motion` accessibility

### 📄 Resume Download
- Password-protected download button
- Serverless function for secure validation
- Rate-limiting for failed attempts
- Files stored in private directory (not exposed to client)

### 🔍 Additional Sections
- **About Me**: Education, skills, and background
- **Datathon & Kaggle Projects**: Data analysis and visualization work
- **Contact**: Social links and contact information

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive features and modal functionality

### Libraries & Frameworks
- **jQuery** - DOM manipulation
- **Typed.js** - Typewriter effect animations ([Demo](https://mattboldt.com/demos/typed-js/))
- **Animate.css** - CSS animations

### Design & Assets
- **Custom Logo** (`logo.png`) - Converted from HEIC for web compatibility
- **Video Avatar** (`avatar.mp4`) - Circular animated profile
- **Project Images** - Organized in `src/images/projects/`

### Deployment
- **GitHub Pages** - Static site hosting
- **Vercel** (optional) - For serverless functions (resume download)

---

## 📁 Project Structure

```
audreyhsiao.github.io/
├── index.html                          # Main page
├── photography.html                    # Photography page (hidden from nav)
├── contact.php                         # Contact form handler
├── README.md                           # This file
├── HOW_TO_ADD_PROJECT_IMAGES.md       # Guide for adding project images
├── PROJECT_IMAGES_IMPLEMENTATION.md    # Technical implementation details
│
├── src/
│   ├── css/
│   │   ├── style_clean.css            # Main stylesheet
│   │   ├── animated.css               # Animation styles
│   │   ├── Blog-Template.css          # Blog styling
│   │   └── Post-Template.css          # Post styling
│   │
│   ├── js/
│   │   ├── jquery.js                  # jQuery library
│   │   ├── nicepage.js                # Page interactions
│   │   └── typed.js                   # Typewriter effect
│   │
│   ├── images/
│   │   ├── logo.png                   # Site logo (converted from HEIC)
│   │   ├── avatar.mp4                 # Animated avatar video
│   │   ├── avatar.png                 # Static avatar fallback
│   │   └── projects/                  # Project screenshots
│   │       ├── artchat-1.png
│   │       ├── pbif-1.png
│   │       ├── blockchain-1.png
│   │       ├── database-1.png
│   │       ├── womenownedtaipei-1.png
│   │       ├── bj.png
│   │       ├── bj2.png
│   │       └── fraudDetection.png
│   │
│   └── logos/                         # Icon assets
│       ├── github.png
│       ├── medium.png
│       └── ...
│
├── blog/                              # Blog posts
│   ├── blog.html
│   ├── post-1.html
│   └── ...
│
├── private/                           # Secure files (gitignored)
│   └── Audrey_Hsiao_Resume.pdf
│
└── api/                               # Serverless functions
    └── get-resume.js                  # Password-protected resume download
```

---

## 🎨 Color Palette

### Current Theme (Dark Mode)
| Element | Color | Hex Code |
|---------|-------|----------|
| **Background** | Dark Gray | `#0b0b0b` |
| **Header** | White | `#ffffff` |
| **Accent (Pink)** | Hot Pink | `#FF2E63` |
| **Text (Primary)** | Light Gray | `#EAEAEA` |
| **Text (Secondary)** | Gray | `#cccccc` |
| **Modal Background** | Light Glassmorphism | `rgba(255, 255, 255, 0.9)` |
| **Modal Foreground** | Dark | `#1a1a1a` |

### Alternative Palettes
| Dark Mode | Light Mode |
|  :---:  |  :---:  |
| `#08D9D6` | `#FF7396` |
| `#252A34` | `#F4E06D` |
| `#FF2E63` | `#C499BA` |
| `#EAEAEA` | `#FFFFDE` |

---

## 📦 Key Updates & Features

### ✅ Recent Improvements (2025)

#### **1. Full-Bleed Dark Background**
- Fixed white gutters/borders on desktop fullscreen
- Global CSS reset for consistent edge-to-edge background
- Only header remains white for contrast

#### **2. Glassmorphism Project Modals**
- Translucent frosted glass effect with `backdrop-filter`
- Perfect horizontal/vertical centering
- Two-row header layout (Title + Date | Subtitle)
- Graceful degradation for unsupported browsers

#### **3. Dynamic Project Images**
- Flexible image system (1-3+ images per project)
- Automatic hiding when no images provided
- Lazy loading for performance
- Hover zoom effect
- Side-by-side layout with responsive stacking

#### **4. AI/ML Applications Section**
- Three featured project cards with detailed modals
- Section description summarizing capabilities:
  - LLM orchestration & RAG
  - Model fine-tuning (LoRA/PEFT)
  - PyTorch training from scratch
  - Application domains: Vision-language, code analysis, GNN anomaly detection

#### **5. Animated Avatar**
- Circular video avatar (300x300px)
- Autoplay with loop
- Fallback to static image
- Respects `prefers-reduced-motion`
- Performance optimized with lazy loading

#### **6. Password-Protected Resume**
- "Get Resume" button with password modal
- Serverless function for secure validation
- Environment variable for password storage
- Rate-limiting (5 attempts/hour per IP)
- Files stored in gitignored `private/` directory

#### **7. Project Demo Section**
- Two-column responsive layout
- YouTube video embed (privacy-friendly)
- 16:9 aspect ratio
- Mobile-friendly vertical stacking

#### **8. Responsive Design Improvements**
- Optimized section spacing (reduced left/right margins)
- Better content visibility on mobile/tablet
- Grid layouts with `auto-fit` for flexible columns

#### **9. Content Updates**
- Enhanced project descriptions with detailed context
- Updated education & skills sections
- Added graduate coursework (Operating System, Secure & Cloud Computing)
- Expanded applicable concepts (AI/ML, Relational Database, Data Mining)
- Improved readability with structured problem → solution → impact format

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Node.js for local development server
- (Optional) Vercel CLI for serverless functions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/audreyhsiao/audreyhsiao.github.io.git
   cd audreyhsiao.github.io
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Adding Project Images

See [HOW_TO_ADD_PROJECT_IMAGES.md](HOW_TO_ADD_PROJECT_IMAGES.md) for detailed instructions.

**Quick steps:**
1. Place images in `src/images/projects/`
2. Update `projectData` in `index.html`:
   ```javascript
   artchat: {
     // ... other fields ...
     images: [
       'src/images/projects/artchat-1.png',
       'src/images/projects/artchat-2.png'
     ]
   }
   ```
3. Reload the page

---

## 📝 Configuration

### Environment Variables (for Vercel deployment)
Create a `.env` file (gitignored) with:
```
RESUME_PASSWORD=your_secure_password_here
```

### Git Configuration
The `.gitignore` includes:
- `private/` (except README.md)
- `.env` and `.env.local`
- `node_modules/`

---

## 🎯 Featured Projects

### AI/ML Applications
- **ArtChat** - Vision-Language AI Guide for museum artworks
- **PBIF** - LLM-assisted static code fix pipeline
- **Blockchain GNN** - Anomaly detection with Graph Neural Networks

### Selected Projects
- **Database System** - C++ implementation with LRU buffer manager & B+-tree
- **Women Owned Taipei** - iOS & Web app (SwiftUI, Next.js, Supabase)
- **Inventory Optimization** - (R,S) model with XGBoost forecasting

### Data Analysis
- **Healthcare Fraud Detection** - Random Forest on medical claims data
- **Beijing Housing Analysis** - EDA on 318K+ real estate transactions

---

## 🤝 Contributing

This is a personal portfolio site, but suggestions and feedback are welcome!

Feel free to:
- Open an issue for bugs or suggestions
- Submit a pull request for typos or improvements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Audrey Hsiao**
- 🌐 Website: [audreyhsiao.github.io](https://audreyhsiao.github.io)
- 💼 LinkedIn: [linkedin.com/in/audrey-hsiao](https://linkedin.com/in/audrey-hsiao)
- 📱 GitHub: [@audreyhsiao](https://github.com/audreyhsiao)

---

## 🙏 Acknowledgments

- **Typed.js** by Matt Boldt - [Demo](https://mattboldt.com/demos/typed-js/)
- **jQuery** - For DOM manipulation
- **Animate.css** - For CSS animations
- **GitHub Pages** - For free hosting
- **Vercel** - For serverless function support

---

**Last Updated**: October 2025  
**Status**: ✅ Live and actively maintained
