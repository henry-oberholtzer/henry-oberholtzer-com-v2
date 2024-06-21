import styled from "styled-components"
import { useTheme } from "styled-components"
import { HorizontalRule, NavigationButton, ProgrammingLanguageBar } from ".."

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  `

const LinkContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;`

const SmallHeader = styled.h3`
  font-weight: normal;`

const Year = styled(SmallHeader)`
  text-align: right;
  color: ${props => props.theme.textLight};`

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { title, year, yearFrom, description, programmingLanguages, links } = props;
  const theme = useTheme()

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
        {links && 
          <LinkContainer>
            {links.live &&            
            <NavigationButton 
                to={links.live}
                name={'Live Site'}
                target={'blank'}
                color={theme.link}
                small
              />
            }
            {links.gitHub &&              
              <NavigationButton 
                to={links.gitHub}
                name={'GitHub'}
                target={'blank'}
                color={theme.link}
                small
              />
            }
          </LinkContainer>}
        {programmingLanguages && 
            <ProgrammingLanguageBar languages={programmingLanguages} />
        }
      </>       
  )
}

export { ProjectHeader }
