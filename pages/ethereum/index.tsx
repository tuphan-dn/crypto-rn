import { Wallet, WebSocketProvider } from 'ethers'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Ethereum() {
  const [pubkey, setPubkey] = useState('')
  const genKey = useCallback(async () => {
    // const wsp = new WebSocketProvider(
    //   'wss://sepolia.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410',
    // )
    const wallet = Wallet.createRandom()
    return setPubkey(wallet.address)
  }, [])

  return (
    <View style={styles.container}>
      <Text>Pubkey: {pubkey}</Text>
      <Button title="Get Pubkey" onPress={genKey} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
