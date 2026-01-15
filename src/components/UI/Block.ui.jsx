import { RxDragHandleDots2 } from 'react-icons/rx'
import './Block.style.css'

function BlockUI({block}) {
    const {className, icon, backgroundIconColor, backgroundColor, btnColor, undertitle, hreftitle} = block
    return (
        <div className={`post_block`} style={{background: backgroundColor}}>
            <div className="post_draghandle handle" ><RxDragHandleDots2 /></div>

            <div className="post_container" >
                <div className="post_container_icon" style={{background: backgroundIconColor}}>
                    {icon}
                </div>
                <p className="post_container_undertitle">{undertitle}</p>

                <button className='post_container_href' style={{background: btnColor}}>{hreftitle}</button>
            </div>
        </div>
    )
}

export default BlockUI
