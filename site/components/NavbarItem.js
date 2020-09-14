import PropTypes from "prop-types"
import Link from "next/link"
import { PseudoBox } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const NavbarItem = ({ children, href }) => {
  const { colors } = customTheme
  return (
    <Link href={href ? href : "/"}>
      <a>
        <PseudoBox
          d={["none", "inline-block"]}
          p="1.25rem .5rem"
          color={colors.white}
          _hover={{ bg: colors.green[400] }}
        >
          {children}
        </PseudoBox>
      </a>
    </Link>
  )
}

NavbarItem.propTypes = {
  href: PropTypes.string,
}

export default NavbarItem
