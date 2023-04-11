import { Keypair } from '@solana/web3.js'
import { encode } from 'bs58'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Solana() {
  const [pubkey, setPubkey] = useState('')
  const genKey = useCallback(async () => {
    const keypair = new Keypair()
    const pubkey =
      keypair.publicKey.toBase58() || encode(keypair.publicKey.toBuffer())
    return setPubkey(pubkey)
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
