import React from 'react';
import { Carousel } from 'antd';
import NewsComponent from './NewsComponentSecont';
import DATA from '@/data/dataTest.json';
const contentStyle = {
	width: '100%',
	color: '#fff',
	backgroundImage: `url(${DATA[0].bgImg})`
};
const Style = {
	height: '100%',
	width: '100%',
	margin: 'auto'
};
const App = () => (
	<Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} style={Style} infinite={true}>
		<div>
			<h3 style={contentStyle} className="bg-start h-[18rem] bg-cover bg-no-repeat md:h-[26rem]">
				<NewsComponent
					name="SecondaryNewsTwo"
					category={DATA[0].category}
					title={DATA[0].title}
					imgPerson={DATA[0].imgPerson}
					namePerson={DATA[0].namePerson}
					description={DATA[0].description}
					date={DATA[0].date}
				/>
			</h3>
		</div>
		<div>
			<h3 style={contentStyle} className="bg-start h-[18rem] bg-cover bg-no-repeat md:h-[26rem]">
				<NewsComponent
					name="SecondaryNewsTwo"
					category={DATA[1].category}
					title={DATA[1].title}
					imgPerson={DATA[1].imgPerson}
					namePerson={DATA[1].namePerson}
					description={DATA[1].description}
					date={DATA[1].date}
				/>
			</h3>
		</div>
		<div>
			<h3 style={contentStyle} className="bg-start h-[18rem] bg-cover bg-no-repeat md:h-[26rem]">
				<NewsComponent
					name="SecondaryNewsTwo"
					category={DATA[2].category}
					title={DATA[2].title}
					imgPerson={DATA[2].imgPerson}
					namePerson={DATA[2].namePerson}
					description={DATA[2].description}
					date={DATA[2].date}
				/>
			</h3>
		</div>
	</Carousel>
);
export default App;
