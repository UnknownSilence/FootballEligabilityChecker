

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

/*

requirments -

Min: 2.3 gpa

16 core courses - 4 ENG, 3 MATH, 2 SCI, 1 ADDITIONALcore, 2 SOCIALSCI, 4 ADDITIONALelective

ACT/SAT matches gpa






*/



/*

CATALOG
=========

ENGLISH COURSES:

------
APENGLAN HP
APENGLIT HP
CREAT WR AD
DEBATE 1
DEBATE 2
DEBATE 3 AD
ENG 1
ENG 1 PIB
ENG 1 PREAP
ENG 1 PREAP-GT
ENG 2
ENG 2 PIB
ENG 2 PREAP
ENG 2 PREAP-GT
ENG 2
ENG 2 IB/SL
ENG 4
ENG 4 IB/HL
ENGLISH 3 DUAL CREDIT
IND ENG PREAP-GT
JOUR 1
PUBSPKG 1
PUBSPKG 2
PUBSPKG 3


-----

SOCIAL SCIENCE COURSES:

------
APMACRO
APMICRO
APUSGOVT
APUSHIST
CCP
CORS&P
ECO-FE
EURO HIST AP
GOVERNMENT DC
GOVT
HUMAN GEO AP
IBHIST OF AM 1
IBHIST OF AM 2
MEXICAN AMERICAN STUDY
PSY DC
PSYCH
PSYCHAP
SOC
SOC DC
SPTSS
SPTSS AFRICAN AMERICAN STUDY
US HIST
US HISTORY DC
W GEO 
W GEO PREAP
W GEO PREAP-GT
W HIST
W HIST AP


MATH COURSES:

------
ADVANCED QUANTITATIVE REASONING

[]
"ALG 1",
"ALG 1 PREAP",
"ALG 1 PREAP-GT",
"ALG 2",
"ALG 2 PREAP",
"ALG 2 PREAP-GT",
"APCALCAB",
"APCALCBC",
"ATSTATS",
"COMPUTER SCIENCE AP",
"GEOM",
"GEOM PREAP",
"IND MATH PREAP/GT",
"IND ST - ADV MATH DEC MAKING",
"IND STUDY - COLL ALG DC",
"MATH METH HL/IB",
"MATH ST SL/IB",
"PRE CAL AD",
"PRE CAL DUAL CREDIT",
"PRE CAL PREAP",
"PRE CAL PREAP-GT",
"PRE CAL PREIB",
"STATISTICS"
]


-----


-----




*/


var englishCatalog = [
"APENGLAN HP",
"APENGLIT HP",
"CREAT WR AD",
"DEBATE 1",
"DEBATE 2",
"DEBATE 3 AD",
"ENG 1",
"ENG 1 PIB",
"ENG 1 PREAP",
"ENG 1 PREAP-GT",
"ENG 2",
"ENG 2 PIB",
"ENG 2 PREAP",
"ENG 2 PREAP-GT",
"ENG 2",
"ENG 2 IB/SL",
"ENG 4",
"ENG 4 IB/HL",
"ENGLISH 3 DUAL CREDIT",
"IND ENG PREAP-GT",
"JOUR 1",
"PUBSPKG 1",
"PUBSPKG 2",
"PUBSPKG 3"
]

var mathCatalog = ["ALG 1",
"ALG 1 PREAP",
"ALG 1 PREAP-GT",
"ALG 2",
"ALG 2 PREAP",
"ALG 2 PREAP-GT",
"APCALCAB",
"APCALCBC",
"ATSTATS",
"COMPUTER SCIENCE AP",
"GEOM",
"GEOM PREAP",
"IND MATH PREAP/GT",
"IND ST - ADV MATH DEC MAKING",
"IND STUDY - COLL ALG DC",
"MATH METH HL/IB",
"MATH ST SL/IB",
"PRE CAL AD",
"PRE CAL DUAL CREDIT",
"PRE CAL PREAP",
"PRE CAL PREAP-GT",
"PRE CAL PREIB",
"STATISTICS"]


var eligable = false // initialize value at default of false until proven true

window.addEventListener("load", function(){
    // ....
   /* if (checkEligability(satScore, actScore, scienceSem1Grades, scienceSem2Grades) == true) {
        let label = document.getElementById('eligableLabel')
        label.textContent = "ELIGABLE"
    }
    else {
        let label = document.getElementById('eligableLabel')
        label.textContent = "NOT ELIGABLE"
    }
*/
var selectCourseEnglish1 = document.getElementById("selectCourseEnglish1"); 


for(var i = 0; i < englishCatalog.length; i++) {
    var opt = englishCatalog[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectCourseEnglish1.appendChild(el);
}
console.log("debug works")

})



/*
function checkEligability(sat, act, scisem1grds, scisem2grds,) {
    if (scisem1grds.length < 4 || scisem2grds.length < 4) {
        console.log("You need more science courses.")
        eligable = false
        return false;

    }
    // check for num of class minimums here
}
*/



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

