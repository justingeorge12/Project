import { useState } from "react"
import api from "../api"
import EditUser from "./EditUser"

function ListUser({id, username, email, isSuperuser , listusers}) {

    const [editCom, setEditCom] = useState(false)


    const handleDelete = (id) => {
        api.delete(`api/detail/${id}/`).then((res) => {
            if (res.status === 204) alert('user is deleted')
            else alert('failed to delete note')
            listusers()
        }).catch((error) => alert(error))
    }
    
    return(
        <div >
            {editCom && 
            <div>
                <EditUser id={id} username={username} email={email}  />
            </div> }

            {!isSuperuser && 
            
                <div className="mx-12 mt-4">
                    <div className="flex justify-between shadow-sm bg-zinc-50 p-1 ">
                        <p>{id}</p>
                        <p>{username}</p>
                        <p>{email}</p>
                        <button onClick={() => setEditCom(!editCom)}>edit</button>
                        <button onClick={() => handleDelete(id)}>delete</button>
                    </div>
                <hr />
                </div>
            }
            
        </div>
    )
}

export default ListUser