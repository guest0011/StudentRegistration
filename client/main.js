
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
	var driver = new MongoInternals.RemoteCollectionDriver("mongodb://admin:admin@ds147799.mlab.com:47799/studentinformation");

    StudentCollection = new Mongo.Collection("studentCollection", { _driver: driver});
	Meteor.publish("studentList", function(){
		return StudentCollection.find().fetch();
		
	});
}
