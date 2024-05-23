import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { Link } from "react-router-dom";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Form } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Falha ao listar os produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <Form.Group controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Pesquisar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form.Group>
            <Row>
                {filteredProducts.map((product) => (
                    <Col
                        key={product.id}
                        sm={6}
                        md={4}
                        lg={3}
                        className="d-flex justify-content-center"
                    >
                        <Link
                            to={`/product-details/${product.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <ProductCard product={product} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
