interface CardStackProps {
  images?: ImageProps[]
  options?: {
    width?: number,
    height?: number,
    border?: number,
  }
}

interface ImageProps {
  url: string,
  caption: string,
}
