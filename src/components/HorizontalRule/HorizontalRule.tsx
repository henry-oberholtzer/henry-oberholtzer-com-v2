import styled from "styled-components"

const HorizontalRule = styled.hr<{ $active?: boolean, $color?: string, $width?: number }>`
margin-top: 12px;
position: relative;
width: ${props => props.$width ? props.$width : 100}%;
color: ${props => props.$color ? props.$color : props.theme.text};
border: 0;
border-top: 1px solid ${props => props.$color ? props.$color : props.theme.text};
border-bottom: 1px solid ${props => props.$active ? 
  props.$color ? props.$color : props.theme.text 
  : 'transparent'};
height: 1px;
transition: border-bottom ease-in-out 200ms;`

export { HorizontalRule }
