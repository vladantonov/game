var block = document.getElementById("test");
var left = 0;
var top1 = 0;
var bottom = 0;
var right = 0;

document.onkeydown = function (event){
  console.log(event);
  if (event.key == "ArrowRight"){
    block.style.left = left + "px";
    left++; 
  }
  if (event.key == "ArrowDown"){
    block.style.top = top1 + "px";
    top1++; 
  }
  if (event.key == "ArrowUp"){
    block.style.bottom = bottom + "px";
    bottom++; 
  }
  if (event.key == "ArrowLeft"){
    block.style.right = right + "px";
    right++; 
  }
}
