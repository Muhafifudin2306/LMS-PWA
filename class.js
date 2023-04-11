let card__course = document.getElementById("gallery__course");
let arrow__right = document.getElementById("right__gallery");
let course__counts = document.getElementsByClassName("gallery-card-lg").length;
let counter__to__left = 1;
let counter__to__right = course__counts;
let counter__margin = 0;

//Slide left per 300px
function slide__right() {
  if (counter__to__left < course__counts) {
    card__course.style.marginLeft = --counter__margin * 300 + "px";
    card__course.style.transition = "all 1s ease-in-out";
    counter__to__left++;
    counter__to__right--;
  }
  //left button gone when it reaches the end of the card
  if (counter__to__left == course__counts) {
    arrow__right.style.opacity = "0";
  }
}

// Slide right per 300px and show left button
function slide__left() {
  if (counter__to__right < course__counts) {
    arrow__right.style.opacity = "1";
    card__course.style.marginLeft = ++counter__margin * 300 + "px";
    card__course.style.transition = "all 1s ease-in-out";
    counter__to__right++;
    counter__to__left--;
  }
}
