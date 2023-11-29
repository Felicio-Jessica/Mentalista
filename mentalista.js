var descubraoNumero = Math.floor(Math.random() * 1000) + 1;
var chanceRestantes = 3;

while (chanceRestantes > 0) {
  var digite = prompt(`Escolha um número entre 1 e 1000. Você ainda tem ${chanceRestantes}chance.`);
  
  if (digite == descubraoNumero) {
    alert('Você acertou o número em ${5 - chanceRestantes}chance!');
    break;
  } else if (digite < descubraoNumero) {
    alert("O número é maior não é o número certo.");
  } else {
    alert("O número é menor não é o número certo.");
  } 

  chanceRestantes--;
}

if (chanceRestantes === 0) {
  alert(`Você perdeu o jogo. O número certo é ${descubraoNumero}.`);
}
