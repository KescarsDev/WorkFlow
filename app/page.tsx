import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-3xl font-semibold mb-4'>
            WorkFlow App
        </h2>
        <Link href={'/user-space/general/dashboard'}>
            {"Vers l'application"}
        </Link>
    </div>
    </>
    )
}
