import { Link } from "react-router-dom";
import Title from "../../../components/Title";

const blogs = [
    {
        title: "Boost your conversation rate",
        date: "Mar 16, 2020",
        description:
            "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at",
        tag: "Marketing",
        img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    },
    {
        title: "How to use search engine optimization to drive sales",
        date: "Mar 16, 2020",
        description:
            "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at",
        tag: "Sales",
        img: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
    {
        title: "Improve your costumer service",
        date: "Mar 16, 2020",
        description:
            "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at eget egestas a elementum pulvinar et feugiat blandit at",
        tag: "Business",
        img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
];

const Blog = () => {
    return (
        <div
            data-scroll
            data-scroll-speed={0.1}
            className="mx-auto max-w-7xl px-6 lg:px-8"
        >
            <div className="mx-auto max-w-2xl lg:text-center">
                <Title title={"Blogs"} />
                <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    From the blog
                </p>
                <p className="mt-6 text-sm sm:text-lg text-gray-600">
                    Learn how to grow your business with our expert advice.
                </p>
            </div>
            <div
                data-scroll
                data-scroll-speed={0.02}
                className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                {blogs.map((blog) => (
                    <div
                        key={blog.title}
                        className="w-full h-full space-y-3 py-3"
                    >
                        <img
                            alt="Blog image"
                            src={blog.img}
                            className="h-[250px] w-full lg:w-[355px] object-cover rounded-xl"
                        />
                        <div className="flex text-xs items-center gap-3">
                            <p className="text-slate-500">{blog.date}</p>
                            <p className="hover:bg-gray-200 font-semibold text-slate-600 border px-2 py-1 bg-gray-100 rounded-lg">
                                {blog.tag}
                            </p>
                        </div>
                        <Link className="font-semibold text-lg hover:text-gray-600">
                            {blog.title}
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
                            {blog.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
