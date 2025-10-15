const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Enable Vue 3.6 Vapor mode for better performance
  compilerOptions: {
    vapor: true
  },
  
  // Optimize for production
  productionSourceMap: false,
  
  // Configure webpack for better performance
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  },
  
  // CSS optimization
  css: {
    extract: true,
    sourceMap: false,
  },
  
  // PWA configuration for better performance
  pwa: {
    name: 'Stephen Wang - Personal Website',
    themeColor: '#2c3e50',
    msTileColor: '#2c3e50',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
})
