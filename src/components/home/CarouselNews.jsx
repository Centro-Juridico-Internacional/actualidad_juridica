import React from 'react';
import { Carousel } from 'antd';
import LayoutNews from './LayoutNews';
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
					color: '#fff',
					backgroundImage: `url(${item.bgImg})`
				};

				return (
					<div key={item.id}>
						<h3
							style={contentStyle}
							className="bg-start h-[18rem] bg-cover bg-no-repeat md:h-[26rem]"
						>
							<LayoutNews
								name={`SecondaryNewsTwo-${item.id}`}
								category={item.category}
								title={item.title}
								imgPerson={item.imgPerson}
								namePerson={item.namePerson}
								description={item.description}
								date={item.date}
							/>
						</h3>
					</div>
				);
			})}
		</Carousel>
	);
};

export default App;
