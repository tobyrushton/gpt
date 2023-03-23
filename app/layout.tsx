import 'server-only'
import ConversationProvider from './ConversationProvider'
import './globals.css'

export const metadata = {
  title: 'GPT App',
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
