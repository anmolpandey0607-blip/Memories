// Scroll Based NavBar is Ready
window.addEventListener("scroll", function () {
  const scrolly = window.scrollY;
  const nav2 = document.getElementsByClassName("n2content")[0];
  const before = document.getElementById("contactUs");

  if (scrolly > 225 && !document.getElementById("down_link")) {
    const download = document.createElement("a");
    download.id = "down_link";
    download.textContent = "Download";
    download.href = "#";
    download.style.cssText = `
        text-decoration: none;
        padding: 2.3vw;
        font-size: 1.35vw;
        color: grey;
    `;
    nav2.insertBefore(download, before);
  }

  const hov = document.getElementById("down_link");

  hov.addEventListener("mouseenter", function () {
    hov.style.color = "white";
  });
  hov.addEventListener("mouseleave", () => {
    hov.style.color = "grey";
  });

  const remDow = this.document.getElementById("down_link");

  if (scrolly < 225 && remDow) {
    remDow.remove();
  }
});

// Link based onePage Changer
// 01
document
  .getElementsByClassName("info-link")[0]
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behaviour

    // Reset all the links
    const allLinks = document.getElementsByClassName("info-link");
    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].classList.remove("active-link");
      allLinks[i].style.textDecoration = "none";
      allLinks[i].style.color = "blue";
      allLinks[i].style.fontSize = "17px"; // Optional: keep consistent
    }

    const onLink = document.getElementsByClassName("info-link")[0];
    onLink.style.cssText = `
    text-decoration: underline;
    color: green;
    `;
    onLink.classList.add("active-link");

    const message = document.getElementsByClassName("info-rs")[0];
    message.innerHTML = `
    <div class="aboutDiv">We're not a boring tracker app<br>
    We're that one friend who says:<br>
    "Bro attendance 65% hai, <br>bunks thoda control kar...<br>
    but tonight? Maggi at 2am. Mark me Present"</div>
        <div class="aboutDiv">
        Memories is where study streaks meet<br>
        prank streaks, where chai breaks are <br>
        as important as classes.<br>
        Because college is short and we're here<br>
        to make sure it's unforgatable!!!
        </div>
        `;

    message.style.cssText = `
        padding: 3vh;
        font-family: "Playwrite AU TAS", cursive;
        font-optical-sizing: auto;
        font-weight: 350;
        font-style: normal;
        font-size: 1.15rem;
        padding: 2vw;
        `;

    const aboutBox = document.createElement("style");
    aboutBox.innerHTML = `
      .aboutDiv{
        border: 2px solid #d4a94e;
    margin: 13px;
    border-radius: 7px;
    box-shadow:
    8px 8px 0 #f0c36d;
    color: #3e3e3e;
    }
    
    `;

    const lhov = document.getElementsByClassName("info-link");
    for (let k = 0; k < lhov.length; k++) {
      if (!lhov[k].classList.contains("active-link")) {
        lhov[k].addEventListener("mouseenter", function () {
          lhov[k].style.color = `green`;
        });
      }
      lhov[k].addEventListener("mouseleave", () => {
        if (!lhov[k].classList.contains("active-link")) {
          lhov[k].style.color = "blue";
        }
      });
    }
  });

