import React from 'react';
import { 
  CheckCircle2, MapPin, Star, Share2, PoundSterling, 
  Award, Type, Trophy, Smartphone, Activity, Clock,
  Quote, TrendingUp
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
// UPDATED: Now respects theme.colors.overlay to allow specific tinting (e.g. black/60) rather than generic opacity
const VibeBackground = ({ theme, customImage, opacity = 0.9 }: { theme: any, customImage?: string, opacity?: number }) => (
  <>
    {customImage || theme.backgroundImage ? (
      <>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${customImage || theme.backgroundImage})` }}
        />
        {/* Use the specific overlay class if available, otherwise fallback to bg color with standard opacity */}
        <div 
            className={`absolute inset-0 z-0 ${theme.colors.overlay || theme.colors.bg}`} 
            style={theme.colors.overlay ? {} : { opacity: opacity }} 
        />
      </>
    ) : (
      <div className={`absolute inset-0 ${theme.colors.bg} z-0`} />
    )}
  </>
);

const BrandLogo = ({ color = "currentColor", fill = "none" }) => (
  <div className={`absolute top-8 left-8 z-20 w-10 h-10`}>
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
  
  const headingFont = "font-poppins";
  const bodyFont = "font-lato";
  const uiFont = "font-opensans";

  switch (template) {
    case 'newProfile':
        return (
            <div className={`h-full w-full relative flex flex-col items-center justify-center p-8 overflow-hidden`}>
                <VibeBackground theme={theme} customImage={data.customBackground} />
                <BrandLogo fill="white" />
                
                <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg transform -rotate-2">
                        Just Landed
                    </div>
                    
                    <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-tr ${theme.colors.gradient} mb-6`}>
                        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-slate-200">
                            {data.userImage && <img src={data.userImage} className="w-full h-full object-cover" />}
                        </div>
                    </div>
                    
                    <h2 className={`text-white text-3xl font-bold mb-1 ${headingFont}`}>{data.ptName || "New Trainer"}</h2>
                    <p className={`text-white/80 text-sm font-medium mb-6 ${bodyFont}`}>{data.location || "Location"} • {data.specialism}</p>
                    
                    <div className={`w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider ${uiFont}`}>
                        View Profile
                    </div>
                </div>
            </div>
        );

    case 'profileClaim':
        return (
            <div className="h-full w-full relative flex flex-col items-center justify-center p-8 bg-white">
                <div className={`absolute top-0 w-full h-1/2 ${theme.colors.bg} rounded-b-[4rem] z-0`}></div>
                
                <div className={`absolute top-6 left-6 z-10 text-white`}>
                     <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">TL</div>
                         <span className={`font-bold text-sm tracking-wide ${headingFont}`}>Official</span>
                     </div>
                </div>

                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full text-center border border-slate-100 mt-12">
                    <div className={`w-28 h-28 rounded-full mx-auto -mt-20 mb-4 border-8 border-white flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${theme.colors.gradient} relative overflow-hidden`}>
                        {data.userImage ? (
                            <img src={data.userImage} className="w-full h-full object-cover" />
                        ) : (
                            <CheckCircle2 size={32} />
                        )}
                        <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
                           <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-100" />
                        </div>
                    </div>
                    <h3 className={`text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 ${uiFont}`}>Account Verified</h3>
                    <h2 className={`text-slate-900 text-3xl font-black mb-4 ${headingFont}`}>{data.ptName}</h2>
                    <div className={`inline-block px-4 py-1.5 rounded bg-slate-100 text-slate-600 font-bold text-xs ${uiFont}`}>
                        {data.location}
                    </div>
                </div>
            </div>
        );

    case 'newLocation':
        return (
            <div className={`h-full w-full relative flex flex-col justify-end p-8 overflow-hidden`}>
                <VibeBackground theme={theme} customImage={data.customBackground} opacity={0.8} />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <MapPin size={300} strokeWidth={0.5} className="text-white" />
                </div>

                <div className="relative z-10 border-l-4 border-white pl-6 mb-8">
                    <div className={`text-white/80 text-sm font-bold uppercase tracking-widest mb-1 ${uiFont}`}>Expansion</div>
                    <h1 className={`text-white text-5xl font-black mb-2 uppercase ${headingFont}`}>{data.locationName}</h1>
                    <div className="flex items-center gap-2 text-white font-medium">
                        <div className={`bg-white text-slate-900 px-2 py-0.5 rounded text-xs font-bold ${uiFont}`}>LIVE</div>
                        <span className={bodyFont}>{data.gymCount} Gyms Added</span>
                    </div>
                </div>
            </div>
        );

    case 'newReview':
        return (
            <div className={`h-full w-full relative flex flex-col p-8 justify-center ${theme.colors.bg}`}>
                <VibeBackground theme={theme} customImage={data.customBackground} opacity={0.95} />
                <Quote className="absolute top-12 left-8 text-white/20" size={80} />
                
                <div className="relative z-10 mt-8">
                    <div className="flex gap-1 mb-6">
                       {[1,2,3,4,5].map(i => <Star key={i} className={`fill-current text-yellow-400`} size={18} />)}
                    </div>
                    <h2 className={`text-white text-3xl leading-snug italic font-light mb-8 ${bodyFont}`}>
                       "{data.reviewText}"
                    </h2>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden border-2 border-white/20">
                             {data.userImage && <img src={data.userImage} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                            <p className={`text-white font-bold text-lg ${headingFont}`}>{data.ptName}</p>
                            <p className={`text-white/50 text-[10px] uppercase tracking-wider ${uiFont}`}>Top Rated Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    case 'mostReviews':
        return (
            <div className="h-full w-full relative flex flex-col items-center pt-16 bg-white overflow-hidden">
                <div className={`absolute top-0 inset-x-0 h-40 ${theme.colors.bg}`}></div>
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>
                
                <div className="relative z-10 text-center">
                    <h3 className={`text-white/80 text-xs font-bold uppercase tracking-widest mb-6 ${uiFont}`}>Community Favorite</h3>
                    <div className="relative w-40 h-40 mx-auto mb-6">
                         <div className={`absolute inset-0 rounded-full animate-spin-slow border-2 border-dashed border-slate-300 opacity-50`}></div>
                         <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                             {data.userImage && <img src={data.userImage} className="w-full h-full object-cover" />}
                         </div>
                         <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${theme.colors.gradient} text-white w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white`}>
                             <span className={`text-lg font-bold leading-none ${headingFont}`}>{data.reviewCount}</span>
                             <span className="text-[8px] font-bold uppercase">Reviews</span>
                         </div>
                    </div>
                    <h2 className={`text-slate-900 text-3xl font-black ${headingFont}`}>{data.ptName}</h2>
                    <p className={`text-slate-400 text-sm font-medium ${bodyFont}`}>Most Reviewed This Month</p>
                </div>
            </div>
        );

    case 'mostReferrals':
        return (
            <div className={`h-full w-full relative flex flex-col p-8 justify-between ${theme.colors.bg}`}>
                <div className="flex justify-between items-start">
                    <Share2 className="text-white/80" size={32} />
                    <div className={`text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-2 py-1 rounded ${uiFont}`}>Connector</div>
                </div>

                <div className="text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full"></div>
                    
                    <h1 className={`text-white text-8xl font-black mb-2 ${headingFont}`}>{data.referralCount}</h1>
                    <p className={`text-white/80 text-lg font-light ${bodyFont}`}>Referrals Made</p>
                </div>

                <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-4 border-white mb-3 overflow-hidden shadow-lg">
                        {data.userImage && <img src={data.userImage} className="w-full h-full object-cover" />}
                    </div>
                    <p className={`text-white font-bold text-xl ${headingFont}`}>{data.ptName}</p>
                </div>
            </div>
        );

    case 'platformEarnings':
        return (
            <div className="h-full w-full relative bg-slate-50 flex flex-col p-8">
                 <div className="flex-1 flex flex-col justify-center">
                     <p className={`text-slate-400 font-bold text-xs uppercase tracking-widest mb-2 ${uiFont}`}>Total Revenue</p>
                     <h2 className={`text-slate-900 text-6xl font-black tracking-tight mb-4 ${headingFont}`}>{data.amount}</h2>
                     <div className={`inline-flex items-center gap-2 bg-slate-200 ${theme.colors.text} px-3 py-1 rounded-full text-xs font-bold self-start ${uiFont}`}>
                        <TrendingUp size={14} /> +12.5% vs last month
                     </div>
                 </div>
                 
                 <div className="h-32 flex items-end gap-2 mt-auto opacity-80">
                    <div className="flex-1 bg-slate-200 rounded-t h-[40%]"></div>
                    <div className="flex-1 bg-slate-200 rounded-t h-[60%]"></div>
                    <div className="flex-1 bg-slate-200 rounded-t h-[30%]"></div>
                    <div className="flex-1 bg-slate-200 rounded-t h-[50%]"></div>
                    <div className={`flex-1 rounded-t h-[80%] bg-gradient-to-t ${theme.colors.gradient}`}></div>
                 </div>
                 <p className={`text-center text-slate-400 text-xs font-bold mt-4 uppercase ${uiFont}`}>{data.period}</p>
            </div>
        );

    case 'locationEarnings':
        return (
            <div className={`h-full w-full relative flex flex-col p-8 ${theme.colors.bg}`}>
                <BrandLogo fill="white" />
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <PoundSterling size={120} className="text-white" />
                </div>
                
                <div className="mt-auto">
                    <div className="flex items-center gap-2 text-white/60 mb-2">
                        <MapPin size={16} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${uiFont}`}>{data.locationName}</span>
                    </div>
                    <h1 className={`text-white text-6xl font-black mb-4 ${headingFont}`}>{data.amount}</h1>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full w-3/4 bg-gradient-to-r ${theme.colors.gradient}`}></div>
                    </div>
                    <p className={`text-white/60 text-xs font-bold mt-2 text-right ${uiFont}`}>Top Performing Area</p>
                </div>
            </div>
        );

    case 'caseStudy':
        return (
            <div className="h-full w-full relative flex flex-col bg-white">
                <div className="h-3/5 w-full relative overflow-hidden bg-slate-200">
                    {data.userImage ? (
                        <img src={data.userImage} className="w-full h-full object-cover grayscale contrast-125" />
                    ) : (
                        <div className="w-full h-full bg-slate-300"></div>
                    )}
                    <div className={`absolute bottom-0 left-0 bg-white px-4 py-2 font-black text-xl uppercase ${headingFont}`}>Transformation</div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                    <h2 className={`text-slate-900 font-bold text-lg mb-2 ${headingFont}`}>{data.ptName}'s Client</h2>
                    <p className={`text-slate-600 text-sm leading-relaxed mb-4 ${bodyFont}`}>{data.result}</p>
                    <div className={`flex items-center gap-2 ${theme.colors.text} text-xs font-bold uppercase tracking-wide ${uiFont}`}>
                        <Clock size={14} /> {data.timeframe} Duration
                    </div>
                </div>
            </div>
        );

    case 'monthlyStar':
        return (
            <div className={`h-full w-full relative flex flex-col items-center justify-center p-8 text-center`}>
                <VibeBackground theme={theme} customImage={data.customBackground} />
                
                <div className="relative z-10 border-2 border-white/30 p-8 bg-black/40 backdrop-blur-sm rounded-lg">
                    <Award size={48} className="text-yellow-400 mx-auto mb-4 drop-shadow-md" />
                    <h3 className={`text-white text-xs font-bold uppercase tracking-[0.3em] mb-4 ${uiFont}`}>Trainer of the Month</h3>
                    <h1 className={`text-white text-4xl font-black uppercase mb-6 drop-shadow-xl ${headingFont}`}>{data.ptName}</h1>
                    <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6"></div>
                    <p className={`text-white/90 text-sm font-medium italic ${bodyFont}`}>"{data.reason}"</p>
                    {data.userImage && (
                        <div className="w-20 h-20 rounded-full border-4 border-white mx-auto mt-6 overflow-hidden shadow-lg">
                             <img src={data.userImage} className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
            </div>
        );

    case 'statPTs':
        return (
            <div className={`h-full w-full relative flex items-center justify-center ${theme.colors.bg}`}>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] opacity-5 bg-[length:20px_20px]"></div>
                 <div className="relative z-10 text-center">
                     <h1 className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 ${headingFont}`}>{data.count}</h1>
                     <p className={`text-white/80 font-bold text-sm uppercase tracking-[0.2em] mt-2 ${uiFont}`}>Active Trainers</p>
                 </div>
            </div>
        );
        
    case 'statPTsLoc':
        return (
            <div className={`h-full w-full relative flex flex-col justify-between p-8 bg-white border-8`} style={{ borderColor: 'var(--tw-colors-slate-900)' }}>
                 <div className={`absolute inset-0 border-8 pointer-events-none opacity-10 ${theme.colors.text.replace('text-', 'border-')}`}></div>
                 
                <div className="text-right">
                    <h2 className={`text-slate-900 text-4xl font-black uppercase ${headingFont}`}>{data.locationName}</h2>
                    <div className={`text-slate-400 text-xs font-bold uppercase tracking-widest ${uiFont}`}>Area Focus</div>
                </div>
                <div className="text-left">
                    <span className={`text-[10rem] font-black leading-none ${theme.colors.text} -ml-2 ${headingFont}`}>{data.count}</span>
                    <div className={`${theme.colors.bg} text-white inline-block px-3 py-1 text-sm font-bold uppercase transform -translate-y-8 ${uiFont}`}>Trainers</div>
                </div>
            </div>
        );

    case 'statUsers':
        return (
            <div className={`h-full w-full relative flex flex-col items-center justify-center p-8 ${theme.colors.bg}`}>
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                <h2 className={`text-white text-7xl font-black mb-2 relative z-10 ${headingFont}`}>{data.count}</h2>
                <div className={`bg-white text-slate-900 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs relative z-10 ${uiFont}`}>Total Members</div>
            </div>
        );

    case 'statUsersLoc':
        return (
            <div className="h-full w-full relative flex items-center justify-center bg-slate-50 p-8">
                 <div className={`border-4 w-full h-full flex flex-col items-center justify-center relative ${theme.colors.text.replace('text-', 'border-')}`}>
                     <div className={`absolute top-0 ${theme.colors.bg} text-white px-4 py-1 font-bold text-xs uppercase -translate-y-1/2 ${uiFont}`}>{data.locationName}</div>
                     <h2 className={`${theme.colors.text} text-8xl font-black mb-4 ${headingFont}`}>{data.count}</h2>
                     <p className={`${theme.colors.text} opacity-60 font-bold text-sm uppercase tracking-wider ${uiFont}`}>Active Clients</p>
                 </div>
            </div>
        );

    case 'conversionStats':
        return (
            <div className="h-full w-full relative flex flex-col p-8 bg-slate-50">
                <h3 className={`text-slate-900 font-bold text-lg mb-8 ${headingFont}`}>Monthly Funnel</h3>
                
                <div className="space-y-4 flex-1">
                    <div className="w-full bg-slate-200 p-4 rounded-lg flex justify-between items-center">
                        <span className={`text-xs font-bold uppercase text-slate-500 ${uiFont}`}>Enquiries</span>
                        <span className={`font-bold text-xl ${headingFont}`}>{data.enquiryCount}</span>
                    </div>
                    <div className={`w-1/2 ${theme.colors.bg} text-white p-4 rounded-lg flex justify-between items-center mx-auto shadow-lg scale-110`}>
                        <span className={`text-xs font-bold uppercase text-white/60 ${uiFont}`}>Sign Ups</span>
                        <span className={`font-bold text-xl ${headingFont}`}>{data.signupCount}</span>
                    </div>
                </div>
                
                <div className="text-center mt-4">
                    <p className={`text-slate-400 text-xs font-bold uppercase mb-1 ${uiFont}`}>Conversion Rate</p>
                    <p className={`${theme.colors.text} text-4xl font-black ${headingFont}`}>{data.percentage}</p>
                </div>
            </div>
        );

    case 'blogPromo':
        return (
            <div className="h-full w-full relative flex flex-col justify-end p-10 bg-white">
                 <div className="absolute top-0 right-0 p-6">
                    <Type size={32} className="text-slate-300" />
                 </div>
                 
                 <div className="relative z-10">
                     <div className={`${theme.colors.text} font-bold italic text-xl mb-4 font-serif`}>{data.category}</div>
                     <h1 className={`text-slate-900 text-5xl font-black leading-[0.9] mb-8 ${headingFont}`}>{data.headline}</h1>
                     <div className="flex items-center gap-3">
                         <div className="h-px bg-slate-300 w-12"></div>
                         <span className={`text-slate-400 text-xs font-bold uppercase tracking-widest ${uiFont}`}>Read Now</span>
                     </div>
                 </div>
            </div>
        );

    case 'rankPlatform':
        return (
            <div className={`h-full w-full relative flex flex-col p-8 ${theme.colors.bg}`}>
                <h2 className={`text-center text-white font-bold uppercase tracking-widest text-sm mb-12 ${uiFont}`}>Top Categories</h2>
                
                <div className="flex items-end justify-center gap-4 flex-1 pb-8">
                    {/* Rank 2 */}
                    <div className="w-1/3 flex flex-col items-center">
                        <div className={`text-white/60 text-xs font-bold mb-2 ${uiFont}`}>#2</div>
                        <div className="w-full bg-white/10 rounded-t-lg h-24 flex items-end justify-center p-2">
                             <span className={`text-white text-xs font-bold text-center ${bodyFont}`}>{data.rank2}</span>
                        </div>
                    </div>
                    
                    {/* Rank 1 */}
                    <div className="w-1/3 flex flex-col items-center">
                        <div className="text-yellow-400 mb-2"><Trophy size={20}/></div>
                        {data.userImage && (
                            <div className="w-8 h-8 rounded-full border border-white mb-2 overflow-hidden">
                                <img src={data.userImage} className="w-full h-full object-cover"/>
                            </div>
                        )}
                        <div className={`w-full bg-gradient-to-b ${theme.colors.gradient} rounded-t-lg h-40 flex items-end justify-center p-2 shadow-lg relative`}>
                             <div className="absolute -top-3 bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">1st</div>
                             <span className={`text-white text-sm font-bold text-center ${bodyFont}`}>{data.rank1}</span>
                        </div>
                    </div>

                    {/* Rank 3 */}
                    <div className="w-1/3 flex flex-col items-center">
                        <div className={`text-white/60 text-xs font-bold mb-2 ${uiFont}`}>#3</div>
                        <div className="w-full bg-white/10 rounded-t-lg h-16 flex items-end justify-center p-2">
                             <span className={`text-white text-xs font-bold text-center ${bodyFont}`}>{data.rank3}</span>
                        </div>
                    </div>
                </div>
            </div>
        );

    case 'rankLocation':
        return (
            <div className="h-full w-full relative bg-white p-8">
                <div className="border-b-2 border-slate-900 pb-4 mb-6">
                    <h2 className={`text-slate-900 text-2xl font-black uppercase ${headingFont}`}>{data.locationName}</h2>
                    <p className={`text-slate-500 text-xs font-bold uppercase tracking-widest ${uiFont}`}>Leaderboard</p>
                </div>
                
                <div className="space-y-4">
                    {['rank1', 'rank2', 'rank3'].map((r, i) => (
                        <div key={r} className="flex items-center gap-4 group">
                             <div className={`text-4xl font-black ${theme.colors.text} opacity-50 group-hover:opacity-100 transition-opacity ${headingFont}`}>0{i+1}</div>
                             {i === 0 && data.userImage && (
                                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                                    <img src={data.userImage} className="w-full h-full object-cover"/>
                                </div>
                             )}
                             <div className="flex-1">
                                 <div className={`font-bold text-slate-800 text-lg ${bodyFont}`}>{data[r] || `Rank ${i+1}`}</div>
                                 <div className="h-0.5 w-full bg-slate-100 mt-2"></div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        );

    case 'bestGyms':
        return (
            <div className="h-full w-full relative flex items-center justify-center p-8 bg-black">
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
                  style={{ backgroundImage: `url(${data.userImage || data.customBackground || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000'})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-0`}></div>

                <div className="relative z-10 text-center border-y-2 border-white py-8 w-full">
                    <div className={`${theme.colors.accent} font-bold uppercase tracking-[0.2em] text-xs mb-2 ${uiFont}`}>Editor's Choice</div>
                    <h1 className={`text-white text-4xl font-black uppercase mb-2 ${headingFont}`}>{data.gymName}</h1>
                    <div className={`text-white/80 text-sm font-medium ${bodyFont}`}>Best in {data.locationName}</div>
                </div>
            </div>
        );

    case 'bestApps':
        return (
            <div className="h-full w-full relative flex flex-col items-center justify-center p-8 bg-slate-50">
                 <div className={`w-48 h-full max-h-[300px] ${theme.colors.bg} rounded-[2rem] border-4 ${theme.colors.text.replace('text-', 'border-')} shadow-2xl overflow-hidden relative flex flex-col`}>
                     <div className={`h-6 w-full flex justify-center items-center bg-black/20`}>
                         <div className="w-12 h-2 bg-black rounded-full"></div>
                     </div>
                     <div className="flex-1 bg-white p-4 flex flex-col items-center justify-center text-center">
                         {data.userImage ? (
                             <img src={data.userImage} className="w-16 h-16 rounded-xl mb-4 object-cover shadow-md" />
                         ) : (
                             <Smartphone size={40} className="text-slate-800 mb-4" />
                         )}
                         <h3 className={`font-bold text-slate-900 text-lg leading-tight mb-1 ${headingFont}`}>{data.appName}</h3>
                         <p className={`text-slate-500 text-[10px] ${bodyFont}`}>{data.benefit}</p>
                         <button className={`mt-4 ${theme.colors.bg} text-white text-[10px] font-bold px-3 py-1 rounded-full`}>GET</button>
                     </div>
                 </div>
                 <div className={`mt-6 text-center`}>
                     <div className={`${theme.colors.text} font-black text-xl uppercase ${headingFont}`}>App of the Month</div>
                 </div>
            </div>
        );

    case 'bestNutrition':
        return (
            <div className="h-full w-full relative flex flex-col p-8 bg-slate-50 border-t-[16px]" style={{ borderColor: 'var(--tw-colors-emerald-500)' }}>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-6">
                        <Activity size={32} />
                    </div>
                    <h2 className={`${theme.colors.text} text-3xl font-black mb-2 ${headingFont}`}>{data.appName}</h2>
                    <p className={`text-slate-600 font-bold text-sm mb-6 ${bodyFont}`}>"{data.benefit}"</p>
                    
                    <div className="flex gap-2">
                        <span className={`w-2 h-2 rounded-full ${theme.colors.bg}`}></span>
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                    </div>
                </div>
                <div className={`${theme.colors.text} opacity-40 font-bold text-[10px] uppercase tracking-widest ${uiFont}`}>Nutrition Tech</div>
            </div>
        );

    default:
      return <div className="h-full w-full bg-slate-100 flex items-center justify-center text-slate-400">Template Not Found</div>;
  }
};