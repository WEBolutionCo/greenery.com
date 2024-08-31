const menuItems = document.getElementById("MenuItems");
const menubtn = document.getElementById("menubtn");

menuItems.style.maxHeight = "0px";

const onmenu = () => {
    if (menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "150px";
        
    } else {
        menuItems.style.maxHeight = "0px";
        
    };
};

const ntAvail = () => {
    alert("Sorry, but we haven't to added this feature yet. Please try again later.");
}