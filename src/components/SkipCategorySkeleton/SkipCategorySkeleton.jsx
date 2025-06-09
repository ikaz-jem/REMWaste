
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import  { SkeletonTheme } from 'react-loading-skeleton';

export default function SkipCategorySkeleton() {
  return (
    <SkeletonTheme baseColor="var(--loader-primary)" highlightColor="var(--loader-accent)">
    <div className='border-primary/10 h-full w-full rounded-xl p-10 border overflow-hidden shadow-xl shadow-black relative backdrop-blur bg-gradient-to-tr from-black/70 to-black/50'>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left side (list + button) */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 w-full justify-between px-3">
            <div className="grid gap-2">
              <Skeleton width={120} height={32} />
              <Skeleton width={100} height={20} />
            </div>
            <div className="grid place-items-center">
              <Skeleton width={80} height={32} />
              <Skeleton width={60} height={16} />
            </div>
          </div>

          <div className="flex flex-col gap-2 overflow-y-scroll h-40 md:h-full rounded py-5">
            {[...Array(5)].map((_, idx) => (
              <Skeleton key={idx} height={40} className="rounded" />
            ))}
          </div>

          <Skeleton height={50} className="rounded" />
        </div>

        {/* Right side (info card) */}
        <div className="flex flex-col gap-5 border rounded p-5">
          <Skeleton height={180} className="w-full rounded" />

          <div className="grid gap-3">
            <div className="flex justify-between items-center">
              <Skeleton width={140} height={28} />
              <Skeleton width={100} height={18} />
            </div>

            <Skeleton width={80} />
            <Skeleton width={120} />

            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} width={36} height={36} circle />
                ))}
              </div>
              <Skeleton width={80} height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
                </SkeletonTheme>
  );
}
