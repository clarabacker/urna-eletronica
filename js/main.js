// Objeto que armazena os candidatos por turma e ano
import { candidatosPorTurma } from "./dadosCandidatos.js"

// Objeto que armazena os votos da votação atual
let votos = {
  ano: "",
  turma: "",
  resultados: [],
}

const buttons = document.querySelectorAll(".button")
let mensagem = document.querySelector("#mensagem")
let mensagem2 = document.querySelector("#mensagem2")
let mensagemDeErro = document.querySelector("#mensagem-erro")
let divCaixasDeEntrada = document.querySelector("#caixas-de-entrada")
let caixas = document.querySelectorAll(".caixa")
let digitos = document.querySelectorAll(".digito")
let digito1 = "",
  digito2 = "",
  digito3 = "",
  digito4 = ""
let divCandidatos = document.querySelector("#candidatos")
let ano = "",
  turma = "",
  voto = ""
let btnEncerrar = document.querySelector("#buttonEncerrarVotacao")
const audioTecla = document.querySelector("#audioCliqueTecla")
const audioConfirmacaoVoto = document.querySelector("#audioConfirmacaoVoto")

// Função para reiniciar e reproduzir o áudio passado como parâmetro
function tocarAudio(audio) {
  audio.currentTime = 0 // Reseta o áudio, se ele estiver tocando
  audio.play()
}

// Função para mostrar ou esconder a div das caixas de entrada
function gerenciarDivCaixasEntrada(ocultar) {
  if (ocultar) {
    divCaixasDeEntrada.classList.remove("caixas-ativadas")
    divCaixasDeEntrada.classList.add("caixas-desativadas")
  } else {
    divCaixasDeEntrada.classList.remove("caixas-desativadas")
    divCaixasDeEntrada.classList.add("caixas-ativadas")
  }
}

// Função para mostrar ou esconder a div de candidatos
function gerenciarDivDeCandidatos(ocultar) {
  if (ocultar) {
    divCandidatos.classList.remove("candidatos-ativados")
    divCandidatos.classList.add("candidatos-desativados")
  } else {
    divCandidatos.classList.remove("candidatos-desativados")
    divCandidatos.classList.add("candidatos-ativados")
  }
}

// Função para atualizar a cor da borda e o display das caixas
function atualizarCaixas(corBorda, display = undefined) {
  caixas.forEach((caixa) => {
    caixa.style.border = `2px solid ${corBorda}`

    // Atualiza o display somente se o parâmetro 'display' for fornecido
    if (display !== undefined) {
      caixa.style.display = display
    }
  })
}

// Define o novo src quando o mouse passa por cima da imagem
btnEncerrar.onmouseover = function () {
  this.src =
    "https://clarabacker.github.io/urna-eletronica/imagens/icon_encerrar_hover.png"
}

// Retorna para o src original quando o mouse sai de cima da imagem
btnEncerrar.onmouseout = function () {
  this.src =
    "https://clarabacker.github.io/urna-eletronica/imagens/icon_encerrar.png"
}

// Função para encerrar a votação ao clicar em btnEncerrar
btnEncerrar.onclick = function () {
  tocarAudio(audioTecla)
  console.log(votos)

  gerenciarDivDeCandidatos(true)
  gerenciarDivCaixasEntrada(false)

  // Oculta todas os digitos de entrada
  document.querySelectorAll(".caixa").forEach((caixa) => {
    caixa.style.display = "none"
  })
  // Exibe apenas a primeira caixa de entrada
  document.querySelector(".caixa1").style.display = "flex"

  atualizarCaixas("black")
  limparDigitos()

  mensagem.innerText = "FIM DA VOTAÇÃO"

  if (votos.resultados.length == 0) {
    mensagem2.innerHTML =
      "Digite <strong>1</strong> para gerar o PDF ou <strong>2</strong> para reiniciar"
  } else {
    mensagem2.innerHTML =
      "Digite <strong>1</strong> para gerar o PDF, <strong>2</strong> para reiniciar a votação ou <strong>3</strong> para retornar à votação."
  }

  mensagemDeErro.innerText = ""
}

