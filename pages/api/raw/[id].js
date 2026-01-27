export default function handler(req, res) {
  const { id } = req.query;

  const text = global.store?.[id];

  if (!text) {
    return res.status(404).send("Not found");
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(text);
}
