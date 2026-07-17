Drop the Altone font files here for the hero headline:

  Altone-Regular.woff2   (weight 400)
  Altone-Medium.woff2    (weight 500)

The @font-face rules in src/index.css already point to these filenames.
Until they are added, the hero falls back to Poppins automatically.
woff2 is preferred; if you only have .ttf/.otf, add matching src url()
entries in src/index.css.
