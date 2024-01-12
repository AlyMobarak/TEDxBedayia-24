import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8D2547"></meta>
        <meta name="author" content="Aly Mobarak" />
        <meta name="description” content= “Spotify is all the music you’ll ever need. … Skip to content. Spotify. Listening is everything. Millions of songs and podcasts. No credit card needed." />

        <meta property="og:image" content="branding.png"></meta>
        <meta property="og:description" content="This is the official website for 
        the TEDxYouth event hosted at Bedayia International School. 
        Stop by to book your tickets, know more about us, and have some fun! Waiting for you!"></meta>
        <meta property="og:title" content="TEDxYouth@BedayiaSchool'24 Event"></meta>
        <meta property="og:type" content="website"></meta>

        <title>TEDxYouth@BedayiaSchool'24</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
