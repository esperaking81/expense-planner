import React, { useState } from "react";

import { View, Image, Text, VStack, Divider, Spacer } from "native-base";

import ThemeToggle from "../src/components/theme-toggle";
import CategoryList, { Category, CategoryItem } from "./components/category-list";

import StatisticScreen from "../src/screens/statistic-screen";
import MainScreen from "../src/screens/main-screen";

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  // DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const ModalNavigator = createRootStackN

const DrawerContent = (props: DrawerContentComponentProps) => {
  const [category, setCategory] = useState<string>(Category.AllTask);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerSectionTitle title="FILTER BY" />
      <View ml={3}>
        {Object.values(Category).map(function(item: string) {
            return (
              <TouchableOpacity onPress={() => setCategory(item)}>
                <CategoryItem item={item} isCurrent={item == category} />
              </TouchableOpacity>
            )
        })}
      </View>
    </DrawerContentScrollView>
  );
};

const Header = () => {
  return (
    <>
      <VStack p={2} mx={3} rounded="xl" bg="blue.50" alignItems="center" justifyItems="center">
        <Image
          size="sm"
          alt="Espera aWo"
          borderRadius={100}
          source={{
            // uri: '../src/assets/images/me.JPG'
            uri: "https://www.w3schools.com/css/img_lights.jpg",
          }}
          fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg",
          }}
        />
        <Text fontSize={20} fontWeight="semibold">
          Espéra AWO
        </Text>
        <Text fontSize={20} fontWeight="light">
          Senior Android Developer
        </Text>
      </VStack>
      <View h={4} />
    </>
  );
};

const DrawerSectionTitle = ({ title }: { title: string }) => {
  return (
    <Text ml={3} fontSize="sm" color="warmGray.300">
      {title}
    </Text>
  );
};

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Main"
      screenOptions={{
        headerRight: () => (
          <View paddingRight={4}>
            <ThemeToggle />
          </View>
        ),
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Statistics" component={StatisticScreen} />
      <Drawer.Group screenOptions={{presentation: 'modal'}}>
      </Drawer.Group>
    </Drawer.Navigator>
  );
}
