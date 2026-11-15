import { defineConfig } from 'cf/config';

export default defineConfig({
  worker: {
    name: 'openmettle-public-site',
    compatibilityDate: '2026-11-15',
    workersDev: true,
    assets: { notFoundHandling: 'none' },
    observability: {
      enabled: true,
      traces: { enabled: true }
    }
  }
});
