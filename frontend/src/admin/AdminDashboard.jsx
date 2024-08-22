import { useState } from "react"
import api from "../api"
import ListUser from "./ListUser"
import CreateUserCom from "./CreateUserCom"


function AdminDashboard() {

    const [list, setList] = useState(false)
    const [createUser, setcreateUser] = useState(true)
    const [users, setUsers] = useState([])

    const ListUsers = () => {
        
        const res = api.get('api/userdetails/').then((res) => res.data).then((data) =>
            {setUsers(data); console.log(data)} )
            .catch((error) => console.log(res)
        )
        setList(!list) 
        }

    const creteUser = () => { 
        setcreateUser(!createUser)

    }


    return(
        <div>
            <div className="bg-zinc-700 p-4 grid justify-center text-white text-2xl">
                admin Dashboard
            </div>
            
            <div className="bg-slate-200  py-2 flex justify-between">
                <button onClick={ListUsers} className="text-xl ml-16" >List users</button>
                <button onClick={creteUser} className="text-xl mr-16" >create user</button>
            </div>
            
            {list && 
            <div>
                {users.map((data) => (
                    <ListUser key={data.id} username={data.username} email={data.email} id={data.id} isSuperuser={data.is_superuser} listusers= {ListUsers} />
                ))}
            </div>
            }

            {createUser &&  <CreateUserCom />}
            

        </div>
    )
}

export default AdminDashboard