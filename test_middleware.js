// Middleware runs on the server and does not have access to some client features like local storage

import { NextResponse } from "next/server";
// USE MIDDLEWARE TO PROTECT ROUTES!!!

const HOST = 'http://localhost:3000'

export function middleware(request){
    const adminData = localStorage.getItem('proxima_admin_details');

    if(!adminData){
        return NextResponse.redirect(HOST)
    }
    else{
        return NextResponse.next()
    }
}

export const config = {
    matcher: '/dashboard/:path*',
  }