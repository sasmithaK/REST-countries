import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recentlyViewed: [],
  bookmarks: []
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addRecentlyViewed(state, action) {
      const country = action.payload
      state.recentlyViewed = state.recentlyViewed.filter(c => c.cca3 !== country.cca3)
      state.recentlyViewed.unshift(country)
      if (state.recentlyViewed.length > 8) {
        state.recentlyViewed.pop()
      }
    },
    
    toggleBookmark(state, action) {
      const country = action.payload
      const exists = state.bookmarks.some(c => c.cca3 === country.cca3)
      if (exists) {
        state.bookmarks = state.bookmarks.filter(c => c.cca3 !== country.cca3)
      } else {
        state.bookmarks.push(country)
      }
    },
    resetSession: () => initialState,
  }
})

export const {
  addRecentlyViewed,
  toggleBookmark, 
  resetSession
} = sessionSlice.actions

export default sessionSlice.reducer
