import { Button as MuiButton, styled, CircularProgress } from '@mui/material'
import { forwardRef } from 'react'

const Button = forwardRef(
   (
      {
         disabled,
         onClick,
         children,
         variant,
         type = 'submit',
         colorLoading,
         isLoading,
         ...rest
      },
      ref
   ) => (
      <StyledButton
         disabled={disabled}
         onClick={onClick}
         variant={variant}
         type={isLoading ? 'button' : type}
         ref={ref}
         {...rest}
      >
         {isLoading ? (
            <CircularProgress color={colorLoading} />
         ) : (
            <div>{children}</div>
         )}
      </StyledButton>
   )
)

export default Button

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
   const defaultStyle = {
      '&.MuiButtonBase-root': {
         padding: '14px 32px',
         borderRadius: '10px',
         background: 'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
         color: theme.palette.primary.main,
         transition: 'all 0.5s',

         '&:hover': {
            background:
               'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
            border: 'none',
         },

         '&:active': {
            backgroundColor: theme.palette.primary.linearGradient,
         },

         '&:disabled': {
            border: 'none',
            backgroundColor: theme.palette.secondary.lightGrey,
            color: theme.palette.primary.main,
         },
      },
   }

   if (variant === 'secondary') {
      return {
         '&.MuiButtonBase-root': {
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid #048741',
            color: theme.palette.primary.darkGreen,
            transition: 'all 0.4s',

            '&:hover': {
               border: '1px solid #048741',
               background:
                  'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
               color: theme.palette.primary.main,
            },

            '&:active': {
               border: '1px solid #048741',
               background:
                  'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
            },

            '&:disabled': {
               border: 'none',
               backgroundColor: theme.palette.primary.backgroundAdmin,
               color: theme.palette.tertiary.main,
            },
         },
      }
   }

   if (variant === 'grey') {
      return {
         '&.MuiButtonBase-root': {
            transition: '0.2s',
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid',
            color: theme.palette.secondary.lightGrey,

            '&:hover': {
               backgroundColor: theme.palette.primary.backgroundAdmin,
               color: theme.palette.secondary.lightGrey,
               border: `1px solid ${theme.palette.primary.backgroundAdmin}`,
            },

            '&:active': {
               backgroundColor: theme.palette.primary.backgroundAdmin,
               color: theme.palette.secondary.lightGrey,
               border: `1px solid ${theme.palette.primary.backgroundAdmin}`,
            },

            '&:disabled': {
               border: 'none',
               backgroundColor: theme.palette.primary.main,
               color: theme.palette.secondary.input,
            },
         },
      }
   }

   return defaultStyle
})
