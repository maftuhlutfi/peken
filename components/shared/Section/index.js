const Section = ({className, children}) => {
    return (
        <div className={`w-full px-4 py-20 lg:py-28 ${className}`}>
            <div className="max-w-7xl relative mx-auto">
                {children}
            </div>
        </div>
    );
}
 
export default Section;