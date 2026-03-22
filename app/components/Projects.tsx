'use client'

import { Github, ExternalLink, Play } from 'lucide-react'

const projects = [
  {
    title: 'QA Automation Platform',
    subtitle: '自动化测试平台',
    description: '从 0 到 1 搭建的完整自动化测试平台，支持接口测试、UI 测试、性能测试，集成 CI/CD 流水线，自动生成 Allure 报告。',
    tech: ['Python', 'pytest', 'Playwright', 'Allure', 'Docker', 'GitHub Actions'],
    highlights: [
      'Page Object 模式，代码可维护性强',
      'Allure 报告，支持附件和趋势图',
      'GitHub Actions 自动执行测试',
      'Docker 化部署，环境隔离',
    ],
    github: 'https://github.com/your-github/qa-automation-platform',
    demo: 'https://your-github.github.io/qa-automation-platform',
  },
  {
    title: 'API Testing Framework',
    subtitle: '接口测试框架',
    description: '基于 pytest 和 requests 的接口测试框架，支持数据驱动、Schema 校验、环境配置管理。',
    tech: ['Python', 'pytest', 'requests', 'jsonschema', 'YAML'],
    highlights: [
      'YAML 配置管理多环境',
      '自动校验响应 Schema',
      '数据驱动测试，覆盖多场景',
      '详细的日志和错误追踪',
    ],
    github: 'https://github.com/your-github/api-testing-framework',
    demo: null,
  },
  {
    title: 'Performance Test Suite',
    subtitle: '性能测试套件',
    description: '基于 Locust 的性能测试解决方案，支持分布式压测、实时监控、报告生成。',
    tech: ['Python', 'Locust', 'Grafana', 'InfluxDB'],
    highlights: [
      '分布式压测，支持大规模并发',
      '实时监控和指标采集',
      '自定义测试场景和权重',
      '自动生成性能测试报告',
    ],
    github: 'https://github.com/your-github/perf-test-suite',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">项目展示</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            代码是最好的简历。这些项目展示了我从设计到实现的全栈能力。
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-hover bg-secondary/50 rounded-xl border border-white/5 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="text-gray-500 text-sm">{project.subtitle}</span>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Actions */}
                  <div className="flex lg:flex-col gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-sm"
                    >
                      <Github size={16} />
                      源码
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition-all text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        在线演示
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
