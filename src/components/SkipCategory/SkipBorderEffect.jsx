
/**
 * 
 * @returns {JSX.Element} Returns JSX With CSS EFFECT
 */



export default function SkipBorderEffect() {
    return (
        <>
            <div className="absolute top-0 right-[10px] h-px w-[200px] bg-radial from-primary via-accent-300 to-accent-300/0 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 h-[100px] w-px bg-radial from-primary via-accent-300 to-accent-300/0 mix-blend-overlay"></div>
            <p className='w-[150px] h-[150px] bg-primary blur-[400px] absolute top-0 left-0'></p>

        </>
    )
}
