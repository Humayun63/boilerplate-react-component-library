import React from "react";
import { Button, Input } from "../components";
import { memo } from "react";

const TestingApp = () => {
    return(
        <>
            <Button>nice</Button>
            <Input/>
        </>
    )
}

export default memo(TestingApp);