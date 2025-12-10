import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, Plus, Layout, Zap, CalendarDays, Hash, Check, 
  Settings, Image as ImageIcon, Users, LogOut, Download, ChevronRight, Menu,
  ChevronLeft, Upload, Library, RefreshCw, Search, Shuffle, Database, Grid
} from 'lucide-react';
import { CONTENT_ANGLES, VIBES, MOCK_TRAINERS, BACKGROUND_ASSETS, AIRTABLE_MOCK_RECORDS } from './constants';
import { SocialPost } from './components/SocialPost';
import { GridPreview } from './components/GridPreview';
import { PostData, ScheduledPost, VibeType, Trainer, Asset } from './types';

// --- Helper Functions for Calendar ---

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

// --- Components ---

const SidebarItem = ({ icon, label, active, onClick, secondary = false }: { icon: any, label: string, active?: boolean, onClick: () => void, secondary?: boolean }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all mb-1 ${
      active 
        ? 'bg-slate-800 text-white font-medium shadow-sm border border-slate-700' 
        : secondary
          ? 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    {React.cloneElement(icon, { size: 18 })}
    <span className="hidden lg:block text-sm">{label}</span>
  </button>
);

const BrandLogoSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lGrad_app" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff7f50"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
    </defs>
    <path d="M50 0C22.4 0 0 22.4 0 50C0 85 50 130 50 130C50 130 100 85 100 50C100 22.4 77.6 0 50 0Z" fill="white" />
    <circle cx="50" cy="50" r="35" fill="#1e1b4b"/>
    <text x="42" y="62" fontSize="32" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="sans-serif">T</text>
    <text x="58" y="62" fontSize="32" fontWeight="bold" textAnchor="middle" fill="url(#lGrad_app)" fontFamily="sans-serif">L</text>
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3 px-2">
      <div className="w-8 h-10 flex items-center justify-center">
         <BrandLogoSVG className="w-full h-full drop-shadow-md" />
      </div>
      <div className="hidden lg:block">
        <span className="font-bold text-sm tracking-wide text-white block">TrainLocal</span>
        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Admin Console</span>
      </div>
  </div>
);

// --- Calendar View Component ---

