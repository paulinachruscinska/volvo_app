import classNames from "classnames";
import { useState } from "react";
const nav = [
    {
        first: 'FUTURE TRANSPORT',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Megatrends',
            },
            {
                second1: 'Going Fossil Free',
                second2: ['Green Steel Collaboration']
            },
            {
                second1: 'Future Transportation Solutions',
            },
            {
                second1: 'Innovation in focus',
                second2: ['Connectivity', 'Automation', 'How can I contribute?']
            },
            {
                second1: 'Traffic Safety',
            },
            {
                second1: 'Collaboration & PartnerShips',
                second2: ['CampX the startup factory', 'Innovation Lab']
            },
            {
                second1: 'The Mobility Transportation Forum',
            }
        ]
    },
    {
        first: 'CAREERS',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Find Job Openings',
            },
            {
                second1: 'Explore Our Different Job Areas',
                second2: ['Focus on Engineers', 'Focus on IT Professionals']
            },
            {
                second1: 'Recruitment Process',
            },
            {
                second1: 'Meet us at an Event',
            },
            {
                second1: 'Students & Graduates',
                second2: ['Thesis Work', 'Summer Jobs', 'Internships', 'Graduate Programs', 'Sign up to get the latest information!']
            },
            {
                second1: 'Reasons to join Volvo',
            },
            {
                second1: 'Our Culture',
            },
            {
                second1: 'Diversity & Inclusion',
                second2: ['Accelerating gender diversity']
            },
            {
                second1: 'Career Development',
            },
            {
                second1: 'Compensation & Benefits',
            },
            {
                second1: 'Health & Wellbeing',
            },
            {
                second1: 'Work Life Balance',
            },
            {
                second1: 'Leadership',
            },
            {
                second1: 'MeetOurEmployees',
            }
        ]
    },
    {
        first: 'INVESTORS',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Financial Reports & Presentations',
                second2: ['Truck Orders and Deliveries', 'Key Ratios']
            },
            {
                second1: 'Financial Calendar',
            },
            {
                second1: 'Contact Investor Relations',
            },
            {
                second1: 'Subscribe for press releases',

            },
            {
                second1: 'The Volvo Share',
                second2: ['Share Price Calculator', 'Ownership Information', 'Analyst Coverage', 'Conversion of Shares', 'Divident']
            },
            {
                second1: 'Debt Information',
                second2: ['Credit Rating', 'Debt Programmes', 'Green financing']
            },
            {
                second1: 'Financial Targets',
            },
            {
                second1: 'Risks & Uncertainties',
            },
            {
                second1: 'Corporate Governance',
                second2: ['General Meeting of the Shareholders', 'Election Committee', 'Board of Directors', 'The Board\'s work', 'The Board\'s composition and attendance', 'CEO, Group Executive Board and Group Management', 'Remuneration', 'Independent auditors']
            }
        ]
    },
    {
        first: 'SUSTAINABILITY',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Sustainability Ambitions',
            },
            {
                second1: 'Volvo Environment Prize',
            },
            {
                second1: 'Materiality Analysis',
            },
            {
                second1: 'Climate',
                second2: ['Reducing Carbon Emissions', 'Environmental Footprint', 'Science Based Targets']
            },
            {
                second1: 'Resources',
                second2: ['Sustainable Transport System', 'Substances of concern', 'Circularity']
            },
            {
                second1: 'People',
                second2: ['Commitment to Safety', 'Business Ethics and Responsibility', 'Our Colleagues', 'Engage in society']
            },
        ]
    },
    {
        first: 'NEWS & MEDIA',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Contact Media Relations',
            },
            {
                second1: 'Press Releases',
            },
            {
                second1: 'Subscribe for Press Releases',
            },
            {
                second1: 'Upcoming Events',
            },
            {
                second1: 'Image and Video Gallery',
            },
            {
                second1: 'Social Media',
            },
            {
                second1: 'Stories',
            },
            {
                second1: 'Employee Portraits',
            },
            {
                second1: 'India Press Releases',
            },
            {
                second1: 'North America Press Releases',
            }
        ]
    },
    {
        first: 'SUPPLIERS',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Purchasing within Volvo Group',
            },
            {
                second1: 'Become a Volvo Group supply chain partner',
            },
            {
                second1: 'Our Supplier Requirements',
                second2: ['REACH', 'IMDS Reporting', 'Key Elements Procedures (KEP)']
            },
            {
                second1: 'Useful Links & Documents for Existing Supply Chain Partners',
                second2: ['Purchase to Pay Contact Center', 'Corporate Standards', 'EDI']
            },
            {
                second1: 'Log in to Volvo Group Supplier Portal',
                second2: ['Logistics Services Portal is merged into Volvo Group Supplier Portal']
            },
            {
                second1: 'Contact us as Supply Chain Partners Volvo Group',
            },

        ]
    },
    {
        first: 'ABOUT US',
        second: [
            {
                second1: 'Overwiew',
            },
            {
                second1: 'Organization',
                second2: ['Our Global Presence', 'Other Entities', 'Our Production Facilities']
            },
            {
                second1: 'Our Mission, Vision & Aspirations',
            },
            {
                second1: 'Strategy',
            },
            {
                second1: 'Strategic Priorities',
            },
            {
                second1: 'What We Do',
                second2: ['Our Brands']
            },
            {
                second1: 'Our Values',
                second2: ['Code of Conduct & Other Policies', 'The Volvo Group Whistle']
            },
            {
                second1: 'Our Value Chain',
            },
            {
                second1: 'Traffic Safety',
                second2: ['Safety Vision - Zero Accidents', 'Partnerships & Collaboration']
            },
            {
                second1: 'History and R&D Milestiones',
            },
            {
                second1: 'Contact Us',
            }
        ]
    }
]

export default function NavBox({ activeHamburger, setActiveHamburger }) {
    const [active, setActive] = useState('')
    const [arrow, setArrow] = useState('')
    return (
        <div className={'nav__open ' + activeHamburger}>
            <div className='overlay' />
            <div className='nav__main'>
                <div className='nav__main__icons--phone'>
                    <div className='truck'>
                        <span className='icon-truck' />
                        <span className='icon-text'>Our brands</span>
                    </div>
                    <div className='contact'>
                        <span className='icon-contact' />
                        <span className='icon-text'>Contact us</span>
                    </div>
                    <li className='icon-close' onClick={() => {
                        return (
                            setActiveHamburger(''),
                            document.getElementById('root').classList.remove('notoverflow')
                        )
                    }}></li>
                </div>
                {nav.map((list, index) => {
                    return (
                        <div className='nav__main--list'>
                            <div className='nav__main--list-first' key={index}>
                                <p key={index} onClick={() => {
                                    return (
                                        active === '' ? setActive(list.second) : setActive(''),
                                        arrow === '' ? setArrow(list.first) : setArrow('')
                                    )
                                }} className={classNames('text-list', {
                                    changearrow: arrow === list.first
                                })} >{list.first}</p>
                                <ul key={'ul'+ index} className={classNames('nav__main--list-second nav__main--list-second'+ index, {
                                    clicked: active === list.second
                                })}>
                                    {list.second.map((list, index) => {
                                        return (
                                            <>
                                                <li className='nav-list' key={index}><span>{list.second1}</span>
                                                    <ul className='nav__main--list-third' >
                                                        {Array.isArray(list.second2) && list.second2.map((item, index) => {
                                                            return <li className='nav-list-second' key={index}>{item}</li>
                                                        })}
                                                    </ul>
                                                </li>
                                            </>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}