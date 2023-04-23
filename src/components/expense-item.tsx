import {
  HStack,
  Box,
  useTheme,
  themeTools,
  useColorModeValue,
} from "native-base";

import type { Expense } from '../components/expense-list'

import { Pressable } from "react-native";
import Animatedtask from "./animated-task-label";

import AnimatedCheckbox from "react-native-checkbox-reanimated";

type Props = {
  checked: boolean
  handleOnItemChecked: (item: Expense) => void
  expense: Expense
}

export default function ExpenseItem({ checked, handleOnItemChecked, expense }: Props) {
  const theme = useTheme();

  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue("blue.500", "blue.400")
  );

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue("muted.300", "muted.500")
  );

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue("white", "white")
  );

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue("darkText", "lightText")
  );

  const inactiveTextColor = themeTools.getColor(
    theme,
    useColorModeValue("muted.400", "muted.600")
  );

  return (
    <HStack
      alignItems="center"
      w="full"
      px={4}
      py={2}
    >
      <Box width={30} height={30} mr={2}>
        <Pressable onPress={() => handleOnItemChecked(expense)}>
          <AnimatedCheckbox
            highlightColor={highlightColor}
            checkmarkColor={checkmarkColor}
            boxOutlineColor={boxStroke}
            checked={checked}
          />
        </Pressable>
      </Box>
      <Animatedtask
        textColor={activeTextColor}
        inactiveTextColor={inactiveTextColor}
        strikeThrough={checked}
      >
        {expense.name}
      </Animatedtask>
    </HStack>
  );
}
