import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="rounded-b-lg mb-10">
            {/* Text section  */}
            <div className="flex flex-col justify-start items-center space-y-8 h-[500px] bg-customPurple bg-opacity-50 text-white rounded-b-3xl">
                <h1 className="text-5xl mt-4 text-center font-bold">
                    Upgrade Your Tech Accessorize with
                    <br />
                    Gadget Heaven Accessories
                </h1>
                <p className="text-2xl text-center">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <Link
                    to="/listedCart"
                    className="btn rounded-full font-semibold bg-white px-5 text-xl text-customPurple border-none"
                >
                    Shop Now
                </Link>
            </div>

            {/* Card Box */}
            <div className="flex justify-center items-center -mt-40">
                <div className="max-w-4xl p-3 rounded-3xl overflow-hidden bg-gray-200 shadow-lg">
                    <img className="rounded-3xl w-full" src="/images/banner.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;