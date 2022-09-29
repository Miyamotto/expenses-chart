document.getElementById("mon").addEventListener("click", openMenu);
function openMenu() {
  document.getElementById("mon").classList.toggle("active");
}
document.getElementById("mon").addEventListener("mouseenter", openMenuq);
function openMenuq() {
  document.getElementById("monday").style.opacity = "1";
}
document.getElementById("mon").addEventListener("mouseleave", openMenuw);
function openMenuw() {
  document.getElementById("monday").style.opacity = "0";
}

document.getElementById("tue").addEventListener("click", openMenu1);
function openMenu1() {
  document.getElementById("tue").classList.toggle("active");
}
document.getElementById("tue").addEventListener("mouseenter", openMenur);
function openMenur() {
  document.getElementById("tuesday").style.opacity = "1";
}
document.getElementById("tue").addEventListener("mouseleave", openMenut);
function openMenut() {
  document.getElementById("tuesday").style.opacity = "0";
}

document.getElementById("wed").addEventListener("click", openMenu2);
function openMenu2() {
  document.getElementById("wed").classList.toggle("active");
}
document.getElementById("wed").addEventListener("mouseenter", openMenuy);
function openMenuy() {
  document.getElementById("wednesday").style.opacity = "1";
}
document.getElementById("wed").addEventListener("mouseleave", openMenuu);
function openMenuu() {
  document.getElementById("wednesday").style.opacity = "0";
}

document.getElementById("thu").addEventListener("click", openMenu3);
function openMenu3() {
  document.getElementById("thu").classList.toggle("active");
}
document.getElementById("thu").addEventListener("mouseenter", openMenui);
function openMenui() {
  document.getElementById("thursday").style.opacity = "1";
}
document.getElementById("thu").addEventListener("mouseleave", openMenuo);
function openMenuo() {
  document.getElementById("thursday").style.opacity = "0";
}

document.getElementById("fri").addEventListener("click", openMenu4);
function openMenu4() {
  document.getElementById("fri").classList.toggle("active");
}
document.getElementById("fri").addEventListener("mouseenter", openMenup);
function openMenup() {
  document.getElementById("friday").style.opacity = "1";
}
document.getElementById("fri").addEventListener("mouseleave", openMenua);
function openMenua() {
  document.getElementById("friday").style.opacity = "0";
}

document.getElementById("sat").addEventListener("click", openMenu5);
function openMenu5() {
  document.getElementById("sat").classList.toggle("active");
}
document.getElementById("sat").addEventListener("mouseenter", openMenus);
function openMenus() {
  document.getElementById("saturday").style.opacity = "1";
}
document.getElementById("sat").addEventListener("mouseleave", openMenud);
function openMenud() {
  document.getElementById("saturday").style.opacity = "0";
}
document.getElementById("sun").addEventListener("click", openMenu6);
function openMenu6() {
  document.getElementById("sun").classList.toggle("active");
}
document.getElementById("sun").addEventListener("mouseenter", openMenuf);
function openMenuf() {
  document.getElementById("sunday").style.opacity = "1";
}
document.getElementById("sun").addEventListener("mouseleave", openMenug);
function openMenug() {
  document.getElementById("sunday").style.opacity = "0";
}
