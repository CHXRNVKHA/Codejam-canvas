"use strict"
let canvas = document.getElementById('canvas');
let radioArray = document.getElementsByName('size_switcher');
function checkRadio() {
    if (radioArray[0].checked) {
      drawSmallImg(smallArray, canvas);
    }
    else if (radioArray[1].checked) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let BigImgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      drawBigImg(BigImgData.data, largeArray, canvas);
      ctx.putImageData(BigImgData, 0, 0);
    }
};

function drawSmallImg (array, canvas) {
    let ctx = canvas.getContext('2d');
    let step = canvas.width / array.length;
    array.forEach((el1, i) => {
      el1.forEach((el2, j) => {
        ctx.fillStyle = "#" + el2;
        ctx.fillRect(j*step, i*step, step, step);
      });
    });
};
  
function drawBigImg(data, array, canvas) {
    let step = canvas.width / array.length;
    let counter = 0;
    array.forEach(col => {
      for (let i = 0; i < step; i++) {
        col.forEach(row => {
          for (let j = 0; j < step; j++) {
            data[counter] = row[0];
            data[counter + 1] = row[1];
            data[counter + 2] = row[2];
            data[counter + 3] = row[3];
            counter += 4;
          };
        });
      };
    });
};
    
radioArray.forEach((item) => {
    item.addEventListener('change', function() {
        checkRadio();
    });
});
    
  
  