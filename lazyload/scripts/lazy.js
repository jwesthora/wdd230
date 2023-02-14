// get all img with data src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");


const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};
// first check to see if intersection observer is supported 
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    // Loop through each img on check status and loas if necessary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
    // load all images if not supported
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }