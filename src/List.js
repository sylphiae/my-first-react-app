import React, { Fragment } from "react";
import PropTypes from "prop-types";

const List = props => {
    console.log("Hello, I am a list", props);
    let lis = props.food.map((item) => {
        return (<li>{item}</li>);
    });
    console.log(lis);
    return (<Fragment>
        {props.name}
    <ul>
       {lis}
    </ul></Fragment>
    );
};

List.propTypes = {
    name: PropTypes.string
};

export default List;