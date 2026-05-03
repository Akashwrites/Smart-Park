'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HomeContent() {
  const searchParams = useSearchParams()
  const [paramValue, setParamValue] = useState<string | null>(null)

  useEffect(() => {
    const value = searchParams.get('id') // 👈 change 'id' if needed
    setParamValue(value)
  }, [searchParams])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Park 🚗</h1>

      <p>
        Query Param Value:{" "}
        <strong>{paramValue ? paramValue : "No ID found"}</strong>
      </p>
    </div>
  )
}