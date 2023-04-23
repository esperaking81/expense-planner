import { TouchableOpacity, View } from 'react-native'
import { MoonIcon, SunIcon, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <TouchableOpacity onPress={toggleColorMode}>
      <View>{colorMode == 'light' ? <MoonIcon /> : <SunIcon />}</View>
    </TouchableOpacity>
  )
}
