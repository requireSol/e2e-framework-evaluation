interface Card {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export function LearnMore({ cards }: { cards: Card[] }) {
  return (
    <div
      className="relative bg-white px-4 md:px-0 dark:bg-gray-900"
      id="features"
    >
      <div className="mx-auto grid w-full max-w-[75rem] grid-cols-1 gap-8 py-12 sm:grid-cols-2 sm:py-16 md:grid-cols-4 md:pb-24 md:pt-16">
        <div className="text-center md:text-left">
          <span className="text-[0.8125rem]/5 font-medium text-[#6C47FF] dark:text-[#B3A1FF]">
            What&rsquo;s next
          </span>
          <h2 className="mb-3 mt-2 text-xl/[1.625rem] font-semibold tracking-tight text-[#131316] dark:text-gray-300">
            You can learn more from the used stack
          </h2>
          <p className="text-[0.8125rem]/5 text-[#5E5F6E] dark:text-gray-300">
            Functionality like user sign-in, sign-up, account management and
            simple action Features to validate E2E Testing Frameworks.
          </p>
        </div>
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            target="_blank"
            className="flex flex-col overflow-hidden rounded-lg border border-[#F2F2F4] dark:border-gray-700"
          >
            <div className="flex-1 space-y-1 bg-[#FAFAFB] px-4 py-3 dark:bg-gray-800">
              <h3 className="text-sm font-medium tracking-tight text-[#131316] dark:text-gray-200">
                {card.title}
              </h3>
              <p className="text-[0.8125rem]/5 text-[#5E5F6E] dark:text-gray-300">
                {card.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 border-t border-[#EDEDF0] bg-[#F5F5F7] px-4 py-2 text-[0.8125rem]/5 font-medium text-[#131316] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              {card.linkText}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="3"
                  fill="#EEEEF0"
                  className="dark:fill-gray-700"
                />
                <path
                  d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25"
                  stroke="#9394A1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-gray-300"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
