const SectionTitle = ({title, className}) => {
    return (
        <div className={`relative text-4xl font-bold text-text-primary inline-block`}>
            <div className="relative z-10">{title}</div>
            <div className="absolute bg-custom-yellow h-1.5 w-full bottom-1.5 left-5" />
        </div>
    );
}
 
export default SectionTitle;