import React, { useState } from "react"
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from "react-square-payment-form"
import "react-square-payment-form/lib/default.css"

const PaymentForm = () => {
  const [errorMessages, setErrors] = useState([])
  const cardNonceResponseReceived = (
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) => {
    if (errors) {
      setErrors(errors.map(error => error.message))
      return
    }

    setErrors({ errorMessages: [] })
    alert(
      "nonce created: " +
        nonce +
        ", buyerVerificationToken: " +
        buyerVerificationToken
    )
  }

  const createVerificationDetails = () => {
    return {
      amount: "100.00",
      currencyCode: "CAD",
      intent: "CHARGE",
      billingContact: {
        familyName: "Smith",
        givenName: "John",
        email: "jsmith@example.com",
        country: "GB",
        city: "London",
        addressLines: ["1235 Emperor's Gate"],
        postalCode: "SW7 4JA",
        phone: "020 7946 0532",
      },
    }
  }

  return (
    <div>
      <h1>Payment Page</h1>
      <SquarePaymentForm
        sandbox={true}
        applicationId={process.env.GATSBY_SQUARE_APP_ID}
        locationId={process.env.GATSBY_SQUARE_LOCATION_ID}
        cardNonceResponseReceived={cardNonceResponseReceived}
        createVerificationDetails={createVerificationDetails}
      >
        <fieldset className="sq-fieldset">
          <CreditCardNumberInput />
          <div className="sq-form-third">
            <CreditCardExpirationDateInput />
          </div>

          <div className="sq-form-third">
            <CreditCardPostalCodeInput />
          </div>

          <div className="sq-form-third">
            <CreditCardCVVInput />
          </div>
        </fieldset>
        <CreditCardSubmitButton>Pay $1.00</CreditCardSubmitButton>s
      </SquarePaymentForm>
      <div className="sq-error-message">
        {errorMessages.map(errorMessage => (
          <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
        ))}
        {/* <pre>{JSON.stringify(errorMessages, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default PaymentForm
