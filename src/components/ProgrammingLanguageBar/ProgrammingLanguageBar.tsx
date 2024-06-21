import styled from "styled-components"

const MainBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: #0077FF;
  margin: 8px 0px;
  margin-bottom: 28px;
  overflow: clip;
  display: flex;`

const PercentChunk = styled.div<{ width: number, color: string }>`
  height: 100%;
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  border-right: 1px solid ${props => props.theme.background};
  &:last-of-type {
    border: none;
  }`

const Label = styled.p<{ color?: string }>`
  margin-top: 12px;
  margin-left: 4px;
  color: ${props => props.color ? props.color : props.theme.main};
  font-size: 12px;
  position: absolute;
  z-index: 3;`

const ProgrammingLanguageBar = (props: ProgrammingLanguageBarProps) => {
  const { languages } = props;
  const keys = Object.keys(languages);

  const colors: ProgrammingLanguageColors = {
    typeScript: '#3178c6',
    javaScript: '#f1e05a',
    html: '#e34c26',
    css: '#563d7c',
    python: '#3572A5',
  }

  const names: ProgrammingLanguageColors = {
    typeScript: 'TypeScript',
    javaScript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    python: 'Python',
  }

  return (
    <MainBar>
      {keys.map((k) => {
        const percent = languages[k as keyof ProgrammingLanguagePercents];
        const color = colors[k as keyof ProgrammingLanguageColors]
        const name = names[k as keyof ProgrammingLanguageColors];

        if (percent && percent > 0) {
          return (
            <PercentChunk width={percent} color={color ? color : '#CCC'}>
              {percent > 10 && 
                <Label color={color}>{name} - {percent}%</Label>
              }
            </PercentChunk>
          )
        }
      })}
    </MainBar>
  )
}

export { ProgrammingLanguageBar }
