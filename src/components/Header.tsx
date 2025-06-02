import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-transparent py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://framerusercontent.com/images/aTSJjjLoEM1oRhknIQsds0DlVzc.png?scale-down-to=512" 
              alt="Readdy" 
              className="h-14 w-auto"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/blog" 
            className="font-manrope font-medium text-[rgb(51,51,51)] hover:text-black transition-colors"
          >
            Blog
          </a>
          <a 
            href="/pricing" 
            className="font-manrope font-medium text-[rgb(51,51,51)] hover:text-black transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="w-[150px] h-11 rounded-[28px] border-2 border-[rgb(34,34,34)] bg-transparent text-black font-manrope font-bold text-base hover:bg-gray-50"
          >
            Log in
          </Button>
          <Button
            className="w-[150px] h-11 rounded-[28px] border-2 border-[rgb(34,34,34)] bg-black text-white font-manrope font-bold text-base hover:bg-gray-900"
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}