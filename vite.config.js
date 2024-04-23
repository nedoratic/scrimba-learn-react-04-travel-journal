import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/scrimba-learn-react-04-travel-journal/',
	plugins: [react()],
});
