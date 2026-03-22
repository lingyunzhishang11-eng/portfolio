'use client'

import { useState } from 'react'

const techCategories = [
  {
    name: '测试框架',
    items: [
      { name: 'pytest', level: 95, desc: 'Python 测试框架首选' },
      { name: 'Playwright', level: 90, desc: '现代 UI 自动化工具' },
      { name: 'Selenium', level: 85, desc: '经典的 Web 测试框架' },
      { name: 'JUnit/TestNG', level: 80, desc: 'Java 测试框架' },
    ],
  },
  {
    name: '编程语言',
    items: [
      { name: 'Python', level: 95, desc: '自动化测试主力语言' },
      { name: 'Java', level: 80, desc: '企业级测试开发' },
      { name: 'JavaScript/TypeScript', level: 75, desc: '前端测试与工具开发' },
      { name: 'Go', level: 60, desc: '性能测试工具开发' },
    ],
  },
  {
    name: 'DevOps & CI/CD',
    items: [
      { name: 'Docker', level: 90, desc: '容器化测试环境' },
      { name: 'Jenkins', level: 85, desc: '持续集成平台' },
      { name: 'GitHub Actions', level: 88, desc: '现代化 CI/CD' },
      { name: 'Kubernetes', level: 70, desc: '容器编排' },
    ],
  },
  {
    name: '测试工具',
    items: [
      { name: 'Allure', level: 92, desc: '测试报告与可视化' },
      { name: 'JMeter', level: 85, desc: '性能测试工具' },
      { name: 'Postman', level: 90, desc: 'API 测试与调试' },
      { name: 'Charles/Fiddler', level: 80, desc: '网络抓包分析' },
    ],
  },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="tech" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">技术栈</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            工具只是手段，解决问题才是目的。持续学习，保持对新技术的敏感度。
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === index
                  ? 'bg-primary text-secondary'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {techCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="card-hover bg-secondary/50 p-6 rounded-lg border border-white/5"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-primary font-mono">{item.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
