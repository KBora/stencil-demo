import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind'

export const config: Config = {
  namespace: 'stencil-demo',
  taskQueue: 'async',
  plugins: [
    tailwind()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }versio
};
