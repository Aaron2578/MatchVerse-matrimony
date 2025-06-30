import Header from '../components/Header'
import DashboardCard from '../components/DashboardCard'

import user from '../assets/user.svg'
import success from '../assets/success.svg'
import unsuccess from '../assets/unsuccess.svg'
import feedback from '../assets/feedback.svg'

function Admin() {
    return (
        <div>
            <Header />
            <div className='w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                <DashboardCard total={5} title={'Total User'} img={user} />
                <DashboardCard total={10} title={'Male'} img={user} />
                <DashboardCard total={15} title={'Female'} img={user} />
                <DashboardCard total={25} title={'Success'} img={success} />
                <DashboardCard total={35} title={'UnSuccess'} img={unsuccess} />
                <DashboardCard total={20} title={'Feedback'} img={feedback} />

            </div>
        </div>
    )
}

export default Admin
