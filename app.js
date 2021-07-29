/***  
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Cameron:<password>@cluster0.kghr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 ***/

const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb+srv://Cameron:password1001@cluster0.kghr8.mongodb.net/Cluster0?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', () => {
  console.log('MongoDB connection opened');
});

const countriesRouter = require('./routes/countries');
app.use('/countries', countriesRouter);

app.listen(9000, () => {
  console.log('Listening on port 9000!');
});