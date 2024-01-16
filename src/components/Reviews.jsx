import { styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import { REVIEWS } from '../utils/constants'

const customDots = (dots) => <div>{dots}</div>

const Reviews = () => {
   const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => customDots(dots),
      // customPaging: () => customPaging(),
      // nextArrow: <NextImg />,
      // prevArrow: <PreviousImg />,
   }
   return (
      <StyledMainContainer>
         <Typography className="title" variant="h2">
            Отзывы наших
            <StyledTitle variant="p" className="mark">
               пациентов
            </StyledTitle>
         </Typography>
         <StyledSlider {...settings}>
            {REVIEWS.map((item) => {
               return (
                  <Container key={item.id}>
                     <Div>
                        <img src={item.img} alt="" />
                        <Wrapper>
                           <Username>{item.name}</Username>
                           {/* <Rating value={item.rating} readOnly /> */}
                        </Wrapper>
                     </Div>
                     <TitleStyled>{item.review}</TitleStyled>
                  </Container>
               )
            })}
         </StyledSlider>
      </StyledMainContainer>
   )
}

export default Reviews

const StyledMainContainer = styled('div')(() => ({}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.darkGreen,
}))

const Container = styled('div')({
   boxSizing: 'border-box',
   textAlign: 'left',
   padding: '40px',
   width: '782px',
})

const Wrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   padding: 0,
})

const Username = styled('h3')({
   margin: 0,
})

const Div = styled('div')({
   display: 'flex',
   gap: '14px',
   paddingBottom: '20px',
})

const TitleStyled = styled('p')({
   weight: 300,
   size: '16px',
   lineHeight: '21.86px',
})

const StyledSlider = styled(Slider)({
   position: 'relative',

   '& .slick-track': {
      display: 'flex',
      gap: '36px',
      marginTop: '60px',
   },
   '& .slick-list': {
      width: '782px',
   },
   '& .slick-slide': {
      backgroundColor: '#F3F1F1',
      borderRadius: '20px',
   },

   '& .slick-dots': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      paddingTop: '54px',
      paddingBottom: '12px',
      '& .slick-active': {
         background: 'none',
         ellipse: {
            fill: '#048741',
         },
      },
   },
   '& .slick-active': {
      backgroundColor: '#DBF0E5',

      ellipse: {
         fill: '#048741',
      },
   },
   '& .slick-arrow': {
      cursor: 'pointer',
   },
   '& .slick-next': {
      position: 'absolute',
      top: '388px',
      zIndex: '8',
      left: '470px',
   },
   '& .slick-prev': {
      position: 'absolute',
      top: '388px',
      zIndex: '8',
      left: '273px',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      circle: {
         fill: 'url(#paint0_linear_92_5157)',
      },
      path: {
         fill: '#fff',
      },
   },
})
