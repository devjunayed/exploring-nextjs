import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Page"
}

const AboutPage = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1
        className={`${styles.heading} absolute top-[4rem] bg-slate-800 w-full text-center`}
      >
        About Page
      </h1>
      <div className="w-full text-center mx-auto mt-14">
        <h1 className=" text-2xl my-2">Regular image:</h1>
        <img
          className="mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnG-u9YXa8jyCrQRZsh5STG6OXyWqW2alZA&s"
          alt=""
        />
        <h1 className=" text-2xl my-2">Nextjs image:</h1>
        <Image
          className="mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnG-u9YXa8jyCrQRZsh5STG6OXyWqW2alZA&s"
          alt="dd"
          width={500}
          height={5000}
        />
      </div>
    </div>
  );
};

export default AboutPage;
