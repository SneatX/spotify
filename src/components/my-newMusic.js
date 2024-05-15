
import { LitElement, html, css } from "lit"
import { sortSongsForPopularity, releaseYear} from "../modules/musicData.js"

export class newMusic extends LitElement {
    static properties = {
        container: { typeof: String },
        imgSrc: { typeof: String },
        textSong: { typeof: String },
        textArtist: { typeof: String },
        dataMusic: { typeof: Array }
    }
    constructor() {
        super()
        this.container = "container"
        this.imgSrc = ""
        this.textSongClass = "ArtistSong"
        this.textArtistClass = "ArtistCompositor"
        this.dataMusic = sortSongsForPopularity()
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            overflow-x: scroll;
            justify-content: space-around;
            flex-direction: row;
            flex: 1; 
            gap: 5px;
            width: 25vw;
            height: 25vw;
        }
        .container::-webkit-scrollbar {
            display:none
        }
        .boxMusic {
            display: flex;
            flex-direction: column;
            background: #fff;
            width: 48%;
            height: 60%;
            cursor: pointer;
        }
        .boxMusic__img { 
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        .boxMusic__text { 
            width: 95%; 
            height: 25%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            padding: 0 5px; 
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-y: hidden;
        }
        .boxMusic__text::-webkit-scrollbar{
            display: none; 
        }
        .boxMusic__text p {
            font-size: 0.8em;
            text-transform: capitalize;
            font-weight: 600;
        }
        .boxMusic__text p small {
            text-transform: capitalize;
            font-weight: 480;
            color: #4F4F4F;
        }
        `
    render() {
        return html`
        <h2 class="newMusic__title">Top-chart</h2>
            <div class=${this.container}>
                ${this.dataMusic.map(musicItem => html`
                <div class="boxMusic">
                    <img src=${musicItem.album.images[1].url} class="boxMusic__img" />
                    <div class="boxMusic__text">
                        <p class="${this.textSongClass}">${musicItem.name} <br><small class="${this.textArtistClass}">${musicItem.artists[0].name} ${releaseYear(musicItem)}</small></p>
                    </div>
                </div>
            `)}
            </div>
        `;
    }

}
