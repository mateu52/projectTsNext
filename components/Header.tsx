import React from 'react';
import Link from 'next/link';
const Header = () => {
    return(
        <div className='shadow-lg my-3 bg-red-50 '>
            <ul className='flex py-2'>
                <li className='pl-6 pr-2'><Link href={'/'}>Głowna</Link></li>
                <li className='px-2'><Link href={'/Form'}>Formularz</Link></li>
                <li className='px-2'><Link href={'/Coments'}>Komentarze</Link></li>
                <li className='px-2'><Link href={'/Contact'}>Kontakt</Link></li>
            </ul>
        </div>
    )
}
export default Header;