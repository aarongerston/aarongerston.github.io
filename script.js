function toggleMenu() {
    const menu =document.querySelector(".menu-links"); 
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var project1_url = "https://isr-pal-article-counts.onrender.com";
var project2_url = "in-the-world.html";

// Assign sources to iframe entities
document.getElementById("project1_iframe").src = project1_url;
document.getElementById("project2_iframe").src = project2_url;

// Add event listeners to the Project buttons to navigate to the apps' pages
document.getElementById("project1_button").onclick = function() {
    window.location.href = project1_url;
};
document.getElementById("project2_button").onclick = function() {
    window.location.href = project2_url;
};

//function sendMail() {
//    var params = {
//        name : document.getElementById("name").value,
//        email : document.getElementById("email").value,
//        message : document.getElementById("message").value
//    }
//
//    emailjs
//    .send("service_20pigze", "template_jm79tde", params)
//    .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Message sent successfully!");
//    })
//    .catch((err) => console.log(err));
//}
