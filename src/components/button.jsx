export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={
        className +
        " bg-neutral-900 rounded-full text-neutral-100 font-bold py-2 active:scale-[0.97] hover:bg-neutral-800 px-6"
      }
      {...rest}
    >
      {children}
    </button>
  );
}
