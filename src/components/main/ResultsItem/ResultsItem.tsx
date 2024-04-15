import "./ResultsItem.scss";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { useLocation } from "react-router-dom";

// types
import { resultsItemType } from "../../../types/resultsDataTypes";
import { dataContextType } from "../../../types/contextTypes";

function ResultsItem() {
	const { data, setData }: dataContextType = useContext(DataContext);
	const location = useLocation();

	// TODO location.state
	useEffect(() => {
		const sessionItem = location.search.slice(1);
		const sessionData = JSON.parse(sessionStorage.getItem(sessionItem));
		setData(sessionData);
		console.log(location);
	}, [location]);

	return (
		<div id="wrapwrap-items">
			{data?.map((item: resultsItemType) => (
				<div key={item?.id} className="main__results_item">
					<div className="main__results_item-image">
						<a href={item?.url} target="_blank">
							<img src={item?.photo} alt="pirma-foto" loading="lazy" />
						</a>
					</div>
					<div className="main__results_item-description">
						<p className="main__results_item-title">{`Pavadinimas: ${item?.title}`}</p>
						<p className="main__results_item-price">
							{`Kaina: ${item?.price} ${item?.currency}`}
						</p>
						<p className="main__results_item-status">{`Būklė: ${item?.status}`}</p>
						<p className="main__results_item-url">
							Peržiūrėti skelbimą
							<a href={item?.url} target="_blank">
								{` vinted.lt `}
							</a>
							puslapyje.
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
export { ResultsItem };
