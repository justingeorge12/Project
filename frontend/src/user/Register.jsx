import { Link } from "react-router-dom"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import { useState } from "react"

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        setLoading(true)
        e.preventDefault()
        console.log(image)

        try{
            api.post('api/create/', {username, email, password, image}).then((res) => {
                if (res.status === 201){
                    alert('now you can login')
                    navigate('/login')
                } 

                else alert ('failed to register')
            }).catch((error) => alert(error))
            

        } catch(error) {
            console.log(error)
            alert(error)

        } finally {
            setLoading(false)
        }
    }

    function handleImgSub(e){
        console.log(image, 'brrffff')
        console.log(e.target.files)
        setImage(e.target.files[0])
        console.log(image, 'afttttttt')
    }
    
    console.log(username,image)

    return(
        <div className="justify-center flex h-screen items-center">
            <div className="bg-zinc-800 h-[550px] w-[500px]">
                <h2 className="flex justify-center text-white p-16 text-2xl">User Register</h2>
                <form onSubmit={handleSubmit} className="grid justify-center">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" className="p-2 rounded  outline-red-300 "/><br />
                    <input onChange={(e) => setEmail(e.target.value)} type="gmail" placeholder="gmail" className="p-2 rounded outline-red-300" /><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="p-2 rounded outline-red-300" /><br />
                    <input onChange={handleImgSub} type="file"  /><br />
                    <button type="submit" className="bg-red-500 p-2 rounded">Register</button>
                </form>
                <div className="grid m-5 text-white">
                    <button>Already have an Account ? <Link to='/login'>Please Login</Link></button>
                </div>
            </div>
            
        </div>
    )
}

export default Register
