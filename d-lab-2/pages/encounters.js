import Link from 'next/Link'

export default function Encounters() {
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
        <h2>this is the encounters page</h2>
      </div>
    </div>
  )
}