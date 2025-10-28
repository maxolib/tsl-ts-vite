# 🎨 Three.js TSL + TypeScript + Vite Template

> ✨ A modern boilerplate for creating stunning WebGPU-powered 3D experiences with Three.js Shading Language (TSL)

## 🚀 What's Inside?

This template combines the best of modern web development:

- **🎯 Three.js WebGPU** - Next-generation 3D rendering with GPU compute power
- **🔮 TSL (Three.js Shading Language)** - Node-based material system for powerful visual effects
- **💪 TypeScript** - Type-safe development with excellent IntelliSense
- **⚡ Vite** - Lightning-fast development server and build tool
- **🎮 OrbitControls** - Interactive camera controls out of the box
- **📱 Responsive Design** - Automatically adapts to different screen sizes

## 🎯 Perfect For

- 🎨 Creative coding and generative art
- 🎮 Interactive 3D experiences
- 📊 Data visualization with WebGPU
- 🧪 Shader experimentation with TSL
- 🎓 Learning modern Three.js development

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ installed
- A modern browser with WebGPU support (Chrome 113+, Edge 113+)

### 🏃‍♂️ Development

Fire up the development server:

```bash
npm run dev
```

🌐 Open your browser and visit **[http://localhost:5173/](http://localhost:5173/)**

Your changes will hot-reload instantly! ⚡

### 🏗️ Production Build

Build your project for production:

```bash
npm run build
npm run preview
```

🌐 Preview your production build at **[http://localhost:4173/](http://localhost:4173/)**

### 🚀 Deploy to GitHub Pages

Share your creation with the world! If you forked this repository:

```bash
npm run deploy
```

🌍 Your site will be live at `https://<your-github-username>.github.io/tsl-ts-vite`

## 🎨 What You'll See

The template includes a simple example featuring:
- 📐 A textured plane geometry
- 🖼️ UV grid texture with proper color space conversion
- 🎭 TSL-powered material system
- 🕹️ Interactive orbit controls
- 🔍 Shader debugging capabilities

## 🧠 Key Concepts

### TSL (Three.js Shading Language)
TSL is a revolutionary node-based approach to creating materials in Three.js. Instead of writing raw GLSL, you compose materials using JavaScript functions that generate optimized shaders.

Example from the template:
```typescript
// Traditional approach: Write GLSL shaders
// TSL approach: Compose with functions! ✨
material.fragmentNode = convertColorSpace(
  texture(tex), 
  THREE.SRGBColorSpace, 
  THREE.LinearSRGBColorSpace
)
```

### WebGPU Renderer
This template uses the cutting-edge WebGPU renderer, offering:
- 🚀 Better performance than WebGL
- 💻 Compute shader support
- 🔮 Modern GPU features
- 📈 Future-proof architecture

## 🤝 Contributing

Found a bug or have an idea? Feel free to:
- 🐛 Open an issue
- 🔧 Submit a pull request
- 💡 Share your creations!

---

**Happy coding!** 🚀✨

Made with ❤️ using Three.js, TSL, TypeScript, and Vite