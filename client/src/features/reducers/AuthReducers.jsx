import { createAction, createReducer } from '@reduxjs/toolkit'

const SET_ACCCESS_TOKEN = createAction('SET_ACCCESS_TOKEN')
const SET_REFRESH_TOKEN = createAction('SET_REFRESH_TOKEN')
const SET_CODE = createAction('SET_CODE')
const REMOVE_CODE = createAction('REMOVE_CODE')

const initialState = {
  code: null,
  refreshToken: null,
  accessToken: null,
}

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_CODE, (state, action) => {
      state.code = action.payload
    })
    .addCase(REMOVE_CODE, (state, action) => {
      state.code = null
    })
    .addCase(SET_REFRESH_TOKEN, (state, action) => {
      state.refreshToken = action.payload
    })
    .addCase(SET_ACCCESS_TOKEN, (state, action) => {
      localStorage.setItem('token', JSON.stringify(action.payload))
      state.accessToken = action.payload
    })

})
