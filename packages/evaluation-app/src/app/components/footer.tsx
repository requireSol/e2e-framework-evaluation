export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-300 bg-white py-4 dark:bg-gray-800">
      <div className="mx-auto flex max-w-[75rem] justify-between text-sm">
        <a
          href="https://www.linkedin.com/in/enam-solaimani/"
          target="_blank"
          className="mt-2 flex items-center gap-2 text-center text-[0.8125rem] font-medium text-[#131316] sm:text-left dark:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{ fill: "#e42b2b", fillRule: "evenodd" }}
              d="M100,160.09C89.29,139.22,80.63,133.91,62.74,122c-19.05-12.69-34.5-33.32-27.5-55.6C44.67,36.35,82.83,30.45,100,56c17.17-25.59,55.33-19.69,64.76,10.35,7,22.28-8.45,42.91-27.5,55.6C119.37,133.91,110.71,139.22,100,160.09Z"
            />
          </svg>
          Enam Solaimani
          <span className="text-[#5E5F6E] dark:text-gray-300">
            {new Date().getFullYear()}
          </span>
        </a>
      </div>
    </footer>
  );
}
