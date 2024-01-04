import portfolioImage from './imgs/portfolio.png'

const getData = (query: string) => {
  const data: database = {
  code: {
    portfoliowebsite: {
      title: "henryoberholtzer.com",
      key: "portfoliowebsite",
      dateStarted: "October 2023",
      dateCompleted: "January 2024",
      descHTML: "A portfolio website created to showcase my work across mediums, including code, music, and eventually design.",
      primaryImage: {
        imgURL: portfolioImage,
        alt: "A screenshot of the henryoberholzer.com homepage",
        title: "henryoberholtzer.com homepage"
      },
      otherImages: null,
      list: {
        title: "Written In:",
        information: ["TypeScript", "React", "SCSS"]
      },
      externalLink: {
        linkText: "View this project on GitHub",
        externalURL: "https://github.com/henry-oberholtzer/digital_oberholtzer"
      }
    }
  },
  music: {

  }
}
  return data[query]
}

export default getData
