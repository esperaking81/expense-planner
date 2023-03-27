import {Text} from 'react-native'
import { useColorMode } from 'native-base'

export default function ThemeToggle(){
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Text>
      { isDarkMode ? 'Light' : 'Dark' }
    </Text>
  )
}
