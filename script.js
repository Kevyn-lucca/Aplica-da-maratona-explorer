const Resposta = document.getElementById("Resp")
const Pergunta = document.getElementById("pergunta")
const buttonP = document.getElementById("buttonPerg")
const respostas = [
    "Certeza!",
    "Não conte com isso.",
    "É decididamente assim.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Voce pode contar com isso.",
    "Melhor não dizer agora!",
    "Minhas fontes dizem não.",
    "Não consigo descidir",
    "Concentre-se e pergunte novamente!",
    "mude sua perspectiva sobre esse assunto.",
    "Nunca e tarde demais para mudar.",
    "esse assunto não importa",
]



function fazerPergunta(){

    if(Pergunta.value == "") {
        Resposta.innerHTML ="Digite sua pergunta."
        return
    }

    buttonP.setAttribute("disabled", true)

    const pergunta = "<div>" + Pergunta.value + "</div>"

    const totalRespostas = respostas.length
    const NumeroAle = Math.floor(Math.random() * totalRespostas)
    Resposta.innerHTML = pergunta + respostas[NumeroAle]

    Resposta.style.opacity = 1;

    setTimeout(function()
    {
        Resposta.style.opacity = 0;
        buttonP.removeAttribute("disabled")
    }, 4000)
    
}