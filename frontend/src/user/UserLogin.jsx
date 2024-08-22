import { useState } from "react"
import { Link } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import api from "../api"
import { useNavigate } from "react-router-dom"



function UserLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post('api/token',  {username, password})
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            navigate('/')

        } catch(error) {
            alert(error)
        }
    }


    return(
        <div className="justify-center flex h-screen items-center">
            <div className="bg-zinc-800 h-[450px] w-[500px]">
                <h2 className="flex justify-center text-white p-16 text-2xl">Login</h2>
                <form onSubmit={handleSubmit} className="grid justify-center">
                    <input onChange={(e) => setUsername(e.target.value) } type="text" placeholder="Username" className="p-2 rounded  outline-red-300 "/><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="p-2 rounded outline-red-300" /><br />
                    <button className="bg-red-500 p-2 rounded">Login</button>
                </form>
                <div className="grid m-5">
                    <button className="text-white">Don't have account? <Link to='/register'>Please Register </Link> </button>
                </div>
                    
            </div>
        </div>
    )
}

export default UserLogin