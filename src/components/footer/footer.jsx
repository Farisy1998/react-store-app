const Footer = () => {
    const date = new Date();

    return (<h3 className="footer text-center mb-2">Store App - {date.getFullYear()}</h3> );
}
 
export default Footer;