interface CardStackProps {
  images?: ImageProps[]
  options?: {
    width: number,
    height: number,
  }
}

interface ImageProps {
  url: string,
  caption: string,
}
