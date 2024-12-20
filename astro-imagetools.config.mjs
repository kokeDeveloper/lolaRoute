import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: ["jpg","jpeg","png"],

  formatOptions: {
    jpg: {
      quality: 100,
      chromaSubsampling: "4:4:4",
      mozjpeg: true,
      trellisQuantisation: true,
      overshootDeringing: true,
      optimiseScans: true,
    },
    png: {
      quality: 100,
      adaptiveFiltering: true,
      compressionLevel: 9,
      palette: true,
    },
    webp: {
      quality: 100,
      effort: 6.0,
    },
    avif: {
      chromaSubsampling: "4:4:4",
      effort: 9.0,
    },
    gif: {
      effort: 10.0,
    },
  },
});
