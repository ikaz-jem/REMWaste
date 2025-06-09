/**
 * 
 * @returns {JSX.Element} Returns JSX With CSS EFFECT
 */

export default function SkipBorderEffect() {
    return (
        <>
            <div className="absolute top-0 right-[10px] h-px w-[250px] bg-radial from-primary via-accent-300 to-accent-300/0 mix-blend-overlay opacity-80"/>
            <div className="absolute top-0 right-0 h-[200px] w-px bg-radial from-primary via-accent-300 to-accent-300/0 mix-blend-overlay opacity-80"/>
            <div className='w-[150px] h-[150px] bg-primary blur-[400px] absolute top-0 left-0'/>
        </>
    )
}
