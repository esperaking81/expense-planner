import React, { useState } from 'react';


import { VStack, View, Fab, AddIcon } from 'native-base';

import SeveritySelector, { Severity } from '../components/severity-selector';
import TotalExpenseAmount from '../components/total-expense-amount';
import ExpenseList, { mockExpenses } from '../components/expense-list';


export default function MainScreen() {
  const [severity, onSeverityChanged] = useState<string>(Severity.High)

  return (
    <VStack alignItems='center' space={6} pt={6}>
      <TotalExpenseAmount amount={875000} />
      <SeveritySelector
        current={severity}
        onCurrentChange={onSeverityChanged}
      />
      <View w='full' h='full' borderTopRadius='3xl' _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'white' }}>
        <ExpenseList initialData={mockExpenses} />
      </View>

      <Fab icon={<AddIcon />} position='absolute' bottom={16} right={8} />
    </VStack>
  )
}

