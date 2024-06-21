import { SwiperGallery } from "../SwiperGallery"
import { ProjectHeader } from "../ProjectHeader"
import { ProjectContainer } from "../ProjectComponents"

const DesignProject = (props: DesignProjectProps) => {
  const { year, title, description, images, yearFrom, border } = props;

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
              border: border, 
            }}/>
        }
      </ProjectContainer>
  )
}

export { DesignProject }
