import React from "react";
const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h3>{props.title}</h3>
            <img src = {props.imgSRC} width = "175"/>
            <form action={props.link}>
                <input type="submit" value="Learn More" />
            </form>
        </td>
    );
}

export default Event;