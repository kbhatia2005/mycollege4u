const images = [
    "images/sx4.png",
    "images/sx5.png",
    "images/sx2.png",
    "images/sx.png"
  ];
  
  let index = 0;
  const bg = document.querySelector(".bg-slider");
  
  bg.style.backgroundImage = `url(${images[0]})`;
  
  setInterval(() => {
    index = (index + 1) % images.length;
    bg.style.backgroundImage = `url(${images[index]})`;
  }, 5000); // change every 5 seconds

  window.addEventListener('load', () => {
    const steps = document.querySelectorAll('.preview-step');
    steps.forEach(step => step.classList.add('show'));
  });
  