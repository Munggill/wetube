import mongoose from "mongoose"; 
const mongoUrl = process.env.DB_URL;
mongoose.connect(mongoUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});

const db = mongoose.connection;
    
const handleOpen = () => console.log ("☞☞ Connected to DB");
const handleError = (error) => console.log("DB Error", error);

// =============================================================================
// on 이벤트는 여러번 발생시킬 수 있다. (Click 등)
// once는 오로지 한번만 발생한다.
// =============================================================================
db.on("error", handleError);
db.once("open", handleOpen)

// 재 Commit을 위한 임시 주석