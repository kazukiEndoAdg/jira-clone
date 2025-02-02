// Note: Layout Components
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render.
// This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.
// ページ遷移の際にレイアウトが再レンダリングされないため、レイアウト内のクライアントサイドのReactステートが保持されるという利点があります。

// Note: Link Components
// Automatic code-splitting and prefetching
// To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on the initial page load.
// Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work. This is also less code for the browser to parse, which makes your application faster.
// Furthermore, in production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* Sidebar */}
        <nav className="h-full bg-gray-800 text-white">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard/invoices">Invoices</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link href="/dashboard/customers">Customers</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
