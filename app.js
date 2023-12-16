const listaSom = document.querySelectorAll("audio");
const listaTecla = document.querySelectorAll(".tecla");
const listaKeyBoard = ["a", "s", "d", "f", "g", "z", "x", "c", "v"];

let i = 0;
for (let i = 0; i < listaTecla.length; i++) {
  listaTecla[i].onclick = (function (index) {
    return function () {
      tocar(index);
    };
  })(i);
}

document.addEventListener("keydown", function (event) {
  let teclaIndex = listaKeyBoard.indexOf(String(event.key));
  let teclaPresionada = listaTecla[teclaIndex];

  if (teclaIndex >= 0) {
    let audio = document.querySelector(`#${listaSom[teclaIndex].id}`);

    if (listaKeyBoard.includes(String(event.key))) {
      audio.play();
      setTimeout(() => {
        teclaPresionada.classList.remove("tecla-ativa");
      }, 100);

      teclaPresionada.classList.add("tecla-ativa");
    }
  } else {
    console.log("Tecla não registrada.");
  }
});

function tocar(i) {
  document.querySelector(`#${listaSom[i].id}`).play();
}
