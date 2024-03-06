import { useContext } from "react";
import "./MainContainer.scss";

// components
import { Title } from "./title/Title.tsx";
import { Owl } from "./owl/Owl.tsx";
import { SearchForm } from "./searchForm/SearchForm.tsx";
import { ResultsContainer } from "./resultsContainer/ResultsContainer.tsx";
import { ResultsItem } from "./resultsItem/ResultsItem.tsx";
import { Context } from "../../context/Context.tsx";
// types
import { TypeResultsItem } from "../../types/ResultTypes.ts";
import { TypeContext } from "../../context/Context.tsx";

const Main = () => {
	const { searchQuery, data }: TypeContext = useContext(Context);

	return (
		<main className="main">
			<Owl />
			<Title />
			<SearchForm />
			<ResultsContainer searchQuery={searchQuery} data={data}>
				{data?.map((item: TypeResultsItem) => (
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
