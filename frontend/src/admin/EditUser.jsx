import { useState } from "react"
import api from "../api"
function EditUser({id, username, email}) {


    const [newName, setNewName] = useState(username)
    const [newemail, setNewemail] = useState(email)

    
    const handleSubmit = (e) => {
         try{
            const res = api.patch(`api/detail/${id}/`, {username:newName, email:newemail })

        }catch(error){
            alert(error)
        }
    }
    
    return(
        <div className="mx-16">
            <div>
                <form  className="flex justify-between w-[800px]  ">

                    <input onChange={(e) => setNewName(e.target.value)} type="text" placeholder={username} className="bg-slate-100 border-2 border-neutral-300" />
                    <input onChange={(e) => setNewemail(e.target.value)} type="text" placeholder={email} className="bg-slate-100 border-2  border-neutral-300" />
                    <button onClick={handleSubmit} type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
