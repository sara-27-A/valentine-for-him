export const metadata = {
  title: "Valentine 💌",
  description: "For my love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
