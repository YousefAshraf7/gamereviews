export class Display {
  constructor() {
    this.counter = 0

  }
  // display all games//
  displayAllGames(gamesData) {
    // showmore script//
    gamesData = gamesData.slice(this.counter * 20, (++this.counter) * 20)
    //////////////////
    let temp = ``;
    gamesData.forEach((ele) => {
      temp += `
            <div class="game-card col-xl-3 col-lg-4 col-md-6 col-sm-12 position-relative p-2" value=${ele.id}>
            <div class="pointer">
            <div class="card-desc p-3">
            <div class="card-img">
              <img src="${ele.thumbnail}" class="w-100" alt="" />
            </div>
            <div class="card-content d-flex justify-content-between">
              <h2>${ele.title}</h2>
              <span>free</span>
            </div>
            <p>
              ${ele.short_description}
            </p>
            <footer
              class="position-relative d-flex justify-content-between bottom-0"
            >
              <span>${ele.genre}</span>
              <span>${ele.platform}</span>
            </footer>
          </div>
            </div>
          </div>
            `
    });
    document.getElementById("allGames").innerHTML += temp
  }



  displayDetails(data) {
    let temp = `
        <div class="col-lg-4  col-sm-12">
        <img src="${data.thumbnail}" class="w-100" alt="" />
      </div>
      <div class=" content col-lg-8   col-sm-12">
        <div class="fs-4 mb-3">Title:<span class="game-name fs-4 text-white">${data.title}</span></div>
        <div>Category:<span>${data.genre}</span></div>
        <div class="my-3">Platform:<span>${data.platform}</span></div>
        <div>Status:<span>${data.status}</span></div>
        <p class="mt-3 mb-4">
          ${data.description}
        </p>
        <a href="${data.game_url}" target="_blank" >Show Game</a>
      </div>
        `
    document.querySelector(".games").classList.replace("d-block", "d-none")
    document.getElementById("showDetails").innerHTML = temp;
    this.exit()
  }
  exit() {
    document.getElementById("exit").addEventListener("click", () => {
      document.querySelector(".details").classList.replace("d-block", "d-none")
      document.querySelector(".games").classList.replace("d-none", "d-block")

    })
  }
}