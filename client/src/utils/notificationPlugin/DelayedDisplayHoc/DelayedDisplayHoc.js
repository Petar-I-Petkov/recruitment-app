
import { useState,useEffect } from "react";

const DelayedDisplayHoc = ({
    delay,
    children
}) => {
    const [markup,setMarkup] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setMarkup(children);
        },delay)
    },[])

    return (
        markup
    )



}

export default DelayedDisplayHoc;