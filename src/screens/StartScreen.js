import React from 'react'
import Background from '../component/Background'
import Logo from '../component/Logo'
import Header from '../component/Header'
import Button from '../component/Button'
import Paragraph from '../component/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Faba</Header>
      <Paragraph>
        Envoyer des colis à l'intérieur du pays plus facilement et à moindre coût !
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Se connceter
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        S'enregistrer
      </Button>
    </Background>
  )
}
