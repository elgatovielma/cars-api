// Modules
const express = require('express');

// App
const app = express();


const PORT = process.env.PORT || 3000


// load routers
// app.use('/', require('./server/routes/router'))

app.get('/', (req, res) => {
  res.send('Hello World');
});
  

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});


