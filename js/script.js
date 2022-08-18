const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    //console.log(images);
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);
    //In the value, use randomIndex to grab a single image from your images array
    const randomImage =  images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    //change innerText of the authorSpan element to the value of the author variable
    authorSpan.innerText = author;
    //Set the src attribute of the img variable to the value of the imageAddress variable
    img.src= imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});

    