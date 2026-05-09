function checkMarks() {

    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("roll").value;
    let className = document.getElementById("class").value;

    if(name === "") {
        alert("Please enter the student's name.");
        return;
    }
    else if(rollNo === "") {
        alert("Please enter the roll number.");
        return;
    }
    else if(className === "") {
        alert("Please enter the class.");
        return;
    }

    let english = parseInt(document.getElementById("english").value);
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);

    let total;
    if (english < 0 || english > 100 || maths < 0 || maths > 100 || science < 0 || science > 100) {
        alert("Marks should be between 0 and 100.");
        return;
    }
    else if (english === "" ){
        alert("Please enter marks for English.");
        return;
    }
        else if (maths === "") {
        alert("Please enter marks for Maths.");
        return;
    }
    else if (science === "") {
        alert("Please enter marks for Science.");
        return;
    }
    else {
        total = english + maths + science;
    }
    
    let percentage = (total / 300) * 100;
    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } 
    else if (percentage >= 80) {
        grade = "A";
    } 
    else if (percentage >= 70) {
        grade = "B";
    } 
    else if (percentage >= 60) {
        grade = "C";
    } 
    else if (percentage >= 50) {
        grade = "D";
    } 
    else {
        grade = "F";
    }
    document.getElementById("total-value").innerHTML = total;
    document.getElementById("percentage-value").innerHTML = percentage + "%";
    document.getElementById("grade-value").innerHTML = grade;
}