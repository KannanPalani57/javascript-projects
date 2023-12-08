const arathupaalBtn = document.getElementById("arathupaal");
const iyalgalSection = document.getElementById("iyalgal");
//
// console.log("arathuPaalIyalgal", arathuPaalIyalgal);
const arathuPaal = thirukkuralDetails.section.detail[0];

const displayIyalgal = (paalIyalgal) => {
  paalIyalgal.detail.map((item) => {
    let iyal = document.createElement("p");

    iyal.className = "iyal";

    iyal.appendChild(document.createTextNode(item.name));

    let iyalLink = createCustomButtonElement(
      item.name,
      "data-iyal",
      "iyalButton"
    );

    const iyalgalEach = document.createElement("div");

    iyalgalEach.id = "iyalgalEach";
    iyalgalEach.className = "iyalgalEach";

    iyalgalEach.appendChild(iyal);
    iyalgalEach.appendChild(iyalLink);

    iyalgalSection.appendChild(iyalgalEach);
  });
  data(paalIyalgal);
};

arathupaalBtn.addEventListener("click", (e) => {
  iyalgalSection.classList.add("show");
  const arathuPaalIyalgal = thirukkuralDetails.section.detail[0].chapterGroup;
  displayIyalgal(arathuPaalIyalgal);
});



function createCustomButtonElement(text, btnAttr, btnId) {
  var buttonTag = document.createElement("button");

  buttonTag.innerHTML = text;

  buttonTag.setAttribute(btnAttr, text);

  buttonTag.id = btnId;
  return buttonTag;
}

const data = (arathuPaalIyalgal) => {
  const iyalgal = document.getElementById("iyalgal");
  const iyalButtons = document.querySelectorAll("#iyalButton");

  const athigarams = document.getElementById("athigarams");

  console.log(iyalButtons);

  iyalButtons.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("clicked", e.target.getAttribute("data-iyal"));

      let activeIyal = e.target.getAttribute("data-iyal");

      iyalgal.classList.add("hide");
      athigarams.classList.add("show");

      athigarams.innerHTML = `<h1>${activeIyal} அதிகாரங்கள் </h1>`;

      let getAthigarams = arathuPaalIyalgal.detail.filter(
        (item) => item.name === activeIyal
      )[0].chapters.detail;

      getAthigarams.map((item) => {
        let athigaramDiv = document.createElement("div");

        let athigaramText = document.createElement("p");

        athigaramText.appendChild(document.createTextNode(item.name));

        athigaramDiv.appendChild(athigaramText);
        let athigaramBtn = createCustomButtonElement(
          item.name,
          "data-athigaram",
          "athigaramButton"
        );

        athigaramBtn.setAttribute("data-athigarmStart", item.start);
        athigaramBtn.setAttribute("data-athigarmEnd", item.end);

        athigaramDiv.appendChild(athigaramBtn);

        athigarams.appendChild(athigaramDiv);
      });

      handleAthigarams();
    });
  });
};

const kuralsSection = document.getElementById("kurals-section");

const handleAthigarams = () => {
  const athigaramButtons = document.querySelectorAll("#athigaramButton");

  athigaramButtons.forEach((athigaramBtn) => {
    athigaramBtn.addEventListener("click", (e) => {
      let getAthigaram = e.target.getAttribute("data-athigaram");
      let athigarmStart = e.target.getAttribute("data-athigarmStart");
      let athigarmEnd = e.target.getAttribute("data-athigarmEnd");

      athigarams.classList.add("hide");
      kuralsSection.classList.add("show");

      let allKurals = thirukkural.kural;

      let athigaramKurals = allKurals.filter(
        (item) => item.Number >= athigarmStart && item.Number <= athigarmEnd
      );

      athigaramKurals.forEach((eachKural) => {
        let kuralContainer = document.createElement("div");

        let athigaramTitle = document.createElement("h2");

        athigaramTitle.appendChild(
          document.createTextNode(getAthigaram + " அதிகாரத்தில் உள்ள குறள்கள் ")
        );

        kuralContainer.appendChild(athigaramTitle);

        let kuralLineOne = document.createElement("h3");

        kuralLineOne.appendChild(document.createTextNode(eachKural.Line1));

        let kuralLineTwo = document.createElement("h3");

        kuralLineTwo.appendChild(document.createTextNode(eachKural.Line2));

        kuralContainer.appendChild(kuralLineOne);

        kuralContainer.appendChild(kuralLineTwo);

        let kuralBtn = createCustomButtonElement(
          "குறளின் பொருள் மற்றும் உரை ",
          "data-kural",
          "kuralButton"
        );

        kuralBtn.setAttribute("data-kuralNumber", eachKural.Number);

        kuralContainer.appendChild(kuralBtn);

        kuralsSection.appendChild(kuralContainer);
      });

      handleAllKuralEvents();
    });
  });
};

const kuralExplanationSection = document.getElementById("kural-explanation");

const handleAllKuralEvents = () => {
  const allKuralsBtn = document.querySelectorAll("#kuralButton");

  allKuralsBtn.forEach((kural) => {
    kural.addEventListener("click", (e) => {
      const getKuralNumber = e.target.getAttribute("data-kuralNumber");

      kuralsSection.classList.remove("show");

      kuralExplanationSection.classList.add("show");

      let allKurals = thirukkural.kural;

      let kural = allKurals.filter(
        (item) => item.Number === Number(getKuralNumber)
      )[0];
      let kuralLineOne = document.createElement("h3");

      kuralLineOne.appendChild(document.createTextNode(kural.Line1));

      let kuralLineTwo = document.createElement("h3");

      kuralLineTwo.appendChild(document.createTextNode(kural.Line2));

      kuralExplanationSection.appendChild(kuralLineOne);

      kuralExplanationSection.appendChild(kuralLineTwo);

      let kuralMvUrai = document.createElement("h3");

      kuralMvUrai.appendChild(
        document.createTextNode("டாக்டர் மு.வரதராசனார் உரை :")
      );

      let kuralMvUraiExplanation = document.createElement("h3");

      kuralMvUraiExplanation.appendChild(document.createTextNode(kural.mv));

      let kuralMkUrai = document.createElement("h3");

      kuralMkUrai.appendChild(document.createTextNode("மு. கருணாநிதி உரை :"));

      let kuralMkUraiExplanation = document.createElement("h3");

      kuralMkUraiExplanation.appendChild(document.createTextNode(kural.mk));

      let kuralSpUrai = document.createElement("h3");

      kuralSpUrai.appendChild(document.createTextNode("சாலமன் பாப்பையா உரை :"));

      let kuralSpUraiExplanation = document.createElement("h3");

      kuralSpUraiExplanation.appendChild(document.createTextNode(kural.sp));

      kuralExplanationSection.appendChild(kuralMvUrai);
      kuralExplanationSection.appendChild(kuralMvUraiExplanation);

      kuralExplanationSection.appendChild(kuralMkUrai);
      kuralExplanationSection.appendChild(kuralMkUraiExplanation);

      kuralExplanationSection.appendChild(kuralSpUrai);
      kuralExplanationSection.appendChild(kuralSpUraiExplanation);
      console.log(kural, "all kurals");
    });
  });
};
