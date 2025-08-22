export default function RootLayout({ children }) {
  return (
    <div className="px-5">
      <main>
        {children}
      </main>
    </div>
  );
}
