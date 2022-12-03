import aboutUs from '../images/about-us.avif';
import sustainability from '../images/sustainability.avif';
import ourHistory from '../images/our-history.avif';

const moreAbout = [
    {
        item: 'box-1',
        img: aboutUs,
        alt: 'about-us',
        title: 'About us',
        text:`Volvo Group employs almost 100,000 people and serves customers in more than
        190 markets. We have 12 different brands and production facilities in 18 countries. Our 
        headquarter is located in Gothenburg, Sweden, and our shares are listed on Nasdaq in Stockholm, Sweden.`,
        more: 'Learn more about us'
    },
    {
        item: 'box-2',
        img: sustainability,
        alt: 'sustainability',
        title: 'Sustainability',
        text:`The choices we make today define the world we live in tomorrow. 
        Climate change, population growth and increasing urbanization are shifting
        the landscape and expectations on transport and infrastructure. In all our
        actions, we need to consider how to reduce climate impact, use the world’s
        resources and conduct business more responsibly. `,
        more: 'Learn more about our work within sustainability'
    },
    {
        item: 'box-3',
        img: ourHistory,
        alt: 'our-history',
        title: 'Our history',
        text:`It has been an eventful journey from 1927, when the very first Volvo vehicle
        rolled out of the factory gates in Gothenburg, Sweden until today when Volvo Group has
        become one of the world's leading manufactures of trucks, buses, construction equipment
        and marine and industrial engines.`,
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
                        <div className={'more-about__box ' + box.item }>
                            <div className='more-about__box--overlay'>
                                <img className='more-about__image' src={box.img} alt={box.alt}/>
                                <div className='overlay'/>
                                <div className='more-about__box--text'>
                                    <h3 className='header header--third more-about__header--third'>{box.title}</h3>
                                    <p className='text more-about__text'>{box.text}</p>
                                    <p className='text more-about__text--more'>{box.more}</p>
                                    <img className='icon' src='../images/arrow.svg'/>
                            </div>


                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}
