angular.module('app.controllers', [])

.controller('dashboardCtrl', function($scope, InstructorService) {


    $scope.instructors = InstructorService.getAll();

})

.controller('subjectsCtrl', function($scope) {

})

.controller('schedulesCtrl', function($scope, InstructorService) {


    $scope.schedule = function() {



    }


})

.controller('addInstructorViewCtrl', function($scope, InstructorService) {


    $scope.instructor = {};


    $scope.addInstructor = function() {

        var newInstructor = $scope.instructor;
        InstructorService.filterByName(newInstructor.name, function(data) {

            console.log(newInstructor);
            var instructor = {};
            if (data != null) {

                instructor = {
                    "instructorName": newInstructor.name,
                    "subjects": data.subjects.push(newInstructor.subject),
                    "allocatedQty": 0,
                    "maxAllocationQty": newInstructor.maxallocations
                }
            } else {
                instructor = {
                    "instructorName": newInstructor.name,
                    "subjects": [newInstructor.subject],
                    "allocatedQty": 0,
                    "maxAllocationQty": newInstructor.maxallocations
                }
            }
            InstructorService.add(instructor);
        });

    }



})

.controller('addSubjectAllocationViewCtrl', function($scope) {


	$scope.addSubjectAllocDetails = function(){

		
	}




})

.controller('allocationViewCtrl', function($scope) {

})

.controller('instructorDetailCtrl', function($scope) {

})

.controller('subjectAllocationViewCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
