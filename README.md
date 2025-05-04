[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mNaxAqQD)

# Curiosity Voyage 🌏 

Talk a tour around the world. This is a React application that lets you browse, search, filter, and view details such as country flag, population, languages used, currencies, population, capital, boardaring countries and many more via the [REST Countries API](https://restcountries.com/).

--- 

## Demo

> _Live demo:_ https://www.curiosityvoyage.me

---

## Features

- **Browse** all countries with flags, names, regions, populations, capitals, languages and boardaring countries
- **Search** countries by name
- **Filter** by region and by language  
- **Detail view** for each country (including border‐country navigation)  
- **Responsive** UI for mobile and desktop  
- **Dark/Light** mode toggle (if implemented)  

---

## Tech Stack

- **Front‐end**: React, React Router, React Hooks  
- **Styling**: Bootstrap 5 + custom CSS  
- **API client**: Fetch wrapper in `src/api/restCountries.js`  
- **State management**: Local component state & custom hooks  
- **Bundler**: Create React App  
- **Testing**: Jest & React Testing Library  

---

## Getting Started

### Prerequisites

- **Node.js** v14+  
- **npm** v6+ or **yarn**  

### Installation

```bash
# Clone the repository
git clone https://github.com/sasmithaK/REST-countries.git
cd REST-countries/frontend

# Install dependencies
npm install
# or
yarn install
```

### Script	Description
```bash
npm run dev	# Launch development server
npm run build	# Build for production
npm run preview	# Preview production build locally
```

## 📁 Project Structure
frontend/
├── backend/ #user state management
├── public/
├── src/
│ ├── api/ # API client
│ ├── components/ # UI components
│ ├── hooks/ # Custom React hooks
│ ├── styles/ # CSS styles
│ ├── tests/ # Unit & integration tests
│ ├── App.jsx # App entry component
│ └── main.jsx # Main entry file
├── index.html
└── package.json