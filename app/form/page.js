'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, Input, Textarea } from '@nextui-org/react'

export default function FormPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [station, setStation] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')

  useEffect(() => {
    setStation(searchParams.get('station') || '')
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For this example, we'll just redirect to the success page
    router.push('/success')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Your Complaint</h1>
      <h3 className="text-xl mb-4">Station: {station}</h3>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          label="Complaint"
          placeholder="Describe your complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </form>
    </div>
  )
}