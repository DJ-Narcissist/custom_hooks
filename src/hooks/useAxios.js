import axios from "axios";
import { url } from "inspector";
import  {useState} from "react";


const useAxios = () => {
    const [data, setData] = useState();

    const addData = async () => {
        try {
            const response = await axios.get(url);
            setData((prevData) => [...prevData, response.data]);
        }   catch (error) {
            console.error("Error fetching data",error);
        }
    }

    return [data,addData];
}

export default useAxios;