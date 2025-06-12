import React from 'react';

interface NewsComponentProps {
	name: string;
	category: string;
	title: string;
	description: string;
	imgPerson: string;
	namePerson: string;
	date: string;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
	name,
	category,
	title,
	description,
	imgPerson,
	namePerson,
	date
}) => {
	return (
		<div className="flex size-full items-end bg-gradient-to-t from-black to-black/40">
			<div className="flex h-full flex-col items-start justify-between gap-y-1 p-5 md:h-[60%]">
				<h3 id={`category${name}`} className="text-base">
					{category}
				</h3>
				<h1 id={`title${name}`} className="text-2xl font-bold">
					{title}
				</h1>
				<h4 id={`description${name}`} className="text-sm">
					{description}
				</h4>

				<div id={`info${name}`} className="flex w-full justify-start gap-x-2 text-xs">
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
