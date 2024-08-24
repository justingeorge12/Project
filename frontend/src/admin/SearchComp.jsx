import { useState } from "react"
import api from "../api"

function SearchComp() {

    const [serchData, setSearchData] = useState('')
    const [searchRes, setSearchRes] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const res = api.get(`api/usersearch/?search=${serchData}`).then((res) => res.data).then((data) => 
            {setSearchRes(data); console.log(data)} )
            .catch((error) => console.log(res))
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setSearchData(e.target.value)} type="text" placeholder="search" />
                <button type="submit"> submit</button>
            </form> 

            <div>
                {searchRes.map((data) => (
                    <div key={data.id} className="mx-12 mt-4">
                        <div  className="flex justify-between shadow-sm bg-zinc-50 p-1">
                            <p>{data.id}</p>
                            <p>{data.username}</p>
                            <p>{data.email}</p>
                        </div>

                    </div>
                ))}


            </div>
        </div>
    )
}

export default SearchComp