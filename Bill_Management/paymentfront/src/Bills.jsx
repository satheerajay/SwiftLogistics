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
  backgroundImage: `url("./Invoice-amico.svg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  margin: "0",
};

const Bills = () => {
  const [paymentBills, setPaymentBills] = useState([]);

  const customer_id = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(
        `http://localhost:8003/api/paymentBills?customer_id=${customer_id}`
      )
      .then((response) => {
        setPaymentBills(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [customer_id]);

  return (
    <div>
      <ChakraProvider>
        <div style={backgroundStyle}>
          <Grid
            h="100vh"
            templateRows="auto 1fr"
            templateColumns="1fr"
            gap={4}
          >
            {/* Heading Section */}
            <GridItem pl={20} pt={10} textAlign="center">
              <Heading fontSize="3xl">Sri-Care-Bills</Heading>
            </GridItem>

            {/* Table Section */}
            <GridItem p={10}>
              <TableContainer h="100%" w="100%">
                <Table
                  variant="simple"
                  colorScheme="teal"
                  size="lg"
                  borderColor={"black"}
                  borderWidth="2px"
                  h="100%"
                >
                  <Thead>
                    <Tr>
                      <Th fontSize={20}>Bill ID</Th>
                      <Th fontSize={20}>Description</Th>
                      <Th fontSize={20}>Amount</Th>
                      <Th fontSize={20}>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontSize={20} fontWeight={"bold"}>
                    {paymentBills.map((bill) => (
                      <Tr key={bill.bill_id}>
                        <Td borderWidth="1px">{bill.bill_id} </Td>
                        <Td borderWidth="1px">{bill.message}</Td>
                        <Td borderWidth="1px">{bill.amount}</Td>
                        <Td borderWidth="1px">{bill.date}</Td>
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

export default Bills;
