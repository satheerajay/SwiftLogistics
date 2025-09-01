import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@chakra-ui/react";

const CheckoutForm = ({ clientSecret, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Confirm the card payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error('Payment Error:', error);
      // You can add error handling and user feedback here
    } else {
      if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!', paymentIntent);
        onPaymentSuccess(); // Call the function to update the database
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        type="submit"
        disabled={!stripe}
        colorScheme="teal"
        mt={4}
      >
        Pay
      </Button>
    </form>
  );
};

export default CheckoutForm;
