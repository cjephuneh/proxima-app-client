import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

// USE MIDDLEWARE TO PROTECT ROUTES!!!

const HOST = 'http://localhost:3000'

export function middleware(request){
    // console.log(request.url)
    // const { cookies } = request.url

    // const jwt = cookies?.proximaJWT

    // const url = request.url

    // if(url.includes('/dashboard')){
    //     console.log(url)
    //     if(jwt === !undefined){
    //         return NextResponse.redirect(HOST)
    //     }
    //     else{
    //         return NextResponse.next()
    //     }
    // }
}

export const config = {
    matcher: '/dashboard/:path*',
  }