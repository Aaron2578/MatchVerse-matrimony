
function Button(
    { content, color = 'pink', fontColor = 'white' ,handleClick}:{content:string,color?:"pink" | "pink_out",fontColor?:string,handleClick?:()=>void}
) {

    const gradients = {
        pink: 'bg-gradient-to-r from-pink-300 to-violet-400 ',
        pink_out: `bg-white text-purple-500 border-2 border-violet-400`
    }
    return (
        <button onClick={handleClick} className={`bg-gradient-to-r from-${gradients[color]} text-${fontColor} font-semibold py-1 px-4 rounded-2xl text-sm sm:text-base cursor-pointer`}>
            <span>{content}</span>
        </button>
    )
}

export default Button
