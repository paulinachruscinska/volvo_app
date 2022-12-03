const informationBox=[
    {
        className: 'information__box-1',
        header: 'LATEST FINANCIAL EVENT',
        mainInfo: 'Third quarter 2022',
        date: 'October 20, 2022'
    },
    {
        className: 'information__box-2',
        header: 'LATEST PRESS RELEASE',
        mainInfo: 'New number of votes in AB Volvo',
        date: 'November 30, 2022'
    },
    {
        className: 'information__box-4',
        header: 'UPCOMING FINANCIAL EVENT',
        mainInfo: 'Fourth quarter and full year 2022',
        date: 'January 26, 2023',
        aba: 'keey'
    }
]


export default function Main(){
    return (
        <main>
          <div className='box'>
              {informationBox.map(box=>{
                  return (
                      <div className={box.className}>
                          <p>{box.aba}</p>
                      </div>
                  )
              })}
          </div>
        </main>
    )
}
