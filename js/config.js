// Static hosting: set this to your HTTPS multiplayer server, e.g. https://chess-api.example.com.
// Multiplayer needs this separately hosted service; this archive contains the browser app.
export const SERVER_URL = "https://chess-api.jenga-code.com";
export const ENGINE_URL = new URL(
  "../stockfish/stockfish-18-lite-single.js",
  import.meta.url,
).href;
