import Image from "next/image";
import formatDateMonthYear from "../../utils/formatDateMonthYear";
import BlogCard from "../Blog/BlogCard";
import Button from "../shared/Button";
import Section from "../shared/Section";
import SectionTitle from "../shared/Section/SectionTitle";

const Blog = ({ blogs }) => {
    return (
        <Section>
            <div className="flex justify-center">
                <SectionTitle title='Blog Kami' />
            </div>
            <div className="grid gap-16 mt-20 lg:grid-cols-3">
                {blogs.map((b, i) =>
                    <BlogCard
                        key={i}
                        {...b.data}
                        content={b.data.content.filter(c => c.type == 'paragraph').map(p => p.text)}
                        date={formatDateMonthYear(b.first_publication_date)}
                        uid={b.uid}
                    />
                )}
            </div>
        </Section>
    );
}

export default Blog;

export async function getServerSideProps(context) {
    const blogs = await Client().getByType('blog', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'desc'
        },
        pageSize: 3
    })

    return {
        props: {
            blogs: new Array(3).fill(blogs.results[0])
        },
    }
}