const box=[
    {
        className: 'main__box-1',
        mainInfo: 'Find job openings',
    },
    {
        className: 'main__box-2',
        mainInfo: 'Subscribe to newsletters'
    },
    {
        className: 'main__box-3',
        header: 'LATEST FINANCIAL EVENT',
        mainInfo: 'Third quarter 2022',
        date: 'October 20, 2022'
    },
    {
        className: 'main__box-4',
        header: 'LATEST PRESS RELEASE',
        mainInfo: 'New number of votes in AB Volvo',
        date: 'November 30, 2022'
    },
    {
        className: 'main__box-5',
        header: 'THE SHARE',
        sharePrice: 'Share price',
        price: '193.5',
        currency: 'SEK',
        text: 'SSE Volvo B 0.2%',
        text2: 'Nasdaq Stockholm',
        datetime:'2.12.2022',
        time: '17:29:30 CET'
    },
    {
        className: 'main__box-6',
        header: 'UPCOMING FINANCIAL EVENT',
        mainInfo: 'Fourth quarter and full year 2022',
        date: 'January 26, 2023'

    },
    {
        className: 'main__box-7',
        mainInfo: 'Volvo Trucks showcases new zero-emissions truck'
    }
]


export default function Main(){
    return (
        <main>
          <div className='main__boxes'>
              {box.map((box, index)=>{
                  return (
                      <div className={'main__box ' + box.className} key={index}>
                          <div className='box-text'>
                              <p className={'main__box--header main__box--header'+ index}>{box.header}</p>
                              <div className={'box-text--title box-text--title' + index}>
                                  <p className='main__box--title'>{box.mainInfo}</p>
                                  <p className={'main__box--date main__box--date'+ index}>{box.date}</p>
                              </div>
                              <div className={'share share'+ index}>
                                  <div className='share--price'>
                                      <p className='share--text--price'>{box.sharePrice}</p>
                                      <p className='share--text--number'>{box.price}</p>
                                      <p className='share--text--currency'>{box.currency}</p>
                                  </div>
                                  <p className='share--sse'>{box.text}</p>
                                  <p className='share--nasdaq'>{box.text2}</p>
                                  <div className='share--datetime'>
                                      <p className='share--date'>{box.datetime}</p>
                                      <p className='share--time'>{box.time}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}

          </div>
        </main>
    )
}
