
const ErrorPage = () => {
    return (
        <div className="md:pl-[70px] relative bg-gray-200 h-screen w-full md:flex">
            <div className=" h-screen bg-gray-200  flex flex-col justify-center items-center md:items-start lg:w-full px-2.5 md:px-0">
                <h3 className="text-black text-8xl md:text-[200px] font-[800px] font-poppins">
                    404
                </h3>
                <h3 className="text-black text-3xl xl:text-[57px] font-semibold font-poppins whitespace-nowrap">
                    Page Not Found
                </h3>
                <h3 className="text-black text-2xl  xl:text-[32px] font-[500px] font-poppins xl:w-[651px] mt-10 mb-[152px] text-center md:text-start">
                    Sorry, we couldn’t find the page you ‘re looking for
                </h3>
            </div>
        </div>
    );
};

export default ErrorPage;