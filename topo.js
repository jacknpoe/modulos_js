// const head = window.document.head
const body = window.document.body

// const estilo = '<link rel="stylesheet" type="text/css" href="topo.css"/>'
// head.innerHTML += estilo

const estiloTopo =
    "display: flex;" +
    "justify-content: space-between;" +
    "align-items: center;" +
    "background-color: #008;"

const topo = window.document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("style", estiloTopo)
body.prepend(topo)

const estiloImgLogo =
    "width: 200px;"

const logo = 
    '<div id="logo" class="logo">' +
        '<img src="logo.png" title="CFB Cursos" style="' + estiloImgLogo + '"/>' +
    '</div>'
topo.innerHTML += logo

const login = 
    '<div id="login" class="login">' +
        '<p id="matricula">Matrícula:<span></span></p>' +
        '<p id="nome">Nome:<span></span></p>' +
    '</div>'
topo.innerHTML += login
