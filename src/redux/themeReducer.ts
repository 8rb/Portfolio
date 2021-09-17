const initialState = {
	theme: 'dark',
	loading: true,
}

export default function themeReducer(
	state = initialState,
	action: { type: any }
) {
	switch (action.type) {
		case 'toggleTheme':
			if (state.theme === 'light') {
				return { ...state, theme: 'dark' }
			} else {
				return { ...state, theme: 'light' }
			}
		case 'stopLoading':
			if (state.loading) return { ...state, loading: false }
			else return state
		default:
			return state
	}
}
