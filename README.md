# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Installation

- Make sure you have Node.js installed on your computer. You can download it from the official Node.js website (https://nodejs.org).

- Install pnpm globally by running the following command:
```js 
npm install -g pnpm
```
- Clone the "hacker-news" project repository to your local computer
```js 
git clone https://github.com/your-username/hacker-news.git
```
- Navigate to the project directory.
```js 
cd hacker-news
```
- Install the project dependencies using pnpm by running the following command:
```js 
pnpm install
```

## Launch
- Once the dependencies have been successfully installed, you can run the project using the following command:
```js 
pnpm dev
```
- Open your browser and go to http://localhost:5173 to see the "hacker-news" application running.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# hacker-news
