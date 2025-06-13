# 04 – Express.js (TypeScript)

## 📄 Description
Express server setup using TypeScript with proper types and structure.

## 📦 Installation

```bash
npm init -y
npm install express
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init
```

## 📂 Folder Structure

```
src/
  └── index.ts
dist/
  └── index.js
```

## 🧑‍💻 Scripts in package.json

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

## ▶️ Run Dev Server

```bash
npm run dev
```

## 📘 Concepts Covered

- Express + TypeScript setup
- Request, Response types
- Middleware: `express.json()`
- Compilation with `tsc`