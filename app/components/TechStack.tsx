'use client'

import { useState } from 'react'

const techCategories = [
  {
    name: '测试框架',
    items: [
      { name: 'pytest', level: 95, desc: 'Python 测试框架首选，精通 fixtures、参数化、插件开发' },
      { name: 'Playwright', level: 90, desc: '现代 UI 自动化工具，精通 Page Object 模式' },
      { name: 'unittest', level: 85, desc: 'Python 标准库测试框架' },
      { name: 'Allure', level: 92, desc: '测试报告与可视化，自定义报告美化' },
    ],
  },
  {
    name: '编程语言',
    items: [
      { name: 'Python', level: 95, desc: '主力语言，自动化测试、工具开发、数据处理' },
      { name: 'JavaScript/TypeScript', level: 75, desc: '前端测试、Playwright 脚本' },
      { name: 'Shell/Bash', level: 70, desc: '脚本编写、CI/CD 配置' },
      { name: 'SQL', level: 80, desc: '数据库测试、数据验证' },
    ],
  },
  {
    name: 'DevOps & CI/CD',
    items: [
      { name: 'Docker', level: 88, desc: '容器化测试环境' },
      { name: 'GitHub Actions', level: 90, desc: 'CI/CD 流水线配置' },
      { name: 'Jenkins', level: 82, desc: '企业级持续集成平台' },
      { name: 'Git', level: 90, desc: '版本控制与协作' },
    ],
  },
  {
    name: '测试工具',
    items: [
      { name: 'Postman', level: 88, desc: 'API 测试与调试' },
      { name: 'JMeter', level: 80, desc: '性能测试工具' },
      { name: 'Charles/Fiddler', level: 75, desc: '网络抓包分析' },
      { name: 'Jira', level: 85, desc: '需求管理与缺陷追踪' },
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
            以 Python 为核心，持续学习，保持对新技术的敏感度。工具只是手段，解决问题才是目的。
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