import axios from "axios";
import { useState, useEffect } from "react";
import Result from "./Result.js";
function News() {
    const[info, setInfo] = useState([]);
    useEffect(() => { 
        let a1 = "https://newsapi.org/v2/top-headlines";
		let a2 = "?country=" + "in";
        let a3 = "&apiKey=" + "43cdebf357744b0f9611a1dd089c9514";
        let urladd=a1 + a2 + a3;
        axios.get(urladd)
        .then(res=>setInfo(res.data.articles))
         .catch(err=>console.log(err))
    }, []);
    
    return (
        <>
            <center>
                <h1>
                    NEWS APP
                </h1>
                {
                    info.map((a) => (
                        <>
                        <Result title={a.title} urlToImage={a.urlToImage} url={a.url}/>
                        </>
                    ))
                }
        </center>
        </>
    );
    
}
export default News;