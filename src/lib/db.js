import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("RatingRecords"); // select database



//////////////////////////////////////////
// RECORDS ///////////////////////////////
//////////////////////////////////////////

////////// GET ALL RECORDS //////////
async function getRecords() {
  let records = [];

  try {
    const collection = db.collection("records");


    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    records = await collection.find(query).toArray();
    records.forEach((record) => {
      record._id = record._id.toString(); // convert ObjectId to String
    });

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return records;
}

////////// GET RECORD BY ID //////////
async function getRecord(id) {
  let record = null;
  try {
    const collection = db.collection("records");
    const query = { _id: new ObjectId(id) }; // filter by id
    record = await collection.findOne(query);

    if (!record) {
      console.log("No record with id " + id);
      // TODO: errorhandling
    } else {
      record._id = record._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return record;
}

////////// CREATE RECORD //////////
async function createRecord(record) {
  try {
    const collection = db.collection("records");
    const result = await collection.insertOne(record);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

////////// UPDTAE RECORD ///////////
async function updateRecord(record) {
  try {
    let id = record._id;
    delete record._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("records");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: record });

    if (result.matchedCount === 0) {
      console.log("No record with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Record with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Artists ///////////////////////////////
//////////////////////////////////////////

////////// GET ALL ARTISTS //////////
async function getArtists() {
  let artists = [];

  try {
    const collection = db.collection("records");
    const query = {};

    // Nur das 'artist'-Feld abfragen
    const records = await collection.find(query, { projection: { artist: 1, _id: 0 } }).toArray();
    // Nur artist-Werte extrahieren
    artists = records.map(record => record.artist);
    // Duplikate entfernen
    artists = [...new Set(artists)];

  } catch (error) {
    console.error(error);
  }

  return artists;
}

////////// GET ARTISTS BY NAME //////////
async function getArtist(d) {
  let artist = null;
  try {
    const collection = db.collection("records");

    const query = { _id: new ObjectId(artist) }; // filter by id
    artist = await collection.findOne(query);

    if (!artist) {
      console.log("No artist with name " + artist);
      // TODO: errorhandling
    } else {
      record._id = record._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return artist;
}


// delete movie by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteMovie(id) {
  try {
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}




//////////////////////////////////////////
// EXPORT FUNCTIONS
//////////////////////////////////////////
export default {
  getRecords,
  getRecord,
  createRecord,
  updateRecord,
  getArtists,





 
  deleteMovie,
};
