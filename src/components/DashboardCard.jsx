
function DashboardCard({ total, title, img }) {
    return (
        <div className='relative w-[80%] m-auto rounded-2xl sm:w-[60%] border-2 sm:rounded-3xl shadow-lg p-6 cursor-pointer'>
            <img src={img} alt="user" className='h-full mx-auto my-4' height={'20'} />
            <h4 className='text-blue-900 font-bold text-xl text-center'>{title}</h4>
            <span className='absolute top-0 right-3.5 border-0 bg-red-600 p-2 rounded-b-full text-white'>{total}</span>
        </div>
    )
}

export default DashboardCard
