import { styled, Link } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const BreadCrumbs = ({ text, to, before, additionalText }) => {
   const breadcrumbItems = [
      { label: before, href: to },
      { label: text },

      additionalText && { label: additionalText, href: '' },
   ].filter(Boolean)

   return (
      <Breadcrumbs separator="›" aria-label="breadcrumb">
         {breadcrumbItems.map(({ label, href }, index) => (
            <StyledLink
               key={label}
               islast={index === breadcrumbItems.length - 1}
               href={href}
            >
               {label}
            </StyledLink>
         ))}
      </Breadcrumbs>
   )
}

export default BreadCrumbs

const StyledLink = styled(Link)(({ islast }) => ({
   fontSize: '1rem',
   fontWeight: '400',
   paddingBottom: '2rem',
   fontFamily: 'Manrope',
   color: islast ? '#048741' : 'inherit',
   cursor: islast ? '' : 'pointer',
   textDecoration: 'none',
}))
