'use client'

import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: '邮箱',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: '@your-github',
    href: 'https://github.com/your-github',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: 'https://linkedin.com/in/your-profile',
  },
  {
    icon: MessageCircle,
    title: '微信',
    value: '扫码添加',
    href: '#wechat',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">联系我</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            如果你对我的项目感兴趣，或者有测试相关的问题想交流，欢迎随时联系我。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="card-hover bg-secondary/50 p-6 rounded-xl border border-white/5 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <method.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-1">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 凌云之上. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            让软件质量从"靠人盯"变成"靠系统跑"
          </p>
        </footer>
      </div>
    </section>
  )
}
