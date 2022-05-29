
// === Dependencies ===
const express = require('express');
const path = require("path");
// === Server init ===
const app = express();


// === Server able to accept a "what port to listen on" parameter from the environment ===
const PORT = process.env.PORT || 3000;

// ===  Middleware for parsing JSON and urlencoded form data === 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

// === Routes  === 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
);
