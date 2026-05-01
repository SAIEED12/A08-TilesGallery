import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://tiles-gallery-ten.vercel.app/",
})