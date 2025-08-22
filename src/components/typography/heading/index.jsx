export default function Heading({ className = "", children, level}) {
  const GRADIENT = "bg-gradient-to-b from-gradientstart to-gradientend bg-clip-text text-transparent"

  switch (level) {
    case 2:
      return <h2 className={`font-bold text-2xl ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`font-bold text-2xl text-white ${className}`}>{children}</h3>;
    default:
      return <h1 className={`${GRADIENT} font-bold text-2xl ${className}`}>{children}</h1>
  }
}