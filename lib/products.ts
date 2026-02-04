export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Activation price
    monthlyPrice: number;
    image: string;
    category: string;
    features: string[];
    target?: string;
    stripeLink?: string; // Direct Stripe Checkout Link
}

export const products: Product[] = [
    {
        id: 'basic',
        name: 'PLAN BÁSICO',
        description: 'WhatsApp automático 24/7',
        price: 2250,
        monthlyPrice: 1100,
        image: '/images/start.jpg', // Keeping placeholder
        category: 'Basic',
        features: [
            '✔ WhatsApp automático 24/7',
            '✔ Respuestas inmediatas',
            '✔ Captura de datos básica',
            '✔ Atención ininterrumpida'
        ],
        target: '👉 Para empezar a automatizar',
        stripeLink: 'https://buy.stripe.com/bJefZh4V0c1d8ewdX67N603'
    },
    {
        id: 'advanced',
        name: 'PLAN AVANZADO',
        description: 'WhatsApp + llamadas + agenda',
        price: 7600,
        monthlyPrice: 4000,
        image: '/images/pro.jpg', // Keeping placeholder
        category: 'Most Popular',
        features: [
            '✔ Todo lo del plan Básico',
            '✔ Contestación de llamadas IA',
            '✔ Agenda de citas automática',
            '✔ Gestión avanzada de leads'
        ],
        target: '👉 La solución completa',
        stripeLink: 'https://buy.stripe.com/28E4gz0EK6GT0M4dX67N604'
    }
];
