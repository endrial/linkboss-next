import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from '@/components/ui/command'
  import {
    ListChecks,
    KeyRound,
    History,
    User,
    Store,
    ShoppingCart,
    ShoppingBag,
    Folder,
    LayoutDashboard,
    NotebookPen,
  } from 'lucide-react'
  import Link from 'next/link'
  
  const Sidebar = () => {
    return (
      <Command className='rounded-none bg-secondary'>
        <CommandList>
          <CommandGroup heading="Main">
            <CommandItem>
              <LayoutDashboard className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/'>Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <NotebookPen className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/'>Guide</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Account">
            <CommandItem>
              <ListChecks className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/account/role-management'>Role Management</Link>
            </CommandItem>
            <CommandItem>
              <User className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/account/user-management'>User Management</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Video Call Loan'>
            <CommandItem>
              <KeyRound className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>Loan Param Rule</Link>
            </CommandItem>
            <CommandItem>
              <History className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>Loan Status CRM</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Erajaya KTA'>
            <CommandItem>
              <Store className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>Store Management</Link>
            </CommandItem>
            <CommandItem>
              <ShoppingCart className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>Sales Management</Link>
            </CommandItem>
            <CommandItem>
              <Folder className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>ACS Management</Link>
            </CommandItem>
            <CommandItem>
              <ShoppingBag className='w-4 h-4 mr-2' />
              <Link className='text-lg' href='/#'>Purchase Order List</Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  
  export default Sidebar