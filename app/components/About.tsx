'use client'

const milestones = [
  { year: '2024.02', title: '入行测试', desc: '从功能测试开始，学习质量保障的核心方法论' },
  { year: '2024.06', title: '自动化转型', desc: '掌握 Python + pytest + Playwright，搭建第一个自动化框架' },
  { year: '2024.10', title: 'CI/CD 实践', desc: '引入 GitHub Actions，实现测试左移与持续集成' },
  { year: '2025.03', title: '平台化建设', desc: '主导搭建团队级自动化测试平台，提升整体测试效能' },
  { year: '2025.08', title: '质量效能', desc: '关注研发效能度量，推动质量内建与测试左移' },
  { year: '2026.01', title: '字节跳动 Pico', desc: '加入字节跳动，负责 Pico 项目测试开发工作' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">关于我</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            从手工测试到自动化测试，从执行者到建设者，
            我相信好的测试工程师应该是质量的守护者，而不是 bug 的搬运工。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="card-hover bg-secondary/50 p-6 rounded-lg border border-white/5">
                    <span className="text-primary font-mono text-sm">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-secondary" />
                </div>

                {/* Empty Space */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}