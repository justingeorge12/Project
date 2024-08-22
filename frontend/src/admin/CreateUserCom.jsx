import { useState } from "react"
import api from "../api"

function CreateUserCom () {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        api.post('api/create/', {username, email, password}).then((res) => {
            if (res.status === 201){
                alert('user is created')
            } 

            else alert ('failed to register')
        }).catch((error) => alert(error))
    }

    return (
        <div className="mt-6 grid justify-center">
            <div className="  bg-zinc-700 w-[500px] h-[420px]">
                <div>
                    <h1 className="text-2xl justify-center flex text-white mt-4">Create user</h1>
                </div><br />
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="grid items-center" >
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" required className="p-2 rounded  outline-red-300 "/><br />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required className="p-2 rounded  outline-red-300 " /><br />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required className="p-2 rounded  outline-red-300 " /><br />
                        <button type="submit" className="bg-red-500 p-2 rounded">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUserCom