import CustomHead from "../components/CusomHead";
import ApaItu from "../components/Home/ApaItu";
import Blog from "../components/Home/Blog";
import Hero from "../components/Home/Hero";
import Kenapa from "../components/Home/Kenapa";
import MainLayout from "../layout/MainLayout";
import Client from "../utils/prismicHelpers";

const Home = ({ blogs }) => {

  if (!blogs) return ''

  return (
    <>
      <CustomHead
        title='Home - Peken'
        description='Digitalisasi pasar tradisional #1 di Indonesia'
        url='https://www.pekenaja.com'
      />
      <MainLayout>
        <Hero />
        <ApaItu />
        <Kenapa />
        <Blog blogs={blogs} />
      </MainLayout>
    </>
  );
}

export default Home;

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
      blogs: blogs.results
    },
  }
}