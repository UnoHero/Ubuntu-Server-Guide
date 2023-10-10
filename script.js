function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
    let rmvm = document.getElementById("rmvm");
    let rmsg = document.getElementById("rmsg");
    let rmvmlg = document.getElementById("rmvmlg");
    let rmwc = document.getElementById("rmwc");
    let rma2 = document.getElementById("rma2");
    

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }