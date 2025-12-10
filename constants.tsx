import React from 'react';
import { 
  Users, CheckCircle2, MapPin, Star, Share2, PoundSterling, Layout, 
  Award, BarChart2, Type, Trophy, Dumbbell, Smartphone, Activity 
} from 'lucide-react';
import { ContentAngle, VibeConfig, Trainer, Asset, PostData } from './types';

export const VIBES: VibeConfig[] = [
  {
    id: 'classic',
    label: 'TL Classic',
    colors: {
      bg: 'bg-[#1e1b4b]',
      text: 'text-white',
      accent: 'text-teal-400',
      secondary: 'bg-slate-800',
      gradient: 'from-[#1e1b4b] to-indigo-900',
      overlay: 'bg-indigo-950/20'
    },
    font: {
      heading: 'font-sans',
      body: 'font-sans'
    }
  },
  {
    id: 'industrial',
    label: 'Industrial Gym',
    backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    assetCategory: 'gym',
    colors: {
      bg: 'bg-zinc-900',
      text: 'text-white',
      accent: 'text-orange-500',
      secondary: 'bg-black/60',
      gradient: 'from-zinc-900 via-transparent to-black',
      overlay: 'bg-black/70'
    },
    font: {
      heading: 'font-display uppercase tracking-widest',
      body: 'font-sans'
    }
  },
  {
    id: 'midnight',
    label: 'Late Night',
    backgroundImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    assetCategory: 'urban',
    colors: {
      bg: 'bg-slate-900',
      text: 'text-purple-100',
      accent: 'text-purple-400',
      secondary: 'bg-slate-900/80',
      gradient: 'from-slate-900/90 to-purple-900/90',
      overlay: 'bg-slate-900/80'
    },
    font: {
      heading: 'font-mono tracking-tighter',
      body: 'font-mono'
    }
  },
  {
    id: 'sunrise',
    label: 'Morning Grind',
    backgroundImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
    assetCategory: 'nature',
    colors: {
      bg: 'bg-orange-50',
      text: 'text-slate-900',
      accent: 'text-orange-600',
      secondary: 'bg-white/90',
      gradient: 'from-orange-500/20 to-yellow-500/20',
      overlay: 'bg-white/85'
    },
    font: {
      heading: 'font-serif italic',
      body: 'font-sans'
    }
  },
  {
    id: 'motivation',
    label: 'Hard Work',
    backgroundImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    assetCategory: 'gym',
    colors: {
      bg: 'bg-red-900',
      text: 'text-white',
      accent: 'text-red-500',
      secondary: 'bg-red-950/80',
      gradient: 'from-red-900 to-black',
      overlay: 'bg-red-950/80'
    },
    font: {
      heading: 'font-display uppercase italic',
      body: 'font-sans'
    }
  },
  {
    id: 'neon',
    label: 'Neon Glow',
    colors: {
      bg: 'bg-black',
      text: 'text-green-400',
      accent: 'text-pink-500',
      secondary: 'bg-slate-900',
      gradient: 'from-slate-900 to-black',
      overlay: 'bg-black/10'
    },
    font: {
      heading: 'font-mono tracking-tighter',
      body: 'font-mono'
    }
  },
  {
    id: 'luxury',
    label: 'Premium',
    assetCategory: 'luxury',
    colors: {
      bg: 'bg-slate-100',
      text: 'text-slate-900',
      accent: 'text-amber-600',
      secondary: 'bg-white',
      gradient: 'from-slate-100 to-slate-200',
      overlay: 'bg-white/50'
    },
    font: {
      heading: 'font-serif',
      body: 'font-sans'
    }
  },
  {
    id: 'eco',
    label: 'Wellness',
    assetCategory: 'nature',
    colors: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-900',
      accent: 'text-emerald-600',
      secondary: 'bg-white',
      gradient: 'from-emerald-50 to-teal-100',
      overlay: 'bg-emerald-50/50'
    },
    font: {
      heading: 'font-sans tracking-wide',
      body: 'font-sans'
    }
  }
];

