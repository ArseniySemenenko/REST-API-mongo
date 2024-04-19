const express = require("express");
const app = express();
const fs = require("fs");
const UserRoute = require("./Routes/users.route");

const PORT = 8000;

app.use((req, res, next) => {
    const now = new Date().toString().slice(4,24);
    const data = `url: "${req.url}", method: "${req.method}", date: "${now}"`;
    console.log(data);
    try {
        fs.appendFileSync("server.log", data + "\n");
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
    next();
});

app.use(express.json());
app.use(UserRoute);

app.listen(PORT , () => {
    console.log(`Server started in http://localhost:${PORT}`);
})
