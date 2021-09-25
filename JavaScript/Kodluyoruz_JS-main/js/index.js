let userName = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`;

let day = new Date().getDay();

switch (day) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
}

showTime();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function showTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("myClock").innerHTML = `${h}:${m}:${s} ${day}`;
  let t = setTimeout(showTime, 1000);
}