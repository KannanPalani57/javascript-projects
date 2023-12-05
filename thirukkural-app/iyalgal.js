console.log(window.location.search)

console.log(window.location.search.split("?")[1].split("="))


const iyalgalSection = document.getElementById("iyalgal");
//



function createCustomButtonElement(text, btnAttr, btnId) {
    var buttonTag = document.createElement("button");

    buttonTag.innerHTML = text;

    buttonTag.setAttribute(btnAttr, text);

    buttonTag.id = btnId;
    return buttonTag;
}

console.log(thirukkuralDetails, "0--")

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
    // data(paalIyalgal);
};

let currentPage = window.location.search.split("?")[1].split("=")[1]

let paalIyalgal;
if (currentPage === "arathupaal") {
    paalIyalgal = thirukkuralDetails.section.detail[0].chapterGroup;
} else if (currentPage === "potrutpaal") {
    paalIyalgal = thirukkuralDetails.section.detail[1].chapterGroup;
} else {
    paalIyalgal = thirukkuralDetails.section.detail[2].chapterGroup;
}

displayIyalgal(paalIyalgal
)