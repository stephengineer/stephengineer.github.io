/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vue 3.6 Vapor mode types
declare global {
  interface Window {
    __VUE_PROD_DEVTOOLS__: boolean
  }
}

export {}