// Função para atualizar informações do candidato na interface
function atualizarCandidato(numeroElemento) {
  const candidatos = candidatosPorTurma[ano][turma]
  const candidatoElemento = document.querySelector(".candidato")

  const candidato = candidatos.find((c) => c.numero === numeroElemento)
  console.log(candidato)

  const nomeElemento = candidatoElemento.querySelector("p:nth-of-type(1)")
  nomeElemento.innerText = candidato.nome

  const fotoElemento = candidatoElemento.querySelector(".foto")
  fotoElemento.style.backgroundImage = `url('https://clarabacker.github.io/urna-eletronica/imagens/${candidato.foto}')`
  fotoElemento.style.backgroundSize = "cover"
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    audioTecla.currentTime = 0 // Reseta o áudio, se ele estiver tocando
    audioTecla.play()

    const valor =
      this.getAttribute("data-number") ||
      this.getAttribute("data-branco") ||
      this.getAttribute("data-corrige") ||
      this.getAttribute("data-confirma")

    if (valor === "BRANCO") {
      votarBranco()
    } else if (valor === "CORRIGE") {
      limparDigitos()
    } else if (valor === "CONFIRMA") {
      confirmar()
    } else if (this.getAttribute("data-number") !== null) {
      lidarComNúmeroClicado(valor)
    }
  })
})

// Função para atualizar os dígitos na interface
function atualizardigitos() {
  digitos[0].textContent = digito1
  digitos[1].textContent = digito2
  digitos[2].textContent = digito3
  digitos[3].textContent = digito4

  if (mensagem.innerText == "Digite o número do seu candidato:") {
    gerenciarDivDeCandidatos(true)
  }
}

// Função para limpar os dígitos
function limparDigitos() {
  digito1 = ""
  digito2 = ""
  digito3 = ""
  digito4 = ""

  atualizardigitos()
}

// Função para lidar com o clique em uma tecla numérica
function lidarComNúmeroClicado(numero) {
  if (digitos[0].innerText === "") {
    digito1 = numero
  } else if (digitos[1].innerText === "") {
    digito2 = numero
  } else if (digitos[2].innerText === "") {
    digito3 = numero
  } else if (digitos[3].innerText === "") {
    digito4 = numero
  }
  atualizardigitos()

  if (
    digito1 !== "" &&
    digito2 !== "" &&
    digito3 !== "" &&
    digito4 !== "" &&
    mensagem.innerText == "Digite o número do seu candidato:"
  ) {
    const numeroCandidato = digito1 + digito2 + digito3 + digito4

    // Verifica se o número do candidato é válido
    if (verificarNumeroCandidato(ano, turma, numeroCandidato)) {
      gerenciarDivDeCandidatos(false)
      atualizarCandidato(numeroCandidato)

      atualizarCaixas("black")
      mensagemDeErro.innerText = ""
    }
  }
}

