import "dotenv/config";
import "./db";
import "./models/Video"
import "./models/User"
import app from "./server"

const PORT = 3999; 

app.listen(PORT, () => console.log(`☞☞ Server listenting on http://localhost:${PORT}`));    

// 재 Commit을 위한 임시 주석