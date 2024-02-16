## Getting Started

### Installation

```bash
npm install
```

### Run the development server:

```bash
npm run start:dev
```
Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

### Caveats

This app uses a library called sqlite to mock a real database, it already has an entry on it and the frontend consumes it using `http://localhost:8000/pnr?lastName=${lastName}`. If you want to see the contents of said database you should install the [SQLite extension for VSCode](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite).

### Unit testing

```bash
npm test
```