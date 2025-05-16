import { NavLink } from "react-router";

const Post = () => {
    return (
        <NavLink
            to="/"
            className="flex py-4 px-2 border-2 rounded-xl my-4 gap-2 cursor-pointer"
        >
            <div className="flex flex-col items-center w-16 h-16 rounded-full my-2">
                <img
                    src="svg/avatar.svg"
                    alt="User avatar"
                    className="rounded-full"
                />
            </div>
            <div>
                <div className="flex flex-col mb-2">
                    <h3 className="text-md font-semibold">
                        Tips för att minska kattens stress?
                    </h3>
                    <div className="flex gap-2 mb-2 justify-between">
                        <p className="text-xs underline">Heidi</p>
                        {/* <p className="text-xs">-</p> */}
                        <p className="text-xs italic">2h sedan</p>
                        {/* <p className="text-xs">-</p> */}
                        <div className="flex gap-1 items-center">
                            <img
                                src="images/square.png"
                                alt="Square icon"
                                className="w-2 h-2"
                            />
                            <p className="text-xs">Kattliv deluxe</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 mb-2">
                        <div className="text-xs bg-maize-800 px-1 rounded-sm border-1">
                            kattlåda
                        </div>
                        <p className="text-xs bg-brilliant_rose-800 px-1 rounded-sm border-1">
                            beteende
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-2 items-center">
                            <img
                                src="images/eye.png"
                                alt="Seen icon"
                                className="w-5 h-5"
                            />
                            <p className="text-sm">57</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img
                                src="images/message.png"
                                alt="Seen icon"
                                className="w-4 h-4"
                            />
                            <p className="text-sm">10</p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Post;
