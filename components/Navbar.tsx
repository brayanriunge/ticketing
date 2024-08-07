"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/ticket.jpeg";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const flexStyles = "flex items-center justify-between ";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${flexStyles} w-full top-0 z-30 fixed py-2  bg-purple-200 shadow`}
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <div className={`${flexStyles} w-full gap-10`}>
            {/**left side */}
            {/**put logo here  */}
            <Image
              src={Logo}
              alt="logo"
              width={90}
              height={20}
              className="rounded-full"
            />
            <h2 className="font-bold text-red-500 text-3xl text-montserrat">
              eTicketing {""}
            </h2>

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full text-montserrat`}>
                <div
                  className={`${flexStyles} text-sm text-primary-gray-500  gap-8`}
                >
                  <Link legacyBehavior href={"/"}>
                    <a className="text-red-800 hover:text-red-600">Home</a>
                  </Link>
                  <Link legacyBehavior href={"/"}>
                    <a className="text-red-800 hover:text-red-600">Tickets</a>
                  </Link>
                  <Link legacyBehavior href="/">
                    <a className="text-red-800 hover:text-red-600">
                      Testimonies
                    </a>
                  </Link>

                  <Link legacyBehavior href="/dashboard">
                    <a className="text-red-800 hover:text-red-600">Dashboard</a>
                  </Link>
                  <Link legacyBehavior href="/#contactus">
                    <a className="text-red-800 hover:text-red-600">
                      Contact Us
                    </a>
                  </Link>
                </div>
                {/** left side */}
                {/* {status === "authenticated" && data !== null && (
                <>
                 <p>Welcome {data.user.name}</p>
                </>
               )} */}
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-gray-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="h-6 w-6 " />
              </button>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 text-montserrat drop-shadow-xl">
                {/**close icon */}
                <div className="p-4 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6  " />
                  </button>
                </div>
                {/**menu items */}
                <div className=" flex flex-col gap-10 items-center text-justify text-2xl ">
                  <Link legacyBehavior href={"/"}>
                    <a className="text-red-800 hover:text-red-600">Home</a>
                  </Link>
                  <Link legacyBehavior href={"/assessment"}>
                    <a className="text-red-800 hover:text-red-600">
                      Testimonies
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/articles"}>
                    <a className="text-red-800 hover:text-red-600">Dashboard</a>
                  </Link>
                  <Link legacyBehavior href={"/community"}>
                    <a className="text-red-800 hover:text-red-600"></a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
