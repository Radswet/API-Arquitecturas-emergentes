const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('../database/arqui_emergente.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/chinook.db');

let sql = `SELECT PlaylistId id,
                  Name name
           FROM playlists
           WHERE PlaylistId  = ?`;
let playlistId = 1;

// first row only
db.get(sql, [playlistId], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.id, row.name)
    : console.log(`No playlist found with the id ${playlistId}`);

});

// close the database connection
db.close();


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});