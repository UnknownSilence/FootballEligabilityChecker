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

/**
 * 
 * @param dropdownName - Name of the HTML class to look through
 * @param dropdownCatalog - Name of the array to pull data for dropdown population
 * 
 */
function populateDropdowns(dropdownName, dropdownCatalog) {
  for (let dropdown of dropdownName) {
    for (let i = 0; i < dropdownCatalog.length; i++) {
      let opt = dropdownCatalog[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      dropdown.appendChild(el);
    }
  }
}




/**
 * 
 *          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="country">Course Name</label>
              <select id="selectCourseEnglish4" class="custom-select d-block w-100 englishdropdowns" id="country"
                required>
                <option value="">Choose...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid course.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">Course Type</label>
              <select class="custom-select d-block w-100 weightInput" id="state" required>
                <option value="">Choose...</option>
                <option>Regular</option>
                <option>AP/Pre-AP/GT</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="zip">Semester 1 Grade</label>
              <input type="text" class="form-control gradeInput" id="zip" placeholder="" required>
              <div class="invalid-feedback">

              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="zip">Semester 2 Grade</label>
              <input type="text" class="form-control gradeInput" id="zip" placeholder="" required>
              <div class="invalid-feedback">

              </div>
            </div>
          </div>
 */

function addFormField(target, dropType) {

  let targetSection = document.getElementById(target)
  /**
   * <div class="row">
   */
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "dynamic-generated-row");
  /**
   *  <div class="col-md-6 mb-3">
   */
  let colDiv1 = document.createElement("div");
  colDiv1.classList.add("col-md-6");
  colDiv1.classList.add("mb-3");
  /**
   * <div class="col-md-4 mb-3">
   */
  let colDiv2 = document.createElement("div");
  colDiv2.classList.add("col-md-4");
  colDiv2.classList.add("mb-3");
  /**
   * <div class="col-md-4 mb-3">
   */
  let colDiv3 = document.createElement("div");
  colDiv3.classList.add("col-md-4");
  colDiv3.classList.add("mb-3");
  /**
   * <div class="col-md-4 mb-3">
   */
  let colDiv4 = document.createElement("div");
  colDiv4.classList.add("col-md-4");
  colDiv4.classList.add("mb-3");

  let colDiv5 = document.createElement("div");
  colDiv4.classList.add("col-md-4");
  /**
   * <label for="country">Course Name</label>
   */
  let colDiv1Label = document.createElement("label")
  colDiv1Label.textContent = "Course Name";

  /** <select id="selectCourseEnglish4" class="custom-select d-block w-100 englishdropdowns" id="country 
   * required> */

  let colDiv1Select = document.createElement("select")
  colDiv1Select.classList.add("custom-select", "d-block", "w-100", dropType) // dropdown classes will go here later
  let ColDiv1SelectOption = document.createElement("option")
  ColDiv1SelectOption.value = ""
  ColDiv1SelectOption.textContent = "Choose..."
  colDiv1Select.appendChild(ColDiv1SelectOption)





  /**
   * <label for="state">Course Type</label>
   */
  let colDiv2Label = document.createElement("label")
  colDiv2Label.textContent = "Course Type";

  /**
   * <select class="custom-select d-block w-100 weightInput" id="state" required>
   */
  let colDiv2Select = document.createElement("select")
  colDiv2Select.classList.add("custom-select", "d-block", "w=100", "weightInput")
  let ColDiv2SelectOptionChoose = document.createElement("option")
  ColDiv2SelectOptionChoose.value = ""
  ColDiv2SelectOptionChoose.textContent = "Choose..."
  let ColDiv2SelectOptionRegs = document.createElement("option")
  ColDiv2SelectOptionRegs.textContent = "Regular"
  let ColDiv2SelectOptionAP = document.createElement("option")
  ColDiv2SelectOptionAP.textContent = "AP/Pre-AP/GT"
  colDiv2Select.appendChild(ColDiv2SelectOptionChoose)
  colDiv2Select.appendChild(ColDiv2SelectOptionRegs)
  colDiv2Select.appendChild(ColDiv2SelectOptionAP)


  /**
   * <label for="zip">Semester 1 Grade</label>
   */

  let colDiv3Label = document.createElement("label")
  colDiv3Label.textContent = "Semester 1 Grade";

  /**
   * <input type="text" class="form-control gradeInput" id="zip" placeholder="" required>
   */
  let colDiv3Input = document.createElement("input")
  colDiv3Input.type = Text
  colDiv3Input.classList.add("form-control", "gradeInput")
  colDiv3Input.placeholder = ""

  /**
   * <label for="zip">Semester 2 Grade</label>
   */
  let colDiv4Label = document.createElement("label")
  colDiv4Label.textContent = "Semester 2 Grade";

  /**
   * <input type="text" class="form-control gradeInput" id="zip" placeholder="" required>
   */
  let colDiv4Input = document.createElement("input")
  colDiv4Input.type = Text
  colDiv4Input.classList.add("form-control", "gradeInput")
  colDiv4Input.placeholder = ""


  /**
   * <hr class="mb-4">
   */
  let divider = document.createElement("hr")
  divider.classList.add("mb-4")

  let delBtn = document.createElement("button")
  delBtn.classList.add("addMoreBtns", "btn", "btn-danger", "btm-sm", "btn-block", "deleteFieldBtn")
  delBtn.innerText = "Remove"



  targetSection.append(divider)
  targetSection.append(rowDiv)
  colDiv1.appendChild(colDiv1Label)
  colDiv1.appendChild(colDiv1Select)
  rowDiv.appendChild(colDiv1)
  colDiv2.appendChild(colDiv2Label)
  colDiv2.appendChild(colDiv2Select)
  rowDiv.appendChild(colDiv2)
  colDiv3.appendChild(colDiv3Label)
  colDiv3.appendChild(colDiv3Input)
  rowDiv.appendChild(colDiv3)
  colDiv4.appendChild(colDiv4Label)
  colDiv4.appendChild(colDiv4Input)
  rowDiv.appendChild(colDiv4)
  colDiv5.appendChild(delBtn)
  rowDiv.appendChild(colDiv5)
}





