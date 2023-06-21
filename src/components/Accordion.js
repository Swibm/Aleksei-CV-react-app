
import { useState } from "react";

export const Accordion = (props) => {

    const [show, setShow] = useState(false)

    const handleOpen = () => {setShow(!show)}

  return (
    <div className="accordion-element">
        <div className= {show ? 'accordian-header active' : 'accordian-header'}
             onClick={handleOpen}>
            <div>{props.props.company}</div>
            <div className= {show ? 'sign active' : 'sign'}>{show ? '-' : '+'}</div>
        </div>
        {show && (
            <div className={show ?"accordian-body-active" : "accordian-body"}>
                <div className="accordian-experience">
                    <span className="accordion-work-duration">Work experience: </span>
                    <span>{props.props.experience_dur}</span>
                </div>  
                <div className="accordian-obligations">
                    <div className="accordion-obligation-title">
                        Obligations:
                    </div>
                    <div>
                    {props.props.obligations}
                    </div>
                </div>
            </div>
            )
        }
    </div>
  )
}



