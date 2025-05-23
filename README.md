# Curiosity Voyage 🌏 - Explore Countries

Take a tour around the world. This React application lets you browse, search, filter, and view details such as country flag, population, languages used, currencies, capital, bordering countries and many more via the [REST Countries API](https://restcountries.com/).

--- 

## 🌐 Demo

> _Live demo:_ https://www.curiosityvoyage.me

---

## 📑 Features

- **Browse** all countries with flags, names, regions, populations, capitals, languages and bordering countries
- **Search** countries by name
- **Filter** by region and by language  
- **Detailed view** for each country's official name, currencies, subregion and timezone
- **Bookmark and View the most recently visited countries** within a user state
- **Responsive** UI for mobile and desktop
---

## 📚 Tech Stack

- **Front‐end**: React, React Router, React Hooks  
- **Styling**: Bootstrap 5 + custom CSS  
- **API client**: Fetch wrapper in `src/api/restCountries.js`  
- **State management**: Local component state & custom hooks  
- **Bundler**: Create React App  
- **Testing**: Jest & React Testing Library  

---

## 👨‍💻 Getting Started

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
```bash
frontend/
 ├── backend/ #user state management
 ├── public/
 ├── src/
 │ ├── api/ # API client
 │ ├── assests/ # Media files
 │ ├── components/ # UI components
 │ ├── hooks/ # Custom React hooks
 │ ├── styles/ # CSS styles
 │ ├── pages/ # Web pages
 │ ├── store/ # Redux state management
 │ ├── tests/ # Unit & integration tests
 │ ├── App.jsx # App entry component
 │ └── main.jsx # Main entry file
 ├── index.html
 └── package.json
```
