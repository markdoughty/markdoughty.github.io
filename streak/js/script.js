let count=[];
const numStudents = 9;
let list = [];
let freeLife = [];


//retrieve data when loading
window.addEventListener("load", () => {
    const savedCount = localStorage.getItem("count");
    const parsedSave = JSON.parse(savedCount);
    for(i=0; i<numStudents; i++){
      count[i] = parsedSave[i];
      list = document.getElementById("id0").getElementsByTagName("span")[i];
    	if(count[i]==0)
      {
      list.innerHTML = "";
      }else{
      for(let j=0;j<count[i];j++){
        list.appendChild(icon());
      }
    }
      freeLife[i] = false;
    }

  });

  //Add to streak button listener
  document.querySelectorAll(".A").forEach(function(el) {
    el.addEventListener("click", () => {
      streak(el);
    })
  });
  
  //Reset streak to 0 button
  document.querySelectorAll(".B").forEach(function(el) {
    el.addEventListener("click", () => {
      reset(el);
    })
  });

//save button
const s = document.getElementById("save");
s.addEventListener("click", save);

//Function to save the current streak information
//Use localStorage rather than cookies
function save()
{
    // Saving data
    const saved = [];
    for(const val of count){
      saved.push(val);
      localStorage.setItem("count", JSON.stringify(saved));
    }
    alert("Saved");
}
  
//Button to reset all streaks to 0  
const r = document.getElementById("rAll");
r.addEventListener("click", resetAll);
  
//Function to reset all streaks to 0
function resetAll(){  
      var l = 0;
			for(let i = 0; i < count.length; i++){
					count[i] = 0;
                    l = document.getElementById("id0").getElementsByTagName("span")[i];
                   // l.innerHTML = count[i];
                    l.innerHTML = "";
			}
}

function icon(){
  var img=document.createElement("img");
      img.src="img/fire.png"
      img.id="picture"
      img.style.width='40px';
      img.style.height='40px';
      img.style.alignContent='center';
      return img;
}

//Function to add to streak
function streak(el){
  switch(el.id){
  	case "a":
    	count[0] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[0];
      list.appendChild(icon());
    	//list.innerHTML = count[0];
      break;
    case "b":
      count[1] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[1];
      list.appendChild(icon());
    	//list.innerHTML = count[1];
      break;
    case "c":
    	count[2] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[2];
      list.appendChild(icon());
    	//list.innerHTML = count[2];
      break;
    case "d":
    	count[3] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[3];
      list.appendChild(icon());
    	//list.innerHTML = count[3];
      break;
    case "e":
      count[4] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[4];
      list.appendChild(icon());
    	//list.innerHTML = count[4];
      break;
    case "f":
    	count[5] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[5];
      list.appendChild(icon());
    	//list.innerHTML = count[5];
      break;
    case "g":
    	count[6] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[6];
      list.appendChild(icon());
    	//list.innerHTML = count[6];
      break;
    case "h":
      count[7] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[7];
      list.appendChild(icon());
    	//list.innerHTML = count[7];
      break;
    case "i":
    	count[8] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[8];
      list.appendChild(icon());
    	//list.innerHTML = count[8];
      break;
    case "j":
    	count[9] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[9];
      list.appendChild(icon());
    	//list.innerHTML = count[9];
      break;
    case "k":
      count[10] += 1;
    	list = document.getElementById("id0").getElementsByTagName("span")[10];
      list.appendChild(icon());
    	//list.innerHTML = count[10];
      break;
    default:
  }
  
}

//Function to reset individual streaks
function reset(el){
  switch(el.id){
  	case "ra":
    	count[0] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[0];
      list.innerHTML = "";
      break;
    case "rb":
      count[1] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[1];
    	list.innerHTML = "";
      break;
    case "rc":
    	count[2] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[2];
    	list.innerHTML = "";
      break;
    case "rd":
    	count[3] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[3];
    	list.innerHTML = "";
      break;
    case "re":
      count[4] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[4];
    	list.innerHTML = "";
      break;
    case "rf":
    	count[5] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[5];
    	list.innerHTML = "";
      break;
    case "rg":
    	count[6] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[6];
    	list.innerHTML = "";
      break;
    case "rh":
      count[7] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[7];
    	list.innerHTML = "";
      break;
    case "ri":
    	count[8] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[8];
    	list.innerHTML = "";
      break;
    case "rj":
    	count[9] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[9];
    	list.innerHTML = "";
      break;
    case "rk":
      count[10] = 0;
    	list = document.getElementById("id0").getElementsByTagName("span")[10];
    	list.innerHTML = "";
      break;
    default:
  }
  
}

