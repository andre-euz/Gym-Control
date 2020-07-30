let currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {    
    if (currentPage.includes(item.pathname)) {
        item.classList.add("active")
    }  
}

/*const aInstructors = document.getElementById("instructors");
const aMembers = document.getElementById("members");

onload = function() {
    if (currentPage == "/members") {
        aInstructors.classList.remove("active");
        aMembers.classList.add("active");
    }    
}*/
