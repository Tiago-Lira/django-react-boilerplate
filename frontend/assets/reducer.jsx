import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';


const reducer = combineReducers({
    // Third party reducers
    form: formReducer,
    router: routerReducer,
    toastr: toastrReducer,
});


export default reducer;
