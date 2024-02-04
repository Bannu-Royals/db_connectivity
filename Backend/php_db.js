const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host : 'sql6.freemysqlhosting.net',
  user : 'sql6680574',
  password :'eIFmnS39UQ',
  database :'sql6680574',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
    return;
  }

  console.log('Connected to database successfully!');
});

app.post('/add', (req, res) => {
  const { name, email, phone, date, password } = req.body;

  // Escape and quote string values
  const escapedName = connection.escape(name);
  const escapedEmail = connection.escape(email);
  const escapedPhone = connection.escape(phone);
  const escapedDate = connection.escape(date);
  const escapedPassword = connection.escape(password);

  const query = `INSERT INTO Sample (name, email, mobile,date, password) VALUES (${escapedName}, ${escapedEmail}, ${escapedPhone},${escapedDate},${escapedPassword});`

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error inserting data into database: ', error);
      res.status(500).send('Error inserting data into database');
      return;
    }

    console.log('Data inserted successfully!');
    res.send('Data inserted successfully!');
  });
});

app.get('/',(req,res)=>{
  console.log("home");
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});