class Cxmsg{
    static destino = null
    static divmsg = null
    static aberto = false
    static nomesBotoes = ["Ok", "Não", "Sim"]

    static mostrar = (titulo, texto, cor, tipo, comando) => {
        if(this.aberto) return
        this.destino = window.document.body
        this.titulo = titulo
        this.texto = texto
        this.cor =  cor
        this.tipo = tipo
        this.comando = comando
        this.aberto = true
        // div de fundo
        this.divmsg = window.document.createElement("div")
        const estilo_divmsg =
            'display: flex;' +
            'justify-content: center;' +
            'align-items: center;' +
            'position: absolute;' +
            'top: 0px;' +
            'left: 0px;' +
            'width: 100%;' +
            'height: 100vh;' +
            'background-color: rgba(0, 0, 0, 0.7);' +
            'z-index: 9999999999999;'     // z-index para funcionar nas aulas 141-150
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)
        // div da "janela"
        const estilo_areaCxmsg =
            'display: flex;' +
            'justify-content: flex-start;' +
            'align-items: flex-start;' +
            'flex-direction: column;' +
            'width: 300px;'
        const areaCxmsg = window.document.createElement("div")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)
        // div do cabeçalho
        const estilo_tituloCxmsg =
            'display: flex;' +
            'justify-content: flex-start;' +
            'align-items: center;' +
            'width: 100%;' +
            'background-color: ' + this.cor + ';' +
            'color: #fff;' +
            'padding: 5px;' +
            'border-radius: 5px 5px 0px 0px;'
        const tituloCxmsg = window.document.createElement("div")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
        // div da mensagem (corpo)
        const estilo_corpoCxmsg =
            'display: flex;' +
            'justify-content: flex-start;' +
            'align-items: center;' +
            'width: 100%;' +
            'background-color: #eee;' +
            'color: #000;' +
            'padding: 30px 5px;'
        const corpoCxmsg = window.document.createElement("div")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)
        // div do rodapé
        const estilo_rodapeCxmsg =
            'display: flex;' +
            'justify-content: space-around;' +
            'align-items: center;' +
            'width: 100%;' +
            'background-color: #ccc;' +
            'color: #000;' +
            'padding: 5px;' +
            'border-radius: 0px 0px 5px 5px;'
        const rodapeCxmsg = window.document.createElement("div")
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)
        // botões (a nomenclatura está assim porque foi feita em mais de uma aula)
        const estilo_btnOk =
            'background-color: ' + this.cor + ';' +
            'color: #fff;' +
            'padding: 10px 50px;' +
            'border-radius: 5px;' +
            'cursor: pointer;' +
            'text-transform: uppercase;'
        if(tipo != "sn") {  // botão OK
            const btnOk = window.document.createElement("button")
            btnOk.setAttribute("style", estilo_btnOk)
            btnOk.innerHTML = this.nomesBotoes[0]
            btnOk.autofocus = true
            btnOk.addEventListener("click", (evt) => {
                this.ocultar(true)
            })
            rodapeCxmsg.appendChild(btnOk)
        } else {    // botão NÃO
            const btnNao = window.document.createElement("button")
            btnNao.setAttribute("style", estilo_btnOk)
            btnNao.innerHTML = this.nomesBotoes[1]
            btnNao.addEventListener("click", (evt) => {
                this.ocultar(false)
            })
            rodapeCxmsg.appendChild(btnNao)
            // botão SIM
            const btnSim = window.document.createElement("button")
            btnSim.setAttribute("style", estilo_btnOk)
            btnSim.innerHTML = this.nomesBotoes[2]
            btnSim.autofocus = true
            btnSim.addEventListener("click", (evt) => {
                this.ocultar(true)
            })
            rodapeCxmsg.appendChild(btnSim)
        }
    }
 
    static ocultar = (sim) => {
        this.aberto = false
        this.divmsg.remove()
//        if(sim){
            this.comando(sim)
//        }
    }
}
export { Cxmsg }