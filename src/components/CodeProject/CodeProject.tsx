import { ProgrammingLanguageBar } from "..";
import { ProjectContainer } from "../ProjectComponents";
import { ProjectHeader } from "../ProjectHeader"
import { SwiperGallery } from "../SwiperGallery";

const CodeProject = (props: CodeProjectProps) => {
  const { year, title, description, yearFrom, images, programmingLanguages } = props;

  return (
    <ProjectContainer>
      <ProjectHeader
        title={title}
        year={year}
        description={description}
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
