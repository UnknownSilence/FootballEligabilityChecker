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
var completedTenCheck = false //test
var eligable = false // initialize value at default of false until proven true
/*
requirments -
Min: 2.3 gpa
16 core courses - 4 ENG, 3 MATH, 2 SCI, 1 ADDITIONALcore, 2 SOCIALSCI, 4 ADDITIONALelective
ACT/SAT matches gpa
-----
*/
var englishCatalog = ["APENGLAN HP",
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
    "ENG 3",
    "ENG 3 IB/SL",
    "ENG 4",
    "ENG 4 IB/HL",
    "ENGLISH 3 DUAL CREDIT",
    "ENGLISH 4 DUAL CREDIT",
    "IND ENG PREAP-GT",
    "JOUR 1",
    "PUBSPKG 1",
    "PUBSPKG 2",
    "PUBSPKG 3"
]
var mathCatalog = ["ADVANCED QUANTITATIVE REASONING",
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
    "GEOM PREAP-GT",
    "IND MATH PREAP/GT",
    "IND ST - ADV MATH DEC MAKING",
    "IND STUDY - COLL ALG DC",
    "MATH METH HL/IB",
    "MATH METH SL/IB",
    "MATH ST SL/IB",
    "PRE CAL AD",
    "PRE CAL DUAL CREDIT",
    "PRE CAL PREAP",
    "PRE CAL PREAP-GT",
    "PRE CAL PREIB",
    "STATISTICS"
]
var naturalSciCatalog = ["ANAT & PHY AD",
    "ANATOMY & PHYSIOLOGY DUAL CREDIT",
    "AP BIO",
    "AP ENVIR",
    "AP PHYSB",
    "AP PHYSICS 1",
    "AP PHYSICS 2",
    "AQ SCI",
    "ASTRONOMY",
    "BIO 1",
    "BIO 1 IB",
    "BIO 1 PREAP",
    "BIO 1 PREAP-GT",
    "BIO 1 PREIB",
    "BIO 2 IB",
    "BIOLOGY DUAL CREDIT",
    "CHEM 1",
    "CHEM 1 IB",
    "CHEM 1 PREAP",
    "CHEM 1 PREAP-GT",
    "CHEM 2 IB",
    "CHEM I/ADV",
    "CHEM PREIB",
    "CHEMISTRY/AP",
    "EARTH AND SPACE SCIENCE",
    "ENVIRONMENTAL SYSTEMS",
    "FORENSIC SCIENCE",
    "GMO",
    "IPC",
    "IPC PREAP",
    "IPC PREAP-GT",
    "MEDICAL MICROBIOLOGY",
    "PATHOPHYSIOLOGY",
    "PHYSICS 1",
    "PHYSICS 1 IB",
    "PHYSICS 1 PREIB",
    "PHYSICS 2 IB",
    "PHYSICS AD",
    "PHYSICS PREAP"
]
var socialSciCatalog = ["APMACRO",
    "APMICRO",
    "APUSGOVT",
    "APUSHIST",
    "CCP",
    "CORS&P",
    "ECO-FE",
    "EURO HIST AP",
    "GOVERNMENT DC",
    "GOVT",
    "HUMAN GEO AP",
    "IBHIST OF AM 1",
    "IBHIST OF AM 2",
    "MEXICAN AMERICAN STUDY",
    "PSY DC",
    "PSYCH",
    "PSYCHAP",
    "SOC",
    "SOC DC",
    "SPTSS",
    "SPTSS AFRICAN AMERICAN STUDY",
    "US HIST",
    "US HISTORY DC",
    "W GEO",
    "W GEO PREAP",
    "W GEO PREAP-GT",
    "W HIST",
    "W HIST AP"
]
var additionalCoreCatalog = ["CULTURAL & LINGUISTIC TOPICS IN LATIN",
    "FR-LANG AP",
    "FRENCH 1",
    "FRENCH 1 PIB",
    "FRENCH 2",
    "FRENCH 2 PIB",
    "FRENCH 2 PREAP",
    "FRENCH 3 PIB",
    "FRENCH 3 PREAP",
    "FRENCH 3 PREAP-GT",
    "FRENCH 3/AD",
    "FRENCH 4 IB",
    "FRENCH 4 PIB",
    "FRENCH 4 PREAP",
    "FRENCH 4/AD",
    "FRENCH 5 IB",
    "FRENCH 5/AD",
    "FRENCH 5/H",
    "FRENCH 6/AD",
    "GERMAN 1",
    "GERMAN 2",
    "GERMAN 2 PREAP",
    "GERMAN 3 PREAP",
    "GERMAN 3/AD",
    "GERMAN 4 AP",
    "GERMAN 4/AD",
    "GERMAN 4/H",
    "LATIN 1",
    "LATIN 2",
    "LATIN 2 PREAP",
    "LATIN 3 PREAP",
    "LATIN 3/AD",
    "LATIN 4 AP VIRGIL",
    "LATIN 4/AD",
    "LATIN 4/H",
    "SPAN 1",
    "SPAN 1 PIB",
    "SPAN 2",
    "SPAN 2 PIB",
    "SPAN 2 PREAP",
    "SPAN 3 PIB",
    "SPAN 3 PREAP",
    "SPAN 3/AD",
    "SPAN 3/H",
    "SPAN 4 IB",
    "SPAN 4 PIB",
    "SPAN 4 PREAP",
    "SPAN 4/AD",
    "SPAN 5 IB",
    "SPAN 5/AD",
    "SPAN 5/H",
    "SPAN 6/AD",
    "SPAN 6/H",
    "SPANISH FOR NATIVE SPEAKERS 1",
    "SPANISH FOR NATIVE SPEAKERS 2",
    "SPANISH FOR NATIVE SPEAKERS 3",
    "SPANISH LITERATURE AP",
    "SPANLANG AP",
    "THEORY OF KNOWLEDGE IB+"
]
// temporary on-load script execution
window.addEventListener("load", function () {
    // ....


    /*
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
if (checkEligability(satScore, actScore, scienceSem1Grades, scienceSem2Grades) == true) {
        let label = document.getElementById('eligableLabel')
        label.textContent = "ELIGABLE"
    }
    else {
        let label = document.getElementById('eligableLabel')
        label.textContent = "NOT ELIGABLE"
    }
*/
    /* 
=======================================================================================
---------------------------------------------------------------------------------------
Populate English Dropdown Menus
=======================================================================================
---------------------------------------------------------------------------------------
*/
    // ===================================
    var selectCourseEnglish1 = document.getElementById("selectCourseEnglish1");
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseEnglish1.appendChild(el);
    }
    // ===================================
    var selectCourseEnglish2 = document.getElementById("selectCourseEnglish2");
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseEnglish2.appendChild(el);
    }
    // ===================================
    var selectCourseEnglish3 = document.getElementById("selectCourseEnglish3");
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseEnglish3.appendChild(el);
    }
    // ===================================
    var selectCourseEnglish4 = document.getElementById("selectCourseEnglish4");
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseEnglish4.appendChild(el);
    }
    // ===================================
    /*
    =======================================================================================
    ---------------------------------------------------------------------------------------
    Populate Math Dropdown Menus
    =======================================================================================
    ---------------------------------------------------------------------------------------
    */
    // ===================================
    var selectCourseMath1 = document.getElementById("selectCourseMath1");
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseMath1.appendChild(el);
    }
    // ===================================
    var selectCourseMath2 = document.getElementById("selectCourseMath2");
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseMath2.appendChild(el);
    }
    // ===================================
    var selectCourseMath3 = document.getElementById("selectCourseMath3");
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseMath3.appendChild(el);
    }
    // ===================================
    /*
    =======================================================================================
    ---------------------------------------------------------------------------------------
    Populate Science Dropdown Menus
    =======================================================================================
    ---------------------------------------------------------------------------------------
    */
    // ===================================
    var selectCourseScience1 = document.getElementById("selectCourseScience1");
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseScience1.appendChild(el);
    }
    // ===================================
    var selectCourseScience2 = document.getElementById("selectCourseScience2");
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseScience2.appendChild(el);
    }
    // ===================================
    /*
    =======================================================================================
    ---------------------------------------------------------------------------------------
    Populate Additioanl Core Courses Dropdown Menus
    =======================================================================================
    ---------------------------------------------------------------------------------------
    */
    // ===================================
    var selectCourseAdditionalCore1 = document.getElementById("selectCourseAdditionalCore1");
    // combo together all science, math, and english courses (core) for 1 dropdown
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalCore1.appendChild(el);
    }
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalCore1.appendChild(el);
    }
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalCore1.appendChild(el);
    }
    // ===================================
    /*
    =======================================================================================
    ---------------------------------------------------------------------------------------
    Populate Social Science Dropdown Menus
    =======================================================================================
    ---------------------------------------------------------------------------------------
    */
    // ===================================
    var selectCourseSocialSci1 = document.getElementById("selectCourseSocialSci1");
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseSocialSci1.appendChild(el);
    }
    // ===================================
    var selectCourseSocialSci2 = document.getElementById("selectCourseSocialSci2");
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseSocialSci2.appendChild(el);
    }
    // ===================================
    /*
    =======================================================================================
    ---------------------------------------------------------------------------------------
    Populate Additioanl ANY Courses Dropdown Menus
    =======================================================================================
    ---------------------------------------------------------------------------------------
    */
    // ===================================
    var selectCourseAdditionalAny1 = document.getElementById("selectCourseAdditionalAny1");
    // combo together all science, math, and english courses (core) for 1 dropdown
    for (let i = 0; i < additionalCoreCatalog.length; i++) {
        let opt = additionalCoreCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny1.appendChild(el);
    }
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny1.appendChild(el);
    }
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny1.appendChild(el);
    }
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny1.appendChild(el);
    }
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny1.appendChild(el);
    }
    // ===================================
    var selectCourseAdditionalAny2 = document.getElementById("selectCourseAdditionalAny2");
    // combo together all science, math, and english courses (core) for 1 dropdown
    for (let i = 0; i < additionalCoreCatalog.length; i++) {
        let opt = additionalCoreCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny2.appendChild(el);
    }
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny2.appendChild(el);
    }
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny2.appendChild(el);
    }
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny2.appendChild(el);
    }
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny2.appendChild(el);
    }
    // ===================================
    var selectCourseAdditionalAny3 = document.getElementById("selectCourseAdditionalAny3");
    // combo together all science, math, and english courses (core) for 1 dropdown
    for (let i = 0; i < additionalCoreCatalog.length; i++) {
        let opt = additionalCoreCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny3.appendChild(el);
    }
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny3.appendChild(el);
    }
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny3.appendChild(el);
    }
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny3.appendChild(el);
    }
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny3.appendChild(el);
    }
    // ===================================
    var selectCourseAdditionalAny4 = document.getElementById("selectCourseAdditionalAny4");
    // combo together all science, math, and english courses (core) for 1 dropdown
    for (let i = 0; i < additionalCoreCatalog.length; i++) {
        let opt = additionalCoreCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny4.appendChild(el);
    }
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny4.appendChild(el);
    }
    for (let i = 0; i < mathCatalog.length; i++) {
        let opt = mathCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny4.appendChild(el);
    }
    for (let i = 0; i < naturalSciCatalog.length; i++) {
        let opt = naturalSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny4.appendChild(el);
    }
    for (let i = 0; i < socialSciCatalog.length; i++) {
        let opt = socialSciCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectCourseAdditionalAny4.appendChild(el);
    }
    // ===================================
    /*
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    ===================================================================================================================================================
    */


})


    // access dom elements of grades
    // eng class 1
    var classGradeEnglishClass1Sem1 = document.getElementById("classGradeEnglishClass1Sem1");
    var classGradeEnglishClass1Sem2 = document.getElementById("classGradeEnglishClass1Sem2");

    // eng class 2
    var classGradeEnglishClass2Sem1 = document.getElementById("classGradeEnglishClass2Sem1");
    var classGradeEnglishClass2Sem2 = document.getElementById("classGradeEnglishClass2Sem2");
    // eng class 3
    var classGradeEnglishClass3Sem1 = document.getElementById("classGradeEnglishClass3Sem1");
    var classGradeEnglishClass3Sem2 = document.getElementById("classGradeEnglishClass3Sem2");
    // eng class 4
    var classGradeEnglishClass4Sem1 = document.getElementById("classGradeEnglishClass4Sem1");
    var classGradeEnglishClass4Sem2 = document.getElementById("classGradeEnglishClass4Sem2");

    // math class 1
    var classGradeMathClass1Sem1 = document.getElementById("classGradeMathClass1Sem1");
    var classGradeMathClass1Sem2 = document.getElementById("classGradeMathClass1Sem2");
    // math class 2
    var classGradeMathClass2Sem1 = document.getElementById("classGradeMathClass2Sem1");
    var classGradeMathClass2Sem2 = document.getElementById("classGradeMathClass2Sem2");
    // math class 3
    var classGradeMathClass3Sem1 = document.getElementById("classGradeMathClass3Sem1");
    var classGradeMathClass3Sem2 = document.getElementById("classGradeMathClass3Sem2");

    // natural sci class 1
    var classGradeNatSciClass1Sem1 = document.getElementById("classGradeNatSciClass1Sem1");
    var classGradeNatSciClass1Sem2 = document.getElementById("classGradeNatSciClass1Sem2");
    // natural sci class 2
    var classGradeNatSciClass2Sem1 = document.getElementById("classGradeNatSciClass2Sem1");
    var classGradeNatSciClass2Sem2 = document.getElementById("classGradeNatSciClass2Sem2");

    // additional core courses
    var classGradeAddCoreClass1Sem1 = document.getElementById("classGradeAddCoreClass1Sem1");
    var classGradeAddCoreClass1Sem2 = document.getElementById("classGradeAddCoreClass1Sem2");

    // social sci class 1
    var classGradeSocSciClass1Sem1 = document.getElementById("classGradeSocSciClass1Sem1");
    var classGradeSocSciClass1Sem2 = document.getElementById("classGradeSocSciClass1Sem2");
    // social sci class 2
    var classGradeSocSciClass2Sem1 = document.getElementById("classGradeSocSciClass2Sem1");
    var classGradeSocSciClass2Sem2 = document.getElementById("classGradeSocSciClass2Sem2");

    // any additional class 1
    var classGradeAnyAddClass1Sem1 = document.getElementById("");
    var classGradeAnyAddClass1Sem2 = document.getElementById("");
    // any additional class 2
    var classGradeAnyAddClass2Sem1 = document.getElementById("");
    var classGradeAnyAddClass2Sem2 = document.getElementById("");
    // any additional class 3
    var classGradeAnyAddClass3Sem1 = document.getElementById("");
    var classGradeAnyAddClass3Sem2 = document.getElementById("");
    // any additional class 4
    var classGradeAnyAddClass4Sem1 = document.getElementById("");
    var classGradeAnyAddClass4Sem2 = document.getElementById("");




var checkEligabilityBtn = document.getElementById('checkEligabilityBtn')

checkEligabilityBtn.addEventListener("click", function() {
    // perform computations
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