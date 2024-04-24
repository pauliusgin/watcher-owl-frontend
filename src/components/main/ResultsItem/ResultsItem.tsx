import "./ResultsItem.scss";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { dataContextType, resultsItemType } from "../../../types/types";

function ResultsItem() {
	const { data, sessionData, setSessionData }: dataContextType =
		useContext(DataContext);

	const location = useLocation();

	useEffect(() => {
		if (location.state.sessionName) {
			setSessionData(
				JSON.parse(sessionStorage.getItem(location.state.sessionName) as string)
			);
		}
	}, [location.state.sessionName, setSessionData]);

	return (
		<div id="results-items-container">
			{data === sessionData
				? data?.map((item: resultsItemType) => (
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
					))
				: sessionData?.map((item: resultsItemType) => (
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
