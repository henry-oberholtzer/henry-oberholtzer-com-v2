import portfolioImage from './imgs/portfolio.png'

const getData = () => {
  const data: projectData = {
    test: {
      title: "henryoberholtzer.com",
      key: "test",
      dateStarted: "October 2023",
      dateCompleted: "January 2024",
      descHTML: "A portfolio website created to showcase my work across mediums, including code, music, and eventually design.",
      imgs: [{
        imgURL: portfolioImage,
        alt: "A screenshot of the henryoberholzer.com homepage",
        title: "henryoberholtzer.com homepage"
      }],
      list: {
        title: "Written In:",
        information: ["TypeScript", "React", "SCSS"]
      },
      externalLink: {
        linkText: "View this project on GitHub",
        externalURL: "https://github.com/henry-oberholtzer/digital_oberholtzer"
      }
    }
  }
  return data
}

export default getData
