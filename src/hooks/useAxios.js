import axios from "axios";
import  {useState} from "react";


const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const addData = async (additionalUrl) => {
        try {
            const response = await axios.get(`${baseUrl}${additionalUrl}`);
            setData((data) => [...data, response.data]);
        }   catch (error) {
            console.error("Error fetching data",error);
        }
    }

    return [data,addData];
}

export default useAxios;