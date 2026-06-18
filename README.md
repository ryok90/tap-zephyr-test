# My React App

A modern React application built with Vite, featuring a simple interactive counter component and clean development setup.

## 🚀 Features

- **React 18** with modern hooks and concurrent features
- **Vite** for lightning-fast development and building
- **ESLint** configuration with React-specific rules
- **Interactive counter component** demonstrating state management
- **Hot Module Replacement (HMR)** for instant development feedback
- **Clean, accessible UI** with proper semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Language:** JavaScript (ES modules)
- **Styling:** CSS with modern features
- **Linting:** ESLint with React plugins
- **Package Manager:** npm

## 📦 Project Structure

```
my-react-app/
├── public/
│   └── vite.svg           # Vite logo asset
├── src/
│   ├── assets/            # React logo and other assets
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.jsx          # React app entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── rspack.config.mjs     # Rspack configuration (alternative bundler)
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Builds the app for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 🎯 What This App Does

This is a **starter React application** that demonstrates:

1. **Component State Management** - Interactive counter that increments on button clicks
2. **Modern React Patterns** - Uses functional components with hooks (`useState`)
3. **Asset Handling** - Displays SVG logos with proper accessibility attributes
4. **Responsive Design** - Clean, centered layout that works on different screen sizes
5. **Development Experience** - Hot reload, fast builds, and helpful error messages

### Main Component Features

- **Counter Button**: Click to increment a number, demonstrating React state
- **External Links**: Clickable logos that link to Vite and React documentation
- **Hot Module Replacement**: Edit `src/App.jsx` and see changes instantly
- **Accessible Markup**: Proper alt text, semantic HTML, and keyboard navigation

## 🔧 Development

### Code Style

- Uses **ESLint** with React-specific rules for consistent code quality
- Follows **React best practices** including hooks rules and component patterns
- **ES6+ features** like arrow functions, destructuring, and modules

### Build Configuration

- **Vite** handles bundling, transpilation, and development server
- **Fast refresh** preserves component state during development
- **Optimized production builds** with code splitting and minification

## 🚀 Deployment

To deploy this application:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any web server

## 🤝 Contributing

This is a starter template, but if you'd like to improve it:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code quality
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉 This template gives you a solid foundation to build modern React applications with excellent developer experience.
