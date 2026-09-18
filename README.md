# ShopMe

A user-friendly online shopping site designed for a smooth user experience. The frontend is built with React, HTML, CSS and JavaScript. There is no backend, so all products are static data and the cart and wishlist live in the browser session.

## Features

- Browse products by category: Men, Women, Kids, Home & Living and Discover
- Search products by name across all categories
- Add to cart and wishlist from product cards and brand cards
- Bag panel with item list and total, then checkout to generate an order bill
- Hot Deals page: click any deal card to see items with the matching discount (percent off, flat off, under a price)
- Image carousel, deal cards and "Brands in Focus" section on the home page

## Tech stack

- React 16 (Create React App, `react-scripts` 2.1.8)
- React Bootstrap and styled-components
- Font Awesome icons

## Run it locally

### 1. Prerequisites

- **Node.js 16** and npm. This project uses an old version of Create React App, which does not run on newer Node versions (v17 and above fail with `No such module: http_parser`).
- Git

If you use [nvm](https://github.com/nvm-sh/nvm), switch to Node 16:

```bash
nvm install 16
nvm use 16
node -v   # should print v16.x
```

### 2. Clone and install

```bash
git clone https://github.com/deveshmehra096/Shop-me-main.git
cd Shop-me-main
npm install
```

`npm install` prints many deprecation and audit warnings because the dependencies are old. This is expected and safe to ignore.

### 3. Start the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads when you edit the code.

## Other scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the app in development mode on port 3000 |
| `npm run build` | Creates an optimized production build in the `build` folder |
| `npm test` | Runs the test runner in watch mode |

## Troubleshooting

- **`No such module: http_parser`**: you are on a Node version newer than 16. Run `nvm use 16` and start again.
- **`node: bad option: --openssl-legacy-provider`**: you are on an older copy of `package.json`. Make sure the `start` script is `react-scripts start`.
- **`nvm: command not found`**: open a new terminal window, or run `source ~/.zshrc`, so nvm loads.
- **Port 3000 already in use**: stop the other app using it, or accept the prompt to run on another port.
