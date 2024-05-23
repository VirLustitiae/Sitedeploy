import api from "./api";

const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

const getProductById = async (id: string | null) => {
    const response = await api.get("/products/" + id);
    return response.data;
};

export { getProducts, getProductById };
