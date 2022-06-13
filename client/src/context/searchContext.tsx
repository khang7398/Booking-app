import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    },
    dispatch: {}
}

export const SearchContext = createContext(INITIAL_STATE)


const SearchReducer = (state: any, action: any) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export const SearchContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{
            city: state.city,
            dates: state.dates,
            options: state.options,
            dispatch,
        }}>
            {children}
        </SearchContext.Provider>
    )
}



