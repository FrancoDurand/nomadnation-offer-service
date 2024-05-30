interface IOffer {
    id?: string | null;
    destination: string;
    price: number;
    description: string;
    images: string[];
}

export default IOffer;