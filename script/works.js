function openPopup(imageSrc) {
    var popup = document.getElementById("popupImage");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = imageSrc;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popupImage");
    popup.style.display = "none";
}

var images = document.querySelectorAll(".image");
images.forEach(function (image) {
    image.addEventListener("click", function () {
        var imgSrc = this.querySelector("img").src;
        openPopup(imgSrc);
    });
});