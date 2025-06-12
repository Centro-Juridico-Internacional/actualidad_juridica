import React from 'react';

interface NewsComponentProps {
	name: string;
	category: string;
	title: string;
	description?: string;
	imgPerson: string;
	namePerson: string;
	date: string;
	bgColor: boolean;
	textStyle: boolean;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
	name,
	category,
	title,
	description,
	imgPerson,
	namePerson,
	date,
	bgColor,
	textStyle
}) => {
	return (
		<div
			className={[
				'flex size-full flex-col px-8 pb-5',
				bgColor ? 'bg-gradient-to-t from-black to-black/40' : '',
				textStyle ? 'justify-end' : 'justify-center'
			]
				.filter(Boolean)
				.join(' ')}
		>
			<div
				className={['flex w-full flex-col justify-between', textStyle ? 'h-1/2' : 'h-full pt-5']
					.filter(Boolean)
					.join(' ')}
			>
				<h3 id={`category${name}`}>{category}</h3>
				<h1 id={`title${name}`} className="font-bold">
					{title}
				</h1>
				{description && (
					<h4 id={`description${name}`} className="text-sm">
						{description}
					</h4>
				)}
				<div id={`info${name}`} className="flex w-full items-center justify-start gap-x-2 text-xs">
					<img
						src={imgPerson}
						alt={`${namePerson} Foto`}
						id={`picturePerson${name}`}
						className="max-h-6 rounded-full"
					/>
					<strong id={`NamePerson${name}`}>{namePerson}</strong>
					<h4 id={`Date${name}`}>{date}</h4>
				</div>
			</div>
		</div>
	);
};

export default NewsComponent;
