import Header from '../components/Header'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
function Matches() {
    return (
        <div>
            <Header />
            <div className='w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Matches
