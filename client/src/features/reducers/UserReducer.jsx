import { createAction, createReducer } from '@reduxjs/toolkit'

const SET_USER = createAction('SET_USER')

const initialState = {
   user: null
}

export const UserReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(SET_USER, (state, action) => {
         state.user = action.payload
      })
})