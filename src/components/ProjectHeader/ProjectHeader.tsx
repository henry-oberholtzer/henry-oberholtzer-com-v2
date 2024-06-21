import styled from "styled-components"
import { HorizontalRule, ProgrammingLanguageBar } from ".."

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

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { title, year, yearFrom, description, programmingLanguages } = props;
  
  return (
      <>
        <HeaderContainer>
          {title &&           
            <SmallHeader>
              {title}
            </SmallHeader>
          }
          {year &&           
            <Year>
              {yearFrom && `${yearFrom} - `}
              {year}
            </Year>
          }
        </HeaderContainer>
        <HorizontalRule />
        {description && <>
          <p style={{ marginTop: '8px'}}>{description}</p>
        </>}
        {programmingLanguages && 
            <ProgrammingLanguageBar languages={programmingLanguages} />
        }
      </>       
  )
}

export { ProjectHeader }