export const CONTENT_ANGLES: ContentAngle[] = [
  // 1-3 Growth
  { id: 1, label: "New Profile Added", category: "Growth", icon: <Users />, fields: ['ptName', 'location', 'specialism'], template: 'newProfile', requiresImage: true, defaultHashtags: '#personaltrainer #fitnesspro #newcoach' },
  { id: 2, label: "New Profile Claim", category: "Growth", icon: <CheckCircle2 />, fields: ['ptName', 'location'], template: 'profileClaim', requiresImage: true, defaultHashtags: '#verified #officialcoach #fitnessprofessional' },
  { id: 3, label: "New Location Added", category: "Growth", icon: <MapPin />, fields: ['locationName', 'gymCount'], template: 'newLocation', defaultHashtags: '#expansion #newlocation #gymsnearme' },
  
  // 4-6 Social Proof
  { id: 4, label: "New 5-Star Review", category: "Social Proof", icon: <Star />, fields: ['ptName', 'reviewText'], template: 'newReview', defaultHashtags: '#clientresults #5stars #happyclient #fitnessjourney' },
  { id: 5, label: "Most Reviews (Month)", category: "Social Proof", icon: <Star />, fields: ['ptName', 'reviewCount'], template: 'mostReviews', defaultHashtags: '#toprated #communityfavorite #trustedcoach' },
  { id: 6, label: "Most Referrals", category: "Social Proof", icon: <Share2 />, fields: ['ptName', 'referralCount'], template: 'mostReferrals', defaultHashtags: '#referrals #communitygrowth #fitnessfamily' },
  
  // 7-8 Business
  { id: 7, label: "Platform Earnings", category: "Business", icon: <PoundSterling />, fields: ['amount', 'period'], template: 'platformEarnings', defaultHashtags: '#businessgrowth #fitpro #earningpotential' },
  { id: 8, label: "Location Earnings", category: "Business", icon: <PoundSterling />, fields: ['locationName', 'amount'], template: 'locationEarnings', defaultHashtags: '#markettrends #fitnessindustry #localeconomy' },
  
  // 9 Educational
  { id: 9, label: "PT Case Study", category: "Educational", icon: <Layout />, fields: ['ptName', 'result', 'timeframe'], template: 'caseStudy', requiresImage: true, defaultHashtags: '#transformation #casestudy #realresults #beforeandafter' },
  
  // 10 Community
  { id: 10, label: "PT of the Month", category: "Community", icon: <Award />, fields: ['ptName', 'reason'], template: 'monthlyStar', requiresImage: true, defaultHashtags: '#ptofthemonth #starcoach #recognition #dedication' },
  
  // 11-15 Stats
  { id: 11, label: "Total PTs Count", category: "Stats", icon: <Users />, fields: ['count'], template: 'statPTs', defaultHashtags: '#growingcommunity #fitnessnetwork' },
  { id: 12, label: "Local PT Count", category: "Stats", icon: <MapPin />, fields: ['count', 'locationName'], template: 'statPTsLoc', defaultHashtags: '#localfitness #communitystats' },
  { id: 13, label: "Total User Count", category: "Stats", icon: <Users />, fields: ['count'], template: 'statUsers', defaultHashtags: '#fitnesscommunity #usergrowth' },
  { id: 14, label: "Local User Count", category: "Stats", icon: <MapPin />, fields: ['count', 'locationName'], template: 'statUsersLoc', defaultHashtags: '#localfitness #activecommunity' },
  { id: 15, label: "Conversion Rate", category: "Stats", icon: <BarChart2 />, fields: ['enquiryCount', 'signupCount', 'percentage'], template: 'conversionStats', defaultHashtags: '#businessstats #conversionrate #marketingdata' },
  
  // 16 Educational
  { id: 16, label: "Specialism Spotlight", category: "Educational", icon: <Type />, fields: ['headline', 'category'], template: 'blogPromo', requiresImage: true, defaultHashtags: '#fitnesstips #specialist #expertadvice' },
  
  // 17-19 Ranking
  { id: 17, label: "Platform Ranks", category: "Ranking", icon: <Trophy />, fields: ['rank1', 'rank2', 'rank3'], template: 'rankPlatform', defaultHashtags: '#leaderboard #topcategories #fitnessgoals' },
  { id: 18, label: "Location Ranks", category: "Ranking", icon: <Trophy />, fields: ['locationName', 'rank1', 'rank2', 'rank3'], template: 'rankLocation', defaultHashtags: '#localtrends #fitnessranking' },
  { id: 19, label: "Best Gyms in Area", category: "Ranking", icon: <Dumbbell />, fields: ['locationName', 'gymName'], template: 'bestGyms', requiresImage: true, defaultHashtags: '#bestgym #gymrecommendation #localgyms' },
  
  // 20-21 Tech
  { id: 20, label: "App of the Month", category: "Tech", icon: <Smartphone />, fields: ['appName', 'benefit'], template: 'bestApps', defaultHashtags: '#fitnessapp #techtools #workoutapp' },
  { id: 21, label: "Nutrition Tool", category: "Tech", icon: <Activity />, fields: ['appName', 'benefit'], template: 'bestNutrition', defaultHashtags: '#nutritiontracking #dietapp #healthtech' },
];

