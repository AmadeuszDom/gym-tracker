# 🏋️ Gym Tracker

A modern, responsive web application for tracking your gym workouts, monitoring progress, and managing your fitness journey. Perfect for fitness enthusiasts who want to stay organized and motivated!

## ✨ Features

- **📊 Dashboard**: Get a quick overview of your recent activities and key fitness metrics at a glance
- **📋 Workout Plans**: Create and manage custom workout plans with exercises tailored to your goals
- **💪 Workouts**: Track your workout sessions in real-time and log your exercises, sets, and reps
- **📈 Progress**: Visualize your fitness progress over time with intuitive charts and statistics
- **📜 History**: Browse and review your past workout sessions to see how far you've come
- **⚙️ Settings**: Customize your profile and app preferences to match your fitness style

## 🚀 Getting Started

[![Node.js](https://img.shields.io/badge/Node.js->=18-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Private-lightgrey)](LICENSE)

### Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** as your package manager

### Installation

Follow these simple steps to get Gym Tracker up and running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmadeuszDom/gym-tracker.git
   cd gym-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` and start tracking your workouts!

### Building for Production

When you're ready to deploy your app:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript for type-safe development
- **Styling**: Tailwind CSS for modern, responsive design
- **Build Tool**: Vite for lightning-fast development experience
- **Routing**: React Router DOM for seamless navigation
- **Icons**: React Icons for beautiful, consistent iconography

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.tsx              # Main navigation bar
│   ├── Sidebar.tsx             # Side navigation menu
│   └── MainSection/            # Dashboard components
│       ├── ActivityCard.tsx    # Individual activity display
│       ├── MainSection.tsx     # Main dashboard layout
│       ├── MainSectionHeader.tsx    # Dashboard header
│       ├── MainSectionRecents.tsx   # Recent activities
│       ├── MainSectionSummary.tsx   # Summary statistics
│       └── SummaryCard.tsx     # Summary card component
├── App.tsx                     # Main application component
├── Dashboard.tsx               # Dashboard page
├── main.tsx                    # Application entry point
└── index.css                   # Global styles
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is private and not licensed for public use.

## 💡 Tips for Using Gym Tracker

- Start by creating your first workout plan in the "Workout Plans" section
- Use the dashboard to track your daily progress and stay motivated
- Check the "History" section to review your past workouts and identify patterns
- Customize your settings to personalize your experience

---

Made with ❤️ for fitness enthusiasts

```
