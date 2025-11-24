const posts = [
  {
    id: 1,
    title: "The Future of Corporate Security: AI and Automation",
    href: "#",
    description:
      "How artificial intelligence is revolutionizing threat detection and response times in high-security environments.",
    date: "Mar 16, 2025",
    datetime: "2025-03-16",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Carlos Rodriguez",
      role: "Head of Tech",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Navigating Security Risks in Emerging Markets",
    href: "#",
    description:
      "Key strategies for multinational corporations operating in volatile regions, with a focus on South America.",
    date: "Mar 10, 2025",
    datetime: "2025-03-10",
    category: { title: "Global Risk", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Senior Analyst",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Executive Protection: Beyond the Bodyguard",
    href: "#",
    description:
      "Why modern executive protection requires intelligence gathering, logistics planning, and discreet support.",
    date: "Feb 12, 2025",
    datetime: "2025-02-12",
    category: { title: "Protection", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Director of Operations",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Industry Insights
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-600">
            Expert analysis and news on global security trends, technology, and
            risk management.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-slate-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-slate-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-slate-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
