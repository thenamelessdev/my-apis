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

    // Default: Not found
    return new Response("Not found", { status: 404 });
  },
};
