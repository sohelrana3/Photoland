import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Headertop = () => {
    return (
        <section className="bg-primary">
            <div className="container mx-auto py-1 flex justify-between">
                <div className="flex gap-x-3">
                    <div className="flex  items-center gap-x-2 ">
                        <BsFillTelephoneFill className="text-white font-normal text-xs font-open" />
                        <span className="text-white font-normal text-xs font-open">
                            +88012 3456 7894
                        </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillTelephoneFill className="text-white font-normal text-xs font-open" />
                        <span className="text-white font-normal text-xs font-open">
                            +88012 3456 7894
                        </span>
                    </div>
                </div>

                <div className="flex">
                    <ul>
                        <Link to='#'>
                            <li className="text-white">Theme FAQ"s</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Headertop;
