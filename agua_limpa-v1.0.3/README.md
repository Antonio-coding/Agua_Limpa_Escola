# Água Limpa - React Application
Equipe: 
- Antônio Thiago Neto
- Caio Roberto
- Jefferson Marques
- Mirla Vieira
- Rodrigo Miranda
## Description

This React application, named "Água Limpa," is designed to provide information about water conditions in various regions, with a specific focus on schools. The application is built using [create-react-app](https://create-react-app.dev/) and incorporates [Tailwind CSS](https://tailwindcss.com/). TypeScript is used to enhance the robustness of the codebase.

## Prerequisites

Make sure you have the following tools installed on your machine:

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Antonio-coding/Agua_Limpa_Escola.git
   ```

2. Navigate to the project directory:

   ```bash
   cd agua_limpa-v1.0.3
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Environment Variables

The project uses an `.env` file to manage various environment variables. Make sure to configure them as needed.

## Folder Structure

## Folder Structure

```
 .
 ├── package.json
 ├── postcss.config.js
 ├── public
 │   ├── assets
 │   │   └── images --------- All Project Images
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── manifest.json
 │   └── robots.txt
 ├── README.md
 ├── src
 │   ├── App.tsx
 │   ├── assets
 │   │   └── fonts ---------- Project fonts
 │   ├── components --------- UI and Detected Common Components
 │   ├── constants ---------- Project constants, eg: string consts
 │   ├── hooks -------------- Helpful Hooks
 │   ├── index.tsx
 │   ├── pages -------------- All route pages
 │   ├── Routes.tsx ---------- Routing
 │   ├── styles
 │   │   ├── index.css ------ Other Global Styles
 │   │   └── tailwind.css --- Default Tailwind modules
 │   └── util
 │       └── index.tsx ------- Helpful utils
 └── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

## Available Scripts

In the project directory, you can use the following scripts:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects from create-react-app (one-way operation).

## Installing Dependencies

To install a new dependency, use `npm` or `yarn`. For example:

```bash
npm install --save react-router
```

## License

This project is licensed under the MIT License.

