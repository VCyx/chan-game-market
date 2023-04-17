import React, { FC } from "react";

const Home: FC = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl text-center font-bold co">
        Welcome to Cyx's S.C.U.M. game!
      </h1>
      <h2 className="text-2xl text-center font-bold co">
        Please connect wallet to start
      </h2>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Connect Wallet
      </button>
    </section>
  );
};

export default Home;
