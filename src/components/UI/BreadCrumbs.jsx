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
               isLast={index === breadcrumbItems.length - 1}
               href={href}
            >
               {label}
            </StyledLink>
         ))}
      </Breadcrumbs>
   )
}

export default BreadCrumbs

const StyledLink = styled(Link)(({ isLast }) => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   paddingBottom: '2rem',
   color: isLast ? '#048741' : 'inherit',
   cursor: 'pointer',
   textDecoration: 'none',
}))
