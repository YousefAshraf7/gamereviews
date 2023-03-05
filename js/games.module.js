import { Details } from "./details.module.js";
import { Display } from "./display.module.js";
export class Games {
  constructor() {
    this.display = new Display()
    this.getDetails = new Details()
    this.alllGames = []
    this.display.counter = 0
    this.showMore()
    // navlink events //
    document.querySelectorAll(".nav-link").forEach((ele) => {
      ele.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        ele.classList.add("active")
        this.display.counter = 0
        document.getElementById("allGames").innerHTML = ""
        this.allGames(ele.innerHTML)
      })
    })
  }
  // fetching all games api and calling methods //
  async allGames(category) {
    let categoryValue = category ? `?category=${category}` : ""
    document.querySelector(".games").classList.replace("d-block", "d-none")
    document.getElementById("loadingScreen").classList.replace("d-none", "d-block")
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd65bc74fc8msheecc0d68e8598d9p164c5fjsnbd1216a5a221',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }
    const gamesApiReq = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games` + categoryValue, options)
    const response = await gamesApiReq.json()
    this.alllGames = response
    this.display.displayAllGames(this.alllGames)
    this.check()
    this.cardClick()
    document.getElementById("loadingScreen").classList.replace("d-block", "d-none")
    document.querySelector(".games").classList.replace("d-none", "d-block")
  }
  // showmore //
  showMore() {
    document.getElementById("showMore").addEventListener("click", () => {
      this.display.displayAllGames(this.alllGames)
      this.check()
    })
  }
  // displaing game details //
  cardClick() {
    document.querySelectorAll(".game-card").forEach((ele) => {
      ele.addEventListener("click", () => {
        this.getDetails.gameDetails(ele.getAttribute("value"))
      })
    })
  }
  // display showmore btn //
  check() {
    if (this.display.counter * 20 <= this.alllGames.length) {
      document.getElementById("showMore").classList.replace("d-none", "d-block")
    } else {
      document.getElementById("showMore").classList.replace("d-block", "d-none")
    }
  }
}