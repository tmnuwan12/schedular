angular.module('app.service.plumbing', [])

.service('InstructorService', function(InstructorsRef, $firebaseArray) {


    function getAll_() {
        return $firebaseArray(InstructorsRef)
    }

    function add_(instructor) {
        $firebaseArray(InstructorsRef).$add(instructor);
    }

    function filterByName_(name, callback) {


        InstructorsRef.orderByChild("instructorName").equalTo(name).once("value", function(snapshot) {

            console.log(snapshot.val());
            callback(snapshot.val());

        });

    }

    return {
        getAll: getAll_,
        add: add_,
        filterByName: filterByName_

    }


})

.service('ScheduleService', function(InstructorService, SubjectsRef) {



    function schedule_() {

        var allInstructors = InstructorService.getAll();

        for (var i = 0; i < allInstructors.length; i++) {

            var instructor = allInstructors[i];

            if (instructor.allocatedQty < instructor.maxAllocationQty) {


                var subjects = instructor.subjects;

                subjects.forEach(function(subject) {

                    

                    SubjectsRef.orderByChild("subject").equalTo(subject).limitToFirst(1).once("child_added", function(subject_alloc) {

                    	console.log('current subject is: ' + subject);

                    	console.log('subject_alloc key ' + subject_alloc.key());
                        console.log('subject_alloc val ' + subject_alloc.val());

                       // var key = subject_alloc.key();
                        
                        if(subject_alloc.exists()){

                        	var allocation = subject_alloc.val();


                        	/*
                        	
                        	http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop

                        	Use above for js loop.
                        	 */	
                        	var updateRequired = false;
                        	allocation.clazzes.forEach(function(clazz){

                        		if(clazz.currentAllocations < clazz.requiredAllocations){

                        			clazz.instructorName = instructor.instructorName;
                        			clazz.currentAllocations++;
                        			updateRequired = true;
                        		}

                        	});
                        	SubjectsRef.$save(allocation).then(function(){
                        			console.log('subject_alloc saved');
                        	});



                        }
                        

                    }.bind(null, instructor));


                });


            }
        }
    }

    return {
        schedule: schedule_

    }


});
