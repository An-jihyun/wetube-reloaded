//아래는 원래 수업하던거
import "./views/db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListen = () => console.log(`"im listening! http://localhost:${PORT}`);

app.listen(PORT, handleListen);

//24?23과제였음
// import express from "express";

// const PORT = 4000;
// const app = express();
// let today = new Date();

// const urlLogger = (req, res, next) => {
//   console.log(`Path: ${req.url}`);
//   next();
// };

// const timeLogger = (req, res, next) => {
//   console.log(today.getFullYear() + "." + today.getMonth() + "." + today.getDate());
//   next();
// };

// const securityLogger = (req, res, next) => {
//   if (req.protocol === "https") {
//     return console.log("secure");
//   }
//   console.log("insecure");
//   next();
// };

// const protectorMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.end(); //res.end하면 종료하니 return이 필요 없는걸까?
//   }
//   next();
// };

// const handleHome = (req, res) => {
//   res.send("i love you");
// };

// app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);
// app.get("/", handleHome);

// const handleListen = () => console.log(`"im listening! http://localhost:${PORT}`);

// app.listen(PORT, handleListen);

//아래는 8.22 과제 내용

// import express from "express";

// const PORT = 5000; 블루프린트는 따로 포트를 지정해주므로 바로 listen(); 해도 된당 확인을 위해 콘솔로그 찍는 함수를 바로 넣어줘도 좋다
// const app = express();

// const handleHome = (req, res) => {
//   return res.send("<h1>Home</h1>");
// };

// const handleAbout = (req, res) => {
//   return res.send("<h1>About</h1>");
// };

// const handleContact = (req, res) => {
//   return res.send("<h1>Contact</h1>");
// };

// const handleLogin = (req, res) => {
//   return res.send("<h1>Login</h1>");
// };

// app.get("/", handleHome);
// app.get("/about", handleAbout);
// app.get("/contact", handleContact);
// app.get("/login", handleLogin);

// const handleListen = () => console.log(`im listening! http://localhost:${PORT}`);

// app.listen(PORT, handleListen);
