import { Button as MuiButton, styled } from '@mui/material'

const Button = ({
   disabled,
   onClick,
   children,
   variant = 'longBtn',
   theme,
   ...rest
}) => {
   return (
      <DemoButton
         disabled={disabled}
         {...rest}
         onClick={onClick}
         variant={variant}
      >
         {children}
         hello
      </DemoButton>
   )
}

export default Button

const DemoButton = styled(MuiButton)(({ theme, variant }) => {
   if (variant === 'shortBtn') {
      return {
         '&.MuiButtonBase-root': {
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid #959595',
            color: theme.palette.primary.darkGreen,
            borderColor: '#048741',

            '&:hover': {
               background:
                  'var(--Primary-button-gradient, linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%))',
               border: 'none',
               padding: '10.5px 27px',
               color: 'white',
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
            borderRadius: '10px',
            padding: '10px 26px',
            border: '1px solid #959595',
            color: theme.palette.secondary.lightGrey,
            borderColor: '#959595',

            '&:hover': {
               background: theme.palette.secondary.linearGradient,
               padding: '10.5px 27px',
               color: 'white',
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
   if (variant === 'longBtn') {
      return {
         '&.MuiButtonBase-root': {
            width: '191px',
            padding: '14px 32px',
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.darkGreen,
            color: theme.palette.primary.main,
            '&:hover': {
               padding: '14px 32px',
               backgroundColor: theme.palette.primary.linearGradient,
               border: 'none',
               color: theme.palette.primary.main,
            },
            '&:active': {
               width: '191px',
               padding: '14px 32px',
               borderRadius: '10px',
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
   }
   return {}
})
