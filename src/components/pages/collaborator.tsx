import { LayoutGrid } from "@/components/global/ui/layout-grid";
import { showcase1, showcase2, showcase3, showcase4 } from "@/lib/constants";

export function LayoutGridDemo() {
  return (
    <div className="h-screen mb-[200px] pb-20 w-full " id="feature">
        
<div className="h-[15rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="relative flex flex-col justify-center items-center z-0">
        <h1 className='z-30 text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center text-transparent custom-gradient-text'>
        Spotlight
        </h1>
        <p className='text-base md:text-[22px] text-center mt-1 mb-2  text-secondary font-satoshi-medium font-medium z-30'>
        Unveil the Best of Our Features

        </p>
    </div>
    <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


    </div>
</div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Spotify UI Design Kit</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      I was curious about the design from Spotify, so I tried to redesign the artists landing page to remap it into every neat and easy design component for you to learn.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Job Finder Landing Page</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Clone this awesome job finding landing page or company job landing page template for your next projects. Free figma landing page template for you. More awesome templates on uifry.com
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Job Finder Landing Page</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Clone this awesome job finding landing page or company job landing page template for your next projects. Free figma landing page template for you. More awesome templates on uifry.com

      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:showcase1
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:showcase2
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:showcase3
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:showcase4
  },
];
