import './globals.css'

export const metadata = {
  title: 'Resume Roaster - AI-Powered Resume Analysis',
  description: 'Get brutally honest AI feedback on your resume in 30 seconds. Improve your ATS score and land more interviews.',
  keywords: 'resume analyzer, ATS optimization, AI resume feedback, career tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
