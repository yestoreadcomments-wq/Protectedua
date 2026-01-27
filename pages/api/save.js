global.store = global.store || {};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const id = Math.random().toString(36).slice(2, 8);
  const text = req.body.text || "";

  global.store[id] = text;

  res.json({ id });
}
