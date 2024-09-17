// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ColorCorrectionShader } from "three/examples/jsm/Addons.js";

Sentry.init({
  dsn: "https://745fde68b6532b4b0b7384a6f4941309@o4507968963674112.ingest.de.sentry.io/4507968975208528",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: 'dark'
    }),
  ],
});
