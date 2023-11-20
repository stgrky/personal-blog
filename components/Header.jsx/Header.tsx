import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getCategories().then((newCategories: any) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            {" "}
            <span className="cursor-pointer font-bold text-5xl text-black">
              Grant's Blog
            </span>{" "}
          </Link>
        </div>
        {/* <div className="md:float-left md:contents">
          <Link href={`/music/`}>
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold text-3xl cursor-pointer">
              GgatorFlavorR
            </span>
          </Link>
        </div> */}
        <div className="lg:hidden md:contents">
          <button
            onClick={handleClick}
            className="float-right flex flex-col justify-center items-center py-4"
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
          <div className={`float-left ${isOpen ? "inline" : "hidden"}`}>
            <div className={`w-full`}>
              <Link href={`/about/`}>
                <span
                  className={`md:float-right mt-2 align-middle text-black ml-4 font-semibold text-3xl cursor-pointer`}
                >
                  GrantTheHuman
                </span>
              </Link>
            </div>{" "}
            <div>
              <Link href={`/devportfolio/`}>
                <span
                  className={`md:float-right mt-2 align-middle text-black ml-4 font-semibold text-3xl cursor-pointer`}
                >
                  GrantThePro
                </span>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="hidden lg:inline">
          <Link href={`/about/`}>
            <span
              className={`md:float-right mt-2 align-middle text-black ml-4 font-semibold text-3xl cursor-pointer`}
            >
              GrantTheHuman
            </span>
          </Link>
        </div>{" "}
        <div className="hidden lg:inline">
          <Link href={`/devportfolio/`}>
            <span
              className={`md:float-right mt-2 align-middle text-black ml-4 font-semibold text-3xl cursor-pointer`}
            >
              GrantThePro
            </span>
          </Link>
        </div>{" "}
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((cat: any) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {cat.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
