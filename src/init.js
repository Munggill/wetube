import "./db";
import "./models/Video"
import app from "./server"

const PORT = 3999; 

app.listen(PORT, () => console.log(`☞☞ Server listenting on http://localhost:${PORT}`));