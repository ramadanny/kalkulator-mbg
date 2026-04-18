# Kalkulator MBG (Budget Sustainability Calculator)

A clean, modular React application designed to calculate the sustainability of a budget based on a fixed daily expenditure of **1.2 Trillion (1.2T) IDR**.

## 📌 Overview

**Kalkulator MBG** is a specialized budgeting tool built with React and Vite. It allows users to input a total budget amount and calculates exactly how many days that budget will last, given a constant burn rate of 1.2T per day. The result is rounded to the nearest whole number for clear, actionable insights.

## 🚀 Features

- **Non-Realtime Calculation**: Prevents jumping numbers while typing; results only trigger upon clicking the "Hitung" button.
- **Precision Handling**: Handles large-scale numbers (Trillions) accurately.
- **Responsive Design**: Minimalist and clean UI that works on both desktop and mobile.
- **Modular Architecture**: Built using a component-based structure for high maintainability.

## 🏗️ Project Structure

The project follows a "Feature-Component" architecture to separate business logic from UI elements:

```text
src/
├── components/           # Reusable UI Components
│   ├── InputBudget/      # Custom input field for currency/numbers
│   ├── ResultDisplay/    # Display area for the calculation result
│   └── Footer/           # Attribution footer
├── features/             # Business Logic & Feature Modules
│   └── Calculator/       # Main container for calculation logic
├── utils/                # Utility functions and constants
│   └── constants.js      # Global constants (e.g., 1.2T daily cost)
├── App.jsx               # Main application entry point
└── main.jsx              # React DOM rendering
```

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Optimized for fast development)
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS (Scoped per component)

## 🚦 Getting Started

### Prerequisites
- Node.js (Version 18.x or 20.x LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramadanny/kalkulator-mbg.git
   cd kalkulator-mbg
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

## ⚙️ How It Works

The core logic resides in the `Calculator.jsx` feature. It utilizes the following formula:

$$Days = \text{round} \left( \frac{\text{Total Budget}}{1,200,000,000,000} \right)$$

The application ensures that large integer inputs are handled correctly and provides a user-friendly interface to manage these massive figures.

## 📄 License

This project is open-source. Feel free to use and modify it.

---
**© 2026 Made With Love by ramadanny**