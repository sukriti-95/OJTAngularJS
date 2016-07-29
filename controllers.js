var helloApp = angular.module("helloApp", []);
		helloApp.controller("CompanyCtrl", function($scope) {
			
			$scope.company=[];
			$scope.companies = [
			{ 'name':'Infosys Technologies',
			'employees': 125000,
			'headoffice': 'Bangalore',
			'age': 25,
			'emailid': 'abc@infosys.com',
				'id' : 1
			},
			{ 'name':'Cognizant Technologies',
			'employees': 100000,
			'headoffice': 'Bangalore',
			'age': 32,
			'emailid': 'xyz@cognizant.com',
			'id' : 2
			},
			{ 'name':'Wipro',
			'employees': 115000,
			'headoffice': 'Bangalore',
			'age': 45,
			'emailid': 'pgr@wipro.com',
			'id' : 3
		},
			{ 'name':'Tata Consultancy Services (TCS)',
			'employees': 150000,
			'headoffice': 'Bangalore',
			'age': 54,
			'emailid': 'def@tcs.com',
			'id' : 4},
			{ 'name':'HCL Technologies',
			'employees': 90000,
			'headoffice': 'Noida',
			'age': 29,
			'emailid': 'efg@hcl.com',
			'id' : 5},
			];


			


			$scope.getICompanyInfo=function($index, id)
			{
				var ind = $index;
				$scope.id = id;
	
	$scope.company.name = $scope.companies[ind].name;
	$scope.company.employees= $scope.companies[ind].employees;
	$scope.company.headoffice= $scope.companies[ind].headoffice;
	$scope.company.age= $scope.companies[ind].age;	
	$scope.company.emailid= $scope.companies[ind].emailid;

			

};
$scope.cancel= function(){
	$scope.companies= {};

};

/*$scope.func1=function(){
	
	if($scope.company.name===undefined)
	{
		alert("Name is not proper!");
		var a= 1;
	}
};

$scope.func2=function(){
	if($scope.company.age>40 || $scope.company.age<20 || $scope.company.age===undefined)
	{
		var a= 1;
		alert("Age is not proper!");
	}
};

$scope.func3=function()
{
	if($scope.company.employees===undefined){
		var a= 1;
		alert("Invalid!")
	}
};

$scope.checkfunc(){
	if($scope.company.name===undefined || $scope.company.age=== undefined || $scope.company.employees===undefined){
		return true;
	}
	else{
		return false;
	}
};*/


$scope.addRow = function(name,employees,headoffice,age,emailid){
var length = $scope.companies.length;
var isPresent = false;		
	for (var i = 0; i < $scope.companies.length;  i++) {
		
		if ($scope.companies[i].id == $scope.id) {
				isPresent = true;
				break;
			}
	}

	if(!isPresent)
		{
			$scope.companies.push({ 'name':name, 'employees': employees, 'headoffice':headoffice, 'age': age, 'emailid': emailid, 'id' : length + 1});
		}
		else
		{
				for (var j = 0; j < $scope.companies.length;  j++) {
		
				if ($scope.companies[j].id == $scope.id) {
					 $scope.companies[j].name = $scope.company.name;
					 $scope.companies[j].employees = $scope.company.employees;
					 $scope.companies[j].headoffice = $scope.company.headoffice;
					 $scope.companies[j].age = $scope.company.age;	
					 $scope.companies[j].emailid = $scope.company.emailid;
				}

			}

		}
	
};
$scope.removeRow = function(name){				
	var index = -1;		
	var comArr = eval( $scope.companies );
	for( var i = 0; i < comArr.length; i++ ) {
		if( comArr[i].name == name ) {
			index = i;
			break;
		}
	}
	if( index == -1 ) {
		alert( "Something gone wrong" );
	}
	$scope.companies.splice( index, 1 );		
};

$scope.reset = function()
{

	$scope.id = "";
}
});



