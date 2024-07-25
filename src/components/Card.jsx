export default function Card({ children, className }) {
  return (
    <>
      <div className="max-w-full">
        <div className={`border-2 p-6 rounded-2xl ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
}
