'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../global/ui/3d-card';
import { CheckIcon } from 'lucide-react'
import { SparklesPreview } from '../global/ui/PriceHeading';



const Pricing = () => {



  return (
    <div className="flex  h-full  items-center justify-center flex-col   mb-52 mt-20 " id='pricing'>
      <SparklesPreview />


      <div className="w-full md:-mt-20 flex flex-wrap items-center justify-center flex-col gap-8 md:flex-row  ">
      <CardContainer className="inter-var  " >
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Hobby
            <h2 className="text-6xl ">$0</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads
            up {"you'll"} never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var cardMd">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Pro Plan
            <h2 className="text-6xl ">$29</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads
            up {"you'll"} never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var cardLg">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Unlimited
            <h2 className="text-6xl ">$99</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads
            up {"you'll"} never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      </div>
    </div>
  )
}

export default Pricing