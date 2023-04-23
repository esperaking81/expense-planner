import { View, Text, VStack } from 'native-base'

const TotalExpenseAmount = ({ amount }: { amount: number }) => {
  return (
    <View bg='white' w="80%" rounded="3xl">
      <VStack alignItems="center" p={4}>
        <Text fontSize="40" fontWeight="extrabold" lineHeight="sm">
          <Text fontSize="40" fontWeight="light" lineHeight="sm">₣</Text>
          {amount}
        </Text>
        <Text fontSize="sm">Total expenses amount</Text>
      </VStack>
    </View>

  )
}

export default TotalExpenseAmount
