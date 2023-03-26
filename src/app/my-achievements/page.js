import PageHeader from "@/components/page-header/PageHeader";
import CustomTabs from "@/components/custom-tabs/CustomTabs";


const MyComponent = () => {
    return (
        <>
            <PageHeader>Мои достижения</PageHeader>
            <div className="container">
                <CustomTabs/>
            </div>
        </>
    );
};

export default MyComponent;
