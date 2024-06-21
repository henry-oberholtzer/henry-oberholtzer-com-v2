interface ProgrammingLanguages {
  typeScript?: unknown,
  javaScript?: unknown,
  python?: unknown,
  html?: unknown,
  css?: unknown,
  cSharp?: unknown,
}

interface ProgrammingLanguagePercents extends ProgrammingLanguages {
  typeScript?: number,
  javaScript?: number,
  python?: number,
  html?: number,
  css?: number,
  cSharp?: number,
}

interface ProgrammingLanguageColors extends ProgrammingLanguages {
  typeScript?: string,
  javaScript?: string,
  python?: string,
  html?: string,
  css?: string,
  cSharp?: string,
}

interface ProgrammingLanguageBarProps {
  languages: ProgrammingLanguagePercents
}
