import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Green Button App',
  description: 'A simple app with a green button',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}