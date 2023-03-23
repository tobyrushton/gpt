import 'server-only'
import { ReactElement } from 'react'
import { Input } from './Input'
import { Messages } from './Messages'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = async ():Promise<ReactElement> => {
  return (
    <main className={styles.main} style={inter.style}>
      <h1>
        GPT App
      </h1>
      <div className={styles.message_container}>
        <Messages />
      </div>
      <div className={styles.input_box}>
        <Input />
      </div>
    </main>
  )
}

export default Home
