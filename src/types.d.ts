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
  primaryImage: imgData,
  otherImages: imgData[] | null,
  externalLink: externalLink,
  list: informationList
}

interface projectData {
  [key: string]: projectInformation,
}

interface database {
  [key: string]: projectData
}

interface ProjectBlock {
  data: projectInformation
}

interface NavigationButon {
  to: string,
  name: string,
}
