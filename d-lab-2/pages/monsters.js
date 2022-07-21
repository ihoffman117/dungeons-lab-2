import axios from 'axios'
import Link from 'next/Link'

let monsters = []

axios.get('http://localhost:3000/api/monsters')
  .then((response) => {
    monsters = response.data
  })

export default function Monsters() {
  return (
    <div>
      <div>
        <h1>
          <Link href='/'>
            <a>Dungeons Lab</a>
          </Link>
        </h1>
      </div>

      <div>
        <Link href='/characters'>
          <a>Characters</a>
        </Link>
        <Link href='/monsters'>
          <a>Monsters</a>
        </Link>
        <Link href='/encounters'>
          <a>Encounters</a>
        </Link>
      </div>

      <div>
        <h2>this is the monsters page</h2>
        <ul>
          {monsters.map((monster) => {
            return(<li>{monster.name}</li>)
          })}
        </ul>
      </div>
    </div>
  )
}