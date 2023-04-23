import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, extendTheme } from 'native-base'

type Props = {
  children: React.ReactNode
}

const theme = extendTheme({
  fontConfig: {
    SourceSansPro: {
      100: {
        normal: "SourceSansPro-Light",
        italic: "SourceSansPro-LightItalic",
      },
      200: {
        normal: "SourceSansPro-Light",
        italic: "SourceSansPro-LightItalic",
      },
      300: {
        normal: "SourceSansPro-Light",
        italic: "SourceSansPro-LightItalic",
      },
      400: {
        normal: "SourceSansPro-Regular",
      },
      500: {
        normal: "SourceSansPro-SemiBold",
      },
      600: {
        normal: "SourceSansPro-SemiBold",
        italic: "SourceSansPro-SemiBoldItalic",
      },
      // Add more variants
      700: {
        normal: 'SourceSansPro-Bold',
        italic: 'SourceSansPro-BoldItalic',
      },
      800: {
        normal: 'SourceSansPro-Bold',
        italic: 'SourceSansPro-BoldItalic',
      },
      900: {
        normal: 'SourceSansPro-Black',
        italic: 'SourceSansPro-BlackItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "SourceSansPro",
    body: "SourceSansPro",
    mono: "SourceSansPro",
  },
});

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}

