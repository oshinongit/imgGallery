const container = document.getElementById("sidebar");
const container2 = document.getElementById("sidebar2");

function main() {   

        buildSearchInput()
        buildSearchButton()

}

function buildSearchInput() {

    var box = document.createElement("INPUT");
    box.setAttribute("id", "inputField");
    box.setAttribute("type", "text");
    box.setAttribute("class", "mb-2");
    container.appendChild(box);

}

function buildSearchButton() {

    var b = document.createElement("BUTTON");
    var t = document.createTextNode("Go");
    b.setAttribute("id", "goButton");
    b.setAttribute("class", "btn btn-primary btn-lg mb-2")
    b.onclick = function() {console.log("hej")};
    b.appendChild(t);
    container.appendChild(b);
}


main()