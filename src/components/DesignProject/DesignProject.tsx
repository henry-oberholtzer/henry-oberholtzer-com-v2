import styled from "styled-components"
import { HorizontalRule } from "../HorizontalRule"
import { CardStack } from "../CardStack"
import { ProjectHeader } from "../ProjectHeader"

const DesignContainer = styled.section`
  &:first-of-type {
    padding-top: 24px;
  }
  h3 {
    width: 100%;
  }
  `

const DesignProject = (props: DesignProjectProps) => {
  const { year, title, description, images, yearFrom, border } = props;

  return (
      <DesignContainer>
        <ProjectHeader
          title={title}
          year={year}
          description={description}
          yearFrom={yearFrom}
        />
        {description && <>
          <p style={{ marginTop: '8px'}}>{description}</p>
          <HorizontalRule/>
        </>}
        {images &&         
          <CardStack 
            images={images}
            options={{
              border: border, 
            }}/>
        }
      </DesignContainer>
  )
}

export { DesignProject }
