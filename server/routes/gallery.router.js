const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    // SQL string for DB
    const sqlText = 'SELECT * FROM "gallery"';

    // Query DB
    pool.query(sqlText)
      // When response is received send it to client
      .then(dbRes => {
        console.log(`got back ${dbRes.rowCount} items`);
        
        // respond with each row(item) from DB
        res.send(dbRes.rows);
      }) 
      // or respond with an error and log it
      .catch(err => {
        console.log(`Error making DB query: ${sqlText}.`, err);

        // 500 Internal Error
        res.sendStatus(500);
      }); 
}); // END GET Route

module.exports = router;