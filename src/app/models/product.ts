export interface Product {
    id: string;
    title: string;
    slug: string
    price: number;
    images: string[];
    description: string;
    category: Category;
    
}

export interface Category {
    id: string;
    name: string;
}


export interface CreateProductDTO extends Omit<Product, 'id' | 'category'| 'slug'> {
    categoryId: number;
}

