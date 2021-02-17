import { createStore } from 'redux';

const initialState = {
    theme: 'dark'
}

function themeReducer(state = initialState, action) {
    switch (action.type) {
      case 'toggleTheme':
        if(state.theme === 'light')
            return { ...state, theme: 'dark' }
        else
            return { ...state, theme: 'light' }
      default:
        return state;
    }
}

const store = createStore(themeReducer)

export default store;