class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const style = this.styles();

        const cardLeft = this.buildCardLeft();
        const cardRight = this.buildCardRight();
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        componentRoot.appendChild(style);

        return componentRoot;
    }

    buildCardRight(){
        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const imagem = document.createElement('img');
        imagem.setAttribute('width', 200);
        imagem.src = this.getAttribute('imagem-src') || "assets/photo_default.png";

        cardRight.appendChild(imagem);

        return cardRight;
    }

    buildCardLeft(){
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || "Anonymous");

        const titulo = document.createElement('a');
        titulo.href = this.getAttribute('titulo-link');
        titulo.textContent = this.getAttribute('titulo');

        const paragrafo = document.createElement('p');
        paragrafo.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(paragrafo);

        return cardLeft;
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
            .card{
                display: flex;
                flex-direction: row;
                max-width: 720px;
                justify-content: space-around;
                padding: 1rem;
                -webkit-box-shadow: 10px 10px 13px -6px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 13px -6px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 13px -6px rgba(0,0,0,0.75);
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 1rem;
            }
            
            .card_right{
                display: flex;
                justify-content: center;
                justify-items: center;
            }
            
            .card_left a{
                margin-top: 1rem;
                color: black;
                font-weight: 700;
                text-decoration: none;
                font-size: 25px;
            }
            
            .card_left span{
                font-weight: 400;
            }
            
            .card_left p{
                color: grey;
            }
            
            @media only screen and (max-width: 500px) {
                .card{
                    flex-direction: column;
                    -webkit-box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75);
                    -moz-box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75);
                    box-shadow: 3px 10px 13px -6px rgba(0,0,0,0.75);
                }
                
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);