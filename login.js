class Login{
    static logado = false;
    static nome = null;
    static acesso = null;
    static aberto = false;
    static callbackOk = null;
    static callbackNaoOk = null;

    static login = (callbackOk, callbackNaoOk, imagem = "./logo.png", cor = "048") => {
        if(this.aberto) return;
        this.aberto = true;

        this.callbackOk = callbackOk;
        this.callbackNaoOk = callbackNaoOk;

        const estiloCSS =
        '.fundoLogin{ display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box; } ' +
        '.baseLogin{ display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit; } ' +
        '.elementosLogin{ display: flex; justify-content: center; align-items: flex-start; flex-direction: column; width: 50%; background-color: #bbb; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit; } ' +
        '.logoLogin{ display: flex; justify-content: center; align-items: center; width: 50%; background-color: #999; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; } ' +
        '.logoLogin img{ width: 90%; box-sizing: inherit; } ' +
        '.campoLogin{ display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 20px; } ' +
        '.campoLogin label{ font-size: 18px; } ' +
        '.campoLogin input{ font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px; } ' +
        '.botoesLogin{ display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit; } ' +
        '.botoesLogin button{ cursor: pointer; background-color: #' + cor + '; color: #fff; border-radius: 5px; padding: 10px; width: 100px; }' ;
        const styleEstilo = window.document.createElement("style");
        styleEstilo.setAttribute("id", "idEstiloLogin")
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = estiloCSS;
        window.document.head.appendChild(styleEstilo);

        const corpo = window.document.body;

        // <div id="fundoLogin" class="fundoLogin"></div>
        const fundoLogin = window.document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        corpo.prepend(fundoLogin);

        // <div id="baseLogin" class="baseLogin">
        const baseLogin = window.document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);

        // <div id="elementosLogin" class="elementosLogin">
        const elementosLogin = window.document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);

        // <div class="campoLogin"> (1)
        const campoLogin1 = window.document.createElement("div");
        campoLogin1.setAttribute("id", "campoLoginUserName");
        campoLogin1.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLogin1);

        // <label>Usuário</label>
        const label1 = window.document.createElement("label");
        label1.innerHTML = "Usuário";
        campoLogin1.appendChild(label1);

        // <input type="text" name="fUsuario" id="fUsuario" autofocus>
        const input1 = window.document.createElement("input");
        input1.setAttribute("type", "text");
        input1.setAttribute("name", "fUsuario");
        input1.setAttribute("id", "fUsuario");
        input1.autofocus = true;
        campoLogin1.appendChild(input1);

        // <div class="campoLogin"> (2)
        const campoLogin2 = window.document.createElement("div");
        campoLogin2.setAttribute("id", "CampoLoginSenha");
        campoLogin2.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLogin2);

        // <label>Senha</label>
        const label2 = window.document.createElement("label");
        label2.innerHTML = "Senha";
        campoLogin2.appendChild(label2);

        // <input type="password" name="fSenha" id="fSenha">
        const input2 = window.document.createElement("input");
        input2.setAttribute("type", "password");
        input2.setAttribute("name", "fSenha");
        input2.setAttribute("id", "fSenha");
        campoLogin2.appendChild(input2);

        // <div class="botoesLogin"> (2)
        const botoesLogin = window.document.createElement("div");
        botoesLogin.setAttribute("id", "botoesLogin");
        botoesLogin.setAttribute("class", "botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        // <button id="btnLogin">Login</button>
        const btnLogin = window.document.createElement("button");
        btnLogin.setAttribute("id", "btnLogin");
        btnLogin.innerHTML = "Login";
        btnLogin.addEventListener("click", (evt) => {
            this.verificarLogin();
        });
        botoesLogin.appendChild(btnLogin);

        // button id="btnCancelar">Cancelar</button>
        const btnCancelar = window.document.createElement("button");
        btnCancelar.setAttribute("id", "btnCancelar");
        btnCancelar.innerHTML = "Cancelar";
        btnCancelar.addEventListener("click", (evt) => {
            this.fechar();
        });
        botoesLogin.appendChild(btnCancelar);

        // <div id="logoLogin" class="logoLogin">
        const logoLogin = window.document.createElement("div");
        logoLogin.setAttribute("id", "logoLogin");
        logoLogin.setAttribute("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        // <img src="./logo.png" title="CFB Cursos">
        const logo = window.document.createElement("img");
        logo.setAttribute("src", imagem);
        logo.setAttribute("title", "CFB Cursos");
        logoLogin.appendChild(logo);

/*  OBJETIVO DO CÓDIGO QUE CRIA OS ELEMENTOS HTML
    <div id="fundoLogin" class="fundoLogin"> OK
        <div id="baseLogin" class="baseLogin"> OK
            <div id="elementosLogin" class="elementosLogin"> OK
                <div class="campoLogin"> OK
                    <label>Usuário</label> OK
                    <input type="text" name="fUsuario" id="fUsuario" autofocus> OK
                </div>
                <div class="campoLogin"> OK
                    <label>Senha</label> OK
                    <input type="password" name="fSenha" id="fSenha"> OK
                </div>
                <div class="botoesLogin"> OK
                    <button id="btnLogin">Login</button> OK
                    <button id="btnCancelar">Cancelar</button> OK
                </div>
            </div>
            <div id="logoLogin" class="logoLogin"> OK
                <img src="./logo.png" title="CFB Cursos"> OK
            </div>
        </div>
    </div> */

    }

    static verificarLogin = () => {
        const usuario = window.document.getElementById("fUsuario").value;
        const senha = window.document.getElementById("fSenha").value;

        // https://cfbcursos--ricardo-ericke1.repl.co/?matricula=123&senha=321
        const endPointFinal = `https://cfbcursos--ricardo-ericke1.repl.co/?matricula=${usuario}&senha=${senha}`;

        fetch(endPointFinal)
        .then(res => res.json())
        .then(res => {
            if(res){
                this.logado = true;
                this.nome = res.nome;
                this.acesso = res.acesso;
                this.callbackOk();
                this.fechar();
            } else{
                this.logado = false;
                this.nome = null;
                this.acesso = null;
                this.callbackNaoOk();
            }
        })
    }

    static fechar = () => {
        const idEstiloLogin = window.document.getElementById("idEstiloLogin");
        const fundoLogin = window.document.getElementById("fundoLogin");
        idEstiloLogin.remove();
        fundoLogin.remove();
        this.aberto = false;
    }
}

export { Login };