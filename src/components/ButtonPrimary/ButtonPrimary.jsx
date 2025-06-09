
import { ClipLoader
 } from 'react-spinners'

/**
 * 
 * @param {String} ClassName Overrides current Styling
 * @param {Function} onClick Triggers Functions 
 * @param {Boolean} loading Change Loading State in Button and Shows Loader 
 * @param {Boolean} disabled Disables The Button 
 * @param {JSX.Element} icon Take Jsx Element For Icon to display 
 * @returns {JSX.Element} Returns Primary button With Loader - icon 
 */



export default function ButtonPrimary({className,children , onClick ,loading ,disabled , icon}) {


  return (
    <button disabled={disabled || loading}  onClick={onClick} className={`${className} flex disabled:bg-neutral-400/20 disabled:border-neutral-500/30 disabled:!text-neutral-500 disabled:cursor-not-allowed items-center justify-center !text-sm !rounded-lg cursor-pointer before:ease relative h-10 w-28 overflow-hidden border border-primary/40 bg-primary !text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:bg-white before:opacity-40 before:duration-700 hover:shadow-primary/20 hover:before:-translate-x-40`}>
     {
     !loading ?  <span className="relative flex items-center gap-2  ">{children || 'button'}  {icon || ""} </span>
     :
       <ClipLoader className='text-xs' color='var(--title)' size={25}/>
     }
    </button>
  )
}
