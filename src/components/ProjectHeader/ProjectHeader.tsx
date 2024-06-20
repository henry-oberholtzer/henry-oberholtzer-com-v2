import styled from "styled-components"
import { HorizontalRule } from ".."

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
  const { title, year, yearFrom } = props;
  
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
      </>       
  )
}

export { ProjectHeader }
