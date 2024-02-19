import { keyframes } from '@emotion/react'
import { styled } from '@mui/material'
import React from 'react'

const Loading = () => {
   return (
      <HeartbeatLoader>
         <svg
            className="svgdraw"
            width="100%"
            height="100%"
            viewBox="0 0 150 400"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               className="path"
               d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
               fill="transparent"
               strokeWidth="4"
               stroke="black"
            />
         </svg>
         <div className="innercircle" />
         <div className="outercircle" />
      </HeartbeatLoader>
   )
}

export default Loading

const drawAnimation = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const innerBeatAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1.2);
  }

  10%, 50%, 75% {
    transform: translate(-50%, -50%) scale(1.2);
  }

  60% {
    transform: translate(-50%, -50%) scale(1.25);
  }
`

const outerBeatAnimation = keyframes`
  0%, 10%, 50%, 75% {
    transform: scale(1.2);
  }

  60% {
    transform: scale(1.25);
  }
`

const HeartbeatLoader = styled('div')({
   position: 'absolute',
   width: '10vmin',
   height: '10vmin',
   zIndex: '0',
   margin: 'auto',
   top: '0',
   left: '0',
   right: '0',
   bottom: '0',

   '.svgdraw': {
      top: '30%',
      left: '26%',
      position: 'absolute',
      width: '50%',
      height: '50%',
      color: '#fff',
      transform: 'scale(1.4)',
      zIndex: '3',

      '.path': {
         stroke: 'rgba(255, 255, 255, 0.95)',
         strokeWidth: '4',
         strokeDasharray: '1000px',
         strokeDashoffset: '1000px',
         animation: `${drawAnimation} 1.5s infinite forwards normal linear`,
         animationDelay: '0.1s',
         position: 'relative',
      },
   },

   '.innercircle': {
      position: 'absolute',
      top: '17%',
      left: '100.5%',
      transform: 'translate(-50%, -50%) scale(1.2)',
      width: '160%',
      height: 'auto',
      zIndex: '1',
      opacity: '0.97',
      animation: `${innerBeatAnimation} 1.5s infinite linear forwards`,

      ':before, :after': {
         position: 'absolute',
         content: '""',
         left: '25%',
         top: '0',
         width: '25%',
         height: 'auto',
         paddingBottom: '40%',
         background: '#4ecc8d',
         borderRadius: '50px 50px 0 0',
         transform: 'rotate(-45deg)',
         transformOrigin: '0 100%',
      },

      ':after': {
         left: '0',
         transform: 'rotate(45deg)',
         transformOrigin: '100% 100%',
      },
   },

   '.outercircle': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '#87caa8',
      boxShadow: '0 0 30px 0px #fff',
      position: 'absolute',
      zIndex: '-1',
      opacity: '0.7',
      top: '0',
      left: '0',
      transform: 'scale(1.2)',
      animation: `${outerBeatAnimation} 1.5s infinite linear forwards`,
   },
})
