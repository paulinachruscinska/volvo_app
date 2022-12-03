const moreAbout = [
    {
        item: 'box-1',
        title: 'About us',
        text:`Volvo Group employs almost 100,000 people and serves customers in more than
        190 markets. We have 12 different brands and production facilities in 18 countries. Our 
        headquarter is located in Gothenburg, Sweden, and our shares are listed on Nasdaq in...`,
        more: 'Learn more about us'
    },
    {
        item: 'box-2',
        title: 'Sustainability',
        text:`The choices we make today define the world we live in tomorrow. Climate change,
        population growth and increasing urbanization are shifting the landscape and expectations
        on transport and infrastructure. In all our actions, we need to consider how to reduce...`,
        more: 'Learn more about our work within sustainability'
    },
    {
        item: 'box-3',
        title: 'Our history',
        text:`It has been an eventful journey from 1927, when the very first Volvo vehicle
        rolled out of the factory gates in Gothenburg, Sweden until today when Volvo Group has
        become one of the world's leading manufactures of trucks, buses, construction equipment
        and marine and industri...`,
        more: 'Learn more about our history'
    },
]
export default function MoreAbout(){
    return(
        <section className='more-about'>
            <h2 className='header header--second'>Find out more about Volvo Group</h2>
            <div className='more-about__boxes'>
                {moreAbout.map((box, index)=>{
                    return(
                        <div className={'more-about__box' + box.item }>
                            <div className='more-about__box--text'>
                                <h3 className='header header--third'>{box.title}</h3>
                                <p className='text'>{box.text}</p>
                                <p className='text'>{box.more}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
