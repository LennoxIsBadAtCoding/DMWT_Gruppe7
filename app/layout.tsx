import styles from "styles/Layout.module.css"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
// design placenex
  function HeaderRectangle() {
    const mockupmenu = {
      width: '100%',
      height: '5rem',
      backgroundColor: 'black',
     }
  return(<div style={mockupmenu}><p className={styles.mockupmenutext}>
    Recycling | Facts | Überraschung | Kontakt
  </p>
  </div>)
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={styles.body}>
    <HeaderRectangle></HeaderRectangle>
    {children}
    </body>
    </html>
  )
}
