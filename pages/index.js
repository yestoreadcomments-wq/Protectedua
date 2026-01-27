import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [rawUrl, setRawUrl] = useState("");

  async function saveText() {
    const res = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    setRawUrl(`${window.location.origin}/api/raw/${data.id}`);

  return (
    <div style={{ padding: 20 }}>
      <h1>Raw Text Host</h1>

      <textarea
        placeholder='print("hello world")'
        style={{ width: "100%", height: 200 }}
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <br /><br />
      <button onClick={saveText}>Save</button>

      {rawUrl && (
        <>
          <p>Raw URL:</p>
          <code>{rawUrl}</code>
        </>
      )}
    </div>
  );
          }
