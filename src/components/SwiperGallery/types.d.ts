interface SwiperGalleryProps {
  images?: ImageProps[]
  options?: {
    width?: number,
    height?: number,
    border?: number,
    noCaptions?: boolean,
    fullWidth?: boolean,
  }
}

interface ImageProps {
  url: string,
  caption: string,
}
