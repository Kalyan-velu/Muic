import { createAction, createReducer } from '@reduxjs/toolkit'

const SET_USER = createAction('SET_USER')
const SET_MY_PLAYLISTS = createAction('SET_USER_PLAYLISTS')

const initialState = {
   playlists: null
}

export const UserReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(SET_USER, (state, action) => {
         state.user = action.payload
      })
      .addCase(SET_MY_PLAYLISTS, (state, action) => {
         state.playlists = action.payload
      })
})