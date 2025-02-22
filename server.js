import { serveDir } from "https://deno.land/std@0.151.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.151.0/http/server.ts";

serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);

  if (req.method === "GET" && pathname === "/welcome-message") {
    return new Response("コンフリクト前");
  }

  return serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
});
