// === Dependencies ===

const path = require("path");
const express = require('express');
const router = express.Router();
    
// === Routes ===
    router.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    router.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });


    module.exports = router;