const Button = ({type, outlined, className, children}) => {
    const getStyle = () => {
        let typeStyle = {
            primary: 'bg-linear-yellow text-white'
        }
        let outlinedStyle = {
            primary: 'border-1 border-linear-yellow text-custom-yellow'
        }

        return outlined ? outlinedStyle[type] : typeStyle[type]
    }

    return (
        <button className={`text-lg md:text-2xl py-3 md:py-4 px-6 rounded-lg flex items-center ${getStyle()} ${className}`}>
            {children}
        </button>
    );
}
 
export default Button;