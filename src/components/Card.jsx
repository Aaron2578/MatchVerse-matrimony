import img from "../assets/profile-img.png"
import Button from "./Button"
function Card() {
    return (
        <div className="w-70 border-2 rounded-2xl p-3 my-3">
            <img src={img} alt="profile-img" className="h-50 m-auto rounded-2xl" />
            <h5 className="text-2xl font-medium text-center">Harish.R</h5>
            <h6 className="text-center text-fuchsia-600 font-bold">Developer</h6>
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, cumque temporibus sit repellendus saepe debitis nesciunt repudiandae dolorem earum ratione quos</p>
            <span className='flex justify-center items-center m-3'>
                <Button content={'View'} />
            </span>
        </div>
    )
}

export default Card
