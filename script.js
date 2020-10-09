let skills_array =['HTML','CSS','JAVASCRIPT','PYTHON','DJANGO FRAMEWORK','Java', 'Sql','Jquery'];
let ResultArray = [];
var container = document.getElementById("inside-block");
var container1 = document.getElementById("Result-block");
document.getElementById("totalSkills").innerText= skills_array.length;

function block(mClass, html , val) {     
    return '<div class="' + mClass + '" id="' + val + '" value="' + val + '" >' + html + '</div>';    
}

for (var i = 0; i < skills_array.length; i++) {     
  container.innerHTML += block('skills', skills_array[i],i);    
}
  
var btnContainer = document.getElementById("inside-block");
var btns = btnContainer.getElementsByClassName("skills");
  
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");   
      if (current.length > 0) {   
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
       });
  }
 
function  addElement(){
  var display = document.getElementsByClassName("active");
  ResultArray[display[0].id]=skills_array[display[0].id];
  repeatBlock()
  loadresult();
}

function Resultblock(mClass, html , val) {  
  var idnm = "skill"+val;
  return '<div class="' + mClass + '" id="' + idnm + '" value="' + val + '" >' + html + '</div>';
}

function repeatBlock(){
  let count =0;
  container1.innerHTML = "";    
    for (var i = 0; i < ResultArray.length; i++) {   
        if(ResultArray[i] != undefined){
            document.getElementById("resultskill").innerText= ++count;
            container1.innerHTML += Resultblock('skills', ResultArray[i],i);
        }            
    }    
}
 
function  removeElement(){
  var display = document.getElementsByClassName("active1");
    var str = display[0].id;
    var no = parseInt(str.toString().slice(5));
    delete  ResultArray[no];
    repeatBlock()
    loadresult();
  
}

function loadresult(){
  var btnContainer1 = document.getElementById("Result-block");  
  var btns1 = btnContainer1.getElementsByClassName("skills");
  for (var i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function() {
      var current1 = document.getElementsByClassName("active1");
  
      if (current1.length > 0) {
        current1[0].className = current1[0].className.replace(" active1", "");
      }  
      this.className += " active1";   
    });
  }
}