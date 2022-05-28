
// === Dependencies ===
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');


// === Server init ===
const app = express();

// === Server able to accept a "what port to listen on" parameter from the environment ===
const PORT = process.env.PORT || 3000;

// ===  Middleware for parsing JSON and urlencoded form data === 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// === Routes  === 
require('./routes/apiRoutes')(app);
app.use('/',htmlRoutes);

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
);
