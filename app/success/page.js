'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Complaint Submitted Successfully!</h1>
      <p className="mb-4">Thank you for your feedback. We will review your complaint shortly.</p>
      <Button onClick={() => router.push('/')}>Return to Home</Button>
    </div>
  )
}