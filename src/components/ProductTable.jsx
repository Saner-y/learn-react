import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

const PRODUCTS = [
    { category: "Meyveler", price: "₺10", stocked: true, name: "Elma" },
    { category: "Meyveler", price: "₺10", stocked: true, name: "Mandalina" },
    { category: "Meyveler", price: "₺20", stocked: false, name: "Portakal" },
    { category: "Sebzeler", price: "₺20", stocked: true, name: "Ispanak" },
    { category: "Sebzeler", price: "₺40", stocked: false, name: "Kabak" },
    { category: "Sebzeler", price: "₺10", stocked: true, name: "Börülce" }
];

export default function ProductTable() {
    const rows = [];
    let lastCategory = null;

    PRODUCTS.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>İsim</th>
                <th>Fiyat</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}