# Kapsun Cooling Website

A modern React-based website for Kapsun Advanced Air Cooling Engineering, built with Vite, TypeScript, and Tailwind CSS.

## Features

- Responsive design with modern UI components
- Interactive animations and parallax effects
- Product showcase and services
- Contact forms and team information
- Integration with Gemini AI API

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kapsun-cooling
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Set your `GEMINI_API_KEY` in the `.env` file
   - Optionally set `APP_URL` if deploying

4. Run the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Clean build directory

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
- Google Gemini AI
- Lucide React Icons

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions
├── App.tsx        # Main app component
├── main.tsx       # App entry point
└── index.css      # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
