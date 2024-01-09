let timer = document.getElementById("timer");

let startbtn = document.getElementById("start");
let resetbtn = document.getElementById("reset");
let editbtn = document.getElementById("editTimer");

let min = document.getElementById("min");
min.innerText = "02";
let sec = document.getElementById("sec");
sec.innerText = "00";

let secid;

let sectimer = 59;
let mintimer = min.innerText
let flag = true;

startbtn.addEventListener("click", () => {
  if (startbtn.innerText === "Start") {
    if(flag){
      min.innerText = `${0}`+--mintimer;
      flag = false;
    }
    secondsFun();
    startbtn.innerText = "Stop";
  } else {
    clearInterval(secid);
    startbtn.innerText = "Start";
  }
});

resetbtn.addEventListener("click", () => {
  clearInterval(secid);
  min.innerText = "02";
  sec.innerText = "00";
  flag = true;
  sectimer = 59;
  mintimer = min.innerText;
  startbtn.innerText = "Start";
  
});

function secondsFun() {
  secid = setInterval(() => {
    if(sectimer<10){
        sec.innerText = `${0}`+sectimer--;
    }else{
        sec.innerText = sectimer--;
    }
    if(sectimer==0){
        sectimer = 59;
        if(mintimer< 10 && mintimer>0){
            min.innerText = `${0}`+--mintimer;
        }
        else if(mintimer==0){
          sec.innerText = "00";
          min.innerText = "02";
          startbtn.innerText = "Start";
          clearInterval(secid);
        }else{
            min.innerText = --mintimer;
        }
    }
  }, 1000);
}
