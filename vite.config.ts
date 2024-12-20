import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: {
      '@/': '/src/'
    }
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: false },
      include: '**/*.svg'
    })
  ]
});
