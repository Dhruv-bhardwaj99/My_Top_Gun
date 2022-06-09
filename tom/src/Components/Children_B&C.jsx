import {useDispatch, useSelector} from "react-redux";
import { addData } from "../Redux/action";

export const Component_B = () =>{
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        const word = e.target.value;
        dispatch(addData(word));
    }

    return(
        <div>
            <h1>Component B</h1>
            <input type="text" placeholder="Type Here" onChange={(e) => {
                handleChange(e)
            }} />
        </div>
    )

}


export const Component_C = ()=>{
    const {data} = useSelector((state) => state.finalData);
    return(
        <div>
            <h2>Component C</h2>
            <h4>{data}</h4>
        </div>
    )
}