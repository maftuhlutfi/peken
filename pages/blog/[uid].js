import Image from "next/image";
import { RichText } from "prismic-reactjs";
import CustomHead from "../../components/CusomHead";
import BreadCrumbs from "../../components/shared/BreadCrumbs";
import Section from "../../components/shared/Section";
import MainLayout from "../../layout/MainLayout";
import { linkResolver } from "../../prismicConfiguration";
import formatDateMonthYear from "../../utils/formatDateMonthYear";
import Client from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from "../../utils/queries";

const SingleBlogPage = ({ blog, uid }) => {
    if (!blog) {
        return ''
    }

    const { image, title, content } = blog.data
    const date = blog.first_publication_date

    const shareLink = [
        {
            icon: '/icons/social/icon-whatsapp.svg',
            href: `https://api.whatsapp.com/send?text=Yuk cek artikel baru di blog kami "${title}"%0ahttps://www.pekenaja.com/blog/${uid}`
        },
        {
            icon: '/icons/social/icon-facebook.svg',
            href: `https://www.facebook.com/sharer/sharer.php?u=https://www.pekenaja.com/blog/${uid}`
        },
        {
            icon: '/icons/social/icon-twitter.svg',
            href: `https://twitter.com/intent/tweet?text=Hai%20cek%20artikel%20peken%20pada%20link%20berikut%200ahttps://www.pekenaja.com/blog/${uid}`
        },
        {
            icon: '/icons/social/icon-linkedin.svg',
            href: `ttps://www.linkedin.com/shareArticle?mini=true&url=https://www.pekenaja.com/blog/${uid}&title=${title}`
        }
    ]

    return (
        <>
            <CustomHead
                title={title}
                description={content.filter(c => c.type == 'paragraph').map(p => p.text)}
                image={image}
            />
            <MainLayout>
                <Section className='mt-20'>
                    <div className="max-w-[900px] relative mx-auto">
                        <Image src={image.url} width={900} height={450} layout="responsive" alt={image.alt} />
                        <div className="mt-10 mb-5 text-text-secondary">{formatDateMonthYear(date)}</div>
                        <h1 className="mb-6 text-4xl font-bold leading-normal">{title}</h1>
                        <div className="mb-10 blog-content">
                            <RichText render={content} linkResolver={linkResolver} />
                        </div>
                        <div>
                            <p className="mb-5 text-xl font-bold">
                                Bagikan Yuk!
                            </p>
                            <div className="flex items-center">
                                {shareLink.map((link, i) =>
                                    <a href={link.href} target='_blank' className="mr-4 last:mr-0">
                                        <Image src={link.icon} width={32} height={32} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
            </MainLayout>
        </>
    );
}

export default SingleBlogPage;

export async function getStaticProps({ params }) {
    const blog = await Client().getByUID("blog", params.uid) || {}

    return {
        props: {
            blog: blog,
            uid: blog.uid
        }
    }
}

export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'blog')
    return {
        paths: documents.map(doc => `/blog/${doc.uid}`),
        fallback: true,
    }
}