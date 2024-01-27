import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      className='w-full p-2 flex justify-center'
    >
      <ul
        className='list-none flex flex-row gap-4'
      >

        <li>
          <Link href='/'>Inicio</Link>
        </li>

        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
