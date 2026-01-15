export const metadata = {
  title: "Wethemachines",
  description: "Converge knowledge, not prestige."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <a href="/">Home</a>{" | "}
          <a href="/blog">Blog</a>{" | "}
          <a href="/platform">Platform</a>
        </nav>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
