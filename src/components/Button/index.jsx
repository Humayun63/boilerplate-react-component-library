import React from "react";
const Button = ({children= 'hello'}) => {
    return <button className="text-red">{children}</button>
}
export default Button;