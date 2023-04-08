import react from '@vitejs/plugin-react';

export default {
    plugins: [react()],
    root: './src',
    base: '/',
    build: {
      outDir: '../dist',
    },
    server: {
      port: 3000,
    },
};