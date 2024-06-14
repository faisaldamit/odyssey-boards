//  document.addEventListener("DOMContentLoaded",hidesidebar());
const SideBar = document.getElementById("barrier");
function showSidebar(){
    SideBar.classList.add("displayBar");

}
function hideSidebar(){
    SideBar.classList.remove("displayBar");

}