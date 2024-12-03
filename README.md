# REST Countries API with Color Theme Switcher

A modern React application that displays information about countries using data from a local JSON file. Users can search for countries, filter by region, and view detailed information about each country. The application also features a dark/light theme switcher for better user experience.

![REST Countries API](screenshot.png)

## Features

- 🌍 View all countries from the local data
- 🔍 Search for countries by name
- 🌐 Filter countries by region
- 🌓 Toggle between light and dark themes
- 📱 Fully responsive design
- 🔗 Interactive navigation between countries
- 💫 Smooth animations and transitions

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- Lucide React (for icons)
- Context API for state management
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/rest-countries-api-color-theme.git
```

2. Navigate to the project directory
```bash
cd rest-countries-api-color-theme
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

The application will start running at `http://localhost:5173`

## Project Structure

```
rest-countries-api-color-theme/
├── src/
│   ├── components/         # Reusable components
│   ├── context/           # React Context providers
│   ├── pages/             # Page components
│   ├── routes/            # Route configurations
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── data.json            # Countries data
```

## Features in Detail

### Home Page
- Displays all countries in a grid layout
- Search functionality to find countries by name
- Dropdown to filter countries by region
- Each country card shows:
  - Flag
  - Name
  - Population
  - Region
  - Capital

### Country Details Page
- Detailed information about the selected country
- Back button to return to the home page
- Displays:
  - Native name
  - Population
  - Region
  - Sub Region
  - Capital
  - Top Level Domain
  - Currencies
  - Languages
  - Border Countries (with clickable links)

### Theme Switching
- Toggle between light and dark modes
- Theme preference is persisted in localStorage
- Affects all components and pages
- Smooth transition between themes

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from [Frontend Mentor](https://www.frontendmentor.io/)
- Country data from REST Countries API
- Icons from Lucide React
