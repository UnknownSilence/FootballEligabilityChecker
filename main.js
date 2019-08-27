

var satScore
var actScore

var scienceSem1Grades = [90, 82, 99, 100]
var scienceSem2Grades = [60, 80, 89, 91]

var eligable = false

checkEligability(satScore, actScore, scienceSem1Grades, scienceSem2Grades)

function checkEligability(sat, act, scisem1grds, scisem2grds,) {
if (scisem1grds.length < 4 || scisem2grds.length < 4) {
    console.log("You need more science courses.")
    eligable = false
}
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

