import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'
import ConversationProvider from '@/app/ConversationProvider'
import { resolvedComponent } from './resolve'
import 'isomorphic-fetch'
import '@testing-library/jest-dom'

describe('App', () => {
    it('should render the app', async () => {
        const App = await resolvedComponent(Home)
        render(
            <ConversationProvider>
                <App />
            </ConversationProvider>
        )
        expect(screen.getByText('GPT-3.5')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument()
    })
    it('should take an input', async () => {
        const App = await resolvedComponent(Home)
        render(
            <ConversationProvider>
                <App />
            </ConversationProvider>
        )
        const input = screen.getByPlaceholderText('Type your message here...')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
        fireEvent.change(input, { target: { value: 'Hello' } })
        expect(input).toHaveValue('Hello')
    })
    it('should submit an input', async () => {
        const App = await resolvedComponent(Home)
        render(
            <ConversationProvider>
                <App />
            </ConversationProvider>
        )
        const input = screen.getByPlaceholderText('Type your message here...')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
        fireEvent.change(input, { target: { value: 'Hello' } })
        expect(input).toHaveValue('Hello')
        fireEvent.submit(input)
        expect(input).toHaveValue('')
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
})