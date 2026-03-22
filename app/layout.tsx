import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '凌云之上 | 测试开发工程师',
  description: '专注于自动化测试、CI/CD 和质量效能提升',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-secondary text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
