import PageHeader from "@/components/PageHeader/PageHeader";
import CustomTabs from "@/components/CustomTabs/CustomTabs";


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
