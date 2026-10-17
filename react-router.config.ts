import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Static build served by Caddy (see Caddyfile, which also sets the security headers)
  ssr: false,
  prerender: ["/"],
} satisfies Config;
