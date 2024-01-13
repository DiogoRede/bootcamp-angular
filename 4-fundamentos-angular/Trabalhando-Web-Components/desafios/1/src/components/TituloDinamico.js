class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});

        /*
            ETAPAS:
                - base do component
                - estilizar component
                = enviar pra shadow
        */

        // ETAPA 1
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute('titulo');

        // ETAPA 2
        const style = document.createElement('style');
        style.textContent = `
            h1{
                color: blue;
            }
        `;

        // ETAPA 3
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define('titulo-dinamico', TituloDinamico);