import CssIcon from '@/icons/CssIcon'
import HtmlIcon from '@/icons/HtmlIcon'
import JsIcon from '@/icons/JsIcon'
import TailwindIcon from '@/icons/TailwindIcon'
import ReactIcon from '@/icons/ReactIcon'
import TsIcon from '@/icons/TsIcon'

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">

      <section
        className='p-2 border'
      >
        <h1
          className='font-semibold'
        >
          Ali Solorzano
        </h1>

        <div className='pt-4'>
          <h2>Habilidades</h2>
          <ul className='flex flex-row gap-4 pt-2 text-3xl'>
            <li>
              <HtmlIcon />
            </li>
            <li>
              <CssIcon />
            </li>
            <li>
              <JsIcon />
            </li>
            <li>
              <TsIcon />
            </li>
            <li>
              <ReactIcon />
            </li>
            <li>
              <TailwindIcon />
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
