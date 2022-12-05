import {useState} from "react";
import NavBox from "./NavBox";



export default function Navigation(){
    const [activeHamburger, setActiveHamburger]= useState('')
    return(
        <nav>
            <div className='nav__container'>
                <div className='nav__panel'>
                    <div className='nav__logo'/>
                    <div className='nav__meta'>
                        <ul className='nav__meta__icons--phone'>
                            <li className='icon-search'/>
                            <li className='icon-hamburger' onClick={()=>{
                                return (
                                    setActiveHamburger('activeHamburger'),
                                    document.body.classList.add('notoverflow')
                                )}}/>
                        </ul>
                    </div>
                </div>
                <div className='nav__meta__icons--desktop'>
                    <div className='search'>
                        <div className='icon-search'/>
                        <span className='icon-text'>Search</span>
                    </div>
                    <div className='truck'>
                        <span className='icon-truck'/>
                        <span className='icon-text'>Our brands</span>
                    </div>
                    <div className='contact'>
                        <span className='icon-contact'/>
                        <span className='icon-text'>Contact us</span>
                    </div>
                </div>
                <NavBox activeHamburger={activeHamburger} setActiveHamburger={setActiveHamburger}/>
            </div>
        </nav>
    )
}