/**
 * 
 * Calling dropdown population functions with each unique parameter.
 * 
 * This fills the dropdown menus without having to manually code.
 * 
 */

var englishdropdowns = document.getElementsByClassName("englishdropdowns")
var mathdropdowns = document.getElementsByClassName("mathdropdowns")
var natsciencedropdowns = document.getElementsByClassName("natsciencedropdowns")
var socialscidropdowns = document.getElementsByClassName("socialscidropdowns")
var additionalanydropdowns = document.getElementsByClassName("additionalanydropdowns")

window.addEventListener("load", function () {
  // -------------------------------------------------------------------
  populateDropdowns(englishdropdowns, englishCatalog)
  // -------------------------------------------------------------------
  populateDropdowns(mathdropdowns, mathCatalog)
  // -------------------------------------------------------------------
  populateDropdowns(natsciencedropdowns, naturalSciCatalog)
  // -------------------------------------------------------------------
  populateDropdowns(socialscidropdowns, socialSciCatalog)
  // -------------------------------------------------------------------
  populateDropdowns(additionalanydropdowns, additionalNonCoreCatalog)
  populateDropdowns(additionalanydropdowns, englishCatalog)
  populateDropdowns(additionalanydropdowns, mathCatalog)
  populateDropdowns(additionalanydropdowns, naturalSciCatalog)
  populateDropdowns(additionalanydropdowns, socialSciCatalog)
  // -------------------------------------------------------------------    
  //var addMoreBtns = document.getElementsByClassName("addMoreBtns")

  /**
   for (eachBtn in addMoreBtns) {
      eachBtn.addEventListener("click", addFormField("englishFormSection"))
  }
  **/


})
var englishSectionAddBtn = document.getElementById("englishSectionAddBtn")
var mathSectionAddBtn = document.getElementById("mathSectionAddBtn")
var natSciSectionAddBtn = document.getElementById("natSciSectionAddBtn");
var socialSciSectionAddBtn = document.getElementById("socialSciSectionAddBtn")
var additionalAnySectionAddBtn = document.getElementById("additionalAnySectionAddBtn")

englishSectionAddBtn.addEventListener("click", function () {
  addFormField("englishFormSection", "englishdropdowns")
  populateDropdowns(englishdropdowns, englishCatalog)

}, false);

mathSectionAddBtn.addEventListener("click", function () {
  addFormField("mathFormSection", "mathdropdowns")
  populateDropdowns(mathdropdowns, mathCatalog)
}, false);


natSciSectionAddBtn.addEventListener("click", function () {
  addFormField("natSciFormSection", "natsciencedropdowns"),
    populateDropdowns(natsciencedropdowns, naturalSciCatalog)
}, false);

socialSciSectionAddBtn.addEventListener("click", function () {
  addFormField("socialSciFormSection", "socialscidropdowns"),
    populateDropdowns(socialscidropdowns, socialSciCatalog)
}, false);

additionalAnySectionAddBtn.addEventListener("click", function () {
  addFormField("additionalAnyFormSection", "additionalanydropdowns"),
    populateDropdowns(additionalanydropdowns, additionalNonCoreCatalog)
  populateDropdowns(additionalanydropdowns, englishCatalog)
  populateDropdowns(additionalanydropdowns, mathCatalog)
  populateDropdowns(additionalanydropdowns, naturalSciCatalog)
  populateDropdowns(additionalanydropdowns, socialSciCatalog)
}, false);