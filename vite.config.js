import { defineConfig } from "vite";
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import react from "@vitejs/plugin-react";

// ✅ Cấu hình chuẩn cho React + Blockchain SDKs
export default defineConfig({
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
      util: 'util'
    }
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    react(),
    wasm(),
    topLevelAwait()
  ],
  define: {
    global: "globalThis", // ✅ Fix "global is not defined"
    process: { env: { NODE_ENV: "production" } }, // ✅ Fix "process is not defined"
  },
  optimizeDeps: {
    include: [
      'process', 'util',
      "buffer",
      "process",
      "tronweb",
      "bitcoinjs-lib",
      "@polkadot/util-crypto",
      "@polkadot/keyring",
    ],
  },
});
