import MainFooter from "../components/MainFooter";
import MainHeader from "../components/shared/MainHeader";

const MainLayout = ({children}) => {
    return (
        <>
            <MainHeader />
            <div className="relative w-full min-h-screen">
                {children}
            </div>
            <MainFooter />
        </>
    );
}
 
export default MainLayout;