import { Button as MuiButton, styled } from '@mui/material'

const Button = ({ disabled, onClick, children, variant, theme, ...rest }) => (
   <StyledButton
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      {...rest}
   >
      {children}
   </StyledButton>
)

export default Button

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
   const defaultStyle = {
      '&.MuiButtonBase-root': {
         width: '191px',
         padding: '14px 32px',
         borderRadius: '10px',
         background: 'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
         color: theme.palette.primary.main,
         transition: 'all 0.3s',

         '&:hover': {
            padding: '14px 32px',
            backgroundColor: theme.palette.primary.darkGreen,
            border: 'none',
            color: theme.palette.primary.main,
         },

         '&:active': {
            padding: '14px 32px',
            borderRadius: '1.5rem',
            backgroundColor: theme.palette.primary.linearGradient,
            color: theme.palette.primary.main,
         },

         '&:disabled': {
            border: 'none',
            backgroundColor: theme.palette.secondary.lightGrey,
            color: theme.palette.primary.main,
         },
      },
   }
   if (variant === 'shortBtn') {
      return {
         '&.MuiButtonBase-root': {
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid #959595',
            color: theme.palette.primary.darkGreen,
            borderColor: '#048741',
            transition: 'all 0.4s',

            '&:hover': {
               background:
                  'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
               border: 'none',
               padding: '10.5px 27px',
               color: theme.palette.primary.main,
            },

            '&:active': {
               border: 'none',
               background:
                  'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
            },

            '&:disabled': {
               border: 'none',
               backgroundColor: '#F5F5F5',
               color: '#D9D9D9',
            },
         },
      }
   }

   if (variant === 'greyBtn') {
      return {
         '&.MuiButtonBase-root': {
            transition: '13s linear',
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid #959595',
            color: theme.palette.secondary.lightGrey,
            borderColor: '#959595',

            '&:hover': {
               background: theme.palette.secondary.linearGradient,
               padding: '10.5px 27px',
               color: 'white',
               transition: 'all 1s',
            },

            '&:active': {
               border: 'none',
               background: theme.palette.secondary.lightGrey,
            },

            '&:disabled': {
               border: 'none',
               backgroundColor: theme.palette.primary.main,
               color: '#D9D9D9',
            },
         },
      }
   }
   return defaultStyle
})
