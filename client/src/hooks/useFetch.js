import { useState,useEffect } from 'react';
import * as notificationPlugin from '../utils/notificationPlugin/notificationPlugin'

const useFetch = (url,options) => {

    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null)
    const [error,setError] = useState(null);

    useEffect(() => {

        // notificationPlugin.renderLoadingBoxGlobal();
        const fetchData = async () => {

            //advice component we are in a loading state
            setLoading(true);

            // start the fetch process
            try {

                //try to fetch and double check if response status is ok, 
                //if not -> throw for the catch
                const res = await fetch(url,options);
                if(!res.ok) {
                    throw response;
                }

                const json = await res.json();
                setResponse(json);
                setLoading(false);

            } catch(error) {
                //handles connection problems and status != OK (thrown from above)                
                console.error(`[useFetch.js] ${error}`);
                setError(error);
            }
        };

        setTimeout(() => {
            fetchData();
            // notificationPlugin.clearNotificationPortal();
        },1000)

    },[]);
    return { response,error,loading };
}


export default useFetch;


            //https://stackoverflow.com/questions/47099066/correct-way-to-catch-fetch-errors-in-react

            // .then(allJobs => setJobs(allJobs),(error) => {
            //     if(error) {
            //         console.error(error)
            //     }
            // })}


            // error
            // .json()
            // .then((body) => {
            //     console.error(`[useFetch.js] ${body}`);
            //     setError(body);
            // });


