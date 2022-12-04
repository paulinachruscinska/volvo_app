import {useState} from "react";
import classNames from "classnames";

const links = [
    {
        ul: 'I am looking for',
        li: [
            'Job openings',
            'Financial Reports',
            'Event Calendar',
            'Image & Video Library',
            'Press Information',
            'Purchase to Pay Contact Center',
            'Corporate Standards',
            'Supplier Portal',
            'Student Information'
        ]
    },
    {
        ul: 'In focus right now',
        li: ['Interim reports', 'Sustainability', 'Electromobility', 'Automation']
    },
    {
        ul: 'Explore Volvo',
        li: [
            'Volvo Trucks',
            'Volvo Buses',
            'Volvo CE',
            'Volvo Penta',
            'Volvo Energy',
            'Volvo Autonomous Solutions',
            'Volvo Financial Services',
            'Renault Trucks',
            'Mack Trucks',
            'Prevost',
            'Nova Bus',
            'Dongfeng Trucks',
            'Rokbak',
            'SDLG',
            'Eicher',
            'Arquus '
        ]
    },
    {
        ul: 'Country websites',
        li: [
            'Australia (English)',
            'Belgium (Nederlands)',
            'Belgium (Français)',
            'Brazil (Português)',
            'China (中文)',
            'France (Français)',
            'Germany (Deutch)',
            'India (English)',
            'Korea (한국어)',
            'Mexico (Español)',
            'Netherlands (Nederlands)',
            'North America (English)',
            'Peru (Español)',
            'Poland (Polski)',
            'Russia (Pусский)',
            'Sweden (Svenska)',
            'UK and Ireland (English)'
        ]
    }
]
const footerBottomList = ['www.volvogroup.com', 'Contact us', 'Cookies', 'Privacy']

export default function Footer(){
    const [active, setActive] = useState('')
    const [arrow, setArrow] = useState('')
    return (
        <footer>
            <div className='footer__boxes'>
            {links.map((item, index)=>{
                return(
                    <div className='footer__box' key={index} >
                        <p  onClick={()=>{
                            return (
                                active=== '' ? setActive(item.li) : setActive(''),
                                arrow === '' ? setArrow(item.ul) : setArrow('')
                            )
                        }} className={classNames('footer__box--text',{
                            changeArrow: arrow === item.ul
                        })}>{item.ul}</p>
                        <ul className={classNames('footer__box--list ', 'footer__box--list' + index, {
                             clicked: active === item.li
                        })}>
                            {item.li.map((list, index)=>{
                                return (
                                    <li className={'list list ' + index} key={index}>{list}</li>
                                )
                            })}
                        </ul>
                    </div>
                                )
                            })}
            </div>
                    <div className='footer__bottom'>
                        <ul className='footer__bottom--list'>
                            {footerBottomList.map((list, index)=>{
                                return(
                                    <li key={index} className='footer__bottom--list--item'>{list}</li>
                                )
                            })}
                        </ul>
                        <p className='text footer__bottom--text'>Copyright AB Volvo</p>
                    </div>

        </footer>
    )
}