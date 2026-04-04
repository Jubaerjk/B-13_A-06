
import Card from '../card/Card'
const AllProduct = ({ productCard, setCartNav }) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto'>
                {productCard.map((productCard, id) => (
                    <Card key={id} productCard={productCard} setCartNav={setCartNav} />
                ))}
            </div>
        </div>
    )
}

export default AllProduct;