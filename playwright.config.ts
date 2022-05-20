import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    video: 'on',
    trace: 'on',
  },
  timeout: 60000
};
export default config;
