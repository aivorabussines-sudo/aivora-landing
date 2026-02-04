export function Logo({ className = "w-auto h-8", iconClassName = "w-8 h-8" }: { className?: string, iconClassName?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Stylized Lines Icon */}
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={iconClassName}
            >
                {/* Four distinct stylized lines with varying widths/curves to match brand */}
                <path d="M4 10C4 7.79086 5.79086 6 8 6H32C34.2091 6 36 7.79086 36 10V10C36 12.2091 34.2091 14 32 14H8C5.79086 14 4 12.2091 4 10V10Z" fill="currentColor" className="text-white" />
                <path d="M4 18C4 15.7909 5.79086 14 8 14H36C38.2091 14 40 15.7909 40 18V18C40 20.2091 38.2091 22 36 22H8C5.79086 22 4 20.2091 4 18V18Z" fill="currentColor" className="text-white/90" />
                <path d="M4 26C4 23.7909 5.79086 22 8 22H32C34.2091 22 36 23.7909 36 26V26C36 28.2091 34.2091 30 32 30H8C5.79086 30 4 28.2091 4 26V26Z" fill="currentColor" className="text-white/80" />
                <path d="M4 34C4 31.7909 5.79086 30 8 30H24C26.2091 30 28 31.7909 28 34V34C28 36.2091 26.2091 38 24 38H8C5.79086 38 4 36.2091 4 34V34Z" fill="currentColor" className="text-white/70" />
            </svg>

            {/* Text Logo */}
            <span className="font-bold text-2xl tracking-tight text-white">
                AIVORA
            </span>
        </div>
    );
}

// Background Pattern Component using the lines motif
export function BackgroundPattern() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="lines-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50h100" stroke="currentColor" strokeWidth="2" fill="none" className="text-white" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#lines-pattern)" />
            </svg>

            {/* Giant decorative lines */}
            <div className="absolute top-20 -right-20 w-[500px] h-[500px] opacity-20 rotate-12">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-primary">
                    <path d="M0 20h100M0 40h80M0 60h90M0 80h60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
}
