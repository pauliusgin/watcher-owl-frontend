import { SyntheticEvent, useContext, useRef } from "react";
import { Context } from "../../../context/Context";
import "./SearchForm.scss";

const SearchForm = () => {
	const { setSearchQuery } = useContext(Context);
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSearchQuery(event: SyntheticEvent) {
		event.preventDefault();

		const inputText: string | null = inputRef.current?.value ?? null;
		const inputTextArray: string[] | null = inputText
			? inputText
					.replaceAll(/\W/g, " ")
					.split(" ")
					.filter((word) => word.trim().length > 2)
			: null;

		console.log("input:", inputText);

		setSearchQuery(inputTextArray);
		console.log("search query set to:", inputTextArray);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	}

	return (
		<form
			action="/search"
			className="main__search_form search__form"
			id="search"
		>
			<div className="search__form_icon-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 50"
					width="50px"
					height="50px"
					className="search__form_icon"
				>
					<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
				</svg>
			</div>
			<input
				name="search__form_input"
				className="search__form_input"
				id="search__input"
				type="text"
				ref={inputRef}
				title="Ieškoti"
				placeholder="Ieškokite..."
				autoComplete="off"
			></input>
			<span className="search__form_separator-container">
				<svg
					className="search__form_separator"
					height="30"
					width="5"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line x1="5" y1="0" x2="5" y2="70" stroke="white" />
				</svg>
			</span>
			<button
				className="search__form_button button"
				type="submit"
				name="search"
				title="ieškoti"
				onClick={(event) => {
					handleSearchQuery(event);
				}}
			>
				Ieškoti
			</button>
		</form>
	);
};

export { SearchForm };
