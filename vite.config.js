import react from '@vitejs/plugin-react';

export default {
    plugins: [react()],
    root: './src',
    base: '/Restaurante/dist', //para gitgub pages
    build: {
      outDir: '../dist',
    },
    server: {
      port: 3000,
    },
};