import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log(imageSrc);
  return (
    <div>
      <Image src={imageSrc} />
      <p>{title}</p>
      <p>{description}</p>
      <div className="seemore">
        See More
        <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
      </div>
    </div>
  );
};

export default Card;
