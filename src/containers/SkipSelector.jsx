import { lazy, Suspense, useState } from "react";
import SkipCategorySkeleton from "../components/SkipCategorySkeleton/SkipCategorySkeleton";
import { useSkips } from "../hooks/useSkips";
import DemoStepper from "../components/DemoStepper/DemoStepper";
import 'react-tooltip/dist/react-tooltip.css'
import RetryAgain from "../components/RetryAgain/RetryAgain";

const SkipCategory = lazy(() => import('../components/SkipCategory/SkipCategory'))

export default function SkipSelector() {
    const [retry, setRetry] = useState(false)
    const { isPending, error, data } = useSkips();
    const retryAgain = () => setRetry(!retry)

    return (
        <section>
            <div className="container space-y-20 ">
                <DemoStepper />
                <div className="w-full h-full flex items-center justify-center lg:px-5 px-2 md:px-3">
                    {
                        isPending || !data && !error ?
                            (
                                <SkipCategorySkeleton />
                            )
                            :
                            error && !data ? <RetryAgain retry={retryAgain} />
                                :
                                (
                                    <Suspense fallback={<SkipCategorySkeleton />} >
                                        <SkipCategory skips={data} />
                                    </Suspense>
                                )
                    }
                </div>
            </div>
        </section>
    )
}


