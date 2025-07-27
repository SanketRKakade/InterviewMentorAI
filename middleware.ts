import {
    clerkMiddleware,
    createRouteMatcher
  } from '@clerk/nextjs/server';
  
  const isProtectedRoute = createRouteMatcher(['/protected(.*)']);
  
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect(); // not signed in ? returned back to sign in
  });
  
  export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };