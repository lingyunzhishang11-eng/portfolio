'use client'

import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: '从 0 到 1 搭建自动化测试平台',
    excerpt: '一个测试开发工程师的实战记录。从痛点分析到技术选型，从架构设计到 CI/CD 集成，完整分享如何搭建团队级自动化测试平台。',
    date: '2024-03-15',
    readTime: '15 分钟',
    tags: ['自动化测试', 'pytest', 'CI/CD'],
    slug: 'qa-automation-platform',
  },
  {
    title: 'Page Object 模式实战：让 UI 测试代码不再是一坨浆糊',
    excerpt: '写 UI 测试最痛苦的不是定位元素，而是维护代码。本文详细介绍 Page Object 模式的核心思想和实战技巧。',
    date: '2024-03-10',
    readTime: '12 分钟',
    tags: ['UI 测试', 'Playwright', '设计模式'],
    slug: 'page-object-pattern',
  },
  {
    title: 'Allure 报告美化指南：让测试报告成为团队的沟通语言',
    excerpt: '测试报告不是给测试人员看的，是给整个团队看的。学习如何使用 Allure 生成专业、美观、信息丰富的测试报告。',
    date: '2024-03-05',
    readTime: '10 分钟',
    tags: ['测试报告', 'Allure', '最佳实践'],
    slug: 'allure-report-guide',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">技术博客</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            记录学习过程，分享实践经验。写作是思考的延伸，也是知识沉淀的方式。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card-hover bg-secondary/50 rounded-xl border border-white/5 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Read More */}
              <div className="px-6 pb-6">
                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  阅读全文
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#blog/all"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
          >
            查看全部文章
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
