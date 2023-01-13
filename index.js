// Write your solution in this file!
const employee = {name:'ash', streetAddress:'monroe'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};
    console.log(newEmployee);
    newEmployee[key] = value;
    console.log(newEmployee)
    return newEmployee;
    }
const employee2 = updateEmployeeWithKeyAndValue(employee, 'name', 'sam');