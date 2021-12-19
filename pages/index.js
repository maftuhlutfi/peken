import CustomHead from "../components/CusomHead";
import ApaItu from "../components/Home/ApaItu";
import Hero from "../components/Home/Hero";
import Kenapa from "../components/Home/Kenapa";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <>
      <CustomHead 
        title='Home - Peken'
        description='Digitalisasi pasar tradisional #1 di Indonesia'
        url='https://www.peken.vercel.app'
      />
      <MainLayout>
        <Hero />
        <ApaItu />
        <Kenapa />
      </MainLayout>
    </>
  );
}
 
export default Home;