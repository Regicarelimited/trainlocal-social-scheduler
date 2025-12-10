import React from 'react';
import { 
  Users, CheckCircle2, MapPin, Star, Share2, PoundSterling, Layout, 
  Award, BarChart2, Type, Trophy, Dumbbell, Smartphone, Activity, Clock
} from 'lucide-react';
import { VIBES } from '../constants';
import { PostData, VibeType } from '../types';

interface SocialPostProps {
  template: string;
  data: PostData;
  vibe: VibeType;
  type: 'post' | 'story';
}

// Background Component that handles images vs gradients
const VibeBackground = ({ theme, customImage }: { theme: any, customImage?: string }) => (
  <>
    {customImage || theme.backgroundImage ? (
      <>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${customImage || theme.backgroundImage})` }}
        />
        <div className={`absolute inset-0 z-0 ${theme.colors.overlay}`} />
      </>
    ) : (
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.colors.gradient} z-0`} />
    )}
  </>
);

// Background Pattern Component
const PatternOverlay = ({ opacity = 0.1 }) => (
  <div className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay" style={{ opacity }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

// Enhanced Brand Logo
const BrandLogo = ({ color = "currentColor", fill = "none" }) => (
  <div className={`absolute top-6 left-6 z-20 w-12 h-12`}>
     <svg viewBox="0 0 100 130" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="lGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff7f50"/>
            <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
        </defs>
        <path d="M50 0C22.4 0 0 22.4 0 50C0 85 50 130 50 130C50 130 100 85 100 50C100 22.4 77.6 0 50 0Z" fill={fill === 'white' ? '#fff' : '#1e1b4b'} />
        <circle cx="50" cy="50" r="35" fill={fill === 'white' ? '#1e1b4b' : '#fff'}/>
        <text x="42" y="62" fontSize="32" fontWeight="bold" textAnchor="middle" fill={fill === 'white' ? '#fff' : '#1e1b4b'} fontFamily="sans-serif">T</text>
        <text x="58" y="62" fontSize="32" fontWeight="bold" textAnchor="middle" fill="url(#lGrad)" fontFamily="sans-serif">L</text>
    </svg>
  </div>
);

export const SocialPost: React.FC<SocialPostProps> = ({ template, data, vibe, type }) => {
  const theme = VIBES.find(v => v.id === vibe) || VIBES[0];
  const isStory = type === 'story';
  
  // --- GROWTH ---
  if (template === 'newProfile') {
    return (
      <div className={`h-full w-full relative flex flex-col p-8 overflow-hidden ${theme.colors.bg}`}>
        <VibeBackground theme={theme} customImage={data.customBackground} />
        {!(data.customBackground || theme.backgroundImage) && <PatternOverlay />}
        <BrandLogo fill={theme.colors.text === 'text-white' ? 'white' : 'color'} />
        
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center">
          <div className={`bg-white p-2 rounded-full mb-6 shadow-xl animate-fade-in`}>
             <div className={`w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden`}>
                {data.userImage ? (
                  <img src={data.userImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Users size={48} />
                )}
             </div>
          </div>
          <div className={`${theme.colors.accent} font-bold text-sm uppercase tracking-[0.2em] mb-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block`}>New Talent</div>
          <h2 className={`${theme.colors.text} ${theme.font.heading} text-5xl font-black mb-6 leading-tight drop-shadow-lg`}>{data.ptName || "NAME"}</h2>
          <div className="flex flex-wrap gap-2 justify-center">
             <span className={`${theme.colors.secondary} ${theme.colors.text} px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg`}>{data.location || "Location"}</span>
             <span className={`bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg`}>{data.specialism || "Specialism"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (template === 'profileClaim') {
    return (
      <div className={`h-full w-full bg-white relative flex flex-col overflow-hidden`}>
         <div className={`h-[45%] relative rounded-b-[3rem] overflow-hidden`}>
            <VibeBackground theme={theme} customImage={data.customBackground} />
         </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full text-center border border-slate-100 relative mt-12">
               <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 ${theme.colors.bg} rounded-full border-4 border-white flex items-center justify-center ${theme.colors.text} shadow-lg overflow-hidden`}>
                 {data.userImage ? (
                   <img src={data.userImage} alt="Profile" className="w-full h-full object-cover" />
                 ) : (data.customBackground || theme.backgroundImage) ? (
                   <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>
                 ) : (
                   <CheckCircle2 size={36}/>
                 )}
               </div>
               <div className="mt-8">
                    <h3 className={`text-slate-400 font-bold uppercase tracking-widest text-xs mb-1`}>Official</h3>
                    <h2 className={`text-slate-900 ${theme.font.heading} text-2xl font-black mb-4`}>Profile Verified</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-4 rounded-full"></div>
                    <p className={`${theme.colors.accent.replace('text-','text-')} text-xl font-bold`}>{data.ptName || "PT Name"}</p>
               </div>
            </div>
         </div>
         <BrandLogo />
      </div>
    );
  }

  if (template === 'newLocation') {
    return (
      <div className={`h-full w-full ${theme.colors.secondary} relative flex flex-col items-center justify-center p-8`}>
        <VibeBackground theme={theme} customImage={data.customBackground} />
        <BrandLogo fill={theme.colors.text === 'text-white' ? 'white' : 'color'} />
        <div className={`relative z-10 border-4 ${theme.colors.text} p-8 text-center backdrop-blur-md bg-white/10 shadow-2xl`}>
            <MapPin size={48} className={`${theme.colors.accent} mx-auto mb-4 drop-shadow-md`} />
            <h1 className={`${theme.colors.text} ${theme.font.heading} text-5xl font-black mb-2 uppercase drop-shadow-lg`}>{data.locationName || "CITY"}</h1>
            <div className={`${theme.colors.bg} ${theme.colors.text} inline-block px-4 py-2 font-bold text-sm tracking-widest shadow-lg border border-white/20`}>
                NOW LIVE • {data.gymCount || "0"} GYMS
            </div>
        </div>
      </div>
    );
  }

  // --- SOCIAL PROOF ---
  if (template === 'newReview') {
    return (
      <div className={`h-full w-full ${theme.colors.bg} p-8 flex flex-col justify-center relative overflow-hidden`}>
         <VibeBackground theme={theme} customImage={data.customBackground} />
         <div className={`${theme.colors.text} opacity-10 absolute top-4 right-4`}>
             <Star size={120} />
         </div>
         <div className="relative z-10">
            <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} className={`${theme.colors.accent} fill-current drop-shadow-md`} size={28} />)}
            </div>
            <h2 className={`${theme.colors.text} ${theme.font.heading} text-4xl font-bold leading-tight mb-8 drop-shadow-md`}>
              "{data.reviewText || "Absolutely incredible results."}"
            </h2>
            <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                <div className={`w-14 h-14 rounded-full ${theme.colors.secondary} flex items-center justify-center ${theme.colors.text} font-bold text-2xl shadow-lg border-2 border-white/20 overflow-hidden`}>
                    {data.userImage ? (
                      <img src={data.userImage} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      (data.ptName || "T").charAt(0)
                    )}
                </div>
                <div>
                    <p className={`${theme.colors.text} font-bold text-lg drop-shadow-sm`}>{data.ptName || "Trainer Name"}</p>
                    <p className={`${theme.colors.accent} text-xs uppercase tracking-wider font-bold`}>Verified Trainer</p>
                </div>
            </div>
         </div>
      </div>
    );
  }

  if (template === 'mostReviews') {
      return (
          <div className={`h-full w-full ${theme.colors.bg} flex flex-col items-center pt-16 relative overflow-hidden`}>
              <VibeBackground theme={theme} customImage={data.customBackground} />
              <div className={`absolute top-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_0%,white,transparent_70%)]`}></div>
              <BrandLogo fill="white" />
              <div className="mt-12 relative z-10 flex flex-col items-center">
                  <h3 className={`${theme.colors.accent} ${theme.font.heading} font-bold tracking-widest uppercase text-sm mb-8 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm`}>Review Champion</h3>
                  <div className="relative w-48 h-48">
                     <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse opacity-50 blur-xl"></div>
                     <div className={`relative w-full h-full rounded-full ${theme.colors.secondary} border-4 border-white/10 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm overflow-hidden`}>
                        {data.userImage ? (
                          <img src={data.userImage} alt="User" className="w-full h-full object-cover" />
                        ) : (
                          <>
                            <span className={`${theme.colors.text} text-7xl font-black`}>{data.reviewCount || "50"}</span>
                            <span className={`${theme.colors.text} text-xs uppercase mt-2 font-bold opacity-70`}>Reviews</span>
                          </>
                        )}
                     </div>
                  </div>
                  <h2 className={`${theme.colors.text} ${theme.font.heading} text-3xl font-bold mt-10 text-center px-4 drop-shadow-lg`}>{data.ptName || "PT Name"}</h2>
              </div>
          </div>
      );
  }

  if (template === 'mostReferrals') {
      return (
          <div className={`h-full w-full bg-white flex flex-col`}>
              <div className={`h-2/3 ${theme.colors.bg} rounded-bl-[4rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-lg`}>
                   <VibeBackground theme={theme} customImage={data.customBackground} />
                   <PatternOverlay opacity={0.2} />
                   <Share2 size={120} className="absolute -right-8 -top-8 opacity-10 text-white" />
                   <div className="relative z-10">
                        <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase mb-4 border border-white/20">Trending</div>
                        <h2 className={`${theme.colors.text} ${theme.font.heading} text-5xl font-black uppercase mb-2 leading-none drop-shadow-lg`}>Top<br/>Referrer</h2>
                   </div>
              </div>
              <div className="flex-1 p-8 flex items-center justify-between">
                  <div>
                      <p className="text-slate-400 text-xs font-bold uppercase mb-1">Trainer</p>
                      <p className="text-slate-900 font-bold text-xl">{data.ptName || "Name"}</p>
                  </div>
                  <div className="text-right">
                      <p className="text-slate-400 text-xs font-bold uppercase mb-1">Referrals</p>
                      <p className={`text-5xl font-black ${theme.colors.accent.replace('text-', 'text-')}`.replace('text-white', 'text-slate-900')}>{data.referralCount || "0"}</p>
                  </div>
              </div>
          </div>
      );
  }

  // --- BUSINESS ---
  if (template === 'platformEarnings') {
    return (
        <div className={`h-full w-full ${theme.colors.bg} flex flex-col p-8 relative`}>
            <VibeBackground theme={theme} customImage={data.customBackground} />
            <div className="flex justify-between items-start mb-12 relative z-10">
                <BrandLogo fill="white" />
                <div className={`${theme.colors.secondary} ${theme.colors.text} px-3 py-1 text-xs font-bold rounded shadow-lg backdrop-blur-md`}>{data.period || "Period"}</div>
            </div>
            <div className="relative z-10 mt-8">
                <h3 className={`${theme.colors.text} opacity-80 font-bold uppercase text-xs mb-2 drop-shadow-md`}>Total Earnings</h3>
                <h2 className={`${theme.colors.text} text-6xl font-black mb-8 tracking-tighter drop-shadow-xl`}>{data.amount || "£0"}</h2>
            </div>
            <div className="flex-1 flex items-end gap-3 relative z-10">
                 {[40, 60, 50, 85].map((h, i) => (
                     <div key={i} className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-gradient-to-t from-teal-400 to-teal-300' : theme.colors.secondary} backdrop-blur-sm border-t border-white/10`} style={{ height: `${h}%` }}>
                        {i === 3 && <div className="text-center pt-2 text-teal-900 font-bold text-xs opacity-70">Top</div>}
                     </div>
                 ))}
            </div>
        </div>
    );
  }

  if (template === 'locationEarnings') {
    return (
      <div className="h-full w-full bg-white p-8 flex flex-col justify-between border-[1rem] border-slate-50 relative overflow-hidden">
          {(data.customBackground || theme.backgroundImage) && <div className="absolute inset-0 opacity-10 bg-cover bg-center grayscale" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>}
          <div className="relative z-10">
             <div className={`w-14 h-14 ${theme.colors.bg} rounded-2xl flex items-center justify-center ${theme.colors.text} mb-6 shadow-xl rotate-3`}>
                <PoundSterling size={28} />
             </div>
             <h2 className={`text-slate-900 ${theme.font.heading} text-4xl font-black uppercase leading-none`}>{data.locationName || "Location"}</h2>
             <p className="text-slate-400 text-xs uppercase font-bold mt-3 tracking-widest">Highest Revenue Zone</p>
          </div>
          <div className="border-t-2 border-slate-100 pt-6 relative z-10">
              <p className={`text-6xl font-mono text-slate-900 tracking-tighter font-bold`}>{data.amount}</p>
              <p className={`${theme.colors.bg.replace('bg-', 'text-')} text-xs font-bold mt-2 uppercase`}>Generated this month</p>
          </div>
      </div>
    );
  }

  // --- EDUCATIONAL ---
  if (template === 'caseStudy') {
    return (
        <div className={`h-full w-full ${theme.colors.secondary} flex flex-col`}>
            <div className={`h-[45%] ${theme.colors.bg} relative overflow-hidden flex items-center justify-center`}>
                {data.userImage ? (
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.userImage})` }}>
                    <div className={`absolute inset-0 ${theme.colors.overlay || 'bg-black/50'}`}></div>
                  </div>
                ) : (
                   <VibeBackground theme={theme} customImage={data.customBackground} />
                )}
                {!data.userImage && <PatternOverlay />}
                <h1 className={`${theme.colors.text} ${theme.font.heading} text-5xl font-black uppercase text-center px-4 drop-shadow-xl relative z-10`}>{data.ptName}'s<br/>Results</h1>
            </div>
            <div className="h-[55%] bg-white p-8 flex flex-col justify-center relative">
                <div className={`absolute -top-6 left-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 font-bold text-xs uppercase tracking-widest shadow-xl transform -skew-x-12`}>
                    Case Study
                </div>
                <p className="text-slate-700 text-xl leading-relaxed font-serif italic mb-6 relative z-10">"{data.result || "Result description goes here."}"</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase border-t pt-4 border-slate-100">
                    <Clock size={14} /> {data.timeframe || "Duration"}
                </div>
            </div>
        </div>
    );
  }

  if (template === 'blogPromo') {
    return (
        <div className={`h-full w-full bg-slate-50 p-8 flex flex-col justify-center border-l-[24px] ${theme.colors.bg.replace('bg-', 'border-')} relative overflow-hidden`}>
             {data.userImage ? (
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.userImage})` }}>
                     <div className="absolute inset-0 bg-white/80"></div>
                 </div>
             ) : (data.customBackground || theme.backgroundImage) && (
                <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>
             )}
            <BrandLogo />
            <div className="mt-12 relative z-10">
                <span className={`${theme.colors.bg.replace('bg-', 'text-')} font-serif italic text-2xl mb-4 block`}>{data.category || "Category"}</span>
                <h1 className={`text-5xl sm:text-6xl font-black text-slate-900 leading-[0.9] mb-8`}>{data.headline || "Headline Goes Here"}</h1>
                <div className="flex items-center gap-3 group cursor-pointer">
                   <div className={`h-0.5 w-12 ${theme.colors.bg.replace('bg-', 'bg-')} transition-all group-hover:w-20`}></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Read Now</span>
                </div>
            </div>
        </div>
    );
  }

  // --- COMMUNITY ---
  if (template === 'monthlyStar') {
    return (
        <div className={`h-full w-full bg-gradient-to-b ${theme.colors.gradient} flex flex-col items-center justify-center p-6 text-center relative overflow-hidden`}>
             {data.userImage ? (
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.userImage})` }}>
                     <div className={`absolute inset-0 ${theme.colors.overlay || 'bg-black/60'}`}></div>
                 </div>
             ) : (
                <VibeBackground theme={theme} customImage={data.customBackground} />
             )}
            
            <div className="mb-8 relative z-10">
                 {data.userImage ? (
                   <div className="w-48 h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto">
                      <img src={data.userImage} className="w-full h-full object-cover" />
                   </div>
                 ) : (
                    <>
                        <div className="absolute inset-0 bg-white blur-2xl opacity-40 rounded-full animate-pulse"></div>
                        <Trophy size={100} className={`${theme.colors.text} relative z-10 drop-shadow-2xl`} />
                    </>
                 )}
            </div>
            <h3 className={`${theme.colors.accent} font-bold tracking-[0.3em] text-xs uppercase mb-4 relative z-10 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full`}>Trainer of the Month</h3>
            <h1 className={`${theme.colors.text} ${theme.font.heading} text-5xl sm:text-6xl font-black mb-8 relative z-10 drop-shadow-xl`}>{data.ptName || "Name"}</h1>
            <div className={`${theme.colors.secondary} backdrop-blur-xl rounded-2xl p-6 text-sm font-medium leading-relaxed border border-white/20 ${theme.colors.text} shadow-2xl max-w-xs relative z-10`}>
                "{data.reason || "Outstanding dedication to client success."}"
            </div>
        </div>
    );
  }

  // --- STATS ---
  if (template === 'statPTs' || template === 'statUsers') {
    const isUsers = template === 'statUsers';
    return (
        <div className={`h-full w-full ${theme.colors.bg} flex flex-col items-center justify-center relative overflow-hidden`}>
            <VibeBackground theme={theme} customImage={data.customBackground} />
            <PatternOverlay opacity={0.15} />
            <div className={`text-[240px] font-black absolute -right-16 -bottom-24 opacity-10 ${theme.colors.text} select-none`}>
                {isUsers ? 'USR' : 'PT'}
            </div>
            <div className="text-center relative z-10 p-8 border-y border-white/10 w-full backdrop-blur-sm">
                <div className={`text-8xl font-black ${theme.colors.text} mb-4 tracking-tighter drop-shadow-lg`}>{data.count || "0"}</div>
                <div className={`${theme.colors.accent} font-bold uppercase tracking-[0.3em] text-sm`}>
                    Total {isUsers ? 'Users' : 'Trainers'}
                </div>
            </div>
        </div>
    );
  }

  if (template === 'statPTsLoc' || template === 'statUsersLoc') {
    return (
        <div className={`h-full w-full bg-white flex flex-col`}>
             <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
                 {(data.customBackground || theme.backgroundImage) && <div className="absolute inset-0 opacity-20 bg-cover bg-center grayscale" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>}
                 <BrandLogo />
                 <div className="text-center mt-8 relative z-10">
                    <h2 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 bg-white/50 px-3 py-1 rounded-full">Live in {data.locationName}</h2>
                    <div className={`text-9xl font-black ${theme.colors.bg.replace('bg-', 'text-')} drop-shadow-2xl`}>{data.count || "0"}</div>
                 </div>
             </div>
             <div className={`h-20 ${theme.colors.bg} flex items-center justify-center relative`}>
                <VibeBackground theme={theme} customImage={data.customBackground} />
                <span className={`${theme.colors.text} font-bold uppercase tracking-[0.2em] text-sm relative z-10`}>
                    {template === 'statPTsLoc' ? 'Active Trainers' : 'Active Users'}
                </span>
             </div>
        </div>
    );
  }

  if (template === 'conversionStats') {
    return (
        <div className={`h-full w-full ${theme.colors.secondary} flex flex-col p-8 relative overflow-hidden`}>
            <VibeBackground theme={theme} customImage={data.customBackground} />
            <h3 className={`${theme.colors.text} font-bold mb-10 uppercase text-xs tracking-widest border-b border-white/10 pb-4 relative z-10`}>This Month's Funnel</h3>
            <div className="space-y-6 relative z-10">
                <div className="bg-white/5 p-6 rounded-r-3xl w-full border-l-4 border-white/30 backdrop-blur-sm">
                    <p className={`text-xs ${theme.colors.text} opacity-80 font-bold uppercase mb-1`}>Enquiries</p>
                    <p className={`text-3xl font-black ${theme.colors.text}`}>{data.enquiryCount || "0"}</p>
                </div>
                <div className={`bg-gradient-to-r from-white/10 to-transparent p-6 rounded-r-3xl w-[75%] border-l-4 ${theme.colors.accent.replace('text-', 'border-')} backdrop-blur-sm shadow-lg`}>
                    <p className={`text-xs ${theme.colors.accent} font-bold uppercase mb-1`}>Sign Ups</p>
                    <p className={`text-3xl font-black ${theme.colors.accent}`}>{data.signupCount || "0"}</p>
                </div>
            </div>
            <div className="mt-auto text-center border-t border-white/10 pt-6 relative z-10">
                <p className={`text-7xl font-black ${theme.colors.text} drop-shadow-lg`}>{data.percentage || "0%"}</p>
                <p className={`text-xs ${theme.colors.text} opacity-60 font-bold uppercase mt-2 tracking-widest`}>Conversion Rate</p>
            </div>
        </div>
    );
  }

  // --- RANKING ---
  if (template === 'rankPlatform') {
    return (
        <div className={`h-full w-full ${theme.colors.bg} flex flex-col items-center justify-end pb-12 px-8 text-center relative overflow-hidden`}>
             <VibeBackground theme={theme} customImage={data.customBackground} />
             <h2 className={`${theme.colors.text} font-bold text-lg mb-12 absolute top-12 uppercase tracking-widest border-b pb-2 ${theme.colors.text.replace('text-', 'border-')} relative z-10`}>Top Categories</h2>
             <div className="flex items-end justify-center gap-4 w-full relative z-10">
                 <div className="w-1/3 bg-white/5 rounded-t-lg h-24 flex flex-col justify-end pb-4 border-t border-white/10 backdrop-blur-sm">
                    <span className={`${theme.colors.text} text-xs font-bold truncate px-1`}>{data.rank2 || "2nd"}</span>
                    <span className={`${theme.colors.text} opacity-50 text-[10px] font-bold`}>#2</span>
                 </div>
                 <div className={`w-1/3 bg-gradient-to-t ${theme.colors.gradient} rounded-t-lg h-44 flex flex-col justify-end pb-6 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border-t border-white/30 backdrop-blur-sm`}>
                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 text-black shadow-lg`}>
                        <Trophy size={20} fill="currentColor"/>
                    </div>
                    <span className="text-white text-lg font-black truncate px-1">{data.rank1 || "1st"}</span>
                    <span className="text-white opacity-80 text-xs font-bold">#1</span>
                 </div>
                 <div className="w-1/3 bg-white/5 rounded-t-lg h-20 flex flex-col justify-end pb-4 border-t border-white/10 backdrop-blur-sm">
                    <span className={`${theme.colors.text} text-xs font-bold truncate px-1`}>{data.rank3 || "3rd"}</span>
                    <span className={`${theme.colors.text} opacity-50 text-[10px] font-bold`}>#3</span>
                 </div>
             </div>
        </div>
    );
  }

  if (template === 'rankLocation') {
    return (
        <div className="h-full w-full bg-white p-8 border-[1.5rem] border-slate-100 relative">
             {(data.customBackground || theme.backgroundImage) && <div className="absolute inset-0 opacity-10 bg-cover bg-center grayscale" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>}
            <BrandLogo />
            <div className="flex items-center gap-3 mb-10 mt-12 relative z-10">
                <MapPin className={`${theme.colors.bg.replace('bg-', 'text-')}`} size={36} />
                <div>
                    <h2 className="font-black text-3xl text-slate-900 leading-none">{data.locationName || "Location"}</h2>
                    <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">Top 3 Performing</span>
                </div>
            </div>
            <div className="space-y-6 relative z-10">
                {['rank1', 'rank2', 'rank3'].map((r, i) => (
                    <div key={r} className="flex items-center gap-6 border-b-2 border-slate-50 pb-4">
                        <div className={`text-5xl font-black ${theme.colors.bg.replace('bg-', 'text-')} opacity-20 italic`}>0{i+1}</div>
                        <div className="font-bold text-slate-800 text-xl">{data[r] || `Rank ${i+1}`}</div>
                    </div>
                ))}
            </div>
        </div>
    );
  }

  if (template === 'bestGyms') {
    return (
        <div className={`h-full w-full ${theme.colors.secondary} relative flex items-center justify-center p-8 text-center`}>
            {data.userImage ? (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.userImage})` }}>
                    <div className={`absolute inset-0 ${theme.colors.overlay || 'bg-black/50'}`}></div>
                </div>
            ) : (
                <VibeBackground theme={theme} customImage={data.customBackground} />
            )}
            
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(45deg, ${theme.colors.bg.includes('white') ? '#000' : '#fff'} 25%, transparent 25%, transparent 50%, ${theme.colors.bg.includes('white') ? '#000' : '#fff'} 50%, ${theme.colors.bg.includes('white') ? '#000' : '#fff'} 75%, transparent 75%, transparent)`, backgroundSize: '30px 30px' }}></div>
            <div className={`relative z-10 bg-white p-10 shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-300 border-4 border-white`}>
                <div className="absolute -top-4 -left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md">Editor's Pick</div>
                <p className="text-slate-400 font-bold tracking-widest text-xs uppercase mb-3">Best Gym in {data.locationName || "Area"}</p>
                <h1 className={`text-4xl font-black text-slate-900 mb-4 uppercase leading-none`}>{data.gymName || "GYM NAME"}</h1>
                <div className="flex justify-center mt-2 gap-1">
                     {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400"/>)}
                </div>
            </div>
        </div>
    );
  }

  // --- TECH ---
  if (template === 'bestApps' || template === 'bestNutrition') {
     const isNutri = template === 'bestNutrition';
     const Icon = isNutri ? Activity : Smartphone;
     
     return (
        <div className={`h-full w-full ${isNutri ? 'bg-green-50' : 'bg-indigo-50'} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
             {data.userImage ? (
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.userImage})` }}>
                     <div className="absolute inset-0 bg-white/70"></div>
                 </div>
             ) : (data.customBackground || theme.backgroundImage) && (
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: `url(${data.customBackground || theme.backgroundImage})`}}></div>
             )}
             
             <div className={`absolute top-0 right-0 w-64 h-64 ${isNutri ? 'bg-green-200' : 'bg-indigo-200'} rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2`}></div>
             <BrandLogo />
             <div className={`w-40 h-40 rounded-[2.5rem] ${isNutri ? 'bg-green-500 shadow-green-200' : 'bg-indigo-600 shadow-indigo-200'} flex items-center justify-center text-white mb-10 shadow-2xl rotate-[-6deg] z-10 border-8 border-white`}>
                <Icon size={80} />
             </div>
             <div className="text-center z-10">
                 <div className={`inline-block px-4 py-1.5 rounded-full ${isNutri ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'} text-xs font-bold uppercase mb-6 tracking-wide shadow-sm`}>
                    {isNutri ? 'Nutrition Tool' : 'App of the Month'}
                 </div>
                 <h2 className="font-black text-4xl text-slate-900 mb-3 leading-tight">{data.appName || "App Name"}</h2>
                 <p className="text-slate-500 text-sm font-medium">Best for: {data.benefit || "Key Benefit"}</p>
             </div>
        </div>
     );
  }

  return <div className="h-full w-full bg-slate-100 flex items-center justify-center text-slate-400">Template Not Found</div>;
};