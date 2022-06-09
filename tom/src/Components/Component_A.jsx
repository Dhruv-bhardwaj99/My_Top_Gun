import { Component_B, Component_C } from "./Children_B&C"

export const Component_A = ()=>{
    return(
        <div>
            <Component_B/>
            <Component_C/>
        </div>
    )
}