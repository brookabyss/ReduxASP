import QuoteForm from "./form-state";

const requestQuotes = 'REQUEST_QUOTES';
const receiveQuotes = 'RECEIVE_QUOTES';
const AddQuote = 'ADD_QUOTE';
const FormUpdated = 'FORM_UPDATED';


const initialState = { quotes: [], isLoading: false, userForm: QuoteForm };

export const actionCreators = {
    requestQuotes: () => async (dispatch, getState) => {
        
        dispatch({ type: requestQuotes });

        const url = `/api/SampleData/getQuotes`;
        const response = await fetch(url);
        const quotes = await response.json();

        
        dispatch({ type: receiveQuotes, quotes});
    },

    addQuote: (form) => async (dispatch, getState) => {

        dispatch({ type: AddQuote });

        console.log(form)
        
        const url = `/api/SampleData/addQuote`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(form)
        });

        
        const quotes = await response.json();
        console.log(quotes)

        dispatch({ type: receiveQuotes, quotes });
       
    },

    updateForm: (form) => (dispatch, getState) => {
        console.dir(form)
        dispatch({ type: FormUpdated, stuff:form.stuff, author:form.author });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestQuotes) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveQuotes) {
        return {
            ...state,
            quotes: action.quotes,
            isLoading: false
        };
    }

    if (action.type === AddQuote) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === FormUpdated) {

        let newObj = Object.assign({}, state)
        newObj.stuff = action.stuff;
        newObj.author = action.author;
        return newObj;
    }


    return state;
};
