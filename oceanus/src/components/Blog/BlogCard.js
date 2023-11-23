import Button from "../Common/Button"

const BlogCard = () => {
    const blogs = [
        "/images/blog.png",
        "/images/blog1.png",
        "/images/blog2.png"
    ]
    return (
        <div className="my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                {
                    blogs.map((blog, idx) => <img key={idx} src={blog} />)
                }
            </div>
            <div className="text-center mt-10">
                <Button content={"Learn More"} />
            </div>
        </div>
    )
}

export default BlogCard