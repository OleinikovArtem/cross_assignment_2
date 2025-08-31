export type Product = { 
    id: string; 
    title: string; 
    price: number; 
    imageUrl?: string 
};

export const products: Product[] = [
    { id: '1', title: 'Espresso', price: 2.50, imageUrl: '/images/espresso.jpg' },
    { id: '2', title: 'Cappuccino', price: 3.80, imageUrl: '/images/cappuccino.jpg' },
    { id: '3', title: 'Latte Macchiato', price: 4.20, imageUrl: '/images/latte.jpg' },
    { id: '4', title: 'Iced Coffee', price: 3.50, imageUrl: '/images/iced-coffee.jpg' },
    { id: '5', title: 'Croissant', price: 2.00, imageUrl: '/images/croissant.jpg' },
    { id: '6', title: 'Blueberry Muffin', price: 2.80, imageUrl: '/images/muffin.jpg' },
    { id: '7', title: 'Cheesecake Slice', price: 4.50, imageUrl: '/images/cheesecake.jpg' },
];

export const categories = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'popular', label: 'Popular' },
    { id: 'new', label: 'New' },
    { id: 'sale', label: 'Sale' },
];

export type CartItem = { 
    productId: string; 
    qty: number 
};

export const orders = [
    { 
        id: '4025S', 
        date: '30/08/2025', 
        description: 'Morning coffee order: Espresso + Croissant', 
        items: [
            { productId: '1', qty: 1 }, // Espresso
            { productId: '5', qty: 1 }, // Croissant
        ],
        total: 4.50 
    },
    { 
        id: '4025S-2', 
        date: '15/07/2025', 
        description: 'Afternoon break: Cappuccino + Blueberry Muffin', 
        items: [
            { productId: '2', qty: 1 }, // Cappuccino
            { productId: '6', qty: 1 }, // Muffin
        ],
        total: 6.60 
    },
    { 
        id: '4025S-3', 
        date: '02/06/2025', 
        description: 'Couple order: 2 Latte Macchiato + Cheesecake slice', 
        items: [
            { productId: '3', qty: 2 }, // Latte Macchiato
            { productId: '7', qty: 1 }, // Cheesecake
        ],
        total: 12.90 
    },
    { 
        id: '4025S-4', 
        date: '18/05/2025', 
        description: 'Summer refresh: Iced Coffee + Croissant', 
        items: [
            { productId: '4', qty: 1 }, // Iced Coffee
            { productId: '5', qty: 1 }, // Croissant
        ],
        total: 5.50 
    },
];
