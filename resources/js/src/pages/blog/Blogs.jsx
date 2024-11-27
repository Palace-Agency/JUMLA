import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useGetAllBlogsQuery } from "../../slices/BlogsSlice";
import LoadingPage from "../../components/Loading/LoadingPage";
import Footer from "../../components/footer/Footer";
import RoundedTransition from "../../common/RoundedTransition/RoundedTransition";

const stripHtmlTags = (htmlContent) => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");
    return doc.body.textContent || "";
};

const Blogs = () => {
    const { data: blogs, isLoading } = useGetAllBlogsQuery("");
    const container = useRef(null);

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <div
                        ref={container}
                        data-scroll
                        data-scroll-speed={0.1}
                        className="mx-auto z-10 bg-white relative pt-10 sm:pt-32 px-6 lg:px-8"
                    >
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {blogs && (
                                <>
                                    {blogs.ids.map((id) => (
                                        <div
                                            key={id}
                                            className="w-full z-50 h-full space-y-3 py-3"
                                        >
                                            <img
                                                alt="Blog image"
                                                src={`http://127.0.0.1:8000/storage/uploads/blog/${blogs.entities[id].image}`}
                                                className="h-[250px] w-full lg:w-[355px] object-cover rounded-xl"
                                            />
                                            <div className="flex text-xs items-center gap-3">
                                                <p className="text-slate-500">
                                                    {new Date(
                                                        blogs.entities[
                                                            id
                                                        ].created_at
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        }
                                                    )}
                                                </p>
                                                <p className="hover:bg-gray-200 font-semibold text-slate-600 border px-2 py-1 bg-gray-100 rounded-lg">
                                                    {blogs.entities[id].tag}
                                                </p>
                                            </div>
                                            <Link
                                                to={`/blogs/${blogs.entities[id].slug}`}
                                                className="font-semibold text-lg hover:text-gray-600"
                                            >
                                                {blogs.entities[id].title}
                                            </Link>
                                            <p
                                                style={{
                                                    display: "-webkit-box",
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    WebkitLineClamp: 3,
                                                    textOverflow: "ellipsis",
                                                }}
                                                className="text-base text-slate-600"
                                            >
                                                {stripHtmlTags(
                                                    blogs.entities[id].content
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <RoundedTransition container={container} />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Blogs;
