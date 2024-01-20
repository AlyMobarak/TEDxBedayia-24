import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  let res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*")
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  console.log("Maaan")

  if (request.method == "OPTIONS") {
    res.headers.set("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res;
  }
  return res;
}