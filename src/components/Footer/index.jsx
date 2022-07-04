import { Footer as Foo } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <Foo className='bg-slate-800'>
      <Foo.Copyright
        href="/"
        by="FROZ"
        year={2022}
      />
    <Foo.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
      <Foo.Link>
        <NavLink to='/profile'>
          About
        </NavLink>
      </Foo.Link>
      <Foo.Link>
        <NavLink to='/terms'>
          Privacy Policy
        </NavLink>
      </Foo.Link>
      <Foo.Link>
        <NavLink to='/licensing'>
          Licensing
        </NavLink>
      </Foo.Link>
      <Foo.Link>
        <NavLink to='/contact'>
          Contact
        </NavLink>
      </Foo.Link>
    </Foo.LinkGroup>
  </Foo>
  )
}