export const MOCK_TRAINERS: Trainer[] = [
  { id: 't1', name: 'Jack Miller', location: 'Hastings', specialism: 'Weight Loss', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop' },
  { id: 't2', name: 'Lynda Nash', location: 'St Leonards', specialism: 'Senior Fitness', image: 'https://images.unsplash.com/photo-1544367563-121955b2fa13?q=80&w=300&auto=format&fit=crop' },
  { id: 't3', name: 'Marcus Cole', location: 'Brighton', specialism: 'Bodybuilding', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=300&auto=format&fit=crop' },
  { id: 't4', name: 'Sarah Jenkins', location: 'Eastbourne', specialism: 'Yoga & Pilates', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&auto=format&fit=crop' },
  { id: 't5', name: 'Tom Hardy', location: 'London', specialism: 'CrossFit', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' }
];

export const BACKGROUND_ASSETS: Asset[] = [
  // Gym / Industrial
  { id: 'g1', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000', category: 'gym', tags: ['weights', 'dark'] },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000', category: 'gym', tags: ['crossfit', 'red'] },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000', category: 'gym', tags: ['weights', 'dumbbells'] },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000', category: 'gym', tags: ['barbell', 'lift'] },
  
  // Nature / Eco / Sunrise
  { id: 'n1', url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000', category: 'nature', tags: ['sunny', 'run'] },
  { id: 'n2', url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000', category: 'nature', tags: ['mountains', 'hike'] },
  { id: 'n3', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000', category: 'nature', tags: ['yoga', 'sunset'] },
  
  // Urban / Midnight / Neon
  { id: 'u1', url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000', category: 'urban', tags: ['street', 'dark'] },
  { id: 'u2', url: 'https://images.unsplash.com/photo-1552674605-4695556602bc?q=80&w=1000', category: 'urban', tags: ['city', 'run'] },
  { id: 'u3', url: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=1000', category: 'urban', tags: ['neon', 'gym'] },

  // Luxury
  { id: 'l1', url: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d1f?q=80&w=1000', category: 'luxury', tags: ['pool', 'hotel'] },
  { id: 'l2', url: 'https://images.unsplash.com/photo-1562771242-a02d909ddc3d?q=80&w=1000', category: 'luxury', tags: ['clean', 'studio'] },
];

export const AIRTABLE_MOCK_RECORDS: Record<string, PostData> = {
  // Mock data that would come from a "Trainer of the Month" view
  'monthlyStar': {
    ptName: "Marcus Cole",
    reason: "Consistent 5-star feedback and 100% client retention rate for Q3.",
    userImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=300&auto=format&fit=crop"
  },
  // Mock data from "Recent Reviews" view
  'newReview': {
    ptName: "Lynda Nash",
    reviewText: "Lynda helped me recover from my injury and I'm now stronger than ever!",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  // Mock data from "Revenue" view
  'platformEarnings': {
    amount: "£12,450",
    period: "October 2023"
  },
   // Mock data from "Gyms" view
  'bestGyms': {
    gymName: "Ironworks HQ",
    locationName: "Hastings"
  }
};