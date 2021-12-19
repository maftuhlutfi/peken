import Image from "next/image";
import Button from "../shared/Button";
import Section from "../shared/Section";

const Hero = () => {
    return (
        <Section className='bg-light-yellow pt-40 lg:pt-48'>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-16 lg:mb-0 lg:w-1/2 lg:max-w-lg lg:flex-shrink">
                <h5 className="text-lg text-custom-yellow font-medium tracking-wider lg:text-2xl">Urip Iku Urup</h5>
                <h1 className="text-4xl font-bold my-4 lg:my-6 text-text-primary lg:text-5xl leading-tight lg:leading-snug">Menyenangkan Belanja Kebutuhan <br />di Pasar Tradisional</h1>
                <p className="leading-normal text-text-secondary mb-6 lg:mb-8 lg:text-lg">Aplikasi #1 jual beli online di pasar tradisional</p>
                <Button type='primary'>
                    Belanja Yuk!
                </Button>
            </div>
            <Image src='/home/hero.png' width={550} height={496} className="object-cover object-center" alt="hero-img" />
          </div>
        </Section>
    );
}
 
export default Hero;