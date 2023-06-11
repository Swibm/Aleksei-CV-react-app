import { useState } from "react";
import "../styles/widgetStyle.css"

const menuHeight = "400px"

const buttonsList = ["Power BI", "Python", "Data Bases", "GIT", "Other"]

const BlocksList = [<>
                    <h2>Power BI</h2>
                    <p>-Negotiations with customers who desire to possess certain dashboard for their needs (initial meeting, discussion of tech. task and wish list and etc.)</p>
                    </>, 
                    <><h2>Python</h2><p>Content...</p></>,
                    <><h2>Data Bases</h2><p>Content...</p></>,
                    <><h2>GIT</h2><p>Content...</p></>,
                    <><h2>Other</h2><p>Content...</p></>]


export const Widget = () => {
    const [activeBlock, setActiveBlock] = useState(0)

    const toggleMenuBlock = index => {
        setActiveBlock(index)
    }

    return (
        <article className= {`card`}>
            <div className="buttons">
                {buttonsList.map((button, index) => (
                    <button className = {index === activeBlock ? "active" : ""}
                            onClick={() => {toggleMenuBlock(index)}}
                            >
                        {button}
                    </button>
                ))}
            </div>
            <div className = "wrapper">
                <div className="content"
                     style = {{translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`
                            }}
                >
                    {BlocksList.map(block => <div className="block">
                        {block}    
                    </div>)
                    }
                </div>
            </div>
        </article>
    )
}