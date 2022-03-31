const toggleFolder = document.getElementById("js_toggle-folder");

// --------- ANIMATION

const showFolderContentAnimation = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});

showFolderContentAnimation
  .add({
    targets: "#js_folder-content",
    height: [0, 240],
    duration: 350
  })
  .add(
    {
      targets: "#js_folder-summary-amount",
      opacity: [1, 0],
      duration: 400
    },
    "-=350"
  )
  .add(
    {
      targets: "#js_folder-collapse-button",
      opacity: [0, 1],
      duration: 400
    },
    "-=300"
  )
  .add(
    {
      targets: "#js_folder-collapse-button-icon",
      duration: 300,
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      rotate: ["0deg", "180deg"]
    },
    "-=400"
  )
  .add(
    {
      targets: ".js_folder-item",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => i * 120
    },
    "-=275"
  );

// --------- TRIGGER

toggleFolder.addEventListener("click", () => {
  if (showFolderContentAnimation.began) {
    showFolderContentAnimation.reverse();
    if (
      showFolderContentAnimation.progress === 100 &&
      showFolderContentAnimation.direction === "reverse"
    ) {
      showFolderContentAnimation.completed = false;
    }
  }

  if (showFolderContentAnimation.paused) {
    showFolderContentAnimation.play();
  }
});