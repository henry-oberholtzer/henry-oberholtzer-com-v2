import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { HorizontalRule } from "../HorizontalRule"
import styled from "styled-components"
import { CardStack } from '../CardStack';
import { ImageGrid } from '../ImageGrid';

const DesignContainer = styled.section`
  &:first-of-type {
    padding-top: 24px;
  }
  h3 {
    width: 100%;
  }
  `

const Image = styled.img`
  height: 300px;
  border-radius: 2px;`

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

const DesignPage = () => {
  return (
    <>
      <p>Graphic design work for print, digital and web.</p>
      <DesignContainer>
        <HeaderContainer>
          <SmallHeader>
            Reed College Orientation
          </SmallHeader>
          <Year>
            2019
          </Year>
        </HeaderContainer>
        <HorizontalRule />
          <p style={{ marginTop: '8px'}}>Designed while working for Reed Orientation, encompassing mainly utilitarian print designs.</p>
        <HorizontalRule/>
        <ImageGrid />
      </DesignContainer>
    </>
  )
}

export { DesignPage }
