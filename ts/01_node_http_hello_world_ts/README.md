# 02 – Pure Node.js (TypeScript)

## 📄 Description
Basic HTTP server using TypeScript and Node.js core modules.

## 📦 Installation

```bash
npm init -y
npm install -D typescript ts-node-dev @types/node
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

- `http.createServer()`
- TypeScript setup
- Compilation to JavaScript using `tsc`