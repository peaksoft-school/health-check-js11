import { Typography, styled, ButtonBase } from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/input/Input'
import NumberInput from '../../components/UI/input/NumberInput'
import Button from '../../components/UI/Button'
import { GoogleIcon } from '../../assets/icons'

const SingUp = () => {
   const open = true

   return (
      <Modal open={open}>
         <StyledForm action="">
            <Typography>РГИСТРАЦИЯ</Typography>
            <div className="input-box">
               <StyledInput />
               <StyledInput />
               <StyledNumberInput
                  id="number"
                  mask="_"
                  format="+996 (###) ##-##-##"
                  placeholder="+996 (_ _ _) _ _-_ _-_ _"
               />

               <StyledInput />
               <StyledInput />
               <StyledInput />
               <StyledInput />
            </div>
            <StyledButton type="submit">СОЗДАТЬ АККАУНТ</StyledButton>

            <Line>
               <hr className="lineFirst" />

               <span>или</span>

               <hr className="lineSecond" />
            </Line>

            <ButtonBase className="google-button" type="button">
               <GoogleIcon />
               Продолжить с Google
            </ButtonBase>

            <Typography>
               У вас уже есть аккаунт?
               <a href="#[pvot9hyi8ujikglf"> Войти </a>
            </Typography>
         </StyledForm>
      </Modal>
   )
}

export default SingUp

const StyledNumberInput = styled(NumberInput)(() => ({}))

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   '& > .input-box': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '14px',
      marginTop: '24px',
   },
   '& a ': { textDecoration: 'none' },

   '& .google-button': {
      '&.MuiButtonBase-root': {
         backgroundColor: theme.palette.primary.backgroundAdmin,
         width: '414px',
         color: theme.palette.primary.lightBlack,
         height: '44px',
         borderRadius: '8px',
         fontFamily: ' Manrope',
         fontWeight: '600',
         marginBottom: '20px',
         fontSize: '16px',
         display: 'flex',
         gap: '14px',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input ': {
      height: '15px',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '46px',
      marginBottom: '20px',
      width: '414px',
      height: '44px',
      fontSize: '14px',

      '&:active': {
         borderRadius: '10px',
      },
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '20px',
   marginTop: '20px',

   '& .lineFirst': {
      width: '10.313rem',
      margin: '0.5rem 0',
      height: '0rem',
      color: '#F3F1F1',
   },

   '& span': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      color: '#222222',
   },

   '& .lineSecond': {
      width: '10.313rem',
      color: '#F3F1F1',
      margin: '0.5rem 0',
      height: '0rem',
   },
}))
