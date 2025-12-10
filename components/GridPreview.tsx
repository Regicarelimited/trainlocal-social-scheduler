import React from 'react';
import { ScheduledPost } from '../types';
import { SocialPost } from './SocialPost';
import { CONTENT_ANGLES } from '../constants';

interface GridPreviewProps {
  schedule: ScheduledPost[];
}

export const GridPreview: React.FC<GridPreviewProps> = ({ schedule }) => {
  // We want to show at least 9 slots (3 rows)
  const slots = [...schedule].reverse(); // Show newest first
  const emptySlots = Math.max(0, 9 - slots.length);
  const totalSlots = slots.length + emptySlots;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Grid Preview</h2>
            <p className="text-slate-500 text-sm">See how your feed looks.</p>
        </div>

        {/* Mobile Mockup Wrapper */}
        <div className="max-w-[380px] mx-auto bg-white rounded-[2.5rem] border-[8px] border-slate-800 overflow-hidden shadow-2xl">
            {/* Mock Header */}
            <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-center relative">
                <span className="font-bold text-sm text-slate-800">trainlocal_official</span>
                <div className="absolute right-4 w-5 h-5 bg-slate-100 rounded-full"></div>
            </div>

            {/* Mock Profile Stats */}
            <div className="p-4 flex items-center gap-6 border-b border-slate-50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5">
                    <div className="w-full h-full bg-slate-100 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 flex justify-around text-center">
                    <div><div className="font-bold text-sm">1.2k</div><div className="text-[10px] text-slate-400">Posts</div></div>
                    <div><div className="font-bold text-sm">54k</div><div className="text-[10px] text-slate-400">Followers</div></div>
                    <div><div className="font-bold text-sm">104</div><div className="text-[10px] text-slate-400">Following</div></div>
                </div>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-3 gap-0.5 bg-slate-100">
                {Array.from({ length: totalSlots }).map((_, i) => {
                    const post = slots[i];
                    return (
                        <div key={i} className="aspect-square bg-white relative overflow-hidden group cursor-pointer">
                            {post ? (
                                <div className="w-full h-full transform scale-[1] origin-top-left">
                                     {/* We render the actual post component but scaled down via CSS or container query logic implicitly handled by flex */}
                                     <div className="w-full h-full pointer-events-none select-none">
                                        <SocialPost 
                                            template={CONTENT_ANGLES.find(a => a.id === post.angleId)?.template || 'newProfile'} 
                                            data={post.data} 
                                            vibe={post.vibe} 
                                            type="post" // Grid is always square posts
                                        />
                                     </div>
                                </div>
                            ) : (
                                <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-200"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
             {/* Mock Footer */}
             <div className="h-12 bg-white flex justify-around items-center border-t border-slate-100">
                <div className="w-5 h-5 bg-slate-800 rounded-sm"></div>
                <div className="w-5 h-5 bg-slate-200 rounded-sm"></div>
                <div className="w-5 h-5 bg-slate-200 rounded-sm"></div>
                <div className="w-5 h-5 bg-slate-200 rounded-sm"></div>
                <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
             </div>
        </div>
    </div>
  );
};