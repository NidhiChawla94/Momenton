let Employee = require('../model/Employee').Employee;
/***
 * This function is responsible for seeding the data.
 * 
 */
let seedData = function () {
    let employeeList=[];
    employeeList.push(new Employee("Alan", 100, 150));
    employeeList.push(new Employee("Martin", 220, 100));
    employeeList.push(new Employee("Jamie", 150));
    employeeList.push(new Employee("Alex", 275, 100));
    employeeList.push(new Employee("Steve", 400, 150));
    employeeList.push(new Employee("David", 190, 400));
    
    return employeeList; 
}

exports.seedData = seedData;