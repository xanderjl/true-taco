/** @jsx jsx */
import Link from "next/link"
import { Box, Grid, Heading } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import customTheme from "../styles/theme"
import Container from "../components/Container"
import MenuItem from "../components/MenuItem"
import OrderButton from "../components/OrderButton"

const Menu = (props) => {
  const { colors } = customTheme

  const frills = css`
    &::before {
      overflow-x: hidden;
      position: absolute;
      top: -22px;
      width: 100%;
      height: 25px;
      content: "";
      background-repeat: repeat;
      background: url("/frills/top.svg");
    }

    &::after {
      overflow-x: hidden;
      position: absolute;
      bottom: -22px;
      width: 100%;
      height: 22px;
      content: "";
      background: url("/frills/bottom.svg");
    }
  `

  return (
    <Box position="relative" css={frills} bg={colors.black} mb="22px">
      <Container {...props}>
        <Link href="/">
          <a>
            <Heading
              mb="5rem"
              as="h1"
              color={colors.white}
              fontWeight="400"
              fontSize="6xl"
              textAlign="center"
              textDecor="underline"
            >
              Saturday Pickup
            </Heading>
          </a>
        </Link>
        <Grid
          mb="6rem"
          rowGap={["4rem", "4rem", "5rem"]}
          columnGap={["4rem", "4rem", "8rem"]}
          gridTemplateRows="auto"
          gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
        >
          <MenuItem heading="Quesadillas" price="3.5-7">
            Mixed cheeses, tomatoes, green onions. Choose your filling. Choose
            your shell. Served with sour cream and sour cream.
          </MenuItem>
          <MenuItem heading="Taco Kit" price="3.5-7">
            Flavourful tacos with a variety of fillings served on a corn
            tortilla, topped with onion, cillantro, and a wedge of lime.
          </MenuItem>
          <MenuItem heading="Taquitos Dorados" price="7.5">
            Crispy, deepfried, rolled tacos made with your choice of filling.
            Topped with lettuce, sour cream and parmesean.
          </MenuItem>
          <MenuItem heading="Chile Relleno" price="5">
            Whole jalapeño stuffed with your choice of filling. Served with
            fried cheese and corn tortilla.
          </MenuItem>
          <MenuItem heading="Tostadas" price="3.5">
            Crispy, flat corn tortilla topped with refried beans, chicken,
            lettuce, sour cream and parmesan.
          </MenuItem>
          <MenuItem heading="Empanada Mexicana" price="3.5">
            Handmade corn tortilla, stuffed with your choice of filling. Served
            with lettuce, sour cream, and parmesan.
          </MenuItem>
        </Grid>
        <OrderButton w="6rem" h="auto" />
      </Container>
    </Box>
  )
}

export default Menu
