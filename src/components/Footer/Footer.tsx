import { Icons } from '../icons'
import Link from 'next/link'
import GetInTouch from './GetInTouch'

const navigation = ['Home', 'Projects', 'Services', 'About Me']

const Footer = () => {
    return (
        <>
            <GetInTouch />
            <nav className='col-span-2 md:col-span-6 h-fit border-y-2'>
                <ul className='flex flex-wrap'>
                    {navigation.map((n) => (
                        <li key={n} className='flex flex-1 justify-center items-center italic mx-4'>
                            <Link href={`/#${n.replace(" ", "-").toLowerCase()}`} className='flex items-center'>{n}<Icons.forward /></Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Footer
