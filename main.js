

var satScore = 1250 //test
var actScore = 24 // test

var scienceSem1Grades = [90, 82, 99, 100] //test
var scienceSem2Grades = [60, 80, 89, 91] //test

var englishSem1Grades = [98, 78, 85, 90] //test
var englishSem2Grades = [90, 87, 76, 99] //test

var otherSem1Grades = [99, 96, 90, 100] //test
var otherSem2Grades = [89, 92, 98, 86] //test

var mathSem1Grades = [90, 98, 87] //test
var mathSem2Grades = [90, 87, 76] //test




var eligable = false // initialize value at default of false until proven true

document.addEventListener('load', function() {
    if (checkEligability(satScore, actScore, scienceSem1Grades, scienceSem2Grades) == true) {
        let label = document.getElementById('eligableLabel')
        label.textContent = "ELIGABLE"
    }
    else {
        let label = document.getElementById('eligableLabel')
        label.textContent = "NOT ELIGABLE"
    }
})





function checkEligability(sat, act, scisem1grds, scisem2grds,) {
    if (scisem1grds.length < 4 || scisem2grds.length < 4) {
        console.log("You need more science courses.")
        eligable = false
        return false;

    }
    // check for num of class minimums here
}



/*
Organization Structure:
============================================

SAT [] ACT []
============================================
Science courses
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2[]
=== {+ - Taken more? Add more courses}
============================================
Math courses
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2[]
=== {+ - Taken more? Add more courses}
English courses
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2[]
=== {+ - Taken more? Add more courses}
Other courses
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2 []
Sem 1 [] Sem 2[]
=== {+ - Taken more? Add more courses}






*/

