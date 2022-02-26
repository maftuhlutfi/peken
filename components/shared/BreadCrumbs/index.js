import Link from "next/link";

const BreadCrumbs = ({ links }) => {
    return (
        <div className="flex flex-wrap items-center w-1/2">
            {links.map((l, i) =>
                <div key={i}>
                    <p className={`${i == 0 ? 'hidden' : ''} my-2`}>/</p>
                    <Link href={l.href}>
                        <a className={`${i == links.length - 1 ? 'font-bold text-text-primary' : 'text-text-secondary'}`}>{l.text}</a>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default BreadCrumbs;