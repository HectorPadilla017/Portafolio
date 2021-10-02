window.addEventListener("scroll", function () {
  function progress1(active) {
    let ani = document.querySelectorAll(".pro_" + active);
    for (let i = 0; i < ani.length; i++) {
      let altura = window.innerHeight / 1.2;
      let distancia = ani[i].getBoundingClientRect().top;
        if (distancia <= altura) {
          ani[i].classList.add("aparece1");
          ani[i].classList.remove("desaparece1");
        } else {
          ani[i].classList.add("desaparece1");
          ani[i].classList.remove("aparece1");
        }
    }
  }
  function progress2(active) {
    let ani = document.querySelectorAll(".pro_" + active);
    for (let i = 0; i < ani.length; i++) {
      let altura = window.innerHeight / 1.2;
      let distancia = ani[i].getBoundingClientRect().top;
      if (distancia <= altura) {
        ani[i].classList.add("aparece2");
        ani[i].classList.remove("desaparece2");
      } else {
        ani[i].classList.add("desaparece2");
        ani[i].classList.remove("aparece2");
      }
    }
  }
  progress1("70");
  progress2("34");
  
  
  // console.log(altura);
  // console.log(distancia);
});
