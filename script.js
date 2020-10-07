let skills_array =['HTML','CSS','JAVASCRIPT','PYTHON','DJANGO FRAMEWORK','Java', 'Sql','Jquery'];
let ResultArray = [];
var container = document.getElementById("inside-block");
var containerResult = document.getElementById("Result-block");

// Total Skills
document.getElementById("totalSkills").innerText= skills_array.length;

function block(mClass, html , val) {
    //extra html you want to store.
    var idname = mClass+val;
    return '<div class="' + mClass + '" id="' + val + '" value="' + val + '" onclick="skillselect(this)">' + html + '</div>';
}

for (var i = 0; i < skills_array.length; i++) {
    // append the result of function 'block()' to the innerHTML
    // of the container.console.log(skills_array[i]);
    container.innerHTML += block('skills', skills_array[i],i);
    
}


var count = 0;
function skillselect(e){
    var input = e.id;
    ResultArray[e.id] = skills_array[input];  
    //ResultArray.push(skills_array[input]);
    console.log(ResultArray);
    console.log(skills_array[input]);
}

function addElement(e){
    if(count >=0){
        count++;
       console.log(count);
    }
}

function removeElement(e){
    if(count >0){
        count--;
       console.log(count);
    }
    
}
