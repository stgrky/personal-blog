import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../../services";
import { init } from "commandbar";
if (typeof window !== "undefined") {
  init("52be0be5");
}

const Header = () => {
  const [categories, setCategories] = useState([]);
  // if (typeof window !== "undefined") {
  //   window.CommandBar.addRecords(
  //     "users",
  //     [
  //       { name: "Jane", id: 1 },
  //       { name: "Jill", id: 2 },
  //       { name: "Jack", id: 3 },
  //     ],
  //     {
  //       labelKey: "name",
  //     }
  //   );

  //   /// Part 1: types ///
  //   type CustomComponent = {
  //     mount: (node: HTMLElement) => CustomComponentInstance;
  //   };

  //   type CustomComponentInstance = {
  //     render: (data: { name: string }) => void;
  //     unmount: () => void;
  //   };

  //   /// Part 2: examples ///
  //   // Example with `addRecords`

  //   window.CommandBar.addComponent(
  //     "record-preview-with-image",
  //     "Basic Record Preview with an image",
  //     {
  //       mount: (elem) => ({
  //         render: (data) => {
  //           elem.innerHTML = "<div>" + "<h3>" + data;
  //         },
  //         unmount: () => {
  //           // ... clean up any timers, event handlers, etc. ...
  //         },
  //       }),
  //     }
  //   );

  //   window.CommandBar.addRecords(
  //     "pets",
  //     [
  //       {
  //         label: "Fido",
  //         id: "foo42",
  //         photo: "https://www.example.com/img/fido.jpg",
  //       },
  //       {
  //         label: "Buster",
  //         id: "bar43",
  //         photo: "https://www.example.com/img/buster.jpg",
  //       },
  //       {
  //         label: "Brutus",
  //         id: "baz44",
  //         photo: "https://www.example.com/img/brutus.jpg",
  //       },
  //     ],
  //     { detail: { type: "component", value: "record-preview-with-image" } }
  //   );
  //   window.CommandBar.addRecordAction("users", {
  //     text: "Open Profile",
  //     name: "open_profile",
  //     template: {
  //       type: "link",
  //       value: "/profile/{{record.id}}",
  //       operation: "self", // how should the page open
  //     },
  //   });

  //   // Callback command
  //   window.CommandBar.addRecordAction("users", {
  //     text: "Message",
  //     name: "message",
  //     template: {
  //       type: "callback",
  //       value: "messageUser",
  //     },
  //   });

  //   // Wait for addRecordAction to complete
  //   // await window.CommandBar.addRecordAction();
  // }
  useEffect(() => {
    getCategories().then((newCategories: any) => setCategories(newCategories));
  }, []);

  const trackRecordNudge = (id: string) => window.CommandBar.trackEvent(id, {});

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
        <div className="md:float-left block">
          <button onClick={() => trackRecordNudge("12345")}>
            {" "}
            <span className="cursor-pointer font-bold text-1 text-green-300">
              Click button for Nudge Example
            </span>{" "}
          </button>
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
