# Calculator MBG (Makan Bergizi Gratis Budget Calculator)

A clean, modular React application designed to calculate the sustainability of a budget based on a fixed daily expenditure of **1.2 Trillion (1.2T) IDR**.

## 📌 About The MBG Program

**MBG (Makan Bergizi Gratis)** is a flagship national priority program initiated by the President and Vice President of Indonesia, Prabowo Subianto and Gibran Rakabuming Raka. Managed by the **Badan Gizi Nasional (BGN)**, the program officially rolled out nationwide starting in early 2025. 

The program aims to eradicate stunting, improve human resources, and boost local economies by providing free, nutritious meals to:
- Students across all levels (PAUD, TK, SD, SMP, SMA/equivalent)
- Toddlers
- Pregnant women
- Breastfeeding mothers

This calculator helps estimate how long a given national or regional budget will last under the program's massive daily burn rate.

## 🚀 Features

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
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS (Scoped per component)

## 🚦 Getting Started

### Prerequisites
- Node.js (Version 18.x or 20.x LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/calculator-mbg.git
cd calculator-mbg
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

## ⚙️ How It Works

The core logic resides in the Calculator.jsx feature. It utilizes the following formula:

$$Days = \text{round} \left( \frac{\text{Total Budget}}{1,200,000,000,000} \right)$$

The application ensures that large integer inputs are handled correctly and provides a user-friendly interface to manage these massive figures.

## 📄 License

This project is licensed under the **Apache License 2.0**. 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---
**© 2026 Made With Love by ramadanny**