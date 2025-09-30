import { Redirect, Stack } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'

export default function Layout() {
  const { isSignedIn } = useUser()

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }
  
  return <Stack />
}