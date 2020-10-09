let skills_array =['HTML','CSS','JAVASCRIPT','PYTHON','DJANGO FRAMEWORK','Java', 'Sql','Jquery'];
let ResultArray = [];
var container = document.getElementById("inside-block");
var container1 = document.getElementById("Result-block");
document.getElementById("totalSkills").innerText= skills_array.length;

function block(mClass, html , val) {  
    return '<div class="' + mClass + '" id="' + val + '" value="' + val + '" >' + html + '</div>';
}

function Resultblock(mClass, html , val) {  
    var idnm = "skill"+val;
    return '<div class="' + mClass + '" id="' + idnm + '" value="' + val + '" >' + html + '</div>';
}

for (var i = 0; i < skills_array.length; i++) {   
    container.innerHTML += block('skills', skills_array[i],i);    
}

//this is fisrt block
var btnContainer = document.getElementById("inside-block");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("skills");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
   
    // If there's no active class
    if (current.length > 0) {   
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
    //console.log(this.id);
    ResultArray[this.id]=skills_array[this.id];
  });
}
// first block ends



function addElement(e){ 
    let count =0;
    container1.innerHTML = "";    
    for (var i = 0; i < ResultArray.length; i++) {   
        if(ResultArray[i] != undefined){
            document.getElementById("resultskill").innerText= ++count;
            container1.innerHTML += Resultblock('skills', ResultArray[i],i);
        }
            
    }
    loadresult();
}

function loadresult(){

//this is second block
var btnContainer1 = document.getElementById("Result-block");

// Get all buttons with class="btn" inside the container
var btns1 = btnContainer1.getElementsByClassName("skills");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
    var current1 = document.getElementsByClassName("active");

    // If there's no active class
    if (current1.length > 0) {
      current1[0].className = current1[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
    // var str = this.id;
    // var no = parseInt(str.toString().slice(5));
    // delete  ResultArray[no];
    // console.log(no);
  });
}


    
}