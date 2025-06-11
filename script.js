function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function goToProjects() {
    window.location.href = "projects.html";
}

function goToRandomCat() {
    window.location.href = "random_cat.html";
}

function goToHome() {
    window.location.href = "index.html";
}

function randomCat() {
    const index = Math.floor(Math.random() * 10) + 1;
    document.getElementById("catImage").src = `images/CATS/cat${index}.jpg`;
}
