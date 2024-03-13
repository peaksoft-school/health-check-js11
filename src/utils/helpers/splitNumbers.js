export const formatPhoneNumberWithSpaces = (phoneNumber) => {
   const countryCode = phoneNumber.slice(0, 4)
   const firstPart = phoneNumber.slice(4, 7)
   const secondPart = phoneNumber.slice(7, 10)
   const thirdPart = phoneNumber.slice(10)

   return [countryCode, firstPart, secondPart, thirdPart].join(' ')
}
