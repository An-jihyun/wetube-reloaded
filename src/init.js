import "./views/db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListen = () => console.log(`"im listening! http://localhost:${PORT}`);

app.listen(PORT, handleListen);