// Função de resposta ao clique na tecla "Confirma"
function confirmar() {
  if (mensagem.innerText === 'Aperte "Confirma" para iniciar a votação!') {
    limparDigitos()

    mensagem.innerText = "Digite o ano:"

    gerenciarDivCaixasEntrada(false)

    // Oculta todos os digitos de entrada
    document.querySelectorAll(".caixa").forEach((caixa) => {
      caixa.style.display = "none"
    })

    // Exibe apenas a primeira caixa de entrada
    document.querySelector(".caixa1").style.display = "flex"

    return
  }

  if (mensagem.innerText === "Digite o ano:") {
    if (digito1 == "") {
      caixas[0].style.border = "2px solid red"
      return
    }

    // Verifica se o ano é válido
    if (verificarAno(digito1)) {
      ano = digito1
      votos.ano = ano
      console.log(`O ${ano}º ano existe.`)
    } else {
      caixas[0].style.border = "2px solid red"
      mensagemDeErro.innerText = "Ano inválido! Tente novamente."
      console.log(`O ${ano}° ano não existe.`)
      return
    }

    mensagem.innerText = "Digite a turma:" 
    mensagemDeErro.innerText = ""

    atualizarCaixas("black", "flex")
    document.querySelector(".caixa4").style.display = "none"
    limparDigitos()

    gerenciarDivCaixasEntrada(false)

    return
  }

  if (mensagem.innerText === "Digite a turma:") {
    if (digito1 == "" || digito2 == "" || digito3 == "") {
      atualizarCaixas("red")
      return
    }

    let turmaTemporaria = digito1 + digito2 + digito3

    // Verifica se a turma é válida
    if (verificarTurma(ano, turmaTemporaria)) {
      turma = turmaTemporaria
      votos.turma = turma
      console.log(`A turma ${turma} existe no ${ano}º ano.`)
    } else {
      atualizarCaixas("red")

      mensagemDeErro.innerText = "Turma inválida! Tente novamente."
      console.log(`A turma ${turma} não existe no ${ano}º ano .`)
      return
    }

    atualizarCaixas("black", "flex")
    limparDigitos()

    mensagem.innerText = "Digite o número do seu candidato:"

    gerenciarDivCaixasEntrada(false)

    console.log(candidatosPorTurma[ano][turma])

    mensagemDeErro.innerText = ""

    return
  }

  if (mensagem.innerText === "Digite o número do seu candidato:") {
    if (digito1 == "" || digito2 == "" || digito3 == "" || digito4 == "") {
      atualizarCaixas("red")
      return
    }

    voto = digito1 + digito2 + digito3 + digito4

    // Verifica se o número do candidato é válido
    if (verificarNumeroCandidato(ano, turma, voto)) {
      votos.resultados.push(voto)
      console.log(
        `O número do candidato ${voto} existe na turma ${turma} do ${ano}º ano.`
      )
    } else {
      atualizarCaixas("red")

      mensagemDeErro.innerText = "Número inválido! Tente novamente."
      console.log(
        `O número do candidato ${voto} não existe na turma ${turma} do ${ano}º ano.`
      )
      return
    }

    atualizarCaixas("black")
    limparDigitos()

    mensagem.innerText = "VOTO CONFIRMADO"

    tocarAudio(audioConfirmacaoVoto)

    gerenciarDivDeCandidatos(true)
    gerenciarDivCaixasEntrada(true)

    mensagemDeErro.innerText = ""

    // Após 2 segundos, restaura o estado para próxima votação
    setTimeout(function () {
      atualizarCaixas("black", "flex")
      limparDigitos()

      mensagem2.innerHTML = ""
      mensagem.innerText = "Digite o número do seu candidato:"

      gerenciarDivDeCandidatos(true)
      gerenciarDivCaixasEntrada(false)

      console.log(candidatosPorTurma[ano][turma])

      mensagemDeErro.innerText = ""
    }, 2000) // 2000 milissegundos = 2 segundos

    return
  }

  if (mensagem.innerText == "FIM DA VOTAÇÃO") {
    atualizardigitos()

    // Verifica se foi digitado '2' para reiniciar a votação
    if (digito1 == "2") {
      if (
        mensagemDeErro.innerText ==
          "Erro: Não é possível gerar o PDF sem fornecer o ano e a turma. Digite 2 para reiniciar." ||
        mensagem2.innerHTML ==
          "Digite <strong>1</strong> para gerar o PDF ou <strong>2</strong> para reiniciar"
      ) {
        reiniciarVotacao()
        return
      }
    }

    if (digito1 == "3") {
      if (
        mensagemDeErro.innerText ==
        "Erro: Não é possível gerar o PDF sem fornecer a turma. Digite 3 se quiser voltar."
      ) {
        mensagem.innerText = "Digite a turma:"
        mensagem2.innerHTML = ""
        mensagemDeErro.innerText = ""

        atualizarCaixas("black", "flex")
        document.querySelector(".caixa4").style.display = "none"
        limparDigitos()

        gerenciarDivCaixasEntrada(false)

        return
      }

      if (
        mensagem2.innerHTML ==
        "Digite <strong>1</strong> para gerar o PDF, <strong>2</strong> para reiniciar a votação ou <strong>3</strong> para retornar à votação."
      ) {
        // Restaura o estado para próxima votação
        atualizarCaixas("black")
        limparDigitos()

        gerenciarDivDeCandidatos(true)
        gerenciarDivCaixasEntrada(true)

        mensagemDeErro.innerText = ""

        atualizarCaixas("black", "flex")
        limparDigitos()

        mensagem2.innerHTML = ""
        mensagem.innerText = "Digite o número do seu candidato:"

        gerenciarDivDeCandidatos(true)
        gerenciarDivCaixasEntrada(false)

        console.log(candidatosPorTurma[ano][turma])

        mensagemDeErro.innerText = ""

        return
      }
    }

    if (ano == "") {
      mensagemDeErro.innerText =
        "Erro: Não é possível gerar o PDF sem fornecer o ano e a turma. Digite 2 para reiniciar."
      caixas[0].style.border = "2px solid red"
      return
    }

    if (turma == "") {
      mensagemDeErro.innerText =
        "Erro: Não é possível gerar o PDF sem fornecer a turma. Digite 3 se quiser voltar."

      caixas[0].style.border = "2px solid red"
      return
    }

    if (digito1 == "") {
      caixas[0].style.border = "2px solid red"
      return
    }

    atualizarCaixas("black")

    if (digito1 == "1") {
      gerarPDF()
      reiniciarVotacao()
    } else {
      caixas[0].style.border = "2px solid red"
      return
    }
  }
}

