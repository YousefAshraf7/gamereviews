import { Display } from "./display.module.js";
export class Details {
  constructor() {
    this.display = new Display()

  }
  // game details data //
  async gameDetails(id) {
    document.querySelector(".games").classList.replace("d-block", "d-none")
    document.querySelector(".details").classList.add("d-none")
    document.getElementById("loadingScreen").classList.replace("d-none", "d-block")
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd65bc74fc8msheecc0d68e8598d9p164c5fjsnbd1216a5a221',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const DetailsApiRequest = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    const response = await DetailsApiRequest.json()
    console.log(response)
    this.display.displayDetails(response)
    document.querySelector(".details").classList.replace("d-none", "d-block")
    document.getElementById("loadingScreen").classList.replace("d-block", "d-none")
  }

}
