import React from "react";
import { Button, Checkbox, Input, InputField, RadioButton, SelectButton, Textarea, ToggleButton } from "../components";
import { memo } from "react";

const TestingApp = () => {
    return(
        <>
            <Button className="text-red-800">nice</Button>
            <Input/>
            <Checkbox />
            <InputField />
            <RadioButton />
            <SelectButton />
            <Textarea />
            <ToggleButton/>
        </>
    )
}

export default memo(TestingApp);