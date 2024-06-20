import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styled from 'styled-components';

const Container = styled.div<{ $width?: number, $height?: number }>`
  .swiper {
    height: ${props => props.$width ? props.$width : 300 }px;
    width: ${props => props.$height ? props.$height : 300 }px;
  }
  margin-top: 16px;
  margin-bottom: 16px;`

const Image = styled.img<{ $width?: number, $height?: number }>`
  height: ${props => props.$width ? props.$width : 300 }px;
  width: ${props => props.$height ? props.$height : 300 }px;
  border-radius: 2px;`

const CardStack = (props: CardStackProps) => {
  const { images, options } = props;

  return (
    <Container  $width={options?.width} $height={options?.height}>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        effect='cards'
        modules={[EffectCards]}
        width={options?.width}
        height={options?.height}
      >
        {images && images.map((i) => {
          return (
            <SwiperSlide>
              <Image  $width={options?.width} $height={options?.height}
              alt={i.caption}
              src={i.url}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export { CardStack }

