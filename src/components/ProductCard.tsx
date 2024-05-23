import { Button, Card } from "react-bootstrap";
import { Product } from "../types";
import '../components/css/ProductCard.css'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="mt-5 border-0 product-card" style={{ width: "15rem" }}>
            <div className="image-container">
                <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                />
            </div>
            <Card.Body className="card-body">
                <div className="product-name-container">
                    <Card.Text className="product-name">
                        {product.name}
                    </Card.Text>
                </div>
                <Card.Title className="product-price">
                    R$ {product.price}
                </Card.Title>
                <Button variant="outline-secondary">
                    Adicionar ao Carrinho
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
