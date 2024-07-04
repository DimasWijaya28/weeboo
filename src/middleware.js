// import { NextResponse } from 'next/server'

export { default } from "next-auth/middleware"

// export function middleware(request) {
//     const isLogin = true
//     if (!isLogin) {
//         return NextResponse.redirect(new URL('/', request.url))
//     }
// }

export const config = { matcher: ["/users/:path*"] }

