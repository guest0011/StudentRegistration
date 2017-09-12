import { Meteor } from 'meteor/meteor';
//var driver = new MongoInternals.RemoteCollectionDriver(MONGO_URL);

//StudentCollection = new Mongo.Collection("studentCollection", { _driver: driver});
//StudentCollection = new Mongo.Collection("studentCollection");
Meteor.startup(() => {
  // code to run on server at startup
  var driver = new MongoInternals.RemoteCollectionDriver("mongodb://admin:admin@ds147799.mlab.com:47799/studentinformation");

  StudentCollection = new Mongo.Collection("studentCollection", { _driver: driver});
});
