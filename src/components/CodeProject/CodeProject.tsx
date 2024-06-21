import { ProgrammingLanguageBar } from "..";
import { ProjectContainer } from "../ProjectComponents";
import { ProjectHeader } from "../ProjectHeader"
import { SwiperGallery } from "../SwiperGallery";

const CodeProject = (props: CodeProjectProps) => {
  const { year, title, description, yearFrom, images, programmingLanguages, links } = props;

  return (
    <ProjectContainer style={{marginBottom: '48px'}}>
      <ProjectHeader
        title={title}
        year={year}
        description={description}
        links={links}
        yearFrom={yearFrom}
      />
      {images &&         
        <SwiperGallery
          images={images}
          options={{
            noCaptions: true,
            fullWidth: true,
          }}
        />
      }
      {programmingLanguages && 
        <ProgrammingLanguageBar languages={programmingLanguages} />
        }
    </ProjectContainer>
  )
}

export { CodeProject }
