import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login1 from '@/Components/LoginPages/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Login1/>
  )
}
