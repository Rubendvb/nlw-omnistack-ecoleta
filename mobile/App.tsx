import { StatusBar } from 'expo-status-bar'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Home from './src/pages/Home/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <Home />
    </>
  )
}
