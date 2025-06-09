import ButtonSecondary from "../ButtonSecondary/ButtonSecondary"
import { IoMdRefresh } from "react-icons/io"

export default function RetryAgain({ retry }) {
    return (
        <div className='border-primary/10 h-full w-full rounded-xl p-10 border overflow-hidden shadow-xl shadow-black relative backdrop-blur bg-gradient-to-tr from-black/70 to-black/50'>
            <div className="flex flex-col gap-5">
                <div className=" w-full h-full flex flex-col items-center justify-center  gap-5 px-3">
                    <h1 className="text-primary text-xl font-semibold capitalize">Something Went Wrong !</h1>
                    <h1 className="text-neutral text-xs font-semibold capitalize">Encountred an error Please retry ! if the problem presist Please contact us</h1>
                    <IoMdRefresh className="text-8xl text-neutral/50" />
                    <ButtonSecondary onClick={retry} >
                        Retry
                    </ButtonSecondary >
                </div>
            </div>
        </div>
    )

}