/*const express = require("express");
const app = express();
app.get("/", (req, res)=> {
    res.status(200).send("hello");
});

  // express est installé
app.post("/get-data-from-client")
*/
let express = require('express');
let mysql = require('mysql');
let app = express();

let config = require('./config.js');
let connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.!');
});

   let user =`INSERT INTO users(firstName,eMail)
            VALUES('kikiki','jj@gmail.com')`;
connection.query(user);
    let comment = ` INSERT INTO user_has_comment(idUser, comment)
            VALUES((SELECT id FROM users
            WHERE firstName = 'kikiki'),
            'cette bgrnbfgbnfgxbgfx!!!!!!!!')
            `;
connection.query(comment);




app.listen(3000);
   