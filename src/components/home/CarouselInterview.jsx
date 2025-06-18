import React from 'react';
import { Carousel } from 'antd';
import YouTubeLite from '@/components/home/global/YouTubeLite';
const INTERVIEW = [
	{
		title: 'Entrevista actualidad jurídica - Viceministro de Empleo y Pensiones',
		id: 'qOx1fqp8N-Y'
	},
	{
		title: 'Entrevista Actualidad Jurídica Empresarial - Nyce',
		id: 'vlER3hKzQEA'
	},
	{
		title: 'Entrevista actualidad jurídica 2024 08 14 09 35 GMT 5 1',
		id: 'T5KLEfQkrig'
	},
	{
		title: 'Entrevista actualidad jurídica',
		id: 'hHdFApS3284'
	},
	{
		title: 'Entrevista actualidad jurídica con Fincomercio',
		id: 'ipCMS2r8_dE'
	},
	{
		title: 'Entrevista actualidad jurídica con ElEMPLEO.COM',
		id: 'jupbiBovLT0'
	},
	{
		title:
			'Entrevista con líder de la escuela de formación para el trabajo y el desarrollo humano en compensar',
		id: '9MauNt-PkE8'
	},
	{
		title: 'Actualidad jurídica empresarial - entrevista con empresaria colombiana',
		id: 'aTn8GW3jsEQ'
	}
];

const Style = {
	height: '100%',
	width: '100%',
	margin: 'auto'
};

const App = () => {
	const lastItems = INTERVIEW.slice(-8).reverse(); // Últimos 3 elementos, en orden descendente

	return (
		<Carousel
			autoplay={{ dotDuration: true }}
			autoplaySpeed={8000}
			style={Style}
			infinite={true}
			arrows
		>
			{lastItems.map((item) => {
				const contentStyle = {
					color: '#fff'
				};

				return (
					<div key={item.id}>
						<div
							style={contentStyle}
							className="m-auto flex h-full w-[95%] items-center justify-center"
						>
							<YouTubeLite videoid={item.id} title={item.title} client:load />
						</div>
					</div>
				);
			})}
		</Carousel>
	);
};

export default App;
