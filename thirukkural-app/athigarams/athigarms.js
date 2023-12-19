

const athigarams = document.getElementById("athigarams");

let currentPage = window.location.search.split("?")[1].split("&")

let paal = ""
let athigaram = ""

currentPage.forEach(item => {
    // console.log(item.split("="))

    let element = item.split("=")

    if (element[0] === "paal") {
        paal = element[1]
    }

    if (element[0] === "athigaram") {
        athigaram = element[1]
    }


})

let paalIyalgal = ""
if (paal === "arathupaal") {
    paalIyalgal = thirukkuralDetails.section.detail[0].chapterGroup;
    currentPage = thirukkuralDetails.section.detail[0].name
} else if (paal === "potrutpaal") {
    paalIyalgal = thirukkuralDetails.section.detail[1].chapterGroup;
    currentPage = thirukkuralDetails.section.detail[1].name

} else {
    paalIyalgal = thirukkuralDetails.section.detail[2].chapterGroup;
    currentPage = thirukkuralDetails.section.detail[2].name

}



console.log({ paal, athigaram })
console.log(currentPage)

let iyalgal = paalIyalgal.detail.filter(
    (item) => item.transliteration === athigaram
)[0]

athigarams.innerHTML = `<h1>${iyalgal.name} அதிகாரங்கள் </h1>`;



let getAthigarams = paalIyalgal.detail.filter(
    (item) => item.transliteration === athigaram
)[0].chapters.detail;


function createCustomButtonElement(text, btnAttr, btnId, transliteration, athigaramStart, athigaramEnd)  {
    var linkTag = document.createElement("a")


    var linkText = document.createTextNode(text);

    // buttonTag.setAttribute(btnAttr, text);

    // buttonTag.id = btnId;

    linkTag.appendChild(linkText)
    linkTag.href = "../kuralgal/kuralgal.html?athigaram=" + transliteration + "&athigaramStart="+ athigaramStart + "&athigaramEnd=" +athigaramEnd;

    return linkTag;
}

getAthigarams.map((item) => {
    let athigaramDiv = document.createElement("div");

    let athigaramText = document.createElement("p");

    athigaramText.appendChild(document.createTextNode(item.name));

    athigaramDiv.appendChild(athigaramText);
    let athigaramBtn = createCustomButtonElement(
        item.name,
        "data-athigaram",
        "athigaramButton",
        item.transliteration,
        item.start,
        item.end
    );

    athigaramBtn.setAttribute("data-athigarmStart", item.start);
    athigaramBtn.setAttribute("data-athigarmEnd", item.end);

    athigaramDiv.appendChild(athigaramBtn);

    athigarams.appendChild(athigaramDiv);
});
