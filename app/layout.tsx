import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@400;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="theme-color" content="#100d26"></meta>
        <meta name="author" content="Aly Mobarak" />
        <meta name="description" content="This is the official website for 
        the TEDxYouth event hosted at Bedayia International School. 
        Stop by to book your tickets, know more about us, and have some fun! 
        Waiting for you!"></meta>

        <meta property="og:image" content="/logo.png"></meta>
        <meta property="og:description" content="This is the official website for 
        the TEDxYouth event hosted at Bedayia International School. 
        Stop by to book your tickets, know more about us, and have some fun! 
        Waiting for you!"></meta>
        <meta property="og:title" content="TEDxYouth@BedayiaSchool&apos;24 Event"></meta>
        <meta property="og:type" content="website"></meta>

        <title>TEDxYouth@BedayiaSchool&apos;24</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
