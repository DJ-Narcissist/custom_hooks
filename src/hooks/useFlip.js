import  {useState} from "react";

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flip =  () => {
        setIsFlipped((prevIsFlipped =>!prevIsFlipped));
    }

    return [isFlipped,flip];
};


export default useFlip;
