'use client'

import { appName } from '@/const/appName'
import { useRouter } from 'next/navigation'

export function Header() {
  const history = useRouter()

  const handleNameClick = () => {
    history.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full rounded-none bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="flex h-14 max-w-6xl px-3">
        <div className="flex items-center" onClick={handleNameClick} style={{ cursor: 'pointer' }}>
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{appName}</span>
        </div>
      </div>
    </header>
  )
}
