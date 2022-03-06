let test = {
    x: undefined,
    y: undefined
  };
  window.addEventListener('click', function (e) {
    test.x = event.x;
    test.y = event.y;
    console.log("x: " + String(test.x) + "\ty: " + String(test.y));
  });