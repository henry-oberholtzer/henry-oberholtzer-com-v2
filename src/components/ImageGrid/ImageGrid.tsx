import styled from "styled-components"

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  grid-row: auto;
  border-radius: 4px;
  box-shadow: 1px 1px 2px ${props => props.theme.textLight};
  cursor: pointer;`

const GridContainer = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  gap: 8px;
  @media ()`

const ImageGrid = () => {
  return (
    <GridContainer>
      <Thumbnail src="./design/orientation/shirt_2.jpg" />
      <Thumbnail src="./design/orientation/shirt_1.jpg" />
      <Thumbnail src="./design/orientation/signage_1.jpg" />
      <Thumbnail src="./design/orientation/signage_2.jpg" />
      <Thumbnail src="./design/orientation/signage_3.jpg" />
      <Thumbnail src="./design/orientation/business_card.png" />
    </GridContainer>
  )
}

export { ImageGrid }
