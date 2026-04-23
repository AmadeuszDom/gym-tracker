# Gym Tracker

A modern, responsive web application for tracking your gym workouts, monitoring progress, and managing your fitness journey.

## Features

- **Dashboard**: Overview of your recent activities and key metrics
- **Add Workout**: Log new workout sessions with exercises, sets, reps, and weights
- **Progress**: Visualize your fitness progress over time with charts and statistics
- **History**: Browse and review past workout sessions
- **Settings**: Customize your profile and app preferences

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AmadeuszDom/gym-tracker.git
   cd gym-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── Components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── MainSection/
│       ├── ActivityCard.tsx
│       ├── MainSection.tsx
│       ├── MainSectionHeader.tsx
│       ├── MainSectionRecents.tsx
│       ├── MainSectionSummary.tsx
│       └── SummaryCard.tsx
├── App.tsx
├── Dashboard.tsx
├── main.tsx
└── index.css
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
