var Employees= [
    {
        "name": "Usain Bolt",
        "ID": "OMNI10001",
        "age": 27,
        "salary": 70000,
         "Project": "athletics",
         "DOJ":  "21-9-2018",
         "experience": "6 years",
         "Blood group": "B+ve"         

    },
    {
        "name": "Virat Kohli",
        "age": 28,
        "salary": 65000,
        "ID": "OMNI10002",
         "Project": "cricket",
         "DOJ":  "18-3-2019",
         "experience": "8 years",
         "Blood group": "AB+ve"
    }, 
    {
        "name": "Ronaldo",
        "ID": "OMNI10003",
        "age": 30,
        "salary": 90000,
         "Project": "football",
         "DOJ":  "10-5-2017",
         "experience": "10 years",
         "Blood group": "O-ve"  
    },
    {
        "name": "Messi",
        "ID": "OMNI10004",
        "age": 31,
        "salary": 85000,
         "Project": "football",
         "DOJ":  "15-7-2019",
         "experience": "9 years",
         "Blood group": "O+ve" 
    }      
    
]



var EmployeesIds = Employees.map(function ({ID,salary,...rest})
{  
return {EmployeeId:ID,...rest}
}
)
console.log(EmployeesIds);
     //var EmployeesID = ID
    //Employees["EmployeeId"] = Employees.ID;
     //Employees.ID= "EmployeeId";
     
   //var result= Employees.map(({salary,...rest})=>rest)
  // console.log(result);
  
   var football= Employees.filter(function (Employees)  {
   return Employees.Project === "football";
   }
   )
   console.log(football);
   var total= Employees.reduce(function (acc, {salary}) {
    return acc + salary;
   }, 0);
console.log(total);


  /* var athletics= Employees.filter(function (Employees)  {
    return Employees.athletics === "Athletics";
   }
   )
   var cricket= Employees.filter(function (Employees)  {
    return Employees.cricket === "Cricket";
   }
   )
*/

//console.log(Employees);




