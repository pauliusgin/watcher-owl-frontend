import { useContext } from "react";
import "./MainContainer.scss";

// components
import { Title } from "../Title/Title.tsx";
import { Owl } from "../Owl/Owl.tsx";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation.tsx";
import { SearchForm } from "../SearchForm/SearchForm.tsx";
import { ResultsContainer } from "../ResultsContainer/ResultsContainer.tsx";
import { ResultsItem } from "../ResultsItem/ResultsItem.tsx";
import { DataContext } from "../../../context/DataContext.tsx";

// types
import { dataContextType } from "../../../types/contextTypes";
import { resultsItemType } from "../../../types/resultsDataTypes";

const Main = () => {
	const { searchQuery, data, isLoading }: dataContextType =
		useContext(DataContext);

	if (searchQuery?.length === 0) {
		return (
			<main className="main">
				<Owl />
				<Title />
				<SearchForm />
				<p>{`Užklausą turi sudaryti bent trys raidės`}</p>
			</main>
		);
	}

	if (isLoading) {
		return (
			<main className="main">
				<Owl />
				<Title />
				<SearchForm />
				<LoadingAnimation />
			</main>
		);
	}

	if (data && data.length === 0) {
		return (
			<main className="main">
				<Owl />
				<Title />
				<SearchForm />
				<p>
					{`Pagal užklausą `}
					<span className="query-span">{searchQuery?.join(", ")}</span>
					{` rezultatų nerasta.`}
				</p>
			</main>
		);
	}
	return (
		<main className="main">
			<Owl />
			<Title />
			<SearchForm />
			<ResultsContainer searchQuery={searchQuery} data={data}>
				{data?.map((item: resultsItemType) => (
					<ResultsItem
						key={item.id}
						title={item.title}
						photo={item.photo}
						price={item.price}
						currency={item.currency}
						status={item.status}
						url={item.url}
					/>
				))}
			</ResultsContainer>
		</main>
	);
};

export { Main };
