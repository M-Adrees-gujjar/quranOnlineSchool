import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

    const [navigation,setNavigation] = useState([
        { name: 'Home', href: '#', current: true },
        { name: 'Blog', href: '#', current: false },
        { name: 'Courses', href: '#', current: false },
        { name: 'About Us', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
      ])

    function handleNavButton(item) {
        const getNavigation = navigation.map(element => element == item ? {...element,current : true} : {...element,current : false})
        setNavigation(getNavigation)
    }

  return (
    <Disclosure as="nav" className="navBar shadow-md fixed z-10 w-full bg-white">
      <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-main-color hover:bg-main-color hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/src/assets/images/asset1.png"
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                  onClick={()=>handleNavButton(item)}
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-white bg-main-color' : 'hover:bg-main-color text-main-color hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={()=>handleNavButton(item)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-main-color text-white' : 'text-main-color hover:bg-main-color hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
