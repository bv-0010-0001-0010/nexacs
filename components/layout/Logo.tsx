export function Logo({
  iconClassName = "h-9 sm:h-11 md:h-12 lg:h-14 2xl:h-20",
  wordClassName = "h-4 sm:h-5 md:h-6 lg:h-7 2xl:h-10",
  subtitleClassName = "text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs 2xl:text-sm",
  gapClassName = "gap-2.5 sm:gap-3 lg:gap-4",
}: {
  iconClassName?: string;
  wordClassName?: string;
  subtitleClassName?: string;
  gapClassName?: string;
}) {
  return (
    <span className={`flex items-center ${gapClassName}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/nexa-icon-mark.png"
        alt=""
        width={700}
        height={636}
        className={`${iconClassName} w-auto shrink-0`}
      />
      <span className="flex flex-col justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/nexa-word-mark.png"
          alt=""
          width={1800}
          height={323}
          className={`${wordClassName} w-auto`}
        />
        <span className="mt-1.5 flex items-center gap-2 sm:mt-2">
          <span aria-hidden="true" className="h-px w-3 shrink-0 bg-amber-500 sm:w-4" />
          <span
            className={`font-display whitespace-nowrap text-concrete-300 uppercase ${subtitleClassName}`}
            style={{ letterSpacing: "0.28em" }}
          >
            Construction Solutions
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-amber-500" />
        </span>
      </span>
    </span>
  );
}
