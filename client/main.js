import { MongoInternals } from "meteor/mongo";

if(Meteor.isClient)	{
	StudentCollection = new Mongo.Collection("studentCollection");
	Meteor.subscribe("studentList");
	Template.studentDetails.helpers({
		studentList : function(){
			return StudentCollection.find().fetch();
		}
	});

	Template.studentReg.events({
		'submit #StudentForm' : function (event){
			event.preventDefault();
			StudentCollection.insert({
			StudentName: event.target.studentName.value,
			AdmissionDate: event.target.admissionDate.value,
			Gender: event.target.gender.value,
			Address: event.target.address.value
			});
			event.target.reset();
			return false;
		}
	});
}
if(Meteor.isServer){
   
	Meteor.publish("studentList", function(){
		return StudentCollection.find().fetch();
		
	});
}
