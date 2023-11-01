import { Button, ButtonProps } from 'react-native'

interface IButtonMenu extends ButtonProps { }

const ButtonMenu = ({ title }: IButtonMenu) => {
  return <Button color="#F00" title={title} />
}

export default ButtonMenu