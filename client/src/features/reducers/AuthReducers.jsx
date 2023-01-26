import { createAction, createReducer } from '@reduxjs/toolkit'

const SET_ACCCESS_TOKEN = createAction('SET_ACCCESS_TOKEN')
const SET_REFRESH_TOKEN = createAction('SET_REFRESH_TOKEN')
const SET_CODE = createAction('SET_CODE')
const SET_CURRENT_USER = createAction('SET_CURRENT_USER')
const REMOVE_CURRENT_USER = createAction('REMOVE_CURRENT_USER')


const initialState = {
  code: null,
  refreshToken: null,
  accessToken: null,
  currentUser: null
}

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_CODE, (state, action) => {
      state.code = action.payload
    })
    .addCase(SET_REFRESH_TOKEN, (state, action) => {
      state.refreshToken = action.payload
    })
    .addCase(SET_ACCCESS_TOKEN, (state, action) => {
      localStorage.setItem('token', JSON.stringify(action.payload))
      state.accessToken = action.payload
    })
    .addCase(SET_CURRENT_USER, (state, action) => {
      state.currentUser = action.payload
    })
    .addCase(REMOVE_CURRENT_USER, (state, action) => {
        state.currentUser = null,
        state.accessToken = null,
        state.refreshToken = null,
        state.code=null
    })

})
