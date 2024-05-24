import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// for storybook (remix を入れない)
export default defineConfig({
  plugins: [tsconfigPaths()],
});
