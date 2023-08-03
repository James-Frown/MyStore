export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
      </body>
    </html>
  );
}
