let test = {
    x: undefined,
    y: undefined
  };
window.addEventListener('click', function (e) {
  test.x = event.x;
  test.y = event.y;
  // console.log("x: " + String(test.x) + "\ty: " + String(test.y));
});

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
      btn = document.createElement('button');
      btn.style.width = "5vw";
      btn.style.height = "7vh";
      btn.style.backgroundColor = "green";
      btn.setAttribute("value", String(outputY*i + j +1));
      btn.setAttribute("id", "btn" + String(outputY*i + j +1));
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