// Função para votar em branco
function votarBranco() {
  if (mensagem.innerText === "Digite o número do seu candidato:") {
    voto = "Branco"
    votos.resultados.push(voto)

    atualizarCaixas("black")
    limparDigitos()

    mensagem.innerText = "VOTO CONFIRMADO"

    audioConfirmacaoVoto.currentTime = 0 // Reseta o áudio, se ele estiver tocando
    audioConfirmacaoVoto.play()

    gerenciarDivDeCandidatos(true)
    gerenciarDivCaixasEntrada(true)

    mensagemDeErro.innerText = ""

    // Após 2 segundos, restaura o estado para próxima votação
    setTimeout(function () {
      atualizarCaixas("black", "flex")
      limparDigitos()

      mensagem2.innerHTML = ""
      mensagem.innerText = "Digite o número do seu candidato:"

      gerenciarDivDeCandidatos(true)
      gerenciarDivCaixasEntrada(false)

      console.log(candidatosPorTurma[ano][turma])

      mensagemDeErro.innerText = ""
    }, 2000) // 2000 milissegundos = 2 segundos

    return
  }
}

// Função para verificar se um número de candidato existe em uma turma de um determinado ano
function verificarNumeroCandidato(ano, turma, numero) {
  for (let i = 0; i < candidatosPorTurma[ano][turma].length; i++) {
    if (candidatosPorTurma[ano][turma][i].numero === numero) {
      return true
    }
  }
  return false
}

// Função para verificar se um determinado ano existe
function verificarAno(ano) {
  return candidatosPorTurma.hasOwnProperty(ano)
}

// Função para verificar se uma turma existe em um determinado ano
function verificarTurma(ano, turmaTemporaria) {
  return candidatosPorTurma[ano].hasOwnProperty(turmaTemporaria)
}

