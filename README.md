# DataAction

DataAction is a dynamic web application built with **React**, **TypeScript**, and **Vite**. This project is designed for fast development, optimized bundling, and modern web standards. It includes Hot Module Replacement (HMR) for a seamless development experience and enhanced ESLint configurations for code quality.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [ESLint Configuration](#eslint-configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows a typical Vite and React application structure:

```plaintext
DataAction/
├── public/                # Static files
├── src/                   # Source code
│   ├── assets/            # Static assets like images and fonts
│   ├── components/        # Reusable components
│   ├── pages/             # Page components for routing
│   ├── hooks/             # Custom hooks
│   ├── styles/            # Global and modular styles
│   ├── utils/             # Utility functions
│   └── main.tsx           # Main entry file
├── .eslintrc.js           # ESLint configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **TypeScript**: JavaScript superset for static type-checking
- **Vite**: Frontend build tool that serves as a fast development server
- **ESLint**: Linter for code quality and consistency
- **Babel or SWC**: Used by Vite for Fast Refresh (Hot Module Replacement)

## Getting Started

To get started with the DataAction project, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nexta12/dataaction.git
   cd dataaction
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`**: Starts the Vite development server with HMR.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the code with ESLint.

## ESLint Configuration

This project uses a customized ESLint configuration to support React and TypeScript development with additional type-aware linting rules. For production applications, we recommend expanding the configuration further:

1. Update the `parserOptions` in your ESLint config file to enable type-aware rules:

   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Ensure the `eslint-plugin-react` package is installed:

   ```bash
   npm install eslint-plugin-react
   ```

## Contributing

Contributions to DataAction are welcome! Please follow these steps to get involved:

1. Fork the repository and create your feature branch (`git checkout -b feature/YourFeature`).
2. Commit your changes with clear messages (`git commit -m 'Add YourFeature'`).
3. Push your changes to the feature branch (`git push origin feature/YourFeature`).
4. Open a pull request for review.

For significant changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the [MIT License](LICENSE).

---
