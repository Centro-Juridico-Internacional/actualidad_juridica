import React from 'react';
import { Carousel } from 'antd';
import LayoutNews from '@/components/home/LayoutNews';
import DATA from '@/data/dataTest.json';

const Style = {
	height: '100%',
	width: '100%',
	margin: 'auto'
};

const App = () => {
	const lastItems = DATA.slice(-3).reverse(); // Últimos 3 elementos, en orden descendente

	return (
		<Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} style={Style} infinite={true}>
			{lastItems.map((item) => {
				const contentStyle = {
					width: '100%',
					height: '24rem',
					color: '#fff',
					backgroundImage: `url(${item.bgImg})`
				};

				return (
					<div key={item.id}>
						<div style={contentStyle} className="bg-start bg-cover bg-center bg-no-repeat">
							<LayoutNews
								name={`SecondaryNewsTwo-${item.id}`}
								category={item.category}
								title={item.title}
								imgPerson={item.imgPerson}
								namePerson={item.namePerson}
								description={item.description}
								date={item.date}
							/>
						</div>
					</div>
				);
			})}
		</Carousel>
	);
};

export default App;
