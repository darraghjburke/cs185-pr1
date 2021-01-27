window.addEventListener("load", onLoad);
window.addEventListener("scroll", onScroll);

function onLoad() {
    const images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++) {
        const img = images[i];
        img.addEventListener("click", (evt) => clickImage(evt));
    }
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "Scroll To Top";
    scrollButton.id = "scroll-button";
    scrollButton.addEventListener("click", onClickScrollButton);
    document.body.append(scrollButton);
}

function clickImage(evt) {
    const target = evt.target;
    const modal = document.createElement("div");
    modal.classList = "modal";
    modal.addEventListener("click", (evt) => clickModal(evt));
    const img = document.createElement("img");
    img.classList = "modal-content";
    img.src = evt.target.src;
    modal.append(img);
    target.parentNode.append(modal);
}

function clickModal(evt) {
    if (evt.target.classList == "modal")
        evt.target.remove();
}

function onScroll() {
    const scrollButton = document.getElementById("scroll-button");
    if (document.body.scrollTop > document.body.clientHeight / 4) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function onClickScrollButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function validateEmail() {
    const input = document.getElementById("email");
    const output = document.getElementById("validation");
    const address = input.value;
    if (address.includes("@") && (address.slice(-3) == "com" || address.slice(-3) == "edu")) {
        // good
        output.textContent = "Email succesfully recorded.";
    } else {
        output.textContent = "Invalid email address.";
        // bad
    }
}