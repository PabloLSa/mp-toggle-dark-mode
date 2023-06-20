import Image from 'next/image'

export default function Home() {
  return (
    <>
    <title>
    Toogle de dark mode animado
    </title>
    <body className='w-screen h-screen bg-zinc-800 flex items-center justify-center'>
      <label className='flex cursor-pointer'>
      <input type="checkbox" className='sr-only' />
      </label>
    </body>
  
    </>
    )
}
