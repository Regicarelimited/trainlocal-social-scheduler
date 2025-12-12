import React from 'react';
import { 
  Users, CheckCircle2, MapPin, Star, Share2, PoundSterling, Layout, 
  Award, BarChart2, Type, Trophy, Dumbbell, Smartphone, Activity 
} from 'lucide-react';
import { ContentAngle, VibeConfig, Trainer, Asset, PostData, ScheduledPost } from './types';

export const VIBES: VibeConfig[] = [
  {
    id: 'classic',
    label: 'TL Classic',
    colors: {
      bg: 'bg-[#2E294E]', // Hero Colour
      text: 'text-[#2E294E]',
      card: 'bg-white',
      accent: 'text-pink-500',
      gradient: 'from-[#ff7f50] to-[#ec4899]',
      overlay: 'bg-[#2E294E]/90'
    },
    font: {
      heading: 'font-sans',
      body: 'font-sans'
    }
  },
  {
    id: 'neon',
    label: 'Neon Energy',
    colors: {
      bg: 'bg-[#2DB1AE]', // Updated to specific Hero Colour
      text: 'text-[#0f766e]', // Darker teal for readable text on white
      card: 'bg-white',
      accent: 'text-white', // White text on the teal background
      gradient: 'from-[#2DB1AE] to-[#2dd4bf]',
      overlay: 'bg-[#2DB1AE]/90'
    },
    font: {
      heading: 'font-sans tracking-tight',
      body: 'font-sans'
    }
  },
  {
    id: 'burntOrange',
    label: 'Burnt Orange',
    colors: {
      bg: 'bg-gradient-to-br from-[#F3C257] to-[#FF3366]', // Updated Gradient Hero
      text: 'text-[#e11d48]', // Dark red/pink for text on white
      card: 'bg-white',
      accent: 'text-white',
      gradient: 'from-[#F3C257] to-[#FF3366]',
      overlay: 'bg-[#FF3366]/90'
    },
    font: {
      heading: 'font-display uppercase',
      body: 'font-sans'
    }
  },
  {
    id: 'realWorld',
    label: 'Real World',
    backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000',
    assetCategory: 'gym',
    colors: {
      bg: 'bg-black',
      text: 'text-white',
      card: 'bg-black/60 backdrop-blur-md border border-white/20',
      accent: 'text-white',
      gradient: 'from-white/20 to-white/10',
      overlay: 'bg-black/60'
    },
    font: {
      heading: 'font-sans font-black',
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
  { id: 4, label: "New 5-Star Review", category: "Social Proof", icon: <Star />, fields: ['ptName', 'reviewText'], template: 'newReview', requiresImage: true, defaultHashtags: '#clientresults #5stars #happyclient #fitnessjourney' },
  { id: 5, label: "Most Reviews (Month)", category: "Social Proof", icon: <Star />, fields: ['ptName', 'reviewCount'], template: 'mostReviews', requiresImage: true, defaultHashtags: '#toprated #communityfavorite #trustedcoach' },
  { id: 6, label: "Most Referrals", category: "Social Proof", icon: <Share2 />, fields: ['ptName', 'referralCount'], template: 'mostReferrals', requiresImage: true, defaultHashtags: '#referrals #communitygrowth #fitnessfamily' },
  
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
  { id: 17, label: "Platform Ranks", category: "Ranking", icon: <Trophy />, fields: ['rank1', 'rank2', 'rank3'], template: 'rankPlatform', requiresImage: true, defaultHashtags: '#leaderboard #topcategories #fitnessgoals' },
  { id: 18, label: "Location Ranks", category: "Ranking", icon: <Trophy />, fields: ['locationName', 'rank1', 'rank2', 'rank3'], template: 'rankLocation', requiresImage: true, defaultHashtags: '#localtrends #fitnessranking' },
  { id: 19, label: "Best Gyms in Area", category: "Ranking", icon: <Dumbbell />, fields: ['locationName', 'gymName'], template: 'bestGyms', requiresImage: true, defaultHashtags: '#bestgym #gymrecommendation #localgyms' },
  
  // 20-21 Tech
  { id: 20, label: "App of the Month", category: "Tech", icon: <Smartphone />, fields: ['appName', 'benefit'], template: 'bestApps', requiresImage: true, defaultHashtags: '#fitnessapp #techtools #workoutapp' },
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
  
  // Urban / Midnight / Neon
  { id: 'u1', url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000', category: 'urban', tags: ['street', 'dark'] },
  { id: 'u2', url: 'https://images.unsplash.com/photo-1552674605-4695556602bc?q=80&w=1000', category: 'urban', tags: ['city', 'run'] },
  { id: 'u3', url: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=1000', category: 'urban', tags: ['neon', 'gym'] },

  // Luxury
  { id: 'l1', url: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d1f?q=80&w=1000', category: 'luxury', tags: ['pool', 'hotel'] },
  { id: 'l2', url: 'https://images.unsplash.com/photo-1562771242-a02d909ddc3d?q=80&w=1000', category: 'luxury', tags: ['clean', 'studio'] },
];

export const AIRTABLE_MOCK_RECORDS: Record<string, PostData> = {
  'monthlyStar': { ptName: "Marcus Cole", reason: "Consistent 5-star feedback.", userImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=300&auto=format&fit=crop" },
  'newReview': { ptName: "Lynda Nash", reviewText: "I'm now stronger than ever!", userImage: "https://images.unsplash.com/photo-1544367563-121955b2fa13?q=80&w=300&auto=format&fit=crop" },
  'platformEarnings': { amount: "£12,450", period: "October 2023" },
  'bestGyms': { gymName: "Ironworks HQ", locationName: "Hastings" }
};

// Generate today's date in YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

export const SANDBOX_SCHEDULE: ScheduledPost[] = [
  {
    id: 101, date: today, angleId: 1, vibe: 'classic', type: 'post',
    data: { ptName: 'Sarah Jenkins', location: 'Eastbourne', specialism: 'Yoga', userImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&auto=format&fit=crop' }
  },
  {
    id: 102, date: today, angleId: 7, vibe: 'neon', type: 'story',
    data: { amount: '£14,500', period: 'Nov 2023' }
  },
  {
    id: 103, date: today, angleId: 10, vibe: 'realWorld', type: 'post',
    data: { ptName: 'Tom Hardy', reason: 'Launch of new CrossFit Zone', userImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop' }
  },
  {
    id: 104, date: today, angleId: 4, vibe: 'burntOrange', type: 'post',
    data: { ptName: 'Jack Miller', reviewText: "Best session I've had in years.", userImage: 'https://randomuser.me/api/portraits/men/32.jpg' }
  },
  {
    id: 105, date: today, angleId: 21, vibe: 'classic', type: 'post',
    data: { appName: 'MyFitnessPal', benefit: 'Macro Tracking', userImage: 'https://images.unsplash.com/photo-1512428813830-c05924713fe4?q=80&w=1000&auto=format&fit=crop' }
  },
  {
    id: 106, date: today, angleId: 9, vibe: 'realWorld', type: 'story',
    data: { ptName: 'Lynda Nash', result: 'Rehabilitated shoulder in 6 weeks.', timeframe: '6 Weeks', userImage: 'https://images.unsplash.com/photo-1544367563-121955b2fa13?q=80&w=300&auto=format&fit=crop' }
  }
];