// Modules
const express = require('express');
const connectDB = require('./server/database/connection');

// App
const app = express();

// mongodb connection
connectDB();

// app port
const PORT =  3000;

// body parser for json 
app.use(express.json());

// load routers
app.use('/', require('./server/routes/router'))

app.get('/', (req, res) => {
  res.send('Hello World');
});
  

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});


