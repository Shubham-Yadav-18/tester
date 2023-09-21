import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
const Home = () => {
    const{data:cataData, isLoading,isError,refetch}=useQuery(["cat"],()=>{
          return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
    });
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return < >Sorry Error found!! </>
  return (
    <div>
       <h1>This is the home page <p>{cataData.fact}</p></h1>
       <button onClick={refetch} >Update Data</button>
    </div>
  )
}

export default Home
