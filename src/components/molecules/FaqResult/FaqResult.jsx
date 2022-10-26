import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import Icon from "../../atoms/Icon/Icon";
import "./FaqResult.css";

function FaqResult({ faq }) {
  return (
    <div className="faqResultSection">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {faq.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>{faq.body}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaqResult;
