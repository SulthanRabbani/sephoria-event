'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="section">
            <h2>Something went wrong</h2>
            <p>An unexpected error occurred. Please try again.</p>
            <button onClick={reset} style={{ marginTop: '1rem', cursor: 'pointer' }}>
                Try again
            </button>
        </div>
    )
}
