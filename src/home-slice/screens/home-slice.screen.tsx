import { View } from "react-native"
import { ButtonMenu } from "../components"

const HomeSlice = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ButtonMenu title="Recarga de celular" />
      <ButtonMenu title="Pagamentos" />
      <ButtonMenu title="PIX" />
    </View>
  )
}

export default HomeSlice