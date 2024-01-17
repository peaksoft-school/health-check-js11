import { styled, Rating, Typography, Box } from '@mui/material'
import Slider from 'react-slick'
import { REVIEWS } from '../utils/constants'
import { Pagination, NextReview, PreviousReview } from '../assets/icons'

const customDots = (dots) => <div>{dots}</div>
const customPaging = () => <Pagination />

const Reviews = () => {
   const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: customDots,
      customPaging,
      nextArrow: <NextReview />,
      prevArrow: <PreviousReview />,
      currentSlide: 0,
   }

   return (
      <StyledReviewsContainer>
         <Box>
            <StyledTitle variant="h2">
               Отзывы наших <Typography variant="span"> пациентов</Typography>
            </StyledTitle>
            <StyledSliderContainer>
               <StyledSlider {...settings}>
                  {REVIEWS.map(({ img, id, name, rating, review }) => (
                     <StyledReviewCard key={id}>
                        <Box className="container">
                           <img src={img} alt="" />
                           <Box className="wrapper">
                              <Typography variant="p" className="user-name">
                                 {name}
                              </Typography>
                              <Rating value={rating} readOnly />
                           </Box>
                        </Box>
                        <Review>{review}</Review>
                     </StyledReviewCard>
                  ))}
               </StyledSlider>
            </StyledSliderContainer>
         </Box>
      </StyledReviewsContainer>
   )
}

export default Reviews

const StyledReviewsContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))

const StyledSliderContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   overflow: 'hidden',
   width: '85rem',
   [theme.breakpoints.down('lg')]: {
      width: '70rem',
   },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontWeight: 600,
   lineHeight: '3.063rem',
   color: theme.palette.primary.lightBlack,
   paddingLeft: '7rem',
   span: {
      color: '#048741',
   },
}))

const StyledReviewCard = styled('div')(({ theme }) => ({
   padding: '2.5rem',
   width: '48.875rem',
   '& .container': {
      display: 'flex',
      gap: '0.875rem',
      paddingBottom: '20px',
      '& .wrapper': {
         display: 'flex',
         flexDirection: 'column',
      },
   },
   [theme.breakpoints.down('lg')]: {
      padding: '1.5rem',
      paddingBottom: '2rem',
   },
}))

const Review = styled('p')(({ theme }) => ({
   fontWeight: 300,
   fontSize: '1rem',
   lineHeight: '1.366rem',
   [theme.breakpoints.down('lg')]: {
      fontSize: '0.8rem',
      lineHeight: '1.1rem',
   },
}))

const StyledSlider = styled(Slider)(({ theme }) => ({
   position: 'relative',
   '& .slick-track': {
      display: 'flex',
      gap: '2.25rem',
      marginTop: '3.75rem',
   },
   '& .slick-list': {
      width: '48.875rem',
      [theme.breakpoints.down('lg')]: {
         width: '40.875rem',
      },
   },
   '& .slick-slide': {
      backgroundColor: '#F3F1F1',
      borderRadius: '1.25rem',
   },
   '& .slick-dots': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      gap: '0.875rem',
      paddingTop: '3.375rem',
      paddingBottom: '0.75rem',
      '& .slick-active': {
         background: 'none',
         ellipse: {
            fill: '#048741',
         },
      },
   },
   '& .slick-active': {
      backgroundColor: theme.palette.tertiary.daisy,
   },
   '& .slick-arrow': {
      cursor: 'pointer',
   },
   '& .slick-next, .slick-prev': {
      position: 'absolute',
      top: '24.25rem',
      zIndex: '10',
   },
   '& .slick-next': {
      left: '29.375rem',
      [theme.breakpoints.down('lg')]: {
         left: '25.375rem',
         top: '21rem',
         width: '35px',
      },
   },
   '& .slick-prev': {
      left: '17.063rem',
      [theme.breakpoints.down('lg')]: {
         left: '13.375rem',
         top: '21rem',
         width: '35px',
      },
   },
   '& .slick-next:hover, .slick-prev:hover': {
      circle: {
         fill: '#048741',
      },
      path: {
         fill: theme.palette.primary.main,
      },
   },
}))
