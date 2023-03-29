const PageHeader = ({children, small}) => {
    return (
        <header className={`page-header ${small && `page-header--small`}`}><div>{children}</div></header>
    );
};

export default PageHeader;
