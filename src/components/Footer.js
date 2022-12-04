
import FooterBox from "./FooterBox";

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

    return (
        <footer>
            <div className='footer__boxes'>
            {links.map((item, index)=>{
                           return <FooterBox item={item} index={index}/>
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