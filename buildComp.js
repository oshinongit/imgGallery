const main_container = document.getElementById("main_container");

const sidebar1 = '<div id="sidebar"  class="d-flex flex-column flex-shrink-0 p-3 rounded text-white bg-dark" style="min-width: 150px;"><a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"><span class="fs-4">Menu</span></a><hr><ul class="nav nav-pills flex-column mb-auto"><li class="nav-item"><a id="homeNavLink" href="#" class="nav-link active" aria-current="page">List</a></li><li><a  href="#" id="dashNavLink" class="nav-link text-white">Dashboard</a></li></ul><hr><div class="dropdown"></div></div>'
const sidebar2 = '<div id="sidebar2" class="d-flex flex-column flex-shrink-0 p-3 rounded text-white bg-dark" style="min-width: 150px;;"><a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"><span class="fs-4">Images</span></a><hr><ul class="nav nav-pills flex-column mb-auto"></ul></div>'

imgs_th = ["img1_th.jpg", "img2_th.jpg", "img3_th.jpg", "img4_th.jpg", "img5_th.jpg", "img6_th.jpg"]
imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]
path = "./img/"


function main() {

    buildSidebar(sidebar1, "contSidebar1")
    buildSidebar(sidebar2, "contSidebar2")
    buildImage(document.getElementById("sidebar2"), path, "img1.jpg", "100%", "auto", "main")
    buildGallery("sidebar2", imgs_th)
    NavButtons()

}

function buildSidebar(component, id) {

    var bar = document.createElement("div");
    bar.setAttribute("class", "m-2");
    bar.setAttribute("id", id);
    bar.innerHTML += component;
    main_container.appendChild(bar);
}

function buildImage(container, imgPath, imgName, w, h, ID) {

    var image = document.createElement("img");
    image.setAttribute("src", imgPath + imgName);
    image.setAttribute("width", w);
    image.setAttribute("height", h);
    image.setAttribute("object-fit", "cover");
    image.setAttribute("class", "rounded mb-2");
    image.setAttribute("alt", "img");
    image.setAttribute("id", ID)
    image.setAttribute("name", imgName)


    if (image.getAttribute("width") != "100%") {
        var main = document.getElementById("main");
        image.onclick = function () {changeMainImageTo(ID)};
    }

    container.appendChild(image);

}

function changeMainImageTo (thumbID) {

    var mainImage = document.getElementById("main");
    var thumb = document.getElementById(thumbID);

    var mainStr = mainImage.name
    var thumbStr = thumb.name


    mainImage.setAttribute("src", "./img/" + thumbStr.replace("_th", ""))
    mainImage.setAttribute("name", thumbStr.replace("_th", ""))

    thumb.setAttribute("src", "./img/" + mainStr.replace(".jpg", "_th.jpg"))
    thumb.setAttribute("name", mainStr.replace(".jpg", "_th.jpg"))

}

function buildGallery(containerID, imgList) {
    //path is global variable, see top of script

    var flexChild = document.createElement("div");
    flexChild.setAttribute("class", "d-flex flex-wrap justify-content-around")
    flexChild.setAttribute("id", "flexGallery")
    
    var container = document.getElementById(containerID);
    container.appendChild(flexChild)
    var gallery = document.getElementById("flexGallery")

    for (let i = 1; i < imgList.length; i++) {
        buildImage(gallery, path, imgList[i], "130px", "130px", String(i))
      }
    
}

function NavButtons() {

    var button1 = document.getElementById("homeNavLink");
    var button2 = document.getElementById("dashNavLink");

    button1.onclick = function() {selectHome()};
    button2.onclick = function() {selectDash()};
}

function selectHome() {

    var home = document.getElementById("homeNavLink");
    var dash = document.getElementById("dashNavLink");
    var List = document.getElementById("sidebar2");
    dash.setAttribute("class", "nav-link text-white");
    home.setAttribute("class", "nav-link text-white active");
    List.classList.remove("clickHide");
    List.className += (" " + "clickShow");
}

function selectDash() {

    var home = document.getElementById("homeNavLink");
    var dash = document.getElementById("dashNavLink");
    var List = document.getElementById("sidebar2");
    home.setAttribute("class", "nav-link text-white");
    dash.setAttribute("class", "nav-link text-white active");
    List.classList.remove("clickShow");
    List.className += (" " + "clickHide");
}


main()



