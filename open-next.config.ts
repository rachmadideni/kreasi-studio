import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Enable caching with R2 / Durable Objects later via incrementalCache, etc.
  // See https://opennext.js.org/cloudflare/caching
});
