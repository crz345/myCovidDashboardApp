import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/myCovidDashboardApp/",  // TODO: Replace REPO_NAME with the name of your repository
  plugins: [react()],
});