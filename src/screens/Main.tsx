import React, { useCallback, useState } from 'react';

import { Center, Text } from 'native-base';

import ThemeToggle from '../components/theme-toggle'
import TaskItem from '../components/task-item'


export default function Main() {
  const [checked, setChecked] = useState(false);
  const handleOnCheckPress = useCallback(() => {
    setChecked((prev: any) => !prev)
  }, [])

  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <TaskItem checked={checked} handleOnCheckPress={handleOnCheckPress} />
      <Text>Open up App.js to start working on your app!</Text>
      <ThemeToggle />
    </Center>
  )
}
