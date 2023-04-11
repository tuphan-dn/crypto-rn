import { EdCurve } from '@desig/core'
import { isSolanaAddress } from '@desig/web3'
import { utils } from '@noble/ed25519'
import { encode } from 'bs58'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Desig() {
  const [pubkey, setPubkey] = useState('')
  const genKey = useCallback(async () => {
    const privkey = utils.randomPrivateKey()
    const pubkey = encode(EdCurve.getPublicKey(privkey))
    return setPubkey(isSolanaAddress(pubkey) ? pubkey : '')
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