const CalendarView = ({ schedule, onNewClick }: { schedule: ScheduledPost[], onNewClick: () => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month); // 0 = Sunday
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Generate grid cells
  const blanks = Array.from({ length: firstDay }, (_, i) => <div key={`blank-${i}`} className="bg-slate-50/50 min-h-[100px] border-b border-r border-slate-100"></div>);
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const postsForDay = schedule.filter(p => p.date === dateString);

    return (
      <div key={day} className="bg-white min-h-[100px] border-b border-r border-slate-100 p-2 hover:bg-slate-50 transition-colors relative group">
        <span className={`text-xs font-bold ${postsForDay.length > 0 ? 'text-slate-800' : 'text-slate-400'}`}>{day}</span>
        
        <div className="mt-2 flex flex-col gap-1">
            {postsForDay.map(post => (
              <div key={post.id} className={`px-2 py-1 rounded text-[10px] font-bold truncate shadow-sm flex items-center gap-1 ${post.type === 'story' ? 'bg-pink-50 text-pink-600 border border-pink-100' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
                 <div className={`w-1.5 h-1.5 rounded-full ${post.type === 'story' ? 'bg-pink-500' : 'bg-indigo-500'}`}></div>
                 {CONTENT_ANGLES.find(a => a.id === post.angleId)?.category || 'Post'}
              </div>
            ))}
        </div>
        
        {/* Add Button on Hover */}
        <button onClick={onNewClick} className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white rounded-full p-1 shadow-md">
            <Plus size={12} />
        </button>
      </div>
    );
  });

  return (
    <div className="h-full flex flex-col bg-slate-50 p-6 md:p-8 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">{monthNames[month]} {year}</h2>
              <p className="text-sm text-slate-500">Content Overview</p>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={handlePrevMonth} className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600"><ChevronLeft size={16} /></button>
                <button onClick={() => setCurrentDate(new Date())} className="px-3 py-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-xs font-bold text-slate-600">Today</button>
                <button onClick={handleNextMonth} className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600"><ChevronRight size={16} /></button>
            </div>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 border border-slate-200 bg-slate-100 rounded-t-lg">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="py-2 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">{d}</div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 border-l border-t border-slate-200 bg-white shadow-sm flex-1 overflow-y-auto">
            {blanks}
            {days}
        </div>
    </div>
  );
};

// --- Library View Component ---

const LibraryView = ({ trainers, onSync }: { trainers: Trainer[], onSync: () => void }) => {
  const [tab, setTab] = useState<'trainers' | 'media'>('trainers');

  return (
    <div className="h-full flex flex-col bg-slate-50 p-6 md:p-8">
       <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Library</h2>
            <p className="text-sm text-slate-500">Manage verified trainers and brand assets.</p>
          </div>
          <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
             <button onClick={() => setTab('trainers')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${tab === 'trainers' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'}`}>Trainers</button>
             <button onClick={() => setTab('media')} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${tab === 'media' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'}`}>Media Assets</button>
          </div>
       </div>

       {tab === 'trainers' && (
         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex-1 flex flex-col animate-fade-in">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-md border border-slate-100 w-64">
                  <Search size={16} className="text-slate-400" />
                  <input type="text" placeholder="Search trainers..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-700"/>
               </div>
               <button onClick={onSync} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md font-bold text-xs shadow-sm transition-colors">
                  <RefreshCw size={14} /> Sync Roster
               </button>
            </div>
            
            <div className="overflow-y-auto flex-1">
               {trainers.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center text-slate-400">
                    <Users size={48} className="mb-4 opacity-20" />
                    <p className="font-medium">Library is empty.</p>
                    <p className="text-xs">Click Sync to load data from Airtable.</p>
                 </div>
               ) : (
                 <table className="w-full text-left">
                    <thead className="bg-slate-50 sticky top-0 z-10">
                      <tr>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Trainer</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Specialism</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {trainers.map(t => (
                         <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                     {t.image ? <img src={t.image} className="w-full h-full object-cover"/> : <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">{t.name.charAt(0)}</div>}
                                  </div>
                                  <span className="font-bold text-sm text-slate-800">{t.name}</span>
                               </div>
                            </td>
                            <td className="p-4 text-sm text-slate-600">{t.location}</td>
                            <td className="p-4 text-sm text-slate-600">{t.specialism}</td>
                            <td className="p-4 text-right">
                               <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                 <Check size={10} /> Active
                               </span>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
               )}
            </div>
         </div>
       )}

       {tab === 'media' && (
         <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-6 animate-fade-in overflow-y-auto">
            <h3 className="font-bold text-slate-800 mb-4">Background Assets</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BACKGROUND_ASSETS.map(asset => (
                <div key={asset.id} className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100">
                   <img src={asset.url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                      <span className="text-white text-xs font-bold uppercase">{asset.category}</span>
                   </div>
                </div>
              ))}
            </div>
         </div>
       )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'studio' | 'calendar' | 'grid' | 'library'>('studio'); 
  const [schedule, setSchedule] = useState<ScheduledPost[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([]); // Simulate empty initially
  
  // Creator Studio State
  const [selectedAngleId, setSelectedAngleId] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState<VibeType>('classic');
  const [draftData, setDraftData] = useState<PostData>({});
  const [hashtags, setHashtags] = useState("");
  const [draftFormat, setDraftFormat] = useState<'post' | 'story'>('post');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [isFetchingAirtable, setIsFetchingAirtable] = useState(false);

  const currentAngle = CONTENT_ANGLES.find(a => a.id === selectedAngleId) || CONTENT_ANGLES[0];
  const currentVibeConfig = VIBES.find(v => v.id === selectedVibe);
  const BASE_HASHTAGS = "#trainlocal #findapersonaltrainer";

  // Update hashtags when post type changes
  useEffect(() => {
    const specificTags = currentAngle.defaultHashtags || "";
    setHashtags(`${BASE_HASHTAGS} ${specificTags}`);
  }, [selectedAngleId]);

  const handleAddToSchedule = () => {
    const newPost: ScheduledPost = {
      id: Date.now(),
      date: targetDate,
      angleId: selectedAngleId,
      vibe: selectedVibe,
      type: draftFormat,
      data: { ...draftData, hashtags },
    };
    setSchedule(prev => [...prev, newPost]);
    
    // Clear data but reset hashtags
    setDraftData({});
    const specificTags = currentAngle.defaultHashtags || "";
    setHashtags(`${BASE_HASHTAGS} ${specificTags}`);
    
    // Show confirmation
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  const handleInputChange = (field: string, value: string) => {
    setDraftData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setDraftData(prev => ({ ...prev, userImage: imageUrl }));
    }
  };

  const handleTrainerLoad = (trainerId: string) => {
     const trainer = trainers.find(t => t.id === trainerId);
     if (trainer) {
        setDraftData(prev => ({
           ...prev,
           ptName: trainer.name,
           location: trainer.location,
           specialism: trainer.specialism,
           userImage: trainer.image || prev.userImage
        }));
     }
  };

  const handleShuffleBackground = () => {
      const category = currentVibeConfig?.assetCategory;
      if (!category) return;

      const eligibleAssets = BACKGROUND_ASSETS.filter(a => a.category === category);
      if (eligibleAssets.length > 0) {
          const randomAsset = eligibleAssets[Math.floor(Math.random() * eligibleAssets.length)];
          setDraftData(prev => ({ ...prev, customBackground: randomAsset.url }));
      }
  };

  const handleFetchFromAirtable = () => {
      setIsFetchingAirtable(true);
      
      // Simulate API call to Airtable base matching the template type
      setTimeout(() => {
          const mockData = AIRTABLE_MOCK_RECORDS[currentAngle.template];
          if (mockData) {
              setDraftData(prev => ({ ...prev, ...mockData }));
          }
          setIsFetchingAirtable(false);
      }, 800);
  };

  const syncTrainers = () => {
     // Simulate API call delay
     setTimeout(() => {
        setTrainers(MOCK_TRAINERS);
     }, 500);
  };

  const handleAutoFill = () => {
    const base = { ptName: "Jack Miller", location: "Hastings", specialism: "Weight Loss" };
    const randomNum = Math.floor(Math.random() * 500);
    
    if (currentAngle.template.includes('rank')) {
       setDraftData({ ...base, rank1: "Strength", rank2: "Cardio", rank3: "HIIT", locationName: "St Leonards" });
    } else if (currentAngle.template.includes('Earnings')) {
       setDraftData({ ...base, amount: "£2,450", period: "Oct 23", locationName: "Hastings" });
    } else if (currentAngle.template.includes('stat')) {
       setDraftData({ ...base, count: `${randomNum}`, locationName: "Brighton", enquiryCount: "100", signupCount: "45", percentage: "45%" });
    } else {
       setDraftData({ ...base, reviewText: "Absolutely life changing results!", stars: "5", headline: "5 Ways to Recover", appName: "MyFitnessPal", benefit: "Calorie Tracking", gymName: "Gold's Gym" });
    }
  };

  return (
    <div className="flex h-screen bg-[#f1f5f9] font-sans text-slate-800 overflow-hidden">
      
      {/* Sidebar - Internal Tool Style (Dark, utilitarian) */}
      <div className="w-16 lg:w-60 bg-[#0f172a] text-white flex flex-col shrink-0 z-30 shadow-2xl border-r border-slate-900">
        <div className="h-16 flex items-center px-3 lg:px-4 border-b border-slate-800">
           <Logo />
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-6">
          <div>
            <p className="hidden lg:block text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Content</p>
            <SidebarItem icon={<Plus />} label="Generator" active={activeTab === 'studio'} onClick={() => setActiveTab('studio')} />
            <SidebarItem icon={<Layout />} label="Feed Planner" active={activeTab === 'grid'} onClick={() => setActiveTab('grid')} />
            <SidebarItem icon={<CalendarIcon />} label="Schedule" active={activeTab === 'calendar'} onClick={() => setActiveTab('calendar')} />
          </div>
          
          <div>
            <p className="hidden lg:block text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Data</p>
            <SidebarItem icon={<Library />} label="Library" active={activeTab === 'library'} onClick={() => setActiveTab('library')} />
          </div>
        </div>

        <div className="p-3 border-t border-slate-800">
             <SidebarItem icon={<Settings />} label="Settings" secondary onClick={() => {}} />
             <SidebarItem icon={<LogOut />} label="Log Out" secondary onClick={() => {}} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Navigation Bar - Utility Focused */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-2 text-sm text-slate-500">
             <span className="font-medium hover:text-slate-800 cursor-pointer">Dashboard</span>
             <ChevronRight size={14} />
             <span className="font-bold text-slate-800">
                {activeTab === 'studio' ? 'Content Generator' : activeTab === 'grid' ? 'Social Grid' : activeTab === 'library' ? 'Trainer Library' : 'Schedule'}
             </span>
          </div>
          
          <div className="flex items-center gap-3">
             {showSavedToast && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-200 text-xs font-bold animate-fade-in">
                    <Check size={14} /> Saved to Planner
                </div>
             )}
             
             {activeTab === 'studio' && (
               <>
                 <button onClick={handleAutoFill} className="px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-xs text-slate-500 font-medium transition-colors">
                    Debug: Auto-Fill
                 </button>
                 <button className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-md flex items-center gap-2 transition-colors">
                    <Download size={14} /> Export PNG
                 </button>
               </>
             )}
          </div>
        </header>

        <main className="flex-1 overflow-hidden relative">
          
          {activeTab === 'studio' && (
            <div className="h-full flex flex-col md:flex-row">
                
                {/* Configuration Panel - Density Increased for Admin feel */}
                <div className="w-full md:w-[400px] bg-white border-r border-slate-200 h-full flex flex-col overflow-y-auto no-scrollbar shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
                    <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-sm font-bold text-slate-800 mb-1">Configuration</h2>
                        <p className="text-xs text-slate-500">Set the parameters for your generated asset.</p>
                    </div>
                    
                    {/* Quick Load Trainer */}
                    <div className="px-5 pt-5">
                       <select 
                          onChange={(e) => handleTrainerLoad(e.target.value)}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 outline-none hover:border-slate-300 focus:border-slate-400 transition-colors"
                          defaultValue=""
                       >
                          <option value="" disabled>-- Quick Load from Library --</option>
                          {trainers.length > 0 ? (
                             trainers.map(t => <option key={t.id} value={t.id}>{t.name} ({t.location})</option>)
                          ) : (
                             <option disabled>No trainers loaded (Go to Library)</option>
                          )}
                       </select>
                    </div>

                    <div className="p-5 border-b border-slate-100">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">1. Post Type</label>
                        <select 
                           value={selectedAngleId} 
                           onChange={(e) => {
                             setSelectedAngleId(parseInt(e.target.value));
                             setDraftData({}); 
                           }}
                           className="w-full p-2.5 bg-white border border-slate-200 rounded-md text-sm font-medium focus:ring-1 focus:ring-slate-800 focus:border-slate-800 outline-none transition-colors"
                        >
                            {CONTENT_ANGLES.map(a => <option key={a.id} value={a.id}>{a.id}. {a.label}</option>)}
                        </select>
                    </div>

                    <div className="p-5 border-b border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                             <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">2. Visual Style</label>
                             {currentVibeConfig?.assetCategory && (
                                 <button 
                                    onClick={handleShuffleBackground}
                                    className="text-[10px] text-indigo-600 font-bold flex items-center gap-1 hover:bg-indigo-50 px-2 py-0.5 rounded transition-colors"
                                 >
                                     <Shuffle size={10} /> Shuffle BG
                                 </button>
                             )}
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {VIBES.map(v => (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedVibe(v.id as VibeType)}
                                    className={`px-1 py-2 rounded border text-[10px] font-bold uppercase transition-all truncate ${selectedVibe === v.id ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}`}
                                >
                                    {v.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-5 border-b border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Dimensions</label>
                            <div className="flex bg-slate-100 p-0.5 rounded-md border border-slate-200">
                                <button onClick={() => setDraftFormat('post')} className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-sm transition-all ${draftFormat === 'post' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}>Post</button>
                                <button onClick={() => setDraftFormat('story')} className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-sm transition-all ${draftFormat === 'story' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}>Story</button>
                            </div>
                        </div>
                        <div>
                             <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Target Date</label>
                             <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 p-1.5 outline-none focus:border-slate-800"/>
                        </div>
                    </div>

                    <div className="p-5 flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">3. Data Points</label>
                            <button 
                                onClick={handleFetchFromAirtable}
                                className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 hover:bg-emerald-50 px-2 py-0.5 rounded transition-colors"
                                disabled={isFetchingAirtable}
                            >
                                {isFetchingAirtable ? <RefreshCw size={10} className="animate-spin"/> : <Database size={10} />} 
                                {isFetchingAirtable ? 'Fetching...' : 'Fetch from Airtable'}
                            </button>
                        </div>
                        
                        {currentAngle.requiresImage && (
                          <div className="mb-4">
                            <label className="block text-[10px] font-bold text-slate-500 mb-1">
                                <ImageIcon size={10} className="inline mr-1" />
                                Upload Image
                            </label>
                            <div className="flex items-center gap-2">
                                <label className="cursor-pointer w-full flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                                    {draftData.userImage ? (
                                        <div className="relative w-full h-20 bg-slate-100 rounded overflow-hidden">
                                            <img src={draftData.userImage} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xs font-bold hover:bg-black/30 transition-colors">Change</div>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload size={20} className="text-slate-400 mb-2"/>
                                            <span className="text-xs text-slate-500 font-medium">Click to upload</span>
                                        </>
                                    )}
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            </div>
                          </div>
                        )}

                        <div className="space-y-3 mb-6">
                            {currentAngle.fields.map(field => (
                                <div key={field}>
                                    <label className="block text-[10px] font-bold text-slate-500 mb-1 capitalize">
                                        {field.replace(/([A-Z])/g, ' $1').trim()}
                                    </label>
                                    <input 
                                        type="text"
                                        value={draftData[field] || ''}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                        className="w-full p-2.5 bg-white border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-slate-800 focus:border-slate-800 outline-none transition-all placeholder:text-slate-300"
                                        placeholder={`Value for ${field}...`}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        <div>
                            <label className="flex items-center gap-1 text-[10px] font-bold text-slate-500 mb-1">
                                <Hash size={10} /> Hashtag Group
                            </label>
                            <textarea 
                                value={hashtags}
                                onChange={(e) => setHashtags(e.target.value)}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:ring-1 focus:ring-slate-800 outline-none transition-all text-slate-600 h-24 resize-none font-mono"
                            />
                        </div>
                    </div>

                    <div className="p-5 bg-slate-50 border-t border-slate-200 mt-auto">
                        <button 
                            onClick={handleAddToSchedule}
                            className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                        >
                            <CalendarIcon size={16} />
                            Schedule to Planner
                        </button>
                    </div>
                </div>

                {/* Workspace / Canvas Area */}
                <div className="flex-1 bg-[#e2e8f0] flex items-center justify-center p-8 overflow-hidden relative">
                    {/* Checkerboard pattern for transparency indication */}
                    <div className="absolute inset-0 opacity-[0.4]" style={{ 
                        backgroundImage: 'linear-gradient(45deg, #cbd5e1 25%, transparent 25%, transparent 75%, #cbd5e1 75%, #cbd5e1), linear-gradient(45deg, #cbd5e1 25%, transparent 25%, transparent 75%, #cbd5e1 75%, #cbd5e1)', 
                        backgroundPosition: '0 0, 10px 10px', 
                        backgroundSize: '20px 20px' 
                    }}></div>
                    
                    <div className="flex flex-col items-center gap-4 z-10 w-full max-w-lg">
                         <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded text-[10px] font-bold text-white shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 
                            CANVAS PREVIEW: {draftFormat === 'story' ? '1080x1920 (9:16)' : '1080x1080 (1:1)'}
                         </div>

                         {/* Rendering Frame */}
                        <div 
                           className={`transition-all duration-300 ease-out shadow-2xl overflow-hidden border border-slate-300 bg-white relative ${draftFormat === 'story' ? 'w-[360px] h-[640px]' : 'w-[450px] h-[450px]'}`}
                        >
                            <div className="h-full w-full bg-white relative overflow-hidden">
                               <SocialPost 
                                   template={currentAngle.template} 
                                   data={draftData} 
                                   vibe={selectedVibe}
                                   type={draftFormat}
                               />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )}

          {activeTab === 'grid' && (
             <div className="h-full overflow-y-auto bg-slate-50">
                <GridPreview schedule={schedule} />
             </div>
          )}

          {activeTab === 'calendar' && (
             <CalendarView schedule={schedule} onNewClick={() => setActiveTab('studio')} />
          )}

          {activeTab === 'library' && (
             <LibraryView trainers={trainers} onSync={syncTrainers} />
          )}

        </main>
      </div>
    </div>
  );
}