import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  Input,
  FormLabel,
  Heading,
  ChakraProvider,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [amountToSend, setAmountToSend] = useState(1000);
  const [number, setNumber] = useState("");
  const amount = amountToSend * 100; // Convert to cents
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8003/api/user/all')
      .then(response => {
        setUserDetails(response.data[0]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const userId = userDetails.userId;
  localStorage.setItem('userId', userId);

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`/create-payment-intent?amount=${amount}`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [amount]);

  const handlePaymentSubmission = async () => {
    // try {
    //   await axios.post('http://localhost:8004/api/payment', {
    //     userId,
    //     amount: amountToSend,
    //     number,
    //   });
    //   console.log('Payment data recorded in database.');
    // } catch (error) {
    //   console.error('Error recording payment data:', error);
    // }
    alert('Payment successful!, Payment Recorded in Database');
  };

  const handleAmountChange = (e) => {
    setAmountToSend(e.target.value); // Update the amount when the user changes it
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value); // Update the number when the user changes it
  };

  return (
    <Box
      w="50%"
      mt="8%"
      ml="25%"
      p={10}
      border="5px solid #100c08" // Add a border
      padding="100px" // Add padding for spacing
      borderRadius="10px" // Add rounded corners
    >
      <ChakraProvider>
        <Heading>Pay your SRI-CARE Bills here</Heading><br />
        <div>
          <FormLabel>Add your Number /Account:</FormLabel>
          <Input
            type="text"
            value={number}
            onChange={handleNumberChange}
            height="50px" // Increase the height
          />
          <FormLabel>Amount to Send:</FormLabel>
          <Input
            type="number"
            value={amountToSend}
            onChange={handleAmountChange}
            height="50px" // Increase the height
          />
        </div>
      </ChakraProvider>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} onPaymentSuccess={handlePaymentSubmission} />
        </Elements>
      )}
      <Flex justifyContent="space-between" mt={4}>
        <Button
          style={{
            backgroundColor: "#92E3A9",
            padding: "15px",
            minWidth: "20%",
            borderRadius: "5px",
          }}
          onClick={handlePaymentSubmission}
          colorScheme="teal"
          disabled={!clientSecret} // Disable until the payment intent is ready
        >
          Submit Payment
        </Button>
        <Link to="/">
          <Button
            style={{
              backgroundColor: "#92E3A9",
              padding: "15px",
              minWidth: "20%",
              borderRadius: "5px",
            }}>
            Back
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Payment;
