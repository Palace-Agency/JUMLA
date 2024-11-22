import RoundedTransition from "../../../common/RoundedTransition/RoundedTransition";
import Title from "../../../components/Title";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../components/ui/carousel";
import React, { useRef } from "react";

const testimonials = [
    {
        name: "Ahmed Mahmod",
        job: "Client",
        testimonial:
            "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Nonhendrerit in vel ac diam.",
    },
    {
        name: "Omar Mahdi",
        job: "CEO Palace",
        testimonial:
            "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Nonhendrerit in vel ac diam.",
    },
    {
        name: "Omar Mahdi",
        job: "CEO Palace",
        testimonial:
            "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Nonhendrerit in vel ac diam.",
    },
];

const Testimonial = ({ content }) => {
    const container = useRef(null);

    return (
        <div
            ref={container}
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto z-10 bg-white relative pt-10 sm:pt-32 max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto mb-16 max-w-2xl lg:text-center">
                <Title title={"Testimonials"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    {content?.title}
                </p>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <Carousel className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pt-1">
                                <figure className="max-w-screen-md mx-auto mb-2">
                                    <svg
                                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                            {testimonial.testimonial}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <img
                                            className="w-6 h-6 rounded-full"
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                            alt="profile picture"
                                        />
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                                {testimonial.name}
                                            </div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                                {testimonial.job}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="invisible lg:visible lg:ml-[128px]" />
                    <CarouselNext className="invisible lg:visible mr-[128px]" />
                </Carousel>
            </div>
            {/* <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div> */}
            <RoundedTransition container={container} />
        </div>
    );
};

export default Testimonial;
