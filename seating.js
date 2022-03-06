let test = {
    x: undefined,
    y: undefined
  };
window.addEventListener('click', function (e) {
  test.x = event.x;
  test.y = event.y;
  console.log("x: " + String(test.x) + "\ty: " + String(test.y));
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
  oldTable = document.getElementById("seatingTable");
  tbl = document.createElement('table');
  tbl.style.margin = 'auto';
  tbl.style.id = "seatingTable";
  // tbl.style.border = '1px solid white';
  
  for (let i = 0; i < outputX; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < outputY; j++) {
      const td = tr.insertCell();
      td.style.border = '2px solid #ffffffff;';
      td.style.width = '100px';
      td.style.height = '100px';
      //td.appendChild(document.createTextNode(``));
    }
  }
  try{
    let node = document.getElementById("seatingTable");
      node.parentNode.removeChild(node);
  }catch{
    console.log("nothing there");
  }
  newTable.appendChild(tbl);
}

tableCreate();