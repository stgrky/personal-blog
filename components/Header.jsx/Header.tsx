import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories: any) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            {" "}
            <span className="cursor-pointer font-bold text-5xl text-yellow-300">
              Grant's Blog
            </span>{" "}
          </Link>
        </div>
        <div className="md:float-left md:contents">
          <Link href={`/music/`}>
            <span className="md:float-right mt-2 align-middle text-yellow-200 ml-4 font-semibold text-3xl cursor-pointer">
              GgatorFlavorR
            </span>
          </Link>
        </div>
        <div className="md:float-left md:contents">
          <Link href={`/about/`}>
            <span className="md:float-right mt-2 align-middle text-red-100 ml-4 font-semibold text-3xl cursor-pointer">
              GrantTheHuman
            </span>
          </Link>
        </div>{" "}
        <div className="md:float-left md:contents">
          <Link href={`/devportfolio/`}>
            <span className="md:float-right mt-2 align-middle text-blue-200 ml-4 font-semibold text-3xl cursor-pointer">
              GrantTheDev
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
