import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import Header from '@/components/Header'
import PageBody from '@/components/PageBody'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // The suppressHydrationWarning prop is used to avoid hydration mismatch warnings that can occur
    // bacause of the ThemeProvider's handling of themes on the client side. This is the recommended approach
    // by the Next.js team for dealing with such scenarios.
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <PageBody>{children}</PageBody>
        </ThemeProvider>
      </body>
    </html>
  )
}
