var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
let modal = document.getElementById("modal")
let btn = document.querySelector(".btn2")
let closebtn = document.querySelector(".btn1")
btn.addEventListener("click", () => {
modal.classList.toggle("active")
btn.classList.add("active")
})
closebtn.addEventListener("click",function(){
    modal.classList.remove("active")
    btn.classList.remove("active")
})
function clock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM"
    
    if(h== 0){
      h = 12;
    }
    
    if(h > 12){
      h = h -12;
      session = "PM"
    }
    
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    
    
    
    let time = h + ":" + m + ":" + s +" "+ session
    document.getElementById('Clock').innerText = time;
    setTimeout(clock , 1000)
  }
  
  clock();
