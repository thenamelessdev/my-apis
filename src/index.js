import { cache } from "react";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/helloworld") {
      return new Response(
        JSON.stringify({ message: "Hello World!" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (url.pathname === "/time") {
      return new Response(
        JSON.stringify({ time: new Date().toISOString() }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (url.pathname === "/hello" && request.method === "POST") {
      try {
        const data = await request.json();
        return new Response(
          JSON.stringify({ message: `Hello ${data.name}` }), 
          { headers: { "Content-Type": "application/json" } }
        )
      }
      catch {
        return new Response(
          JSON.stringify({ message: "Please include a name in the body." })
        )
      }
    }

    // Default: Not found
    return new Response("Not found", { status: 404 });
  },
};
