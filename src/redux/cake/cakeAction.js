import axios from "axios"
import { ADD_CAKE, BUY_CAKE } from "./cakeState"

export const buyCake = () =>{
    return {
        type: BUY_CAKE
    }
}

export const addCake = (num) =>{
    return {
        type: ADD_CAKE,
        payload: num
    }
}

// export const getdata = (data) => {
//     axios
//     .get("http://localhost:3004/quetions")
//     .then((res) => setDisaplayQuestions(res.data))
//     .catch((err) => console.log(err));

// }
