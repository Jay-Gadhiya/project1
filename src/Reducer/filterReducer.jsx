
export const filterReducer = (state, action) => {


    switch (action.type) {
        case "SORT_BY_PRICE":
            return {...state, 
                sortBy : action.payload,
        }

        case "TOGGLE_ALLEN":
            return {...state, 
                allen : !state.allen,
        }

        case "TOGGLE_ARROW":
            return {...state, 
                arrow : !state.arrow,
        }

        case "TOGGLE_BARE":
            return {...state, 
                bare : !state.bare,
        }

        case "TOGGLE_WRANGLER":
            return {...state, 
                wrangler : !state.wrangler,
        }

        case "TOGGLE_FAB":
            return {...state, 
                fab : !state.fab,
        }

        case "TOGGLE_S":
            return {...state, 
                s : !state.s,
        }

        case "TOGGLE_M":
            return {...state, 
                m : !state.m,
        }

        case "TOGGLE_L":
            return {...state, 
                l : !state.l,
        }

        case "TOGGLE_XL":
            return {...state, 
                xl : !state.xl,
        }

        case "FILTER_GENDER":
            return {...state, 
                gender : action.payload
        }
    
        default:
            return state;
    }
}