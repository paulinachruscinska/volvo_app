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

export default function Footer(){
    return (
        <footer>
            {links.map((item, index)=>{
                return(
                    <div className='footer__box' key={index}>
                        <p className='footer__box--text'>{item.ul}</p>
                        <ul className='footer__box--link'>
                            {item.li.map((list, index)=>{
                                return (
                                    <li className={'list' + index} key={index}>{list}</li>
                                )
                            })}
                        </ul>
                    </div>
                                )
                            })}


        </footer>
    )
}