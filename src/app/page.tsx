'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("")
  const [results, setResults] = useState<{
    results: string[],
    duration: number
  }>()

  useEffect(() => {

    if (!input) return setResults(undefined)
    
    const fetchData = async () => {
        const response = await fetch(`/api/search?query=${input}`)
        // setResults(response)
    }

    fetchData()

  }, [input])

  return (
      <div>
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-zinc-900"
          />
      </div>
  );
}
