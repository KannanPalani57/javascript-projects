console.log(window.location.search)

console.log(window.location.search.split("?")[1].split("="))


const iyalgalSection = document.getElementById("iyalgal");
//


let currentPage = window.location.search.split("?")[1].split("=")[1]



function createCustomButtonElement(text, btnAttr, btnId, transliteration) {
    var linkTag = document.createElement("a");


    var linkText = document.createTextNode(text);

    // buttonTag.setAttribute(btnAttr, text);

    // buttonTag.id = btnId;

    linkTag.appendChild(linkText)
    linkTag.href = "./athigarams/athigarams.html?paal=" + currentPage + "&athigaram=" + transliteration;

    return linkTag;
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
            "iyalButton",
            item.transliteration,
        );

        const iyalgalEach = document.createElement("div");

        iyalgalEach.id = "iyalgalEach";
        iyalgalEach.className = "iyalgalEach";

        // iyalgalEach.appendChild(iyal);
        iyalgalEach.appendChild(iyalLink);

        iyalgalSection.appendChild(iyalgalEach);
    });
    // data(paalIyalgal);
};


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