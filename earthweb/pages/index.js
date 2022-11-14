import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Scene from '../components/Scene'
export default function Home() {
  return (
    <div className={styles.container}>
      <Scene></Scene>
    </div>
  )
}
