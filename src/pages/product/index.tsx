import PageLayout from "../../layouts/page"
import { useParams } from "react-router";
import { getProductById } from "../../fixture/data";


const ProductPage = () =>{
    let { id } = useParams();

    const product = getProductById(Number(id));

  return (
    <PageLayout title="Сторінка Продукту">
        <h2>{product.name}</h2>
    </PageLayout>
  )
}

export default ProductPage
