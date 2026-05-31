import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Search, FileText } from 'lucide-react';
import { docsNavigation, getDocPage } from '../data/docsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DocsPage() {
  const { sectionSlug, pageSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Default to introduction/overview if no slugs provided
  useEffect(() => {
    if (!sectionSlug || !pageSlug) {
      navigate('/docs/introduction/overview', { replace: true });
    }
  }, [sectionSlug, pageSlug, navigate]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentPage = sectionSlug && pageSlug ? getDocPage(sectionSlug, pageSlug) : null;
  const currentSectionName = docsNavigation.find(s => s.slug === sectionSlug)?.title || 'Docs';

  // If loading default or page not found
  if (!currentPage) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading documentation...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-slate-500/30">
      <Navbar />

      {/* Top Breadcrumb Bar */}
      <div className="sticky top-20 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <nav className="flex items-center text-sm text-slate-500 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
            <Link to="/docs" className="hover:text-slate-300 transition-colors">Docs</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
            <span className="text-slate-400">{currentSectionName}</span>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
            <span className="text-slate-200 font-medium">{currentPage.title}</span>
          </nav>
          
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-start">
        
        {/* Left Sidebar Navigation */}
        <aside className={`
          fixed md:sticky top-32 z-20 w-64 h-[calc(100vh-8rem)] overflow-y-auto pb-10
          ${isSidebarOpen ? 'left-0 bg-slate-950 p-4 border-r border-slate-800' : '-left-64 md:left-0'} 
          transition-all duration-300 md:block hide-scrollbar
        `}>
          <div className="mb-6 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
            />
          </div>

          <nav className="space-y-8">
            {docsNavigation.map((section) => (
              <div key={section.slug}>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1.5 border-l border-slate-800/60 ml-2 pl-3">
                  {section.pages.map((page) => {
                    const isActive = sectionSlug === section.slug && pageSlug === page.slug;
                    return (
                      <li key={page.slug}>
                        <Link 
                          to={`/docs/${section.slug}/${page.slug}`}
                          onClick={() => setIsSidebarOpen(false)}
                          className={`block text-sm py-1 -ml-[13px] pl-3 border-l-2 transition-colors ${
                            isActive 
                              ? 'border-indigo-500 text-indigo-400 font-medium' 
                              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                          }`}
                        >
                          {page.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full md:pl-12 lg:pl-16 py-10 pb-24 min-w-0">
          <div className="max-w-3xl">
            {currentPage.content}
            
            <div className="mt-16 pt-8 border-t border-slate-800/80 flex items-center text-sm text-slate-500">
              <FileText className="w-4 h-4 mr-2 opacity-50" />
              <span>Documentation Version v0.1</span>
            </div>
            
            {/* Simple Prev/Next Nav could go here */}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
