import GradientIcon from "@/utils/gradient-icon";
import Link from "next/link";

export function NavItem({ href, icon: Icon, size, isSpecial, isActive, onClick, isToggle }) {
  const gradient = "bg-gradient-to-b from-gradientstart to-gradientend"
  
  if (isToggle) {
    return (
      <button onClick={onClick} className="flex justify-center">
        <GradientIcon isActive={isActive}>
          <Icon size={size} />
        </GradientIcon>
      </button>
    );
  }
  
  if (isSpecial) {
    return (
      <Link href={href} className="flex justify-center">
        <div className={`rounded-full p-1 flex items-center justify-center ${isActive ? "bg-black" : gradient}`}>
          {isActive ? (
            <GradientIcon>
              <Icon size={size}/>
            </GradientIcon>
          ) : (
            <Icon size={size} color="#fff" />
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="flex justify-center">
      <GradientIcon isActive={isActive}>
        <Icon size={size} />
      </GradientIcon>
    </Link>
  );
}