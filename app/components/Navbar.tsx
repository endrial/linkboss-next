import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  return (
    <div className='bg-[#0253A5] py-2 px-5 flex justify-between text-white'>
      <Link href='/'>
      <div className="flex justify-center items-center">
        <Image
          className='rounded-full'
          src="/logo-lb.png"
          alt='Line Bank Logo'
          width={40}
          height={40}
        />
        <h3 className='ml-3 font-bold'>Back Office Systems</h3>
        </div>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src='https://avatars.githubusercontent.com/u/52642286' />
            <AvatarFallback className='text-black'>NY</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/profile'>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/auth'>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Navbar