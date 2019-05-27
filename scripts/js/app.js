// Defining application module
var app=angular.module("employeeApp",[]);

// Defiining controller
app.controller("employeeCtrl",['$scope', function($scope){
    
// Empty object for Add/Delete functionality
$scope.AddEmployee = {};
    
// Array of employee object
$scope.EmployeeDetails = [
{
    id: 1,
    firstName: "Suresh",
    lastName: "Raj",
    age: 10,
    dob: "01/01/2018",
    city: {id:3, "city": "Varanasi"},
    areYouFresher: true
},
{
    id: 2,
    firstName: "Ramesh",
    lastName: "Kumar",
    age: 10,
    dob: "03/03/2010",
    city: {id:2, "city": "Allahabad"},
    areYouFresher: true
},
{
    id: 3,
    firstName: "Zain",
    lastName: "Khan",
    age: 10,
    dob: "04/04/2016",
    city: {id:1, "city": "Lucknow"},
    areYouFresher: true
}];

// Dropdown select list
$scope.arrlist = [
{
    "id": 1, "city": "Lucknow"
}, 
{
    "id": 2, "city": "Allahabad"
}, 
{
    "id": 2, "city": "Kanpur"
},
{
    "id": 2, "city": "Sitapur"
},
{
    "id": 2, "city": "Faizabad"
},
{
    "id": 3, "city": "Varanasi"
}];

// Add method
$scope.saveEmployeeDetails = function()
{
    $scope.EmployeeDetails.push($scope.AddEmployee);
    $scope.AddEmployee = {};
    $scope.msg = "Data saved successfully!";
    $("#successMsg").show().delay(5000).fadeOut();
};

// Selected employee details
$scope.selectEmployee = function(emp)
{
    $scope.AddEmployee.id = emp.id,
    $scope.AddEmployee.firstName = emp.firstName;
    $scope.AddEmployee.lastName = emp.lastName;
    $scope.AddEmployee.age = emp.age;
    //$scope.AddEmployee.dob = emp.dob;
    //$scope.AddEmployee.city.id = emp.city.id;
    $scope.AddEmployee.city = emp.city.city;
    $scope.AddEmployee.areYouFresher = emp.areYouFresher;
};

$scope.toggle = function($event)
{
    if($event.currentTarget.innerHTML.toLowerCase() === "edit")
    {
        $('#Add').addClass('hide');
        $('#Update').removeClass('hide');
    }
    else
    {
        $('#Add').removeClass('hide');
        $('#Update').addClass('hide');
    }
};

// Update method
$scope.updateEmployeeDetails = function()
{
    $.grep($scope.EmployeeDetails, function(e){
       if(e.id == $scope.AddEmployee.id)
       {
           e.firstName = $scope.AddEmployee.firstName,
           e.lastName = $scope.AddEmployee.lastName,
           e.age = $scope.AddEmployee.age,
           e.dob = $scope.AddEmployee.dob,
           e.city.id = $scope.AddEmployee.city.id,
           e.city.city = $scope.AddEmployee.city.city,
           e.areYouFresher = $scope.AddEmployee.areYouFresher
       }
    });
    $scope.msg = "Data updated successfully!";
    $("#successMsg").show().delay(5000).fadeOut();
    $scope.AddEmployee = {};
};

// Delete method
$scope.deleteEmployee = function(emp){
    var index = $scope.EmployeeDetails.indexOf(emp);
    $scope.EmployeeDetails.splice(index,1);
};
    
// Pagination
$scope.totalItems = $scope.EmployeeDetails.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = 4;

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first page
}
}
]);

