import CssIcon from '@/icons/CssIcon'
import HtmlIcon from '@/icons/HtmlIcon'
import JsIcon from '@/icons/JsIcon'

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">

      <section
        className='w-52 p-2 border'
      >
        <h1
          className='font-semibold'
        >
          Ali Solorzano
        </h1>

        <div>
          <h2>Habilidades</h2>
          <ul>
            <li>
              <HtmlIcon />
            </li>
            <li>
              <CssIcon />
            </li>
            <li>
              <JsIcon />
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
