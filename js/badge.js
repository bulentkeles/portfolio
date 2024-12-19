// document.addEventListener('DOMContentLoaded', () => {
//   // Select the floating badge element
//   const badge = document.querySelector('.floating-badge');

//   if (badge) {
//     // Add a scroll event listener to the window
//     window.addEventListener('scroll', () => {
//       // Calculate rotation angle: Slower rotation (360° in 4 scrolls)
//       const rotationDegree = (window.scrollY / (window.innerHeight * 4)) * 360;
//       badge.style.transform = `rotate(${rotationDegree}deg)`; // Apply rotation
//     });
//   }
// });



document.addEventListener('DOMContentLoaded', () => {
  // Select the rotating badge part
  const rotatingBadge = document.querySelector('.rotating-badge');

  if (rotatingBadge) {
    // Add a scroll event listener to the window
    window.addEventListener('scroll', () => {
      // Slow rotation: 360° in 4 scrolls
      const rotationDegree = (window.scrollY / (window.innerHeight * 4)) * 360;
      rotatingBadge.style.transform = `rotate(${rotationDegree}deg)`; // Rotate only the rotating part
    });
  }
});
