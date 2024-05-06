import "./ResultsItem.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resultsItemType } from "../../../types/types";
import { useData } from "../../../hooks/custom.hooks";

function ResultsItem() {
	const { data, sessionData, setSessionData } = useData();

	const location = useLocation();

	useEffect(() => {
		if (location.state.sessionName) {
			const sessionNameDecoded = decodeURIComponent(location.state.sessionName);
			setSessionData(
				JSON.parse(sessionStorage.getItem(sessionNameDecoded) as string)
			);
		}
	}, [location.state.sessionName, setSessionData]);

	return (
		<div id="results-items-container">
			{data === sessionData
				? data?.map((item: resultsItemType) => (
						<div key={item?.id} className="main__results_item">
							<div className="main__results_item-image">
								<a href={item?.full_size_url} target="_blank">
									<img src={item?.photo} alt="pirma-foto" loading="lazy" />
								</a>
							</div>
							<div className="main__results_item-description">
								<a
									className="main__results_item-title-link"
									href={item?.url}
									target="_blank"
								>
									<h4 className="main__results_item-title">{`Pavadinimas: ${item?.title}`}</h4>
								</a>
								<p className="main__results_item-price">
									{`Kaina: ${item?.price} ${item?.currency}`}
								</p>
								<p className="main__results_item-status">{`Būklė: ${item?.status}`}</p>
								<p className="main__results_item-status">{`Įkelta: ${`Įkelta: ${new Date(
									item?.timestamp * 1000
								).toLocaleDateString("lt-LT", {
									year: "numeric",
									month: "long",
									day: "2-digit",
								})}`}`}</p>
							</div>
						</div>
					))
				: sessionData?.map((item: resultsItemType) => (
						<div key={item?.id} className="main__results_item">
							<div className="main__results_item-image">
								<a
									className="main__results_item-title-link"
									href={item?.full_size_url}
									target="_blank"
								>
									<img src={item?.photo} alt="pirma-foto" loading="lazy" />
								</a>
							</div>
							<div className="main__results_item-description">
								<a href={item?.url} target="_blank">
									<h4 className="main__results_item-title">{`Pavadinimas: ${item?.title}`}</h4>
								</a>
								<p className="main__results_item-price">
									{`Kaina: ${item?.price} ${item?.currency}`}
								</p>
								<p className="main__results_item-status">{`Būklė: ${item?.status}`}</p>
								<p className="main__results_item-status">
									{`Įkelta: ${new Date(
										item?.timestamp * 1000
									).toLocaleDateString("lt-LT", {
										year: "numeric",
										month: "long",
										day: "2-digit",
									})}`}
								</p>
							</div>
						</div>
					))}
		</div>
	);
}
export { ResultsItem };
