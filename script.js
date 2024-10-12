// Example: Toggle visibility of sections
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections initially
    });

    const navLinks = document.querySelectorAll("li #aid");
    console.log(navLinks);
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = "none"; // Hide all sections
            });
            document.getElementById(targetId).style.display = "block"; // Show the clicked section
        });
    });
});