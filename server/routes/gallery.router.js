const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);

    // req.params.id = :id
    const galleryId = req.params.id;

    /* 
      for(const galleryItem of galleryItems) {
          if(galleryItem.id == galleryId) {
              galleryItem.likes += 1;
          }
      }
      res.sendStatus(200);
    */
  
    // SQL string for DB
    const sqlText = `
      UPDATE "gallery"
      SET "likes" = "likes" + 1
      WHERE "id" = $1;
    `;

    pool.query(sqlText, [galleryId])
      // When response is received, send to client
      .then(dbRes => {
        console.log(`Incremented like at id ${galleryId}`);

        // 200 OK
        res.sendStatus(200);
      })
      // or respond with an error and log it
      .catch(err => {
        console.log(`Error making DB query: ${sqlText}.`, err);

        // 500 Internal Error
        res.sendStatus(500);
      });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);

    // SQL string for DB
    const sqlText = `
      SELECT * FROM "gallery"
      ORDER BY "id" DESC;
    `;

    // Query DB
    pool.query(sqlText)
      // When response is received, send to client
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

// POST Route
router.post('/addImage', (req, res) => {
  console.log(req.body);

  // req.body holds our data object 
  // has path and description keys
  const galleryItem = req.body;

  // SQL string for DB
  const sqlText = `
    INSERT INTO "gallery"
      ("path", "description")
    Values
      ($1, $2);
  `;

  // Query DB
  pool.query(sqlText, [galleryItem.path, galleryItem.description])
    // When response is received, send to client
    .then(dbRes => {
      console.log('This was posted to DB:', galleryItem);

      // 201 Created
      res.sendStatus(201);
    })
    // or respond with an error and log it
    .catch(err => {
      console.log(`Error making DB query: ${sqlText}.`, err);

      // 500 Internal Error
      res.sendStatus(500);
    }); 
}); // END POST Route

module.exports = router;