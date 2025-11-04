'use client'

import { appName } from '@/const/appName'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex h-14 max-w-6xl px-3">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{appName}</span>
        </Link>
      </div>
    </header>
  )
}
