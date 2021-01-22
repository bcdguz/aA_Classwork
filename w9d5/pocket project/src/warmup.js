
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const newP = document.createElement("p");
    newP.innerHTML = string;
    htmlElement.appendChild(newP);
};

htmlGenerator('Party Time.', partyHeader);