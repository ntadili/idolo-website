const imageSlider = document.querySelector(".image-slider");

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  imageSlider.style.transform = `translateX(-${scrollPosition}px)`
});


const imageSliderShadow = document.querySelector(".image-slider-shadow");
// Define fade and shadow behavior
const fadeHeight = 300; // Height for controlling fade-out
const shadowHeight = 300; // Height for controlling shadow opacity
const minOpacity = 0.3; // Minimum opacity for the slider

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Fade Effect: Reduce opacity but ensure it doesn't go below minOpacity
  const fadeEffect = Math.max(minOpacity, 1 - scrollPosition / fadeHeight);
  imageSlider.style.opacity = fadeEffect;

  // Shadow Effect: Increase shadow opacity proportionally to scroll distance
  const shadowOpacity = Math.min(scrollPosition / shadowHeight, 0.6); // Cap shadow at 0.6 opacity
  imageSliderShadow.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${shadowOpacity}) 100%)`;
});