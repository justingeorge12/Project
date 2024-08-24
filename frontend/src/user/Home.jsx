import { useNavigate } from 'react-router-dom'
import img from '../assets/homee.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counterSlice'

function Home() {

    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter) 

    const navigate = useNavigate()

    const handleProfile = () => {
        console.log('clickkked')
    }

    const handlelogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return(
        <div>
            <div className="bg-zinc-800 text-white text-2xl justify-center grid">
                <h1 className="p-4 capitalize">Hey This is Your Profile</h1>
            </div>
            <div className='flex justify-end mr-16 mt-2'>
                 <button onClick={handlelogout} className='bg-red-600 px-4 py-1'>logout</button>
            </div>
            <div className="m-16 w-[250px] inline-block">
                <div  className="h-[250px]  bg-red-50 rounded-full overflow-hidden">
                    <img onClick={handleProfile} src={img} alt="img" className='object-cover'/>
                </div>
                {/* <div className='bg-slate-50 grid justify-center text-2xl  mt-4'>
                    <p>Justin George</p>
                </div> */}
            </div>
            <div className=' ml-12 inline-block absolute'>
                <div className='mt-12 ml-12 text-2xl'> hey Welcome back </div>
                <div className='text-2xl ml-12'> Let's Enjoy here </div>
            </div>
            <div>
                {counter}
                <button onClick={() => dispatch(increment())}> + </button>
                <button onClick={() => dispatch(decrement())}> - </button>
            </div>
        </div>
    )
}

export default Home