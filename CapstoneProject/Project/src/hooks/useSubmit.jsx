import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (1 < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks for your reservation ${data.firstName}, Your table is booked for: ${data.Date}, at ${data.type}!`,
      });
    } catch (error) {
      setResponse({
        type: "success",
        message: `Thanks for your reservation ${data.firstName}, Your table is booked for: ${data.Date}, at ${data.type}!`,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
