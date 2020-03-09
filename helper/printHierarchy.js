let seed = require('./seeddata');
let data = seed.seedData();

function PrintHierarchyController() {

    /**
     * The main function responsible for printing the employee's hierarchy
     * The method first finds the employees with no managers i.e level 0 of hierarchy 
     * then it calls a function to find employees on level 1
     * * */
    function print() {
        highestManagers = findHighestLevelManagers();
        for(let manager of highestManagers) {
            console.log(manager.name);
        
            findEmployeesByManagerId(manager.id,1);
        }
    }
    
    /***
     * Returns the list of highest level of managers
     * 
     */
    function findHighestLevelManagers() {
        let highestManagers = []
        for(let emp of data) {
            if(emp.managerId == undefined) {
                highestManagers.push(emp)
            }
        }
        return highestManagers;
    }
  
    /***
     * Recursively prints the employees from level 1 onwards
     */
    function findEmployeesByManagerId(managerId, level) {
        /***
         * Calculate the no. of tabs for representing the hierarchy
         */
        let levelTabs='';
        console.log("\n");
        for(let levelNo=0; levelNo<level; levelNo++) {
            levelTabs+= "\t";
        }
        /****
         * Loop through the data to recursively prints employee hierarchy
         * 
         */
        for(let employee of data) {
            if(employee.managerId != undefined && employee.managerId == managerId) {
                console.log(`${levelTabs}`, employee.name, " id: ", employee.id);
                findEmployeesByManagerId(employee.id, level+1);
            }
        }
    }

    return {
        print,
        findHighestLevelManagers
    }
}
exports.Print = PrintHierarchyController();