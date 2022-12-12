import { useState, useEffect, useRef, useCallback } from "react";
import NavBox from "./NavBox";
import { createPortal } from "react-dom";
import Headroom from 'react-headroom'


export default function Navigation() {
    const [activeHamburger, setActiveHamburger] = useState('')
    let isTablet = useRef(false);


    const isDeviceATablet = useCallback(() => {
        isTablet.current = window.matchMedia('(max-width: 959px)').matches
    }, [])

    useEffect(() => {
        window.addEventListener('resize', isDeviceATablet)

        return function cleanUp() {
            window.removeEventListener('resize', isDeviceATablet)
        }
    }, [isDeviceATablet])

    return (
        <Headroom>
        <nav>
            <div className='nav__container'>
                <div className='nav__panel'>
                    <div className='nav__logo' />
                    <div className='nav__meta'>
                        <ul className='nav__meta__icons--phone'>
                            <li className='icon-search' />
                            <li className='icon-hamburger' onClick={() => {
                                return (
                                    setActiveHamburger('activeHamburger'),
                                    document.getElementById('root').classList.add('notoverflow')
                                )
                            }} />
                        </ul>
                    </div>
                </div>
                <div className='nav__meta__icons--desktop'>
                    <div className='search'>
                        <div className='icon-search' />
                        <span className='icon-text'>Search</span>
                    </div>
                    <div className='truck'>
                        <span className='icon-truck' />
                        <span className='icon-text'>Our brands</span>
                    </div>
                    <div className='contact'>
                        <span className='icon-contact' />
                        <span className='icon-text'>Contact us</span>
                    </div>
                </div>
                {isTablet.current
                    ? createPortal(<NavBox activeHamburger={activeHamburger} setActiveHamburger={setActiveHamburger} />, document.body)
                    : <NavBox activeHamburger={activeHamburger} setActiveHamburger={setActiveHamburger} />
                }
            </div>
        </nav>
        </Headroom>
    )
}