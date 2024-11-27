import { Link, useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import React from "react";
import Rounded from "../../../common/RoundedButton/Rounded";
import { motion } from "framer-motion";

const stripHtmlTags = (htmlContent) => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");
    return doc.body.textContent || "";
};

const Blog = ({ blogs, content }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/blogs");
    };
    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto rlative max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto max-w-2xl lg:text-center">
                <Title title={"Blogs"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    {content?.title}
                </p>
                <p className="mt-6 text-sm sm:text-lg text-gray-600">
                    {content?.description}
                </p>
            </div>
            {/* <div>
                <Rounded className={styles.button_blog}>
                    <p>More</p>
                </Rounded>
            </div> */}
            <div
                data-scroll
                data-scroll-speed={0.02}
                className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                {blogs && (
                    <>
                        {blogs.ids.map((id) => (
                            <div
                                key={id}
                                className="w-full z-30 h-full space-y-3 py-3"
                            >
                                <img
                                    alt="Blog image"
                                    src={`http://127.0.0.1:8000/storage/uploads/blog/${blogs.entities[id].image}`}
                                    className="h-[250px] w-full lg:w-[355px] object-cover rounded-xl"
                                />
                                <div className="flex text-xs items-center gap-3">
                                    <p className="text-slate-500">
                                        {new Date(
                                            blogs.entities[id].created_at
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
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
                                    {stripHtmlTags(blogs.entities[id].content)}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.button
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md z-30 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    See more <span aria-hidden="true">→</span>
                </motion.button>
            </div>
        </div>
    );
};

export default Blog;
