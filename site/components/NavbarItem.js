import PropTypes from "prop-types"
import Link from "next/link"
import { PseudoBox } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const NavbarItem = ({ children, href, ...props }) => {
  const { colors } = customTheme
  return (
    <PseudoBox
      d="flex"
      alignItems="center"
      p="1.25rem"
      color={colors.white}
      _hover={{ bg: colors.green[400] }}
      {...props}
    >
      <Link href={href ? href : "/"}>
        <a>{children}</a>
      </Link>
    </PseudoBox>
  )
}

NavbarItem.propTypes = {
  href: PropTypes.string,
}

export default NavbarItem
