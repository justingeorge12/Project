import notfound from '../assets/notfoundimg.png'
function NotFound() {

    return(
        <div><button className='m-10 absolute bg-red-500 rounded text-red-50 px-6'> ← Back</button>

        <div className="flex justify-center items-center h-screen">
      <div className="relative w-[800px]">
        <img src={notfound} alt="notfound" className="w-full" />
        
      </div>
    </div>
        </div>
    )
}

export default NotFound