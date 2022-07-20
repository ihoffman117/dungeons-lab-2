import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <h1>Dungeons Lab</h1>
      </div>
      <div>
        <a href='/characters'>Characters</a>
        <a href='/monsters'>Monsters</a>
        <a href='/encounters'>Encounters</a>
      </div>

      <div>
        <h2>this is the home page</h2>
      </div>
    </div>
  )
}
