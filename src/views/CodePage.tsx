import { CodeProject } from "../components"

const CodePage = () => {
  const projects: CodeProjectProps[] = [
    {
      title: 'AcidPattern',
      year: 2024,
      description: 'Site for programming and sharing patterns for Roland TB-303 type synthesizers.',
      programmingLanguages: {
        python: 33,
        typeScript: 67,
      },
      images: [
        {
          url: './code_images/acid_pattern.jpg',
          caption: 'AcidPattern, showing the skeumorphic TB-303 UI'
        }
      ]
    }
  ]

  return (
    <>
    <p>Websites, software and other scripts.</p>
    {projects.map((p, i) => {
      return (
        <CodeProject
          key={i} 
          title={p.title}
          year={p.year}
          description={p.description}
          programmingLanguages={p.programmingLanguages}
          yearFrom={p.yearFrom}
          images={p.images} />
      )
    })}
    </>
    
  )
}

export { CodePage }
