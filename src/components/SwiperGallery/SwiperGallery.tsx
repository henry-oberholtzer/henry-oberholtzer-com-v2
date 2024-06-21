import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

const Container = styled.div<{ $width?: number, $height?: number }>`
  .swiper-slide {
    width: fit-content;
    text-align: center;
  }
  .swiper-slide p {
    color: ${props => props.theme.textLight};
    margin-bottom: 16px;
  }
  margin-top: 16px;
  margin-bottom: 16px;`

const Image = styled.img<{ $fullWidth?: boolean, $border?: number }>`
  ${props => props.$fullWidth ? 'width: 100%; object-fit: cover; object-position: top;' :
    'height: 300px;'
  }
  max-height: 400px;
  border-radius: 2px;
  ${props => props.$border ? `border: ${props.$border}px solid ${props.theme.textLight};` : ''}`

const SwiperGallery = (props: SwiperGalleryProps) => {
  const { images, options } = props;

  return (
    <Container  $width={options?.width} $height={options?.height}>
      <Swiper
        slidesPerView={options?.fullWidth ? 1 : 'auto'}
        spaceBetween={'8px'}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        width={options?.width}
        height={options?.height}
      >
        {images && images.map((i) => {
          return (
            <SwiperSlide>
              <Image $fullWidth={options?.fullWidth} $border={options?.border}
              alt={i.caption}
              src={i.url}
              />
              {!options?.noCaptions && 
                <p>{i.caption}</p>
              }
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export { SwiperGallery }

