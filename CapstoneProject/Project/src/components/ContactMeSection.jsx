import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import Calendar from "react-calendar";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [value, onChange] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "12:00",
      Date: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("fake_url", values);
      formik.values.Date = value.toString().slice(0, 16);
      console.log(values);
      console.log(formik.values);
      console.log(response);
      onOpen(response.type, response.message);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      type: Yup.string().required("Required"),
      // Date: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reserve a table
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && formik.errors.firstName
                    ? true
                    : false
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.email && formik.errors.email ? true : false
                }
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Hour</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Date">Date</FormLabel>
                <Calendar onChange={onChange} value={value} />
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.comment && formik.errors.comment ? true : false
                }
              >
                <FormLabel htmlFor="comment">
                  Adittional Information / Special request
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {isLoading ? (
                <Button
                  isLoading
                  type="submit"
                  colorScheme="purple"
                  width="full"
                >
                  Submit
                </Button>
              ) : (
                <Button type="submit" backgroundColor="#F4CE14" width="full">
                  Book a Table
                </Button>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
