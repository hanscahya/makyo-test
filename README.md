# Makyo Test

Makyo Test is a Next.js application featuring a dropdown component.\
It includes Storybook UI development tools for creating and testing UI components in isolation.

## Table of Contents
- Getting Started
  - Prerequisites
  - Installation
  - Running the App
  - Running Storybook
- Scripts
- Dependencies
- Dev Dependencies


## Getting Started
### Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js (>= 14.x.x)
- You have a package manager such as npm or yarn installed

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/makyo-test.git
cd makyo-test
```

2. Install the dependencies:
```bash
npm install
# or
yarn install
```

### Running the App
To run the development server:
```bash
Copy code
npm run dev
# or
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

### Running Storybook
To start Storybook for developing and testing UI components:
```bash
Copy code
npm run storybook
# or
yarn storybook
```
Open http://localhost:6006 to view your Storybook.

To build the Storybook static files:
```bash
Copy code
npm run build-storybook
# or
yarn build-storybook
```

## Scripts
dev: Starts the Next.js development server
build: Builds the Next.js application for production
start: Starts the Next.js application in production mode
lint: Runs ESLint to lint the codebase
storybook: Starts the Storybook development server
build-storybook: Builds the Storybook static files

## Dependencies
- @tailwindcss/typography: Tailwind CSS plugin for typography
- autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes
- daisyui: Tailwind CSS components library
- next: React framework for production
- react: JavaScript library for building user interfaces
- react-dom: Entry point to the DOM and server renderers for React
- react-icons: Include popular icons in your React projects

## Dev Dependencies
- @chromatic-com/storybook: Chromatic integration for Storybook
- @storybook/addon-essentials: Essential Storybook addons
- @storybook/addon-interactions: Interaction testing addon for Storybook
- @storybook/addon-links: Link addon for Storybook
- @storybook/addon-onboarding: Onboarding addon for Storybook
- @storybook/blocks: UI components for Storybook
- @storybook/nextjs: Next.js integration for Storybook
- @storybook/react: React integration for Storybook
- @storybook/test: Testing tools for Storybook
- @types/node: TypeScript definitions for Node.js
- @types/react: TypeScript definitions for React
- @types/react-dom: TypeScript definitions for ReactDOM
- @typescript-eslint/eslint-plugin: ESLint plugin for TypeScript
- @typescript-eslint/parser: TypeScript parser for ESLint
- eslint: Linter for JavaScript and TypeScript
- eslint-config-next: ESLint configuration for Next.js
- eslint-config-prettier: ESLint configuration to disable conflicting rules with Prettier
- eslint-plugin-prettier: ESLint plugin for Prettier
- eslint-plugin-react: ESLint plugin for React
- eslint-plugin-react-hooks: ESLint plugin for React hooks
- eslint-plugin-storybook: ESLint plugin for Storybook
- postcss: Tool for transforming CSS with JavaScript
- prettier: Code formatter
- storybook: UI component dev environment and playground
- tailwindcss: Utility-first CSS framework
- typescript: TypeScript language

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


