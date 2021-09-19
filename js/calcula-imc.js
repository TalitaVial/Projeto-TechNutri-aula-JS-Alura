var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

var titulo = document.querySelector(".titulo");

for (var i = 0; i < pacientes.length; i++) {

  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');

  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');

  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');
  tdImc.textContent = imc;

  var pesoValido = true;
  var alturaValida = true;

  if (peso < 0 || peso >= 1000) {
    console.log('ivalid');
    pesoValido = false;
    tdImc.textContent = 'Peso Inválido';
    paciente.classList.add("paciente-invalido");
  }

  if (altura < 0 || altura >= 3) {
    console.log('invalid');
    alturaValida = false;
    tdImc.textContent = 'Altura Inválida';
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);

}