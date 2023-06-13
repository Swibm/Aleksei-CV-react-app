import { useState } from "react";
import "../styles/widgetStyle.css"
import { SkillsBlockList } from "../constants";

const menuHeight = "400px"

const buttonsList = ["Power BI", "Python", "Data Bases", "GIT", "Other"]

export const Widget = () => {
    const [activeBlock, setActiveBlock] = useState(0)

    const toggleMenuBlock = index => {
        setActiveBlock(index)
    }

    return (
        <article className= {`card`}>
            <div className="buttons">
                {buttonsList.map((button, index) => (
                    <button className = { index === activeBlock ? "active" : "" }
                            key = { buttonsList.indexOf(button) }
                            onClick={
                                    () => {toggleMenuBlock(index)}
                                }
                            >
                        {button}
                    </button>
                        )
                    )
                }
            </div>
            <div className = "wrapper">
                <div className="content"
                     style = {{translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`
                            }}
                >
                    {SkillsBlockList.map(block => 
                        <div className="block" key = { SkillsBlockList.indexOf(block) }>
                            {block}    
                        </div>)
                    }
                </div>
            </div>
        </article>
    )
}