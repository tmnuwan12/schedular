angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('DropDownService', function() {

    function getClassDD_() {
        var clazzDD = [{

            "id": "1",
            "name": "7a"

        }, {

            "id": "2",
            "name": "8a"

        }, {

            "id": "3",
            "name": "9a"

        }, {

            "id": "4",
            "name": "10a"

        }, {

            "id": "5",
            "name": "11a"

        }];

        return clazzDD;
    }



    function getSubjectsDD_(){


    	var subjects =  [{
    		"id" : "1",
    		"name" : "English"
    	},
    	{
    		"id" : "2",
    		"name" : "Sinhala"
    	},
    	{
    		"id" : "3",
    		"name" : "Buddhism"
    	},
    	{
    		"id" : "4",
    		"name" : "French"
    	}];

    	return subjects;
    }


    function getAllocationQtyDD_(){


    	var allocations = [{
    		"id" : "1",
    		"qty" : "1"
    	},
    	{
    		"id" : "2",
    		"qty" : "2"
    	},
    	{
    		"id" : "3",
    		"qty" : "3"
    	},
    	{
    		"id" : "4",
    		"qty" : "4"
    	},
    	{
    		"id" : "5",
    		"qty" : "5"
    	},
    	{
    		"id" : "6",
    		"qty" : "6"
    	},
    	{
    		"id" : "7",
    		"qty" : "7"
    	},{
    		"id" : "8",
    		"qty" : "8"
    	}];

    	return allocations;
    }



    return {

        getClassDD: getClassDD_,
        getSubjectsDD : getSubjectsDD_,
        getAllocationQtyDD : getAllocationQtyDD_
    }


});
