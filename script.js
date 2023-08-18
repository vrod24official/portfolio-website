var responsivebutton= function () {
    var MenuItems = document.getElementById("menuItems");
    var hamburgerimg = document.querySelector(".hamburger-img");
    var crossimg = document.querySelector(".cross-img");

    MenuItems.style.maxHeight = "0px";

    function menuToggle() {
        if (MenuItems.style.maxHeight == "0px") {
            enuItems.style.maxHeight = "200px";
            hamburgerimg.style.display = "none";
            crossimg.style.display = "inline-block"
        } else {
            MenuItems.style.maxHeight = "0px";
            hamburgerimg.style.display = "inline-block";
            crossimg.style.display = "none"
        }
    }
}

