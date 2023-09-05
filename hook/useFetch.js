import {useState, useEffect} from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env";
// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    console.log(endpoint, query);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': "7f5a12a1d7msh6bd7fe27d6f5700p1b3815jsnb20811f9795a",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true)
        
        try{
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)
        } catch(error){
            setError(error)
            alert(error)
        } finally{
            setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData();
      },[]);

      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, refetch};
}

export default useFetch;