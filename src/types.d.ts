interface imgData {
  imgURL: string,
  alt: string,
  title: string,
}

interface externalLink {
  externalURL: string,
  linkText: string,
}

interface informationList {
  title: string,
  information: string[]
}

interface projectInformation {
  title: string,
  key: string,
  dateStarted: string,
  dateCompleted: string,
  descHTML: string,
  imgs: imgData[],
  externalLink: externalLink,
  list: informationList
}

interface projectData {
  [key: string]: projectInformation,
}
