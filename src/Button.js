import propTypes from "prop-types";

function Button({text}){
    return (
    <button style={{
        backgroundColor : "tomato",
        color: "white",
    }}>{text}</button>
    );
}

Button.propTypes = {
    text : propTypes.string.isRequired,
}
export default Button;