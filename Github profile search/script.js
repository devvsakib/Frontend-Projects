const url = "https://api.github.com/users/"

const searchInput = document.querySelector("#search-bar-text")
const searchBtn = document.querySelector("#submit-search")

const devName = document.querySelector("#dev-name")
const devJoin = document.querySelector("#joining-date")

const devUsername = document.querySelector("#username-link")

const devBio = document.querySelector(".dev-bio")

const devRepos = document.querySelector("#repo-count")
const devFollowing = document.querySelector("#following-count")
const devFollowers = document.querySelector("#followers-count")

const devLocation = document.querySelector("#dev-location")
const devWebsite = document.querySelector("#dev-website")
const devTwitter = document.querySelector("#dev-twitter")
const devCompany = document.querySelector("#dev-company")

const devImg = document.querySelector("#profile-photo")
const theme = document.querySelector("#theme-slider")

const root = document.documentElement.style

const months = ["Jan", 
                "Feb", 
                "Mar", 
                "Apr", 
                "May", 
                "Jun", 
                "Jul", 
                "Aug", 
                "Sep", 
                "Oct", 
                "Nov", 
                "Dec"]




searchBtn.addEventListener('click', () => {
    if(searchInput.value !== "")
        fetchData(url + searchInput.value)
    else 
    searchInput.placeholder = "Enter a valid username ..."
})






searchInput.addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }
    if (e.key == "Enter") {
        if (searchInput.value !== "") {
          fetchData(url + searchInput.value);
        }
      }
    }
 );






function fetchData(gitUrl) {
    fetch(gitUrl)
    .then((result) => result.json())
    .then((data) => {    
        updateData(data)
    })
}






function updateData(data) {
    devName.textContent = `${data.name}`
    devUsername.textContent = `@${data.login}`
    devUsername.href = `${data.html_url}`

    devBio.textContent = `${data.bio}`

    if (data.name === undefined) {
        devRepos.textContent = 0
        devFollowing.textContent = 0
        devFollowers.textContent = 0
    } else {
        devRepos.textContent =`${data.public_repos}`
        devFollowing.textContent =`${data.following}`
        devFollowers.textContent =`${data.followers}`
    }
    
    devLocation.textContent = `${data.location}`
    devWebsite.textContent = `${data.email}`
    devTwitter.textContent = `${data.twitter_username}`
    devCompany.textContent = `${data.company}`
    devImg.src = `${data.avatar_url}`
    setdate(data)
}
function setdate(data) {
    var date = new Date(`${data.created_at}`);
    devJoin.textContent = `Joined ${date.getDate()} ${months[date.getMonth() - 1]} ${date.getFullYear()}`
}







theme.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        applyLightTheme()
    } else {
        applyDarkTheme()
    }
})







function applyLightTheme() {
    root.setProperty("--dark-bg", "#F6F8FF")
    root.setProperty("--dark-bg-content", "#FFFFFF")
    root.setProperty("--dark-text", "#000000")
    root.setProperty("--dark-text-alt", "#1E2A47")
    root.setProperty("--dark-shadow", "#BDCAE5")
}
function applyDarkTheme() {
    root.setProperty("--dark-bg", "#141D2F")
    root.setProperty("--dark-bg-content", "#1E2A47")
    root.setProperty("--dark-text", "#FFFFFF")
    root.setProperty("--dark-text-alt", "#A4A9B4")
    root.setProperty("--dark-shadow", "#1E2A47")
}
