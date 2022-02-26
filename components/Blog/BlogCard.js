import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ image, date, title, uid, content }) => {
    return (
        <Link href={`/blog/${uid}`}>
            <a>
                <Image src={image.url} width={375} height={240} layout='responsive' className="object-cover object-center" />
                <div className="mt-5 mb-2 text-sm text-text-secondary">{date}</div>
                <h3 className="mb-4 text-2xl font-bold line-clamp-2">{title}</h3>
                <p className="leading-relaxed text-text-secondary line-clamp-5">
                    {content}
                </p>
                <span className="font-bold text-custom-green">Read more</span>
            </a>
        </Link>
    );
}

export default BlogCard;