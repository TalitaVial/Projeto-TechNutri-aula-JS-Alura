var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  //extraindo informações do form
  var form = document.querySelector("#form-adiciona");
 
  var paciente = obtemdadosform(form);

  //criando o tr e td 
  adicionaPacienteNaTabela(paciente)

  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMsgErro(erros);
    return;
  }



  form.reset();
  var limpaMensagem = document.querySelector("#msg-erro");
  limpaMensagem.innerHTML = "";
  
});

function  adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);


}

function exibeMsgErro(erros){
  var ul = document.querySelector("#msg-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  })

}

function obtemdadosform(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)

  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){

  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Preencha nome");
  }
  
  if (!validaPeso(paciente.peso)){
    erros.push("Peso é Inválido");
  }
  
  if(!validaAltura(paciente.altura)){
    erros.push("Altura é Inválida");
  }

  if(paciente.gordura.length == 0){
    erros.push("Informe Gordura");
  }

  if(paciente.peso.length == 0){
    erros.push("Preencha altura");
  }

  if(paciente.altura.length == 0){
    erros.push("Preencha Altura");
  }

  return erros;
}