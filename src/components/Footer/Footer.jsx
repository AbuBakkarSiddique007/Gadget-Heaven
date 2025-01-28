
const Footer = () => {
    return (
        <div className=" bg-white">
            <footer className="flex flex-col justify-center items-center mt-10 mb-4 pt-10 pb-10 space-y-3">
                <h1 className="text-3xl font-bold"> Gadget Heaven </h1>
                <p>
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </footer>
            <div className="border-b-1 border-gray-300 mt-4 mb-4"></div>
            <footer>
                <footer className="footer text-base-content p-10 flex justify-evenly items-center mb-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;