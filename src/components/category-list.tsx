import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Text, VStack } from "native-base";

enum Category {
  AllTask = "All Task",
  Groceries = "Groceries",
  Mechanic = "Mechanic",
  Work = "Work",
  Utilities = "Utilities",
}

type Props = {
  current: string;
  onCurrentChange: (newValue: string) => void;
};

const CategoryList = ({ current, onCurrentChange }: Props) => {
  const _renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => onCurrentChange(item)}>
        <CategoryItem item={item} isCurrent={item == current} />
      </TouchableOpacity>
    );
  };

  return (
    <VStack>
      <FlatList
        data={Object.values(Category)}
        keyExtractor={(item) => item}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity>
        <Text fontSize={24} color="gray.300">
          Add category
        </Text>
      </TouchableOpacity>
    </VStack>
  );
};

export { Category, CategoryItem };
export default CategoryList;

const CategoryItem = (props: {item: string, isCurrent: boolean}) => {
  return (
    <Text fontSize={24} mr={4} fontWeight={props.isCurrent ? "bold" : "light"}>
      {props.item}
    </Text>
  );
};
