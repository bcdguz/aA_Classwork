
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const newP = document.createElement("p");
    newP.innerHTML = string;
    while(Array.from(htmlElement.children).length > 0) {
        htmlElement.removeChild(htmlElement.childNodes[0]);
    }
    htmlElement.appendChild(newP);
};

htmlGenerator('Party Time.', partyHeader);