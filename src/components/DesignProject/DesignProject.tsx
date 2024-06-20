import styled from "styled-components"
import { HorizontalRule } from "../HorizontalRule"
import { CardStack } from "../CardStack"

const DesignContainer = styled.section`
  &:first-of-type {
    padding-top: 24px;
  }
  h3 {
    width: 100%;
  }
  `

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  `

const SmallHeader = styled.h3`
  font-weight: normal;`

const Year = styled(SmallHeader)`
  text-align: right;
  color: ${props => props.theme.textLight};`

const DesignProject = (props: DesignProjectProps) => {
  const { year, title, description, images, yearFrom, border } = props;

  return (
      <DesignContainer>
        {title &&
          <>
            <HeaderContainer>
              <SmallHeader>
                {title}
              </SmallHeader>
              {year &&           
                <Year>
                  {yearFrom && `${yearFrom} - `}
                  {year}
                </Year>
              }
            </HeaderContainer>
            <HorizontalRule />
          </>       
        }
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
