const yesBtnEl = document.getElementById("yesBtn");
const noBtnEl = document.getElementById("noBtn");
const kittyFlowerImgEl = document.getElementById("kittyFlowerImage");
const kittySadImgEl = document.getElementById("kittySadImage");
const vidsContainerEl = document.getElementById("vidsContainer");
const heading1El = document.getElementById("heading1");

const valentineColors = [
  "#FFD1DC",
  "#FFB6C1",
  "#FFC8A2",
  "#FBE4D8",
  "#E6E6FA",
  "#D8BFD8",
  "#E0BBE4",
  "#FFDFD3",
  "#FFF0F5",
  "#FADADD",
  "#FAE1DD",
  "#F9E2E7",
  "#FEECE9",
  "#F6E6CB",
  "#F3D1F4",
  "#F4D8CD",
  "#FFE5EC",
  "#EAD5E6",
  "#E3DFFD",
  "#FFF5E1" 
];

const noBtnTexts = [
  "Wait 😭 don’t press this!",
  "No?? Please reconsider 🥺👉👈",
  "You sure about that...? 😢",
  "Omg please don’t break my heart 💔",
  "Nuh-uh 😭 try again pretty please?",
  "You wouldn’t do that to me right 😭",
  "OUCH 😭 my heart just shattered",
  "That’s illegal 😭 pick yes instead!",
  "No??? What about my feelings 🥺",
  "But… I already told my mom about us 😭",
  "Bro… pls 😭 just say yes 😩",
  "You can’t say no, it’s not allowed 😭",
  "Think about the cute dates we’ll have 🥺",
  "Wait 😭 give me one more chance!",
  "What if I bring food 😭🍗",
  "If you click this I’ll cry fr 😭",
  "I’ll rewrite the code so you can’t say no 😤",
  "Even your heart said yes 😭💖",
  "Fine… but I’ll still love you 😭",
  "Please 🥺 I’ll be the best Valentine ever 😭"
];

yesBtnEl.addEventListener("click", () => {
    const noBtnDupe = document.getElementById("noBtnDupe");

    if (kittySadImgEl.style.display != "none") kittySadImgEl.style.display = "none";
    if (noBtnEl.style.display != "none") noBtnEl.style.display = "none";
    if (noBtnDupe) if (noBtnDupe.style.display != "none") noBtnDupe.style.display = "none";
    if (yesBtnEl.style.display != "none") yesBtnEl.style.display = "none";

    heading1El.innerText = "YAYYYYYYY!!! YOU'RE OFFICIALLY MY VALENTINE!!! 💘";

    setInterval(() => {
        kittyFlowerImgEl.src = `./images/flower-kitty/${currentKittyFlower}.jpg`;
        if (currentKittyFlower >= 8) currentKittyFlower = 1; else currentKittyFlower++;
    }, 500);

    setInterval(() => {
        const randColor = valentineColors[Math.floor(Math.random() * valentineColors.length)];
        document.body.style.backgroundColor = randColor
    }, 1000);

    kittyFlowerImgEl.classList.add("inf-360-ani");
    vidsContainerEl.style.display = "inline-flex";
    const videoEls = Array.from(vidsContainerEl.getElementsByTagName("video"));
    for (const vid of videoEls) {
        vid.play();
    }
});

let currentSadKitty = 1;
let currentKittyFlower = 1;
let currentFontSize = 18;
noBtnEl.addEventListener("click", () => {
    currentKittyFlower++;

    kittyFlowerImgEl.src = `./images/flower-kitty/${currentKittyFlower}.jpg`;

    yesBtnEl.innerText += "!";
    if (kittySadImgEl.style.display == "none") kittySadImgEl.style.display = "block";
    if (noBtnEl.style.display != "none") noBtnEl.style.display = "none";
    if (document.getElementById("noBtnDupe")) { return; }
    createNewNoBtn();
});

function createNewNoBtn() {
    const noBtn = document.createElement("button");
    const {height, width} = noBtn.getBoundingClientRect();
    noBtn.type = "button";
    noBtn.classList.add("no-btn");
    noBtn.id = "noBtnDupe";
    noBtn.style.position = "absolute";
    noBtn.style.left = `${Math.random() * (window.innerWidth - width)}px`;
    noBtn.style.top = `${Math.random() * (window.innerHeight - height)}px`;
    noBtn.innerText = noBtnTexts[Math.floor(Math.random() * noBtnTexts.length)];
    noBtn.addEventListener("click", () => {

        const {height, width} = noBtn.getBoundingClientRect();

        yesBtnEl.innerText += "!";
        currentFontSize = currentFontSize + 5;
        
        if (currentSadKitty >= 10) currentSadKitty = 1; else currentSadKitty++;
        if (currentKittyFlower >= 8) currentKittyFlower = 1; else currentKittyFlower++;
        
        kittyFlowerImgEl.src = `./images/flower-kitty/${currentKittyFlower}.jpg`;
        kittySadImgEl.src = `./images/sad-kitty/${currentSadKitty}.jpg`;
        
        noBtn.innerText = noBtnTexts[Math.floor(Math.random() * noBtnTexts.length)];
        noBtn.style.left = `${Math.random() * (window.innerWidth - width)}px`;
        noBtn.style.top = `${Math.random() * (window.innerHeight - height)}px`;

        yesBtnEl.style.fontSize = `${currentFontSize}px`;
    });

    document.body.insertBefore(noBtn, document.getElementsByTagName("script")[0]);
}