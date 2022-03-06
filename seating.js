let test = {
    x: undefined,
    y: undefined
  };
window.addEventListener('click', function (e) {
  test.x = event.x;
  test.y = event.y;
  // console.log("x: " + String(test.x) + "\ty: " + String(test.y));
});

var selectedSeat = '#c2d420';
var emptySeat = '#888888';
var filledSeat = '#47b51b';
var sliderX = document.getElementById("sliderX");
var sliderY = document.getElementById("sliderY");
var outputX = sliderX.value;
var outputY = sliderY.value;
sliderX.oninput = function() {
  outputX = this.value;
  tableCreate();
}
sliderY.oninput = function() {
  outputY = this.value;
  tableCreate();
}

function setStudent(){
  fName = document.getElementById("fname").value;
  lName = document.getElementById("lname").value;
  currBtn = document.getElementById(isSelected());
  currBtn.style.backgroundColor = filledSeat;
  currBtn.innerHTML = fName;

}

function isSelected(){
  for (let i = 0; i < outputX; i++) {
    for (let j = 0; j < outputY; j++) {
      currBtn = document.getElementById("btn" + String(outputY*i + j +1))
      if(currBtn.style.backgroundColor == 'rgb(194, 212, 32)'){
        return ("btn" + String(outputY*i + j +1));
      }
    }
  }
  return '1';
}

function clearSelected(){
  for (let i = 0; i < outputX; i++) {
    for (let j = 0; j < outputY; j++) {
      currBtn = document.getElementById("btn" + String(outputY*i + j +1))
      if(currBtn.style.backgroundColor == 'rgb(194, 212, 32)'){
        currBtn.style.backgroundColor = emptySeat;
      }
    }
  }
}

function selectSeat(num){
  clearSelected();
  currSeat = document.getElementById("currentSeat");
  currSeat.innerHTML="Current Seat: " + String(num);
  currGrid = document.getElementById("grid" + String(num));
  currGrid.innerHTML='';
  btn = document.createElement('button');
  btn.style.width = "5vw";
  btn.style.height = "7vh";
  btn.style.borderRadius = "10px";
  btn.style.backgroundColor = selectedSeat;
  btn.setAttribute("value", String(num));
  btn.setAttribute("id", "btn" + String(num));
  btn.setAttribute("onClick", "selectSeat("+ String(num) +")");
  btn.appendChild(document.createTextNode(num));
  currGrid.appendChild(btn);
}

function tableCreate() {
  newTable = document.getElementById("seatingChart");
  tbl = document.createElement('table');
  tbl.style.marginLeft = '0vw';
  tbl.style.marginRight = '40vw';
  tbl.style.height = '0vh'
  tbl.style.id = "seatingTable";
  // tbl.style.border = '1px solid white';
  
  for (let i = 0; i < outputX; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < outputY; j++) {
      const td = tr.insertCell();
      td.style.border = 'none';
      td.style.width = '5vw';
      td.style.height = '7vh';
      td.setAttribute("id", "grid" + String(outputY*i + j +1));
      btn = document.createElement('button');
      btn.style.width = "5vw";
      btn.style.height = "7vh";
      btn.style.borderRadius = "10px";
      btn.style.backgroundColor = emptySeat;
      btn.setAttribute("value", String(outputY*i + j +1));
      btn.setAttribute("id", "btn" + String(outputY*i + j +1));
      btn.setAttribute("onClick", "selectSeat("+ String(outputY*i + j +1) +")");
      btn.appendChild(document.createTextNode(outputY*i + j +1));
      td.appendChild(btn);
      // td.appendChild(document.createTextNode(outputY*i + j +1));
      // console.log("i: " + String(i) + "\tiTotal: " + String(outputX) + "\tj: " + String(j) + "\tjTotal: " + String(outputY));
    }
  }
  newTable.innerHTML = '';
  newTable.appendChild(tbl);
}

tableCreate();