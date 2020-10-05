/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import {
  theme,
  Box,
  Grid,
  Input,
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { useForm } from "react-hook-form"

const ContactForm = ({ color, inputColor, buttonColor }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const inputStyles = css`
    &::placeholder {
      color: ${theme.colors.orange[600]};
    }
  `

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
        gap="16px"
      >
        <FormControl isRequired>
          <FormLabel color={color} htmlFor="firstName">
            First Name
          </FormLabel>
          <Input
            css={inputStyles}
            name="firstName"
            type="text"
            ref={register({ required: true })}
            borderColor={inputColor}
            placeholder="Jane"
          />
        </FormControl>
        <FormControl>
          <FormLabel color={color}>Last Name</FormLabel>
          <Input
            css={inputStyles}
            name="lastName"
            type="text"
            ref={register}
            borderColor={inputColor}
            placeholder="Doe"
          />
        </FormControl>
      </Grid>
      <FormControl>
        <FormLabel color={color}>Email</FormLabel>
        <Input
          css={inputStyles}
          name="email"
          type="text"
          ref={register({ required: true, pattern: re })}
          borderColor={inputColor}
          placeholder="j.doe@gmail.com"
        />
        {errors.email?.pattern && (
          <FormErrorMessage>
            Please submit a valid email address
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={color}>Message</FormLabel>
        <Textarea
          css={inputStyles}
          name="message"
          ref={register({
            required: true,
            minLength: 2,
          })}
          h="auto"
          rows={8}
          borderColor={inputColor}
          placeholder="Hello"
        />
      </FormControl>
      <Box pt="12px">
        <Button variantColor={buttonColor} type="submit">
          Submit
        </Button>
      </Box>
    </form>
  )
}

ContactForm.propTypes = {
  color: PropTypes.string,
  inputColor: PropTypes.string,
  buttonColor: PropTypes.string,
}

export default ContactForm
