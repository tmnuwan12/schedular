angular.module('app.firebase.services', [])

.factory('InstructorsRef', function($firebaseArray){

	var instructorsRef = new Firebase("https://boiling-inferno-7494.firebaseio.com/instructors");

    return instructorsRef;

})

.factory('SubjectsRef', function($firebaseArray){

	var subjectRef = new Firebase("https://boiling-inferno-7494.firebaseio.com/subject_alloc");

    return subjectRef;
});


