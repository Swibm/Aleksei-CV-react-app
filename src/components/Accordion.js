
import { useState } from "react";

export const Accordion = (props) => {

    const [show, setShow] = useState(false)

    const handleOpen = () => {setShow(!show)}

    console.log(props.props)

  return (
    <div className="accordion-element">
        <div className="accordian-header" onClick={handleOpen}>
            <div>{props.props.company}</div>
            <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
            <div className="accordian-body">
                <div className="accordian-experience">
                    {props.props.experience_dur}
                </div>  
                <div className="accordian-obligations">
                    {props.props.obligations}
                </div>
            </div>
            )
        }
    </div>
  )
}



