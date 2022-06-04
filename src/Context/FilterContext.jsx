import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";
import productData from "../Product-Data/data.json";


const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);


const initialVal = {
    products : productData,
    sortBy : "",
    arrow : false,
    allen : false,
    bare : false,
    wrangler : false,
    fab : false,
    s : false,
    l : false,
    m : false,
    xl : false,
    gender : "",
}



const FilterProvder = ({children}) => {

    const [filterState, filterDispatch] = useReducer( filterReducer, initialVal);

    console.log(initialVal.brands);


    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export {useFilter, FilterProvder}