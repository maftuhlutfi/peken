import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogCard from "../../components/Blog/BlogCard";
import CustomHead from "../../components/CusomHead";
import Section from "../../components/shared/Section";
import MainLayout from "../../layout/MainLayout";
import formatDateMonthYear from "../../utils/formatDateMonthYear";
import Client from "../../utils/prismicHelpers";

const BlogPage = ({ blogs }) => {
    const { push, pathname, query: { sort } } = useRouter()
    const [sortValue, setSortValue] = useState('terbaru')

    if (!blogs) return ''

    useEffect(() => {
        if (sort) {
            setSortValue(sort)
        }
    })

    const handleChange = e => {
        push({
            pathname: pathname,
            query: {
                sort: e.target.value
            }
        })
    }

    return (
        <>
            <CustomHead
                title='Blog - Peken'
                description='Blog peken untuk membaca artikel terbaru tentang pasar'
                url='https://www.pekenaja.com/blog'
            />
            <MainLayout>
                <Section className='mt-10'>
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-bold">Blog</h1>
                        <div className="flex items-center">
                            <p className="mr-4 font-medium">Urutkan:</p>
                            <select value={sortValue} onChange={handleChange} className="p-4 bg-white border border-gray-300 rounded-lg shadow outline-none">
                                <option value='terbaru'>Terbaru</option>
                                <option value='terlawas'>Terlawas</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-16 mt-16 lg:grid-cols-3">
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
            </MainLayout>
        </>
    );
}

export default BlogPage;

export async function getServerSideProps(context) {
    const { sort } = context.query

    const blogs = await Client().getByType('blog', {
        orderings: {
            field: 'document.first_publication_date',
            direction: sort && sort == 'terlawas' ? 'asc' : 'desc'
        },
        pageSize: 3
    })

    return {
        props: {
            blogs: blogs.results
        },
    }
}