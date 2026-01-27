export default function handler(req, res) {
  const { id } = req.query;

  if (!global.store || !global.store[id]) {
    res.status(404).send("Not found");
    return;
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(global.store[id]);
}
