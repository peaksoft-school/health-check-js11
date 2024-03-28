import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled, Typography } from '@mui/material'
import { ChatBotIcon } from '../assets/icons'
import { chatBot } from '../store/slices/chat-bot/chatBotThunk'
import Input from './UI/inputs/Input'
import { saveMessage } from '../store/slices/chat-bot/chatBotSlice'
import { DEPARTMENTS } from '../utils/constants'

const ChatBot = () => {
   const { messages } = useSelector((state) => state.chatBot)

   const [toggleModal, setToggleModal] = useState(false)
   const [messageToSend, setSendMessage] = useState('')

   const dispatch = useDispatch()

   const handlerChangeValue = (e) => setSendMessage(e.target.value)

   const openModal = () => {
      setToggleModal((prev) => !prev)
      dispatch(chatBot('start'))
   }

   const sendMessage = (e) => {
      e.preventDefault()

      dispatch(chatBot(messageToSend))
      dispatch(saveMessage({ data: { data: messageToSend }, fromUser: true }))

      setSendMessage('')
   }

   const changeServiseHandler = (service) => {
      dispatch(chatBot(service))
      dispatch(saveMessage({ data: { data: service }, fromUser: true }))
   }

   return (
      <StyledContainer>
         {toggleModal ? (
            <Box className="modal">
               <StyledTexts className="main-text">
                  <Box className="initial">
                     <Typography className="title">
                        Выберите направлене:
                     </Typography>

                     <Box className="service-box">
                        {DEPARTMENTS?.map((department) => (
                           <button
                              key={department.id}
                              type="button"
                              onClick={() =>
                                 changeServiseHandler(department.label)
                              }
                           >
                              {department.label}
                           </button>
                        ))}
                     </Box>
                  </Box>
                  {messages?.map((message) => (
                     <p
                        key={message.data.data}
                        className={message.fromUser ? 'user' : 'incoming'}
                     >
                        <p>{message.data.data}</p>
                     </p>
                  ))}
               </StyledTexts>

               <form onSubmit={sendMessage}>
                  <StyledInput
                     placeholder="Напишите сообщение..."
                     autoComplete="off"
                     value={messageToSend}
                     onChange={handlerChangeValue}
                  />
               </form>
            </Box>
         ) : (
            <ChatBotIcon onClick={openModal} />
         )}
      </StyledContainer>
   )
}

export default ChatBot

const StyledContainer = styled(Box)(() => ({
   bottom: '20px',
   right: '5%',
   position: 'fixed',
   zIndex: '1000000',

   '& > .modal': {
      background: 'white',
      padding: '5px 10px',
      width: '400px',
      height: '450px',
      maxHeight: '450px',
      borderRadius: '15px',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',

      '& > form': {
         width: '100%',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      height: '2.625rem',
      border: 'none',
      width: '400px',
      background: 'white',
   },

   '& .MuiOutlinedInput-input': {
      background: 'white',
      border: 'none',
      height: '0.4375em',
      width: '400px',
   },
}))

const StyledTexts = styled(Box)(() => ({
   '& > p': {
      borderRadius: '5px',
      marginBottom: '10px',
      padding: '5px 10px',
   },

   '& > .user': {
      padding: '5px 35px',
      marginBottom: '20px',
      color: 'white',
      fontSize: '16px',
      borderRadius: '70px',
      background: '#0CBB6B',
   },

   '& > .initial': {
      '& > .title': {
         padding: '5px 35px',
         marginBottom: '20px',
         color: 'white',
         fontSize: '20px',
         borderRadius: '70px',
         background: '#0CBB6B',
      },

      '& > .service-box': {
         '& > button': {
            width: '140px',

            margin: '10px',
            backgroundColor: 'white',
            border: '1px solid gray',
            padding: '5px 15px',
            borderRadius: '10px',
            color: 'grey',
         },
      },
   },

   '& > .incoming': {
      // backgroundColor: '#fff',
      // color: '#000',
      // overflow: 'hidden',
      // whiteSpace: 'nowrap',
      // animation: `$typing 3s steps(30, end)`,
   },
}))
