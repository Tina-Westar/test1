import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ghPages(),
  ],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
    cors:false,
  },
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/img/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
})
