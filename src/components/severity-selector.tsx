import React from 'react'
import { View, Text, HStack, Pressable } from 'native-base'

enum Severity {
  High = "High",
  Medium = "Medium",
  Low = "Low"
}

type Props = {
  current: string
  onCurrentChange: (newValue: string) => void
}

const SeveritySelector = ({ current, onCurrentChange }: Props) => {
  return (
    <HStack space="4">
      {Object.values(Severity).map((item) => {
        const isCurrent = current == item
        return (
          <Pressable
            key={item}
            onPress={() => onCurrentChange(item)}>
            <View px={4}
              py={1}
              rounded="full"
              bg={isCurrent ? 'black' : 'gray.100'}>
              <Text
                color={isCurrent ? 'white' : 'black'}
                key={item}>{item}</Text>
            </View>
          </Pressable>
        )
      })}
    </HStack>
  )
}

export { Severity }

export default SeveritySelector
