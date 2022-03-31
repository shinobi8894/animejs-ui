# How to use Anime JS

Anime JS is easy to use and it provides cool animation.

### CDN
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
```

```
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
  ```
  
  ## Result
  ![anime](https://user-images.githubusercontent.com/92864027/161003389-0995e798-9299-4691-ac33-62d429e93619.jpg)
  ![anime-result](https://user-images.githubusercontent.com/92864027/161003446-2c417888-8dc4-4df6-895f-dd67d61ff210.jpg)


### Contribute by Shinobi Developer

  
