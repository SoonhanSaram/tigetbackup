document.addEventListener("DOMContentLoaded", () => {
  const slide =document.querySelector(".curl")
  const gradient = document.querySelector(".mosaic.gradient")

  slide?.addEventListener("mouseover", () => {
    gradient.style.display = "block"    
  })
  slide?.addEventListener("mouseout", () => {
    gradient.style.display = "none"
  })
});
