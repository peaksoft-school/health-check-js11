import { styled, Rating, Typography, Box, Avatar } from '@mui/material'
import Slider from 'react-slick'
import { REVIEWS } from '../../utils/constants'
import { Pagination, NextReview, PreviousReview } from '../../assets/icons'

const customDots = (dots) => <Box>{dots}</Box>
const customPaging = () => <Pagination />

const NextArrow = ({ onClick }) => (
   <NextReview onClick={onClick} className="slick-next" />
)

const PrevArrow = ({ onClick }) => (
   <PreviousReview onClick={onClick} className="slick-prev" />
)

const Reviews = () => {
   const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: customDots,
      customPaging,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   }

   return (
      <StyledContainer>
         <Typography className="title" variant="h2">
            Отзывы наших <Typography variant="span"> пациентов</Typography>
         </Typography>

         <Box className="slider-box">
            <StyledSlider {...settings}>
               {REVIEWS.map(({ img, id, name, rating, review }) => (
                  <StyledSlide key={id}>
                     <Box className="info">
                        <Avatar src={img} alt="пользователь" />

                        <Box className="wrapper">
                           <Typography variant="p">{name}</Typography>

                           <Rating value={rating} readOnly />
                        </Box>
                     </Box>

                     <Typography className="review">{review}</Typography>
                  </StyledSlide>
               ))}
            </StyledSlider>
         </Box>
      </StyledContainer>
   )
}

export default Reviews

const StyledContainer = styled(Box)(({ theme }) => ({
   margin: '0 auto',
   maxWidth: '1600px',

   '& > .title': {
      fontFamily: 'Manrope',
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: 'normal',
      margin: '0 0 60px',

      '& > span': {
         color: theme.palette.primary.darkGreen,
      },

      '@media (max-width: 1800px)': {
         marginLeft: '120px',
      },
   },

   '& > .slider-box': {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
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

         '& ellipse': {
            fill: '#048741',
         },
      },
   },

   '& .slick-active': {
      backgroundColor: theme.palette.tertiary.daisy,
   },

   '& .slick-next, .slick-prev': {
      position: 'absolute',
      top: '24.25rem',
      cursor: 'pointer',
      zIndex: '10',
   },

   '& .slick-next': {
      left: '29.375rem',
      top: '450px',

      [theme.breakpoints.down('lg')]: {
         left: '25.375rem',
         top: '21rem',
         width: '35px',
      },
   },

   '& .slick-prev': {
      left: '17.063rem',
      top: '450px',

      [theme.breakpoints.down('lg')]: {
         left: '13.375rem',
         top: '210rem',
         width: '35px',
      },
   },

   '& .slick-next:hover, .slick-prev:hover': {
      '& circle': {
         fill: '#048741',
      },

      '& path': {
         fill: theme.palette.primary.main,
      },
   },
}))

const StyledSlide = styled(Box)(({ theme }) => ({
   padding: '2.5rem',
   width: '48.875rem',

   [theme.breakpoints.down('lg')]: {
      padding: '1.5rem',
      paddingBottom: '2rem',
   },

   '& > .info': {
      display: 'flex',
      gap: '0.875rem',
      paddingBottom: '20px',

      '& > img': {
         width: '50px',
         height: '50px',
         borderRadius: '50%',
      },

      '& > .wrapper': {
         display: 'flex',
         flexDirection: 'column',
      },
   },

   '& > .review': {
      fontWeight: '300',
      fontSize: '1rem',
      lineHeight: '1.366rem',

      [theme.breakpoints.down('lg')]: {
         fontSize: '0.8rem',
         lineHeight: '1.1rem',
      },
   },
}))
