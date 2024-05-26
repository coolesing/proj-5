const mediaItems = document.querySelectorAll(".media-list-2-item");
mediaItems.forEach((item) => {
  const image = item.querySelector("img");
  image.addEventListener("click", () => {
    if (item.classList.contains("faded")) {
      item.classList.remove("faded");
    } else {
      mediaItems.forEach((mediaItem) => {
        mediaItem.classList.remove("faded");
      });
      item.classList.add("faded");
    }
  });
});