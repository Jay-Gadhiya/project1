import "./productListing.css" ;
import productData from "../Product-Data/data.json";
import { ProductCard } from "../Components/Card";
import { useFilter } from "../Context/FilterContext";

export const ProductListingPage = () => {

    const { filterState, filterDispatch } = useFilter();

    const sortByBrandHandler = (productsData, arrow, allen, bare, wrangler, fab) => {

        let filteredData = [];
        
        if(arrow === false && allen === false && bare === false && wrangler === false && fab === false)
            return productsData;
    
        if(arrow){
            let newData = productsData.filter(item =>  item.brand === "arrow")
            filteredData.push(...newData);
        }
    
        if(allen){
            let newData = productsData.filter(item =>  item.brand === "allen")
            filteredData.push(...newData);
        }
    
        if(bare){
            let newData = productsData.filter(item =>  item.brand === "bare")
            filteredData.push(...newData);
        }
    
        if(wrangler){
            let newData = productsData.filter(item =>  item.brand === "wrangler")
            filteredData.push(...newData);
        }

        if(fab){
            let newData = productsData.filter(item =>  item.brand === "fab")
            filteredData.push(...newData);
        }
    
        return filteredData;
       
    }

    const sortBySizeHandler = (productsData, s, m, l, xl) => {

        let filteredData = [];
        
        if(s === false && m === false && l === false && xl === false)
            return productsData;
    
        if(s){
            let newData = productsData.filter(item =>  item.size === "s")
            filteredData.push(...newData);
        }
    
        if(m){
            let newData = productsData.filter(item =>  item.size === "m")
            filteredData.push(...newData);
        }
    
        if(l){
            let newData = productsData.filter(item =>  item.size === "l")
            filteredData.push(...newData);
        }
    
        if(xl){
            let newData = productsData.filter(item =>  item.size === "xl")
            filteredData.push(...newData);
        }
    
        return filteredData;
       
    }

    const sortByPriceHandler = (type, products) => {

        if(type === "high-to-low") {
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        if(type === "low-to-high") {
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }

        return products;
    }

    const sortByGender = (type, products) => {

        if(type !== "") {
            return products.filter(item => item.gender === type);
        }

        return products;
    }


    const filterByPrice = sortByPriceHandler(filterState.sortBy, filterState.products);
    const filterBySize = sortBySizeHandler(filterByPrice, filterState.s, filterState.m, filterState.l, filterState.xl);
    const filterByBrand = sortByBrandHandler(filterBySize, filterState.arrow, filterState.allen, filterState.bare, filterState.wrangler, filterState.fab );
    const filterByGender = sortByGender(filterState.gender, filterByBrand);


    return (
        <main className="main-container">

            <section className="filter-wrapper">
                <div className="filter-heading">
                    <h3>Filters</h3>
                    <p className="clear">Clear</p>
                </div>
                <h3>Sort By Price</h3>
                <div className="filter-box">
                    <div className="sort-price-box">
                        <input 
                        type="radio" 
                        name="price"
                        onClick={() => filterDispatch({type : "SORT_BY_PRICE", payload : "high-to-low"})}
                        checked={filterState.sortBy === "high-to-low"}
                        />
                        <label htmlFor="price">High to low</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="radio" 
                        name="price"
                        onClick={() => filterDispatch({type : "SORT_BY_PRICE", payload : "low-to-high"})}
                        checked={filterState.sortBy === "low-to-high"}
                        />
                        <label htmlFor="price">Low to high</label>
                    </div>
                </div>

                <h3>Sizes</h3>
                <div className="filter-box">
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="s"
                        onClick={() => filterDispatch({type : "TOGGLE_S"})}
                        checked={filterState.s}
                        />
                        <label htmlFor="s">Size S</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="m"
                        onClick={() => filterDispatch({type : "TOGGLE_M"})}
                        checked={filterState.m}
                        />
                        <label htmlFor="m">Size M</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="l"
                        onClick={() => filterDispatch({type : "TOGGLE_L"})}
                        checked={filterState.l}
                        />
                        <label htmlFor="l">Size L</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="xl"
                        onClick={() => filterDispatch({type : "TOGGLE_XL"})}
                        checked={filterState.xl}
                        />
                        <label htmlFor="xl">Size XL</label>
                    </div>
                </div>

                <h3>Brands</h3>
                <div className="filter-box">
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="allen"
                        onClick={() => filterDispatch({type : "TOGGLE_ALLEN"})}
                        checked={filterState.allen}
                        />
                        <label htmlFor="allen">allen solly</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="arrow"
                        onClick={() => filterDispatch({type : "TOGGLE_ARROW"})}
                        checked={filterState.arrow}
                        />
                        <label htmlFor="arrow">arrow</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="bare"
                        onClick={() => filterDispatch({type : "TOGGLE_BARE"})}
                        checked={filterState.bare}
                        />
                        <label htmlFor="bare">bare denim</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="wrangler"
                        onClick={() => filterDispatch({type : "TOGGLE_WRANGLER"})}
                        checked={filterState.wrangler}
                        />
                        <label htmlFor="wrangler">wrangler</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="checkbox" 
                        name="fab"
                        onClick={() => filterDispatch({type : "TOGGLE_FAB"})}
                        checked={filterState.fab}
                        />
                        <label htmlFor="fab">fab alley</label>
                    </div>
                </div>

                <h3>Ideal for</h3>
                <div className="filter-box">
                    <div className="sort-price-box">
                        <input 
                        type="radio" 
                        name="gender"
                        onClick={() => filterDispatch({type : "FILTER_GENDER", payload : "man"})}
                        checked={filterState.gender === "man"}
                        />
                        <label htmlFor="gender">Man</label>
                    </div>
                    <div className="sort-price-box">
                        <input 
                        type="radio" 
                        name="gender"
                        onClick={() => filterDispatch({type : "FILTER_GENDER", payload : "woman"})}
                        checked={filterState.gender === "woman"}
                        />
                        <label htmlFor="gender">Woman</label>
                    </div>
                </div>
               
            </section>

            <section className="products-wrapper">
                {
                    filterByGender.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
                
            </section>
        </main>
    )
}