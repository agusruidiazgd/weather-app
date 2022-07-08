import Link from 'next/link';

export default function Tabs({ setTab, tab, children, tabList }) {
  return (
    <div className="flex flex-col w-4/6">
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab3"
        role="tablist"
      >
        {tabList.map((elem, idx) => (
          <li className="nav-item" role="presentation" key={idx}>
            <Link href={`/${elem.url}`}>
              <div
                role="button"
                onClick={() => setTab(elem.name)}
                className={`
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 ${
                  tab === elem.name && 'border-b-2 border-green-200'
                }
                px-6
                py-3
                my-2
                hover:bg-gray-100
                focus:border-transparent
                active
              `}
              >
                {elem.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="tabs-tabContent3">
        {children}
      </div>
    </div>
  );
}