// Função para reiniciar as variáveis e elementos da votação
function reiniciarVotacao() {
  mensagem.innerText = 'Aperte "Confirma" para iniciar a votação!'
  mensagem2.innerHTML = ""
  mensagemDeErro.innerText = ""

  atualizarCaixas("black")

  gerenciarDivDeCandidatos(true)
  gerenciarDivCaixasEntrada(true)

  limparDigitos()

  votos = {
    ano: "",
    turma: "",
    resultados: [],
  }

  ano = ""
  turma = ""
}

// Função para gerar um PDF com os resultados da votação
function gerarPDF() {
  // Recuperar os dados da votação atual
  let anoAtual = votos.ano
  let turmaAtual = votos.turma
  let candidatosVotacao = candidatosPorTurma[anoAtual][turmaAtual]
  let resultados = votos.resultados
  let contagemVotosVálidos = []
  let qtdVotosBrancos = 0
  let qtdTotalVotos = 0
  let data = new Date()
  let meninasVotadas = []
  let meninosVotados = []
  let meninasMaisVotadas = []
  let meninosMaisVotados = []

  // Elemento temporário para o conteúdo do PDF
  let conteudoHTML = document.createElement("div")
  conteudoHTML.style.display = "flex"
  conteudoHTML.style.flexDirection = "column"
  conteudoHTML.style.alignItems = "center"
  conteudoHTML.style.justifyContent = "center"
  conteudoHTML.style.padding = "2em"
  conteudoHTML.style.fontWeight = "500"

  // Adicionar título ao PDF
  let titulo = document.createElement("h1")
  titulo.textContent = `Eleição ${anoAtual}° ano, turma ${turmaAtual}`
  conteudoHTML.appendChild(titulo)

  // Adicionar ao PDF a data e a hora em que ele foi gerado
  let dataFormatada = document.createElement("p")
  dataFormatada.textContent = `Data: ${data.toLocaleString()}`
  conteudoHTML.appendChild(dataFormatada)
  conteudoHTML.innerHTML += "<br>"
  conteudoHTML.innerHTML += "<br>"

  // Adicionar lista com todos os candidatos
  let subtitulo1 = document.createElement("h2")
  subtitulo1.textContent = "Candidatos:"
  conteudoHTML.appendChild(subtitulo1)

  let listaCandidatos = document.createElement("ol")
  candidatosVotacao.forEach((candidato, index) => {
    let listItem = document.createElement("li")
    listItem.innerHTML = `<strong>Nome:</strong> ${candidato.nome}, <strong>Número:</strong> ${candidato.numero}`
    listaCandidatos.appendChild(listItem)
  })
  conteudoHTML.appendChild(listaCandidatos)

  conteudoHTML.innerHTML += "<br>"
  conteudoHTML.innerHTML += "<br>"

  // Contagem de votos válidos e brancos
  candidatosVotacao.forEach((candidato, index) => {
    let qtdVotos = 0

    resultados.forEach((resultado) => {
      if (candidato.numero === resultado) {
        qtdVotos++
        qtdTotalVotos++

        // Verificar o sexo do candidato e adicioná-lo ao vetor apropriado
        if (candidato.sexo === "F") {
          meninasVotadas.push(candidato)
        } else if (candidato.sexo === "M") {
          meninosVotados.push(candidato)
        }
      }
    })

    contagemVotosVálidos.push(qtdVotos)
  })

  resultados.forEach((resultado) => {
    if (resultado === "Branco") {
      qtdVotosBrancos++
      qtdTotalVotos++
    }
  })

  // Adicionar estatíticas da votação ao PDF
  let qtdCandidatos = candidatosVotacao.length

  let subtitulo2 = document.createElement("h2")
  subtitulo2.textContent = "Votos:"
  conteudoHTML.appendChild(subtitulo2)

  for (let i = 0; i < qtdCandidatos; i++) {
    let resultadoCandidato = document.createElement("p")
    resultadoCandidato.innerHTML = `<strong>Número de votos do candidato ${
      i + 1
    }:</strong> ${contagemVotosVálidos[i]}`
    conteudoHTML.appendChild(resultadoCandidato)
  }

  let resultadoBranco = document.createElement("p")
  resultadoBranco.innerHTML = `<strong>Número de votos brancos:</strong> ${qtdVotosBrancos}`
  conteudoHTML.appendChild(resultadoBranco)

  let resultadoTotal = document.createElement("p")
  resultadoTotal.innerHTML = `<strong>Número total de votos:</strong> ${qtdTotalVotos}`
  conteudoHTML.appendChild(resultadoTotal)

  conteudoHTML.innerHTML += "<br>"
  conteudoHTML.innerHTML += "<br>"

  // Adicionar mais votados ao PDF
  let subtitulo3 = document.createElement("h2")
  subtitulo3.textContent = "Mais votados:"
  conteudoHTML.appendChild(subtitulo3)

  let candidatoslistados = []

  // Encontrar o número máximo de votos de cada sexo
  let maxVotosMeninas = 0
  let maxVotosMeninos = 0

  candidatosVotacao.forEach((candidato) => {
    if (candidato.sexo === "F") {
      let indiceCandidata = candidatosVotacao.indexOf(candidato)
      if (contagemVotosVálidos[indiceCandidata] > maxVotosMeninas) {
        maxVotosMeninas = contagemVotosVálidos[indiceCandidata]
      }
    } else if (candidato.sexo === "M") {
      let indiceCandidato = candidatosVotacao.indexOf(candidato)
      if (contagemVotosVálidos[indiceCandidato] > maxVotosMeninos) {
        maxVotosMeninos = contagemVotosVálidos[indiceCandidato]
      }
    }
  })

  // Encontrar as meninas mais votadas
  candidatosVotacao.forEach((candidato, index) => {
    if (
      candidato.sexo === "F" &&
      contagemVotosVálidos[index] === maxVotosMeninas
    ) {
      meninasMaisVotadas.push(candidato)
    }
  })

  // Encontrar os meninos mais votados
  candidatosVotacao.forEach((candidato, index) => {
    if (
      candidato.sexo === "M" &&
      contagemVotosVálidos[index] === maxVotosMeninos
    ) {
      meninosMaisVotados.push(candidato)
    }
  })

  // Exibir menina(s) mais votada(s)
  let subsubtitulo1 = document.createElement("h4")
  subsubtitulo1.textContent = "Menina(s) mais votada(s):"
  conteudoHTML.appendChild(subsubtitulo1)

  let listaMeninas = document.createElement("ol")
  meninasMaisVotadas.forEach((menina, index) => {
    // Verificar se a menina já foi incluída na listagem
    if (!candidatoslistados.includes(menina)) {
      let meninaFinalista = document.createElement("li")
      meninaFinalista.textContent = `${menina.nome}`
      listaMeninas.appendChild(meninaFinalista)

      candidatoslistados.push(menina)
    }
  })
  conteudoHTML.appendChild(listaMeninas)

  conteudoHTML.innerHTML += "<br>"

  // Exibir menina(s) mais votada(s)
  let subsubtitulo2 = document.createElement("h4")
  subsubtitulo2.textContent = "Menino(s) mais votados(s):"
  conteudoHTML.appendChild(subsubtitulo2)

  let listaMeninos = document.createElement("ol")
  meninosMaisVotados.forEach((menino, index) => {
    // Verificar se o menino já foi incluído na listagem
    if (!candidatoslistados.includes(menino)) {
      let meninoFinalista = document.createElement("li")
      meninoFinalista.textContent = `${menino.nome}`
      listaMeninos.appendChild(meninoFinalista)

      candidatoslistados.push(menino)
    }
  })
  conteudoHTML.appendChild(listaMeninos)

  // Gerar o nome do arquivo com base no ano, turma e data
  let nomeArquivo = `resultado_eleicao_${anoAtual}ano_turma${turmaAtual}_dia${data.getDate()}.pdf`

  // Gerar o PDF a partir do conteúdo HTML
  html2pdf().from(conteudoHTML).save(nomeArquivo)
}
