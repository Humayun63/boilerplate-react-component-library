import React from "react";
const Button = ({children= 'hello'}) => {
    return <button className="text-red bg-blue-500 px-4 py-2 rounded">{children}</button>
}
export default Button;