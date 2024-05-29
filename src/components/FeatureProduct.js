import { useProductContext } from './context/ProductContext'
import Product from './Product';

const FeatureProduct = () => {
  const { isLoading, featureProducts, products } = useProductContext();
  // console.log(`featureProducts`, featureProducts);
  // console.log(`products`, products);

  if (isLoading) {
    return <div>........isLoading</div>
  }

  return (
    <>
      <div>
        <h1>Our Feature Product</h1>
        <div className='d-flex justify-content-between gap-3'>
          {
            products.slice(0, 3).map((curElem) => {
              return <Product key={curElem.id} {...curElem} />
            })
          }
        </div>
      </div>

    </>
  )
}

export default FeatureProduct