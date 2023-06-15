import { useState } from "react";
import { SkillsBlockList } from "../constants";

const menuHeight = "500px"

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
                            key = { index }
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
                    {SkillsBlockList.map((block, index) => 
                        <div className="block" key = { index }>
                            {block}    
                        </div>
                        )
                    }
                </div>
            </div>
        </article>
    )
}