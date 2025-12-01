import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Banner from './components/Banner';
import BookmarkCard from './components/BookmarkCard';

const dummyLinks = [
  {
    id: '1',
    title: 'GitHub',
    url: 'https://github.com',
    description: '全球最大的开发者社区',
    icon: '',
    pinned: true
  },
  {
    id: '2',
    title: 'Cloudflare',
    url: 'https://cloudflare.com',
    description: '强大的云服务 & CDN',
    icon: '',
    pinned: false
  },
];

function App() {
  return (
    <div className="flex h-screen overflow-hidden text-slate-900 dark:text-slate-50 bg-[#f8fafc] dark:bg-[#0f172a]">...
  );
}

export default App;