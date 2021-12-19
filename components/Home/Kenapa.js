import Image from "next/image";
import Button from "../shared/Button";
import Section from "../shared/Section";
import SectionTitle from "../shared/Section/SectionTitle";

const kenapaData = [
    {
        icon: '/icons/kenapa/denah.svg',
        title: 'Denah',
        description: 'Peken menyediakan fitur denah bagi para pendatang (orang merantau) dan bagi anak muda yang belum familiar dengan pasar tradisional.'
    },
    {
        icon: '/icons/kenapa/kerjasama.svg',
        title: 'Kerjasama',
        description: 'Peken berkomitmen melakukan kerjasama dan pendampingan dengan para pedagang di pasar tradisional serta para pedagang keliling.'
    },
    {
        icon: '/icons/kenapa/tawar.svg',
        title: 'Tawar Menawar',
        description: 'Peken berkomitmen tidak menghilangkan eksistensi dalam pasar tradisional yaitu tawar menawar saat melakukan proses transaksi di Peken.'
    }
]

const Kenapa = () => {
    return (
        <Section className='bg-light-yellow'>
            <div className="flex justify-center">
                <SectionTitle title='Kenapa Peken?' />
            </div>
            <div className="mt-20 grid gap-16 lg:grid-cols-3">
                {kenapaData.map((d, i) => 
                    <div key={i*Math.random()} className="bg-white rounded-2xl p-8">
                        <Image src={d.icon} alt={d.title} width={48} height={48} />
                        <h5 className="text-xl font-bold my-4 lg:my-6">
                            {d.title}
                        </h5>
                        <p className="leading-normal text-text-secondary">{d.description}</p>
                    </div>
                )}
            </div>
        </Section>
    );
}
 
export default Kenapa;