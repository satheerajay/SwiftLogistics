import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  ChakraProvider,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";

const backgroundStyle = {
  backgroundImage: `url("./Credit.svg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  marginTop: "0px",
};

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([
    {
      payment_id: "12345",
      description: "Service Charge",
      payment_type: "Credit Card",
      payment_amount: 1500,
      payment_date: "2024-09-25",
    },
    {
      payment_id: "12346",
      description: "Monthly Subscription",
      payment_type: "Debit Card",
      payment_amount: 2000,
      payment_date: "2024-08-20",
    },
    {
      payment_id: "12347",
      description: "Premium Service",
      payment_type: "PayPal",
      payment_amount: 3000,
      payment_date: "2024-07-15",
    },
    {
      payment_id: "12348",
      description: "Additional Charges",
      payment_type: "Bank Transfer",
      payment_amount: 500,
      payment_date: "2024-06-10",
    },
  ]);

  // Send customer ID get from localStorage (not used here due to hardcoded data)
  const customer_id = localStorage.getItem("userId");

  // Commented out the API call since we are using hardcoded data
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8003/api/paymentHistory?customer_id=${customer_id}`
  //     )
  //     .then((response) => {
  //       setPaymentHistory(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, [customer_id]);

  return (
    <div>
      <ChakraProvider>
        <div style={backgroundStyle}>
          <Grid
            h="100vh"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem colSpan={2}>
              <GridItem pl={20} pb={40}>
                <Heading>Sri-Care - Payment History</Heading>
              </GridItem>
            </GridItem>

            <GridItem colSpan={4} alignContent={"center"}>
              <TableContainer>
                <Table
                  variant="simple"
                  colorScheme="teal"
                  size="lg"
                  borderColor={"black"}
                  ml={0}
                >
                  <Thead>
                    <Tr>
                      <Th p={10} fontSize={20}>
                        Bill ID
                      </Th>
                      <Th p={10} fontSize={20}>
                        Bill Description
                      </Th>
                      <Th p={10} fontSize={20}>
                        Payment Method
                      </Th>
                      <Th p={10} fontSize={20}>
                        Amount
                      </Th>
                      <Th p={10} fontSize={20}>
                        Payment Date
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody fontSize={20} fontWeight={"bold"}>
                    {paymentHistory.map((payment) => (
                      <Tr key={payment.payment_id}>
                        <Td borderWidth="1px">{payment.payment_id} </Td>
                        <Td borderWidth="1px">{payment.description}</Td>
                        <Td borderWidth="1px">{payment.payment_type}</Td>
                        <Td borderWidth="1px">
                          Rs. {payment.payment_amount}
                        </Td>
                        <Td borderWidth="1px">{payment.payment_date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
          </Grid>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default PaymentHistory;
