import { defineConfig, devices } from '@playwright/test';
const app = process.env.IMOKO_APP || 'main-hosting';
if (!['main-hosting', 'vercel-preview'].includes(app)) throw new Error('Unknown IMOKO_APP');
const port = Number(process.env.IMOKO_PORT || '4173');
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('IMOKO_PORT must be an integer from 1024 to 65535');
export default defineConfig({
  testDir: './tests', timeout: 60000, workers: 1, retries: process.env.CI ? 1 : 0,
  outputDir: 'test-results/' + app,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report/' + app }]],
  use: { baseURL: 'http://127.0.0.1:' + port, trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: app === 'main-hosting'
      ? 'npx http-server main-hosting/out -a 127.0.0.1 -p ' + port + ' -c-1'
      : 'npm --prefix vercel-preview run start -- --hostname 127.0.0.1 --port ' + port,
    url: 'http://127.0.0.1:' + port, reuseExistingServer: false, timeout: 120000,
  },
});
