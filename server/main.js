import { Meteor } from 'meteor/meteor';
StudentCollection = new Mongo.Collection("studentCollection");
Meteor.startup(() => {
  // code to run on server at startup
});
