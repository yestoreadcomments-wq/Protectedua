export default async function handler(req, res) {
  // Check User-Agent to detect browser vs Roblox
  const userAgent = req.headers['user-agent'] || '';
  const isBrowser = userAgent.includes('Mozilla') || 
                    userAgent.includes('Chrome') || 
                    userAgent.includes('Safari');
  
  // Check for Roblox-specific referrer or direct request
  const referer = req.headers['referer'] || req.headers['referrer'] || '';
  const isFromRoblox = referer.includes('roblox.com') || 
                       referer.includes('robloxlabs.com');
  
  // Your actual script content
  const robloxScript = `print("hello")\n-- Your actual exploit script here\nloadstring(game:HttpGet("another-script-if-needed"))()`;
  
  // Allow access from Roblox executors or direct requests (no browser)
  if (!isBrowser || isFromRoblox || req.query.key === "YOUR_SECRET_KEY") {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robloxScript);
  } else {
    // Browser access gets denied
    res.status(403).send('403 Access Denied \u26D4\n\n403: Access Denied');
  }
}
