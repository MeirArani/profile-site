'use client';
 
import Error from 'next/error';
 
export const dynamic = 'force-dynamic'
export const runtime = 'edge';
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}