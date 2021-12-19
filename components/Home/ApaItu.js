import Image from "next/image";
import Button from "../shared/Button";
import Section from "../shared/Section";
import SectionTitle from "../shared/Section/SectionTitle";

const ApaItu = () => {
    return (
        <Section>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <Image src='/home/apaitu.png' width={550} height={496} className="object-cover object-center" />
            <div className="mt-16 lg:mt-0 lg:w-1/2 lg:max-w-lg">
                <SectionTitle title='Apa itu Peken?' />
                <p className="leading-normal text-text-secondary my-8">
                    Nama Peken berasal dari bahasa krama Jawa yang artinya pasar. Peken sendiri merupakan platform untuk membangun dan mengembangkan ekosistem digital di pasar tradisional. Maksud dari “Urip Iku Urup” adalah hidup itu hendaknya memberi manfaat bagi orang lain di sekitar kita.
                </p>
                <Button type='primary'>
                    <div className="mr-2">Tentang Kami</div>
                    <Image src='/icons/arrow-right.svg' width={24} height={24} alt="apa-img" />
                </Button>
            </div>
          </div>
        </Section>
    );
}
 
export default ApaItu;