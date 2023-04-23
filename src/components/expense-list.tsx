import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import ExpenseItem from './expense-item'

export type Expense = {
  id: string
  name: string
  checked: boolean
  price?: number
}

interface ExpenseItemProps {
  item: Expense;
  onItemChecked: (item: Expense) => void;
}

const Item = ({ item, onItemChecked }: ExpenseItemProps) => (
  <ExpenseItem
    expense={item}
    checked={item.checked}
    handleOnItemChecked={onItemChecked}
  />
);

const mockExpenses = [
  { id: 'key0', checked: false, name: 'Buy a desktop chair' },
  { id: 'key1', checked: false, name: 'Buy new wing mirrors for my car' },
]

const ExpenseList = ({ initialData }: { initialData: Expense[] }) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialData)
  const handleOnItemChecked = useCallback((item: Expense) => {
    setExpenses(prev => {
      const newData = [...prev]
      const index = prev.indexOf(item)

      newData[index] = {
        ...item,
        checked: !item.checked
      }

      return newData
    })
  }, [])

  return (
    <FlatList
      style={{
        width: '100%',
        paddingTop: 12,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: 'transparent',
      }}
      data={expenses}
      renderItem={({ item }) => (
        <Item item={item} onItemChecked={handleOnItemChecked} />
      )}
      keyExtractor={item => item.id}
    />
  )
}

export { mockExpenses }

export default ExpenseList
