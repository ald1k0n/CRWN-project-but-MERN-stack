import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../product-card/product-card';
import './shop.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<>
			{categoriesMap.map((product) => (
				<Fragment key={product._id}>
					<h2>{product.title}</h2>
					<div className='products-container'>
						{product.items.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>
				</Fragment>
			))}
		</>
		//130
	);
};

export default Shop;
