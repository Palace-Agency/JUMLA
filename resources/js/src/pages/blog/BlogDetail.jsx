import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBlogMutation } from "../../slices/BlogsSlice";

const Blogs = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState(null);
    const [getBlog] = useGetBlogMutation();
    const containerRef = useRef(null);

    const stripHtmlTags = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, "text/html");
        return doc.body.textContent || "";
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlog({ slug }).unwrap();
                const blog = response.blog;
                const relatedBlogs = response.relatedBlogs;
                setBlog(blog);
                setRelatedBlogs(relatedBlogs);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [slug, getBlog]);

    const SafeHtml = ({ htmlContent }) => {
        useEffect(() => {
            if (containerRef.current) {
                const shadowRoot = containerRef.current.attachShadow({
                    mode: "open",
                });
                const wrapper = document.createElement("div");
                wrapper.innerHTML = htmlContent;
                shadowRoot.appendChild(wrapper);
            }
        }, [htmlContent]);

        return <div ref={containerRef}></div>;
    };

    return (
        <>
            <main className="mx-auto max-w-2xl sm:pt-32 lg:pt-30 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                {blog?.title}
                            </h1>
                            <div className="flex text-sm items-center gap-3">
                                <p className="text-slate-500">
                                    {new Date(
                                        blog?.created_at
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <p className="hover:bg-gray-200 font-semibold text-slate-600 border px-2 py-1 bg-gray-100 rounded-lg">
                                    {blog?.tag}
                                </p>
                            </div>
                        </header>
                        <figure>
                            <img
                                src={`http://127.0.0.1:8000/storage/uploads/blog/${blog?.image}`}
                                alt=""
                                className="rounded-2xl mb-5"
                            />
                        </figure>
                        <div>
                            <SafeHtml htmlContent={blog?.content} />
                        </div>
                    </article>
                </div>
                <aside
                    aria-label="Related articles"
                    className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
                >
                    <div className="px-4 mx-auto max-w-screen-xl">
                        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                            Related articles
                        </h2>
                        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
                            {relatedBlogs?.map((blog, key) => (
                                <article key={key} className="max-w-xs">
                                    <Link to={`/blogs/${blog.slug}`}>
                                        <img
                                            src={`http://127.0.0.1:8000/storage/uploads/blog/${blog?.image}`}
                                            className="mb-5 rounded-lg"
                                            alt="Image 1"
                                        />
                                    </Link>
                                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                        <Link to={`/blogs/${blog.slug}`}>
                                            {blog?.title}
                                        </Link>
                                    </h2>
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
                                        {stripHtmlTags(blog.content)}
                                    </p>
                                    <Link
                                        to={`/blogs/${blog.slug}`}
                                        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                    >
                                        Read in {blog?.estimate_reading_time}
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default Blogs;
