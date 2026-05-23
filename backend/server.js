import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "terminbank_remake"
});

db.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});



app.get("/stats", (req, res) => {

    const sql = "SELECT * FROM stats";

    db.query(sql, (err, result) => {

        if(err){
            res.status(500).json(err);
        } else {
            res.json(result);
        }

    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});