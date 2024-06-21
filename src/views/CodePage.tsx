import { CodeProject } from "../components"

const CodePage = () => {
  const projects: CodeProjectProps[] = [
    {
      title: 'AcidPattern',
      year: 2024,
      description: 'Site for programming and sharing patterns for Roland TB-303 type synthesizers.\nThis project runs a Django & SQLite backend with a React & TypeScript frontend, and features a full test suite for the API side. Live site in the works.',
      programmingLanguages: {
        python: 33,
        typeScript: 67,
      },
      links: {
        gitHub: 'https://github.com/henry-oberholtzer/acidpattern',
      },
      images: [
        {
          url: './code_images/acid_pattern.jpg',
          caption: 'AcidPattern, showing the skeumorphic TB-303 UI'
        }
      ]
    },
    {
      title: 'BeyondTipping',
      year: 2024,
      description: `
      Motivated by the trend of restaurants forgoing tipping in favor of equitable wages, this website aims to highlight restaurants take that leap.
      Written during a team week at Epicodus with Kim Robinson, Noah Kise & Briance Knight. I managed the admin side, using Flask and Python, as well as frontend components with React.`,
      programmingLanguages: {
        typeScript: 71,
        python: 15,
        javaScript: 6.3,
        html: 5.3,
        css: 2.5,
      },
      links: {
        gitHub: 'https://github.com/henry-oberholtzer/beyondtipping',
        live: 'https://beyondtipping.onrender.com/',
      },
      images: [
        {
          url: './code_images/beyond_tipping.png',
          caption: 'A screenshot of the BeyondTipping homepage'
        }
      ]
    },
    {
      title: 'mp3-to-mp4',
      year: 2024,
      description: 'A CLI application for converting audio files (.mp3, .wav, .flac, .aiff, etc) to mp4 file suitable for upload to social media sites like YouTube, Vimeo, etc.',
      programmingLanguages: {
        python: 100,
      },
      links: {
        gitHub: 'https://github.com/henry-oberholtzer/mp3-to-mp4',
        live: 'https://pypi.org/project/mp3-to-mp4/',
      },
    },
    {
      title: 'Zen Minesweeper',
      year: 2023,
      description: 'A simple JavaScript & HTML recreation of the classic Windows95 Minesweeper game',
      programmingLanguages: {
        javaScript: 71.5,
        html: 14.5,
        css: 14,
      },
      links: {
        gitHub: 'https://github.com/henry-oberholtzer/zen-minesweeper',
        live: 'https://henry-oberholtzer.github.io/zen-minesweeper/',
      },
      images: [
        {
          url: './code_images/zen_minesweeper.jpg',
          caption: 'A screenshot of the Zen Minesweeper Game'
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
          links={p.links}
          description={p.description}
          programmingLanguages={p.programmingLanguages}
          yearFrom={p.yearFrom}
          images={p.images} />
      )
    })}
    <p style={{fontStyle: 'italic'}}>More to come!</p>
    </>
    
  )
}

export { CodePage }
