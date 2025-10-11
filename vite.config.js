import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Cấu hình chuẩn cho React + Blockchain SDKs
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    react(),
  ]
});
