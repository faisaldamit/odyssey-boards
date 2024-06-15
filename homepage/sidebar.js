
const SideBar = document.getElementById("barrier");
const navbar = document.getElementById("navibar");
function showSidebar(){
    SideBar.classList.add("displayBar");

}
function hideSidebar(){
    SideBar.classList.remove("displayBar");

}
// let sticky = navbar.offsetTop;
// window.onscroll = function{sticky_navbar()};
//  function sticky_navbar(){
//     if (window.scrollY.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//       } else {
//         navbar.classList.remove("sticky");
//       }
//  }
