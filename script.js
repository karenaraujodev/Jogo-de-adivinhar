let numeroSecreto = Math.floor(Math.random() * 10) + 1;

btn.addEventListener("click", function () {
  const palpite = Number(document.querySelector("#palpite").value);

  if (palpite < 1 || palpite > 10) {
    resultado.textContent = "Digite um número entre 1 e 10!";
    return;
  }

  if (palpite === numeroSecreto) {
    resultado.textContent = "🎉 Parabéns! Você acertou!";
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
  } else {
    resultado.textContent = "Errou! Tente novamente.";
  }
});
