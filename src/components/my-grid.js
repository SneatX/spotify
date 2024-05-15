import { LitElement, html, css } from "lit";
import { newMusic } from "./my-newMusic";

export class myGrid extends LitElement {

    static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
    .main{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 80px 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
    }

    .main__aside{
        background: #FAFAFA;
        padding: 10px;
        display: grid;
        grid-template-rows: 130px 1fr 130px
    }
    .aside__profile{
        border-bottom: 1px solid gray
    }
    .aside__buttons{
        
    }
    .aside__exit{
        
    }

    .main__section1{
        background: #FFFFFF;
        padding: 1vw;  
    }

    .section1__title{
        font-size: 3vw;
        text-wrap: wrap;
        font-family: "Poppins", sans-serif;
        font-weight: 900;
        font-style: normal;
        margin: .5vw 0 1.5vw;
        color: #333333;
    }
    .section1__title >*{
        margin: 0;
    }

    .main__section2{
        background: #FAFAFA;
    }

    .main__section3{
        background: #FFFFFF;
    }
    @media (max-width: 849px){
        .main{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 80px;
        }
        .aside__profile{
            display: none
        }
        .aside__exit{
            display: none
        }

        .main__section1{
            display: none
        }
        .main__section2{
            display: none
        }
    }
    `

    render(){
        return html`
        <main class="main">
            <aside class="main__aside">
                <article class="aside__profile"></article>
                <article class="aside__buttons">
                </article>
                <article class="aside__exit"></article>
            </aside>
            <section class="main__section1">
                <article class ="section1__title">
                    <h1>Discover</h1>
                    <h1>New music</h1>
                </article>
                <new-music></new-music> <!--Modulo de nueva musica-->
            </section>
            <section class="main__section2"></section>
            <section class="main__section3"></section>
        </main>
        `
    }
}

customElements.define("new-music", newMusic)


