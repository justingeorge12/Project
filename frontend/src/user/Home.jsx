import img from '../assets/notfoundimg.png'

function Home() {

    const handleProfile = () => {
        console.log('clickkked')
    }

    return(
        <div>
            <div className="bg-zinc-800 text-white text-2xl justify-center grid">
                <h1 className="p-4 capitalize">Hey This is Your Profile</h1>
            </div>
            <div className="m-16 w-[250px]">
                <div  className="h-[250px]  bg-red-50 rounded-full">
                    <img onClick={handleProfile} src={img} alt="img" />
                </div>
                <div className='bg-slate-50 grid justify-center text-2xl  mt-4'>
                    <p>Justin George</p>
                </div>
            </div>
        </div>
    )
}

export default Home