// To add a slide show of Boxes
// 02
document
  .getElementsByClassName("info-link")[1]
  .addEventListener("click", function (event) {
    event.preventDefault();

    const message = document.getElementsByClassName("info-rs")[0];
    message.innerHTML = `...`;

    const onLink = document.getElementsByClassName("info-link")[1];
    // Reset all the links
    const allLinks = document.getElementsByClassName("info-link");
    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].classList.remove("active-link");
      allLinks[i].style.textDecoration = "none";
      allLinks[i].style.color = "blue";
      allLinks[i].style.fontSize = "17px"; // Optional: keep consistent
    }
    onLink.style.cssText = `
    text-decoration: underline;
    color: green;
    `;
    onLink.classList.add("active-link");

    const content = document.getElementsByClassName("info-rs")[0];
    content.innerHTML = `
    <div class="card">
    <div class="featureCard">
      <div class="cardCont" id="dynamicCard">
        <div class="cardImg">
            <img src="Resources/mischeaf.png" alt="...">
        </div>
        <div class="cardText">
            <h2>Hustle Breaker</h2>
            <p>Turn an ordinary day into a memorable one by randomly generating a 3–15 minute prank, dare with your friends.</p>
        </div>
      </div>
      <div class="cardCont" id="nextdynamic">
        <div class="cardImg">
            <img src="Resources/thread.png" alt="...">
        </div>
        <div class="cardText">
            <h2>Joining Threads</h2>
            <p>Build deeper connections by asking three thoughtful questions and color-coding your friend's personality for meaningful insight.</p>
        </div>
      </div>
      </div>
      <div class="cardMore">
        <a href="#" id="moreBtn">MORE</a>
      </div>
    </div>
    `;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10vw;
}
.cardImg img {
  height: 33vh;
  width: 22vw;
  border-radius: 8px;
}
#dynamicCard {
  transition: all 0.5s ease;
  opacity: 1;
}
.fade-out {
  opacity: 0;
}
.fade-in {
  opacity: 1;
}
.cardCont {
  padding: 15px;
  border: 2px solid #f0c36d;
  color: #3e3e3e;
  width: fit-content;
  border-radius: 13px;
  margin: 3px;
  background-color: #fff3cd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.featureCard {
  display: flex;
}
.cardMore {
  padding: 5px;
  margin-top: 1vh;
}
.cardMore a {
  text-decoration: none;
  font-size: 18px;
  background-color: #ffb7c5;
  color: #4b3f72;
  padding: 15px;
  border-radius: 23px;
}
.cardMore a:hover {
  background-color: #f48fb1;
}
`;
    document.head.appendChild(styleTag);

    const lhov = document.getElementsByClassName("info-link");
    for (let k = 0; k < lhov.length; k++) {
      if (!lhov[k].classList.contains("active-link")) {
        lhov[k].addEventListener("mouseenter", function () {
          lhov[k].style.color = `green`;
        });
      }
      lhov[k].addEventListener("mouseleave", () => {
        if (!lhov[k].classList.contains("active-link")) {
          lhov[k].style.color = "blue";
        }
      });
    }

    document.getElementById("moreBtn").addEventListener("click", function (e) {
      e.preventDefault();

      const card = document.getElementById("dynamicCard");
      const nxtcard = document.getElementById("nextdynamic");

      // Fade out
      card.classList.add("fade-out");

      setTimeout(() => {
        // Update content
        card.innerHTML = `
      <div class="cardImg">
        <img src="Resources/pocket.png" alt="...">
      </div>
      <div class="cardText">
        <h2>Pocket Guard</h2>
        <p>Track your spending and get smart, balanced suggestions to support a joyful and sustainable lifestyle.</p>
      </div>
    `;

        nxtcard.innerHTML = `
    <div class="cardImg">
        <img src="Resources/snipper.png" alt="...">
      </div>
      <div class="cardText">
        <h2>Skip Snipper</h2>
        <p>We track your attendance and respond with playful tips or gentle warnings to help them stay on track while keeping the experience fun and engaging..</p>
      </div>
    `;

        // Fade in
        card.classList.remove("fade-out");
        card.classList.add("fade-in");
      }, 200); // Match transition duration
    });
  });

// To add a slide show of Images
// 03
document
  .getElementsByClassName("info-link")[2]
  .addEventListener("click", function (event) {
    event.preventDefault();

    const message = document.getElementsByClassName("info-rs")[0];
    message.innerHTML = `...`;

    // Reset all the links
    const allLinks = document.getElementsByClassName("info-link");
    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].classList.remove("active-link");
      allLinks[i].style.textDecoration = "none";
      allLinks[i].style.color = "blue";
      allLinks[i].style.fontSize = "17px"; // Optional: keep consistent
    }

    const onLink = document.getElementsByClassName("info-link")[2];
    onLink.style.cssText = `
        text-decoration: underline;
        color: green;
    `;
    onLink.classList.add("active-link");

    const content = document.getElementsByClassName("info-rs")[0];
    content.innerHTML = `
    <div>ScreenShots Shown Here!!!
          </div>
    `;

    content.style.cssText = `
    padding: 3vh;
    font-family: "Playwrite AU TAS", cursive;
    font-optical-sizing: auto;
    font-weight: 350;
    font-style: normal;
    font-size: 1.15rem;
    padding: 2vw;
    `;

    const lhov = document.getElementsByClassName("info-link");
    for (let k = 0; k < lhov.length; k++) {
      if (!lhov[k].classList.contains("active-link")) {
        lhov[k].addEventListener("mouseenter", function () {
          lhov[k].style.color = `green`;
        });
      }
      lhov[k].addEventListener("mouseleave", () => {
        if (!lhov[k].classList.contains("active-link")) {
          lhov[k].style.color = "blue";
        }
      });
    }
  });

// CURSOR DESIGNING
const cursorr = document.getElementsByClassName("followCurrsor");

for (let z = 0; z < cursorr.length; z++) {
  cursorr[z].addEventListener("mouseenter", function () {
    cursorr[z].style.cursor = "default";
  });
  cursorr[z].addEventListener("mouseleave", function () {
    cursorr[z].style.cursor = "default";
  });
}
