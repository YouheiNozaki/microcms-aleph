import { createClient } from "microcms";

export const microcmsClient = createClient({
  serviceDomain: "ryusou-portfolio",
  apiKey: `${Deno.env.get("X_API_KEY")}`,
});
