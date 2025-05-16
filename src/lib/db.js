import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("RatingRecords"); // select database

////////////////////////////////////////////////////////////////////////////////////////////////////////
// RECORDS /////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// GET ALL RECORDS ////////////////////////////////////////////////////////////////////////
async function getRecords() {
  let records = [];

  try {
    const recCol = db.collection("records");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    records = await recCol.find(query).toArray();

    records.forEach((record) => {
      record._id = record._id.toString(); // convert ObjectId to String
    });

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return records;
}

////////// GET RECORD BY ID ////////////////////////////////////////////////////////////////////////
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

////////// GET RECORDS BY ARTIST ////////////////////////////////////////////////////////////////////////
async function getRecordsByArtist(id) {
  let records = [];



  try {
    const artCol = db.collection("artists");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/


    const query = [
      {
        $match: {
          _id: {
            $eq: new ObjectId(id)
          }
        }
      }, {
        $lookup: {
          from: "records",
          localField: "name",
          foreignField: "artist",
          as: "records"
        }
      }, {
        $project: {
          _id: 0,
          records: 1
        }
      }, {
        $unwind: {
          path: "$records"
        }
      }, {
        $replaceRoot: {
          newRoot: "$records"
        }
      }
    ];

    // Get all objects that match the query
    // aggregate, because complex query/pipeline
    records = await artCol.aggregate(query).toArray();

    records.forEach((record) => {
      record._id = record._id.toString(); // convert ObjectId to String
    });


  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return records;


}

////////// GET OLD RECORDS ////////////////////////////////////////////////////////////////////////
async function getOldRecords() {
  let records = [];
  try {
    const artCol = db.collection("records");


    const query = [
      {
        $set: {
          'lastlisten': {
            $toDate: '$lastlisten'
          }
        }
      }, {
        $match: {
          $expr: {
            $gte: [
              {
                $divide: [
                  {
                    $subtract: [
                      '$$NOW', '$lastlisten'
                    ]
                  }, 1000 * 60 * 60 * 24
                ]
              }, 365
            ]
          }
        }
      }
    ];

    // Get all objects that match the query
    // aggregate, because complex query/pipeline
    records = await artCol.aggregate(query).toArray();

    records.forEach((record) => {
      record._id = record._id.toString(); // convert ObjectId to String
    });


  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return records;


}

////////// GET TOP RECORDS ////////////////////////////////////////////////////////////////////////
async function getTopRecords() {
  let records = [];
  try {
    const artCol = db.collection("records");


    const query = {rating: {$eq:"5"}};

    // Get all objects that match the query
    // find, because simple query
    records = await artCol.find(query).toArray();

    records.forEach((record) => {
      record._id = record._id.toString(); // convert ObjectId to String
    });


  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return records;


}

////////// CREATE RECORD ////////////////////////////////////////////////////////////////////////
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

////////// UPDTAE RECORD /////////////////////////////////////////////////////////////////////////
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




////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARTISTS /////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// GET ALL ARTISTSS ////////////////////////////////////////////////////////////////////////
async function getArtists() {
  let artists = [];

  try {
    const collection = db.collection("artists");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    artists = await collection.find(query).toArray();
    artists.forEach((artist) => {
      artist._id = artist._id.toString(); // convert ObjectId to String
    });

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return artists;
}

////////// GET ARTIST BY ID ////////////////////////////////////////////////////////////////////////
async function getArtist(id) {
  let artist = null;
  try {
    const collection = db.collection("artists");
    const query = { _id: new ObjectId(id) }; // filter by id
    artist = await collection.findOne(query);

    if (!artist) {
      console.log("No record with id " + id);
      // TODO: errorhandling
    } else {
      artist._id = artist._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return artist;
}

////////// CREATE ARTIST ////////////////////////////////////////////////////////////////////////
async function createArtist(artist) {
  try {
    const collection = db.collection("artists");
    const result = await collection.insertOne(artist);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// LABELS /////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// GET ALL LABELS ////////////////////////////////////////////////////////////////////////
async function getLabels() {
  let labels = [];

  try {
    const collection = db.collection("labels");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    labels = await collection.find(query).toArray();
    labels.forEach((label) => {
      label._id = label._id.toString(); // convert ObjectId to String
    });

  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return labels;
}

////////// GET LABEL BY ID ////////////////////////////////////////////////////////////////////////
async function getLabel(id) {
  let label = null;
  try {
    const collection = db.collection("labels");
    const query = { _id: new ObjectId(id) }; // filter by id
    label = await collection.findOne(query);

    if (!label) {
      console.log("No record with id " + id);
      // TODO: errorhandling
    } else {
      label._id = label._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return label;
}

////////// CREATE LABEL ////////////////////////////////////////////////////////////////////////
async function createLabel(label) {
  try {
    const collection = db.collection("labels");
    const result = await collection.insertOne(label);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

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
  getOldRecords,
  getTopRecords,
  createRecord,
  updateRecord,

  getArtists,
  getArtist,
  createArtist,
  getRecordsByArtist,

  getLabels,
  getLabel,
  createLabel,

  deleteMovie,
};
