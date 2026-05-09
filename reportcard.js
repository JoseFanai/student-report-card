// 1. Mark chhut luhna input box pathum te kha kan select hmasa ang
let englishInput = document.getElementById("english");
let mathsInput = document.getElementById("maths");
let scienceInput = document.getElementById("science");

// 2. 'input' event kan hmang ang. Box-a thil i type rualin checkMarks a in-call nghal zel ang.
englishInput.addEventListener("input", checkMarks);
mathsInput.addEventListener("input", checkMarks);
scienceInput.addEventListener("input", checkMarks);

function checkMarks() {
    let english = parseInt(document.getElementById("english").value);
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);

    // Result pholan na tur hmunte
    let totalDisplay = document.getElementById("total-value");
    let percentDisplay = document.getElementById("percentage-value");
    let gradeDisplay = document.getElementById("grade-value");

    // 3. box a la ruak emaw number a dik loh chuan result a lang rih lo ang
    if (isNaN(english) || isNaN(maths) || isNaN(science) ||
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100) {

        totalDisplay.innerHTML = "";
        percentDisplay.innerHTML = "";
        gradeDisplay.innerHTML = "";
        return; // A hnuaia calculation hi a ti lo ang
    }

    // 4. Box pathumah number dik tak a awm kim vek hunah a calculate chiah ang
    let total = english + maths + science;
    let percentage = (total / 300) * 100;

    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 5. Result chu i UI ah a lo lang nghal ang
    totalDisplay.innerHTML = total;
    percentDisplay.innerHTML = percentage.toFixed(2) + "%"; // toFixed(2) hian decimal 2 thleng chiah a la ang (entirnan: 83.33%)
    gradeDisplay.innerHTML = grade;
}