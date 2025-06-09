import { lazy, Suspense } from "react";
import SkipCategorySkeleton from "../components/SkipCategorySkeleton/SkipCategorySkeleton";
import { useSkips } from "../hooks/useSkips";
import DemoStepper from "../components/DemoStepper/DemoStepper";


const SkipCategory = lazy(() => import('../components/SkipCategory/SkipCategory'))

export default function SkipSelector() {

    const { isPending, error, data } = useSkips();
    return (
        <div className="container space-y-20 ">
            <DemoStepper />
            <div className="w-full h-full flex items-center justify-center">
                <>
                    {isPending || !data && !error ? (
                        <SkipCategorySkeleton />
                    ) : (
                        <Suspense fallback={<SkipCategorySkeleton />} >
                            <SkipCategory skips={data} />
                        </Suspense>
                    )}
                </>
            </div>
        </div>
    )
}