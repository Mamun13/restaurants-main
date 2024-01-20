import React from "react";
import { Button } from "antd";
// import { BackIcon } from "@/components/icons/Icons";

const NotFound = () => {
  const refresh = () => (window.location.href = "/");

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center prose prose-headings:mb-2 prose-p:my-0">
            <p className="text-2xl font-medium text-blue-500 dark:text-blue-400">
              404 Error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              We searched high and low, but couldn’t find what you’re looking
              for.Let’s find a better place for you to go.
            </p>

            <div className="flex items-center w-full mt-5 gap-x-3 shrink-0">
              <Button
                type="primary"
                className="bg-blue-500 w-1/2 mx-auto rounded"
                onClick={refresh}
              >
                {/* <BackIcon width={20} height={20} /> */}
                Go To Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
