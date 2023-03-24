import 'server-only'
import ConversationProvider from './ConversationProvider'
import './globals.css'
import "highlight.js/styles/github.css";

export const metadata = {
  title: 'GPT-3.5',
  description: 'Created by Toby Rushton',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <ConversationProvider>
          {children}
        </ConversationProvider>
      </body>
    </html>
  )
}

export default RootLayout
