import img1 from '../images/news-image-1.png';
import img2 from '../images/news-images-2.avif';
import img3 from '../images/news-images-3.avif';
const news = [
    {
        img: img1,
        alt:'news-photo-1',
        tag: 'Press release',
        date: '2022-11-15',
        datetime: '2022-11-15 14:00:00.000Z',
        title: `Volvo Group and Pilot Company to create partnership
         for charging network in North America`,
        text: `The Volvo Group and North American-based Pilot
         Company have signed a Letter of Intent for the development
          of public, high-performing charging infrastructure for medium-
           and heavy-duty electric vehicles.`
    },
    {
        img: img2,
        alt:'news-photo-2',
        tag: 'Press release',
        date: '2022-11-10',
        datetime: '2022-11-10 18:30:00.000Z',
        title: `World-first: Volvo delivers electric trucks with fossil-free steel to customers`,
        text: `As the world’s first truck manufacturer to do so, Volvo has begun using fossil-free
         * steel in its trucks. The first electric trucks with fossil-free steel are now 
         being delivered to customers.`
    },
    {
        img: img3,
        alt:'news-photo-3',
        tag: 'Story',
        date: '2022-11-03',
        datetime: '2022-11-03 18:30:00.000Z',
        title: `VCOP27 is an opportunity we must seize`,
        text: `The Conference of the Parties of the United Nations Framework Convention
         on Climate Change (COP27) takes place this year between November 6-18th in the Egyptian
          resort of Sharm El-Sheikh. The event represents a defining moment in the global response
           to the impacts of climate change.`
    },
]
export default function Introduction(){
    return(
        <section className='introduction'>
            <h1 className='header'>Welcome to Volvo Group</h1>
            <p className='text'>
                95,000 employees. 12 brands. 190 markets. Production facilities in 19 countries.
                Trucks, buses, construction equipment and marine and industrial engines.
                Complete solutions for financing and service. This is who we are.
            </p>
            <button className='button'>
                <span className='button__text'>What our services and products contribute with</span>
                <span className='button__icon'/>
            </button>
            <h3 className='header--third'>News around the world</h3>
            <section className='news__boxes'>
                {news.map((item, index)=>{
                    return(
                        <article key={index} className='news__box'>
                            <img className='news__image' src={item.img} alt={item.alt}/>
                            <div className='news__text'>
                                <div className='article__header'>
                                    <p className='text tag'>{item.tag}</p>
                                    <time dateTime={item.datetime} className='text time'>{item.time}</time>
                                </div>
                                <h3 className='header header--third'>{item.title}</h3>
                                <p className='text article__text'>{item.text}</p>
                            </div>
                        </article>
                )
                })}
            </section>
        </section>
    )
}