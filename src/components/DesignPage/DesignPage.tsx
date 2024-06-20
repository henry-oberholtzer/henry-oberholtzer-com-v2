import { DesignProject } from "../DesignProject";

const DesignPage = () => {
  const projects: DesignProjectProps[] = [
    {
      title: 'Mixtape Album Artwork',
      year: 2024,
      images: [
        {
          url: './design/album_art/acid_techno.png',
          caption: 'New Age of Acid Techno Volume 2',
        },
        {
          url: './design/album_art/bti.jpg',
          caption: 'Breaking Through Ice',
        },
        {
          url: './design/album_art/vcr.jpg',
          caption: 'Vicious Circle Recordings',
        },
        {
          url: './design/album_art/eurotrance.png',
          caption: 'Eurotrance Volume 1',
        }
      ]
    },
    {
      title: 'Poster Designs',
      yearFrom: 2016,
      year: 2021,
      images: [
        {
          url: './design/posters/friday_at_four.jpg',
          caption: 'Friday At Four'
        },
        {
          url: './design/posters/parc_1.png',
          caption: 'PARC Poster'
        },
        {
          url: './design/posters/parc_2.png',
          caption: 'PARC Poster 2'
        },
        {
          url: './design/posters/parc_3.png',
          caption: 'PARC Poster 3'
        },
        {
          url: './design/posters/theme_reveal.png',
          caption: 'Renn Faire Theme Reveal'
        },
        {
          url: './design/posters/kdvs.png',
          caption: 'KDVS 90.3fm'
        },
        {
          url: './design/posters/kdvs_vinyl_fair.png',
          caption: 'KDVS Vinyl Fair 2016',
        }
      ]
    },
    {
      title: 'Reed College Orientation',
      year: 2019,
      images: [
        {
          url: './design/orientation/shirt_2.jpg',
          caption: 'T-Shirt Front',
        },
        {
          url: './design/orientation/shirt_1.jpg',
          caption: 'T-Shirt Back',
        },
        {
          url: './design/orientation/business_card.png',
          caption: 'Informational Card',
        },
        {
          url: './design/orientation/signage_2.jpg',
          caption: 'Directional Signage',
        }
      ]
    },
    {
      title: 'KRRC',
      yearFrom: 2018,
      year: 2019,
      border: 1,
      images: [
        {
          url: './design/krrc/krrc_logo.png',
          caption: 'KRRC Logo',
        },
        {
          url: './design/krrc/krrc_guide.jpg',
          caption: 'Station Guide',
        },
        {
          url: './design/krrc/krrc_web.png',
          caption: 'KRRC.fm',
        },
        {
          url: './design/krrc/krrc_mockup.jpg',
          caption: 'KRRC.fm Mockup',
        },
      ]
    },
    {
      title: 'Artwork',
      yearFrom: 2015,
      year: 2017,
      images: [
        {
          url: './design/artwork/callisto.png',
          caption: 'Callisto I',
        },
        {
          url: './design/artwork/callisto_2.png',
          caption: 'Callisto II',
        },
        {
          url: './design/artwork/digital_analog.jpg',
          caption: 'Digital Analog',
        },
        {
          url: './design/artwork/11_17.jpg',
          caption: '11x17',
        },
      ]
    }
  ]

  return (
    <>
      <p>Graphic design work for print, digital and web.</p>
      {projects.map(p => {
        return (
          <DesignProject
            title={p.title}
            year={p.year}
            border={p.border}
            yearFrom={p.yearFrom}
            description={p.description}
            images={p.images}
          />
        )
      })}
    </>
  )
}

export { DesignPage }
