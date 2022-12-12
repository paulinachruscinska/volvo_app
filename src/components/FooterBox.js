import {useState} from "react";
import classNames from "classnames";

 export default function FooterBox({item, index}){
    const [active, setActive] = useState('')
    const [arrow, setArrow] = useState('')
    return(
        <div className='footer__box' key={index} >
            <p  key={'p' + index} onClick={()=>{
                return (
                    active=== '' ? setActive(item.li) : setActive(''),
                        arrow === '' ? setArrow(item.ul) : setArrow('')
                )
            }} className={classNames('footer__box--text',{
                changeArrow: arrow === item.ul
            })}>{item.ul}</p>
            <ul key={'ul' + index} className={classNames('footer__box--list ', 'footer__box--list' + index, {
                clicked: active === item.li
            })}>
                {item.li.map((list, index)=>{
                    return (
                        <li className={'list list' + index} key={index}>{list}</li>
                    )
                })}
            </ul>
        </div>
    )
}