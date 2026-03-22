'use client'

import { useEffect, useState } from 'react'

const codeLines = [
  { text: 'pytest tests/ -v --alluredir=./allure-results', status: 'command' },
  { text: '============================= test session starts =============================', status: 'info' },
  { text: 'platform linux -- Python 3.10.0, pytest-7.4.0, pluggy-1.3.0', status: 'info' },
  { text: 'rootdir: /workspace/qa-automation-platform', status: 'info' },
  { text: 'collected 24 items', status: 'info' },
  { text: '', status: 'empty' },
  { text: 'tests/api/test_tasks_api.py::TestHealthCheck::test_health_check_success PASSED', status: 'success' },
  { text: 'tests/api/test_tasks_api.py::TestGetTasks::test_get_all_tasks PASSED', status: 'success' },
  { text: 'tests/api/test_tasks_api.py::TestCreateTask::test_create_task_success PASSED', status: 'success' },
  { text: 'tests/ui/test_task_ui.py::TestTaskList::test_page_load PASSED', status: 'success' },
  { text: 'tests/ui/test_task_ui.py::TestTaskList::test_add_task PASSED', status: 'success' },
  { text: '', status: 'empty' },
  { text: '======================== 24 passed in 12.34s =========================', status: 'success' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const getLineColor = (status: string) => {
    switch (status) {
      case 'command':
        return 'text-primary'
      case 'success':
        return 'text-green-400'
      case 'info':
        return 'text-gray-500'
      default:
        return 'text-gray-300'
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-secondary to-secondary" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">测试开发工程师</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              让软件质量从
              <span className="gradient-text block mt-2">&quot;靠人盯&quot;变成&quot;靠系统跑&quot;</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              专注于自动化测试、CI/CD 和质量效能提升。
              相信好的测试不是找 bug，而是让 bug 无处藏身。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary/90 transition-all glow"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                联系我
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 text-sm mt-1">年测试经验</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10k+</div>
                <div className="text-gray-400 text-sm mt-1">自动化用例</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-gray-400 text-sm mt-1">缺陷拦截率</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Terminal */}
          <div className="hidden lg:block">
            <div className="code-block glow border border-white/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-500 text-xs">terminal — zsh</span>
              </div>

              {/* Code Content */}
              <div className="space-y-1">
                {codeLines.slice(0, visibleLines).map((line, index) => (
                  <div key={index} className={`font-mono text-sm ${getLineColor(line.status)}`}>
                    {line.text}
                  </div>
                ))}
                {visibleLines < codeLines.length && (
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
