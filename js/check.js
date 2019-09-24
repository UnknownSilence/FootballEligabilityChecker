var gradeList = []
var weightList = []
var gpa;

/**
 * collectInputs function - retrieves data inputs from the document (grades and class type).
 * 
 * input - Name of HTML class to be searched through
 * targetList - Name of Array for the values retrieved to be deposited
 */
function collectInputs(input, targetList) {
    var inputs = document.getElementsByClassName(input)
    var inputList = []
    for (let item of inputs) {
        inputList.push(item.value);
    }
    targetList = inputList
    console.log(targetList)
}
/**
 * checkElig function - performs gpa calculations and comparisons to
 *  determine if the user meets NCAA critera.
 * 
 * Computations use data gathered from @function collectInputs()
 * 
 */
function checkElig() {
    for (let i = 0; i < gradeList.length; i++) {

        /**
         * 
         * NOTES:
         * 
         * There is 1 weight for every grades.
         * 
         * Possibly use a Modulus operator???
         * 
         * 
         */

        let type = weightList[i] + 1;
    }
}
var checkBtn = document.getElementById('checkEligabilityBtn');
checkBtn.addEventListener("click",
    collectInputs("gradeInput", gradeList),
    collectInputs("weightInput", weightList),
    checkElig(),
    function () {
        console.log("button clicked")
    })