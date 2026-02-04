import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { CartProvider } from '@/lib/cart-context';
import { CartSidebar } from '@/components/CartSidebar';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AIVORA | El Empleado Digital',
    description: 'Automatiza tu negocio con empleados inteligentes de IA',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={cn(outfit.className, "min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden")}>
                <CartProvider>
                    <div className="relative flex min-h-screen flex-col">
                        <CartSidebar />
                        {children}
                    </div>
                </CartProvider>
            </body>
        </html>
    );
}
