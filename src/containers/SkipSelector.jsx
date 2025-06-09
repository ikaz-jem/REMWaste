import { lazy, Suspense, useState } from "react";
import SkipCategorySkeleton from "../components/SkipCategorySkeleton/SkipCategorySkeleton";
import { useSkips } from "../hooks/useSkips";
import DemoStepper from "../components/DemoStepper/DemoStepper";
import { toast } from "sonner";
import { IoMdRefresh } from "react-icons/io";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";


const SkipCategory = lazy(() => import('../components/SkipCategory/SkipCategory'))

export default function SkipSelector() {
    const [retry, setRetry] = useState(false)
    const { isPending, error, data } = useSkips();

    const retryAgain = ()=> setRetry(!retry)

    return (
        <div className="container space-y-20 ">
            <DemoStepper />
            <div className="w-full h-full flex items-center justify-center lg:px-5 px-2 md:px-3">
                <>
                    {isPending || !data && !error ? (
                        <SkipCategorySkeleton />
                    ) :
                        error && !data ? <RetryAgin retry={retryAgain} />
                            :
                            (
                                <Suspense fallback={<SkipCategorySkeleton />} >
                                    <SkipCategory skips={data} />
                                </Suspense>
                            )}
                </>
            </div>
        </div>
    )
}


function RetryAgin({ retry }) {
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