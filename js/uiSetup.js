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
var additionalNonCoreCatalog = ["CULTURAL & LINGUISTIC TOPICS IN LATIN",
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
 
=======================================================================================
---------------------------------------------------------------------------------------
Populate English Dropdown Menus
=======================================================================================
---------------------------------------------------------------------------------------
*/


var englishdropdowns = document.getElementsByClassName("englishdropdowns")

for (let dropdown of englishdropdowns) {
    for (let i = 0; i < englishCatalog.length; i++) {
        let opt = englishCatalog[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dropdown.appendChild(el);
    }
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

    var mathdropdowns = document.getElementsByClassName("mathdropdowns")

    for (let dropdown of mathdropdowns) {
        for (let i = 0; i < mathCatalog.length; i++) {
            let opt = mathCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
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

    var natsciencedropdowns = document.getElementsByClassName("natsciencedropdowns")

    for (let dropdown of natsciencedropdowns) {
        for (let i = 0; i < naturalSciCatalog.length; i++) {
            let opt = naturalSciCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
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

    var additionalcoredropdowns = document.getElementsByClassName("additionalcoredropdowns")

    for (let dropdown of additionalcoredropdowns) {
        for (let i = 0; i < englishCatalog.length; i++) {
            let opt = englishCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < mathCatalog.length; i++) {
            let opt = mathCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < naturalSciCatalog.length; i++) {
            let opt = naturalSciCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
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

    var socialscidropdowns = document.getElementsByClassName("socialscidropdowns")

    for (let dropdown of socialscidropdowns) {
        for (let i = 0; i < socialSciCatalog.length; i++) {
            let opt = socialSciCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
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

    var additionalanydropdowns = document.getElementsByClassName("additionalanydropdowns")

    for (let dropdown of additionalanydropdowns) {
        for (let i = 0; i < additionalNonCoreCatalog.length; i++) {
            let opt = additionalNonCoreCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < englishCatalog.length; i++) {
            let opt = englishCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < mathCatalog.length; i++) {
            let opt = mathCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < naturalSciCatalog.length; i++) {
            let opt = naturalSciCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
        for (let i = 0; i < socialSciCatalog.length; i++) {
            let opt = socialSciCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
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