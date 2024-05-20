
import { LitElement, html, css } from "lit"

export class newMusic extends LitElement {
    static properties = {
        imgSrc: { type: String },
        textSong: { type: String },
        textArtist: { type: String },
        dataMusic: { type: Array }
    }
    constructor() {
        super()
        this.sortSongsForPopularity();
        this.dataMusic = []
    }
    static styles = css`
        * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            overflow-x: scroll;
            justify-content: space-around;
            flex-direction: row;
            flex: 1; 
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
            width: 50%;
            height: 60%;
            cursor: pointer;
            padding: 5px;
            box-sizing: border-box;
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
            <div class="container">
                ${this.dataMusic.map(song => html`
                <div class="boxMusic">
                    <img src=${song.album.images[1].url} class="boxMusic__img" />
                    <div class="boxMusic__text">
                        <p>${song.name} <br><small>${song.artists[0].name} ${this.releaseYear(song)}</small></p>
                    </div>
                </div>
            `)}
            </div>
        `;
    }

    releaseYear(data) {
        const releaseDateFull = data.album.release_date;
        const year = new Date(releaseDateFull).getFullYear();
        return year;
    }
    

    async sortSongsForPopularity() {
        let config = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0bc6b1ceb0mshec90de4eed47d17p12cfd3jsn3dc832f8d8f0',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        let res = await fetch("https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry", config);
        let data = await res.json()
        let {tracks} = data
        tracks.sort((a, b) => b.popularity - a.popularity)
        this.dataMusic = tracks
    }

}
