
const Banner = () => {
    return (
        <div className="rounded-b-lg mb-10">
            {/* Text section  */}
            <div className="flex flex-col justify-start items-center space-y-8 h-[500px] border-2 border-amber-400">
                <h1 className="text-5xl mt-4">
                    Upgrade Your Tech Accessorize with
                    <br />
                    Gadget Heaven Accessories
                </h1>
                <p className="text-xl">
                    Explore the latest gadgets that will take your experience to
                    <br />
                    the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn btn-success rounded-full">Shop Now</button>
            </div>

            {/* Card Box */}
            <div className="flex justify-center items-center border-2 border-fuchsia-400 -mt-40">
                <div className="max-w-3xl border-2 border-amber-300 p-3 rounded-3xl bg-gray-300">
                    <img className="rounded-3xl w-full" src="/images/banner.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;