var ask = require("readline-sync");
var employees = []
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
          console.log("Name:" + " " + name);
          console.log("Job Title:" + " " + jobTitle);
          console.log("Salary: " + "$" + salary);
          console.log("Status: " + this.status)
    }
}
var lanie = new Employee("Lanie", "student", 0);
var eric = new Employee("Eric", "Instructor", 100000)
var joe = new Employee("Joe", "Junior Instructor", 85000)
eric.status = "Contract";

joe.printEmployeeForm();
console.log(" ");
eric.printEmployeeForm();
console.log(" ");
lanie.printEmployeeForm();
console.log(" ");
employees.push(lanie, eric, joe);
console.log(employees);
