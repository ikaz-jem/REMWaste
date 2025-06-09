
/**
 * 
 * @returns {JSX.Element} Returns Blob bluried Effect With Tailwid
 */

export default function TailwindEffect() {
    return (
        <>
            <span className='w-[250px] h-[250px] bg-primary blur-[150px] rounded-full absolute bottom-0 mix-blend-color-burn '></span>
            <div className="fixed inset-0  bg-center bg-no-repeat -z-10  bg-[url('/blur1.png')] bg-cover w-[50%] opacity-10 blur-xl   " ></div>
            <div className="fixed inset-0 bg-center  -z-10  bg-[url('/noise.png')] bg-repeat   " />
        </>
    )
}
