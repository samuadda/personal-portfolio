/** The صِدّيق موسى stacked wordmark — rendered live from Thmanyah Serif Display. */
export function Wordmark({ hero = false, className = "" }: { hero?: boolean; className?: string }) {
  return (
    <span
      className={`wordmark${hero ? " wordmark--hero" : ""}${className ? " " + className : ""}`}
      dir="rtl"
      aria-label="صِدّيق موسى"
    >
      <span className="s">صِــدّيــق</span>
      <span className="m">مــوســى</span>
    </span>
  );
}
