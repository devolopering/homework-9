 'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    title:string;
    href:string;
}
type NavigationProps = {
    items: NavItem[]
}
export default function Navigation({items}: NavigationProps) {
    const pathname = usePathname()
  return (
    <div className='border-b-2 border-gray-300 '>
         <nav className='max-w-[1300px] mx-auto'>
            <ul className='flex items-center gap-10 py-7 px-7  '>
                {items.map((item) => <li key={item.href} >
                  <Link href={item.href} className={`${pathname === item.href? "border-b-2 border-blue-700  text-blue-700":"text-black"}  font-medium `}>{item.title}</Link>
                </li>)}
            </ul>
         </nav>
    </div>
  )
}


