import "./ResultsItem.scss";
// types
import { TypeResultsItem } from "../../../types/ResultType";

function ResultsItem({
	title,
	photo,
	price,
	currency,
	status,
	url,
}: TypeResultsItem) {
	return (
		<div className="main__results_item">
			<div className="main__results_item-image">
				<a href={url} target="_blank">
					<img src={photo.thumbnails[0].url} alt="pirma-foto" loading="lazy" />
				</a>
			</div>
			<div className="main__results_item-description">
				<p className="main__results_item-title">{`Pavadinimas: ${title}`}</p>
				<p className="main__results_item-price">
					{`Kaina: ${price} ${currency}`}
				</p>
				<p className="main__results_item-status">{`Būklė: ${status}`}</p>
				<p className="main__results_item-url">
					Peržiūrėti skelbimą
					<a href={url} target="_blank">
						{` vinted.lt `}
					</a>
					puslapyje.
				</p>
			</div>
		</div>
	);
}

export { ResultsItem };
