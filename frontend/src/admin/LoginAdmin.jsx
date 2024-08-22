import { useState } from "react"
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import { useNavigate } from "react-router-dom"

function LoginAdmin() {

    const [admin, setAdmin] = useState('')
    const [password, setPassword] = useState('')
    const [isadmin, setIsAdmin] = useState(true)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log(admin, password)
            const res = await api.post('api/admintoken/', {username:admin, password, isadmin})
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            console.log(res)
            navigate('/adminDashboard')
            
        }
        catch(error) {
            console.log(error)
            console.log('lkjsfljslfjkslfjslfjslfjslkjflskf')
            alert(error)
        }
    }

    return(
        <div className="justify-center flex h-screen items-center">
            <div className="bg-zinc-800 h-[450px] w-[500px]">
                <h2 className="flex justify-center text-white p-16 text-2xl">Admin Login</h2>
                <form onSubmit={handleSubmit} className="grid justify-center">
                    <input onChange={(e) => setAdmin(e.target.value)} type="text" placeholder="username" className="p-2 rounded  outline-red-300 "/><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="p-2 rounded outline-red-300" /><br />
                    <button className="bg-red-500 p-2 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin