import { createContext, useEffect, useState } from "react";
import { GET_MAKEUPURL } from "./ApiUrl";
import axios from "axios";

export const BeautyshopContext = createContext()

function ApiContext(props) {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        try {
            const axiosData = async () => {
                await axios.get(GET_MAKEUPURL)
                    .then((res) => setDatas(res.data))
            }
            axiosData()
        } catch (error) {
            console.error("No data")
            return error
        }
    }, [GET_MAKEUPURL])



    const result = { datas }
    console.log(result)

    return (
        <div>
            <BeautyshopContext.Provider value={result}>
                {props.children}
            </BeautyshopContext.Provider>
        </div>
    )
}

export default ApiContext