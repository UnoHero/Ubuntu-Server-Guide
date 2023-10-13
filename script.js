let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btnText = document.getElementById("myBtn");
let rmgrw = document.querySelector(".rmgrw");
let rmgrwdots = document.getElementById("rmgrw-dots");
let rmgrwmore = document.getElementById("rmgrw-more");
let rmvm = document.querySelector(".rmvm");
let rmvmdots = document.getElementById("rmvm-dots");
let rmvmmore = document.getElementById("rmvm-more");
let rmsg = document.querySelector(".rmsg");
let rmsgdots = document.getElementById("rmsg-dots");
let rmsgmore = document.getElementById("rmsg-more");
let rmvmlg = document.querySelector(".rmvmlg");
let rmvmlgdots = document.getElementById("rmvmlg-dots");
let rmvmlgmore = document.getElementById("rmvmlg-more");
let rmwc = document.querySelector(".rmwc");
let rmwcdots = document.getElementById("rmwc-dots");
let rmwcmore = document.getElementById("rmwc-more");
let rma2 = document.querySelector(".rma2");
let rma2dots = document.getElementById("rma2-dots");
let rma2more = document.getElementById("rma2-more");



rmgrw.addEventListener("click", (e) => {
  if (rmgrwdots.style.display === "none") {
    rmgrwdots.style.display = "inline";
    rmgrw.innerHTML = "Read more"; 
    rmgrwmore.style.display = "none";
  } else {
    rmgrwdots.style.display = "none";
    rmgrw.innerHTML = "Read less"; 
    rmgrwmore.style.display = "inline";
  }
});

rmvm.addEventListener("click", (e) => {
  if (rmvmdots.style.display === "none") {
    rmvmdots.style.display = "inline";
    rmvm.innerHTML = "Read more"; 
    rmvmmore.style.display = "none";
  } else {
    rmvmdots.style.display = "none";
    rmvm.innerHTML = "Read less"; 
    rmvmmore.style.display = "inline";
  }
});

rmsg.addEventListener("click", (e) => {
  if (rmsgdots.style.display === "none") {
    rmsgdots.style.display = "inline";
    rmsg.innerHTML = "Read more"; 
    rmsgmore.style.display = "none";
  } else {
    rmsgdots.style.display = "none";
    rmsg.innerHTML = "Read less"; 
    rmsgmore.style.display = "inline";
  }
});

rmvmlg.addEventListener("click", (e) => {
  if (rmvmlgdots.style.display === "none") {
    rmvmlgdots.style.display = "inline";
    rmvmlg.innerHTML = "Read more"; 
    rmvmlgmore.style.display = "none";
  } else {
    rmvmlgdots.style.display = "none";
    rmvmlg.innerHTML = "Read less"; 
    rmvmlgmore.style.display = "inline";
  }
});

rmwc.addEventListener("click", (e) => {
  if (rmwcdots.style.display === "none") {
    rmwcdots.style.display = "inline";
    rmwc.innerHTML = "Read more"; 
    rmwcmore.style.display = "none";
  } else {
    rmwcdots.style.display = "none";
    rmwc.innerHTML = "Read less"; 
    rmwcmore.style.display = "inline";
  }
});

rma2.addEventListener("click", (e) => {
  if (rma2dots.style.display === "none") {
    rma2dots.style.display = "inline";
    rma2.innerHTML = "Read more"; 
    rma2more.style.display = "none";
  } else {
    rma2dots.style.display = "none";
    rma2.innerHTML = "Read less"; 
    rma2more.style.display = "inline";
  }
});
