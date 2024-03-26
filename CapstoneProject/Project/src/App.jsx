import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <ContactMeSection />
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
