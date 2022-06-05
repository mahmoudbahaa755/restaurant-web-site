// Global decleration of variables
var image_slideshow_index = 0;
var rating_slideshow_index = 1;
var Hyper_btn = document.getElementsByClassName("back_btn");
var slides = document.getElementsByClassName("mySlides");
var rating_slides = document.getElementsByClassName("rating_slides");

// Function fow main slide show in website 
const showImageSlides = () => {
    var i;
    // for loop for add the display : none on all image in slideshow
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // this line for add one to image_slideshow index to make it 1
    image_slideshow_index++;
    // This condition for check if image in slide show is greater than the length of all slides
    // if this condition has confirm . it will return the first slide in show again
    if (image_slideshow_index > slides.length) {
        image_slideshow_index = 1;
    }
    // It to make the value of display is block to make it in all width and height 
    slides[image_slideshow_index - 1].style.display = "block";
    // this function will turn the parent chieled show image slides on 3 sec 
    setTimeout(showImageSlides, 3000);
};

// This line for implement the showImageSlides function
showImageSlides();

// Function fow rating slide show in website 
const showSlides = (n) => {
    var i;
    // This condition for check if image in slide show is greater than the length of all slides
    // if this condition has confirm . it will return the first slide in show again
    if (n > rating_slides.length) {
        rating_slideshow_index = 1;
    }

    if (n < 1) { rating_slideshow_index = rating_slides.length }
    // for loop for add the display : none on all items in slideshow
    for (i = 0; i < rating_slides.length; i++) {
        rating_slides[i].style.display = "none";
    }
    // It to make the value of display is block to make it in all width and height 
    rating_slides[rating_slideshow_index - 1].style.display = "block";
};

// This line for implement the showImageSlides function
showSlides(rating_slideshow_index);

// func if user has clicked on plus button the slide will increase by one and display it on the screen
const plusSlides = (n) => {
    showSlides((rating_slideshow_index += n));
};

// func if user has clicked on minus button the slide will decrease by one and hide it on the screen
const currentSlide = (n) => {
    showSlides((rating_slideshow_index = n));
};

// This func will implement when click on Back button in the about component and
// will change the path of url to forward to home page
function backHomeFunc() {
    window.location.href = "../../Home/html/home.html";
}

// Button for add item to the cart
document.getElementById("order_btn").addEventListener("click" , () => {
    alert("Your item has added to the cart, cheack the cart please....")
});

// Button for add item to the cart
document.getElementById("order_btn_2").addEventListener("click" , () => {
    alert("Your item has added to the cart, cheack the cart please....")
});


// image light box
function openModal() {
    document.getElementById('myModal').style.display = "block";
}