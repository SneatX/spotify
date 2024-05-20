import { LitElement, html, css } from "lit";
import { newMusic } from "./my-newMusic";
import { MyTrackList } from "./my-trackList";

export class myGrid extends LitElement {

    static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
    *{
        margin: 0;
    }
    .main{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: .2fr 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
        overflow: hidden;
        font-family: "Poppins", sans-serif;

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

    .main__section1{
        background: #FFFFFF;
        padding: 1vw;  
        height: 100vh;
    }

    .section1__title{
        font-size: 3vw;
        text-wrap: wrap;
        font-weight: 900;
        font-style: normal;
        margin: .5vw 0 1.5vw;
        color: #333333;
    }
    .section1__title >*{
        margin: 0;
    }
    .youMayLike{
        height: 100%
    }
    .youMayLike__title{
        margin-top: 1vw;
    }

    .main__section2{
        background: #FAFAFA;
    }

    .main__section3{
        background: #FFFFFF;
        height: 100vh;
        padding: 1vw;
    }

    .trackList{
        padding: 0px 10px;
    }

    .tracklist__title{
        font-size: 3vw;
        margin: 0.5vw 0px;
    }
    .trackList__icons{
        margin: 0.5vw 0px;
    }
    .trackList__icons > *{
        width: 30px;
        margin-right: 20px;
    }
    .tracklist__subtitle{
        font-size: 1.5vw;
        margin: 0.5vw 0px;
        color: gray;
    }

    @media (max-width: 849px){
        .main{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 80px;
        }
        .main__aside{
            order: 2;
            display: flex;
            background: #FFFFFF;
        }
        .aside__profile,
        .aside__exit {
            display: none;
        }

        .main__section1,
        .main__section3 {
            display: none;
        }

        .main__section2{
            background: #FAFAFA
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
                <article class="youMayLike">
                    <h2 class="youMayLike__title">You may like</h2>
                    <track-list></track-list><!--Modulo de lista de canciones-->
                </article>
            </section>
            <section class="main__section2"></section>
            <section class="main__section3">
                <article class="trackList">
                    <h1 class="tracklist__title">Track List</h1>
                    <div class= "trackList__icons">
                        <img src="aleatoryIcon.svg">
                        <img src="repeatIcon.svg">
                    </div>
                    <h2 class="tracklist__subtitle">Playing next</h2>
                </article>
                <track-list></track-list><!--Modulo de lista de canciones-->
            </section>
        </main>
        `
    }
}

customElements.define("new-music", newMusic)
customElements.define("track-list", MyTrackList)


