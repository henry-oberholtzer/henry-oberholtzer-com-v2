interface ProjectHeaderProps {
  title?: string,
  description?: string,
  year?: number,
  yearFrom?: number,
  programmingLanguages?: ProgrammingLanguagePercents
  links?: ProjectLinks
}



interface ProjectLinks {
  gitHub?: string
  live?: string
}
