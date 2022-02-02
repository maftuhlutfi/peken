import Image from "next/image";
import Section from "../shared/Section";

const socialList = [
    {
        icon: 'mail.svg',
        href: 'mailto:pekenaja2021@gmail.com'
    },
    {
        icon: 'whatsapp.svg',
        href: 'https://api.whatsapp.com/send?phone=6285865267592&text=Hai%20admin%20PEKENAJA%2C%20aku%20mau%20tanya%20dong%20tentang%20...'
    },
    {
        icon: 'instagram.svg',
        href: 'https://www.instagram.com/peken_aja/'
    },
    {
        icon: 'tiktok.svg',
        href: 'https://www.tiktok.com/@pekenaja_official'
    },
]

const MainFooter = () => {
    return (
        <div className='bg-text-primary w-full px-4 py-8 lg:py-8'>
            <p className="text-center text-white lg:text-lg lg:font-bold mb-5">pekenaja@2021</p>
            <div className="flex justify-center">
                {socialList.map((s, i) =>
                    <a key={i} href={s.href} className="mr-4 last:mr-0" target='_blank'>
                        <Image src={`/icons/footer/${s.icon}`} width={32} height={32} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default MainFooter;