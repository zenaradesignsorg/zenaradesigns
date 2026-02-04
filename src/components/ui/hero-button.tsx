import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

export interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ asChild = false, children, showIcon = false, size = "md", className, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const sizeClasses = {
      sm: "px-6 py-3 sm:px-7 sm:py-4 text-base sm:text-lg",
      md: "px-8 py-4 sm:px-9 sm:py-5 text-lg sm:text-xl",
      lg: "px-10 py-6 sm:px-12 sm:py-7 text-xl sm:text-2xl",
    };

    return (
      <div
        className={cn(
          "relative inline-block rounded-full p-[4px] transition-all duration-300 group",
          isHovered ? "bg-purple-500" : "bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          ref={ref}
          asChild={asChild}
          className={cn(
            "bg-black hover:bg-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold w-full",
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {asChild ? (
            children
          ) : (
            <span className="flex items-center justify-center">
              {children}
              {showIcon && (
                <Rocket className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125" />
              )}
            </span>
          )}
        </Button>
      </div>
    );
  }
);
HeroButton.displayName = "HeroButton";

export { HeroButton };
