import axios from 'axios'
import Link from 'next/Link'

let data

axios.get('http://localhost:3000/api/hello')
.then((res) => {
  console.log(res.data)
})
.catch((err) => {
  console.log(`There was an error: ${err}`)
})

export default function Characters() {
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
        <h2>this is the characters page</h2>
        <p>nothing to see here</p>
      </div>
    </div>
  )
}