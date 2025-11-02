import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Admin {
  id: string
  username: string
  email: string
  avatarPath?: string
}

interface AuthState {
  token: string | null
  admin: Admin | null
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: localStorage.getItem("adminToken"),
  admin: localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin") || "{}") : null,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; admin: Admin }>) => {
      state.isLoading = false
      state.token = action.payload.token
      state.admin = action.payload.admin
      localStorage.setItem("adminToken", action.payload.token)
      localStorage.setItem("admin", JSON.stringify(action.payload.admin))
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.token = null
      state.admin = null
      localStorage.removeItem("adminToken")
      localStorage.removeItem("admin")
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions
export default authSlice.reducer
