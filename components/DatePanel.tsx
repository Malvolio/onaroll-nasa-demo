import { Button, Flex, Spacer, Box } from "@chakra-ui/react";
import { add } from "date-fns";
import { FC } from "react";
import { SingleSelectDate } from "./SingleSelectDate";

export const DatePanel: FC<{
  onChange?: (a: Date) => void;
  value?: Date;
}> = ({ onChange, value }) => {
  const offSet = (days: number) => () => {
    onChange && onChange(add(value || new Date(), { days }));
  };
  return (
    <Box width={300}>
      <SingleSelectDate value={value} onChange={onChange} />
      <Flex>
        <Button variant="link" onClick={offSet(-1)}>
          previous day
        </Button>
        <Spacer />
        <Button variant="link" onClick={offSet(1)}>
          next day
        </Button>
      </Flex>
    </Box>
  );
};
