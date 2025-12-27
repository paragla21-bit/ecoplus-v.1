import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, 
  ChevronDown, ChevronUp, BarChart3, Activity, Filter, Search, Bell,
  Download, Settings, RefreshCw, Volume2, PieChart, Shield, TrendingUp as ChartLine,
  Users, DollarSign, Globe, Smartphone, Maximize2, Minimize2, Star, X, Menu,
  Home, Heart, LineChart, Cog, ExternalLink, Database, Cpu, BarChart2,
  Cloud, Wifi, WifiOff, Battery, BatteryCharging, Thermometer, Moon, Sun,
  TrendingDown as Bear, Lock, Unlock, Eye, EyeOff, Radio, Satellite, Radar,
  Activity as Pulse, Wind, ThermometerSun, CloudRain, CloudLightning,
  Rocket, Sparkles, Target as Crosshair, Swords, Shield as ShieldCheck,
  Award, Trophy, Crown, Gem, Diamond, Coins, Wallet, CreditCard, Bitcoin,
  MessageSquare, PhoneCall, Video, Mail, BellRing, Siren, Siren as Alarm,
  Calendar, Map, Navigation, Compass, Globe2, MapPin, Layers, Grid,
  Hand, HandMetal, FishSymbol, Anchor, Ship, Plane, Car, Train, Bike,
  Skull, Ghost, Alien, Gamepad2, Dice5, Puzzle, BrainCircuit, Atom,
  FlaskConical, Beaker, TestTube, Microscope, Telescope, SatelliteDish,
  Earthquake, Volcano, Tornado, Hurricane, Snowflake, Umbrella, SunDim,
  Droplets, Flame, TreePine, Leaf, Sprout, Flower2, Bone, HeartPulse,
  Stethoscope, Pill, Syringe, Scan, ScanFace, QrCode, Barcode, KeySquare,
  ShieldOff, ShieldQuestion, ShieldAlert, ShieldPlus, ShieldMinus,
  Sword, Axe, Hammer, Wrench, Nut, Bolt, Cog as Gear, Sliders,
  ToggleLeft, ToggleRight, SwitchCamera, Camera, CameraOff, VideoOff,
  Mic2, Voicemail, PhoneOff, PhoneForwarded, PhoneIncoming, PhoneOutgoing,
  PhoneMissed, Phone as PhoneCall2, MessageCircle, MessageSquarePlus,
  Send, Inbox, Archive, Trash2, Folder, FolderOpen, File, FileText,
  FileCode, FileSpreadsheet, FileImage, FileAudio, FileVideo,
  BookOpen, Bookmark, BookmarkCheck, BookmarkPlus, BookmarkMinus,
  Clipboard, ClipboardCheck, ClipboardCopy, ClipboardList, ClipboardX,
  CalendarDays, CalendarCheck, CalendarClock, CalendarPlus, CalendarMinus,
  Timer, TimerReset, TimerOff, Hourglass, Watch, AlarmClock, AlarmClockCheck,
  AlarmClockMinus, AlarmClockOff, AlarmClockPlus, BellDot, BellMinus,
  BellPlus, BellRing as BellRing2, BellOff, Megaphone, MegaphoneOff,
  Broadcast, RadioTower, Satellite as Satellite2, Signal, SignalHigh,
  SignalLow, SignalZero, Wifi as Wifi2, WifiOff as WifiOff2, Bluetooth as Bluetooth2,
  Usb, Plug, PlugZap, Power, PowerOff, Battery as Battery2, BatteryCharging as BatteryCharging2,
  BatteryFull, BatteryMedium, BatteryLow, BatteryWarning, Cpu as Cpu2,
  MemoryStick as Ram, HardDrive as Hdd, Database as Database2, Server as Server2,
  Router as Router2, Cloud as Cloud2, CloudOff, CloudDrizzle, CloudLightning as CloudLightning2,
  CloudSnow, CloudRain as CloudRain2, CloudFog, CloudSun, CloudMoon,
  Cloudy, Sunrise, Sunset, Moon as Moon2, Sun as Sun2, Star as Star2,
  Planet, Satellite as Satellite3, Rocket as Rocket2, UFO, Meteor,
  Sparkles as Sparkles2, Fire, Droplet, Waves, Mountain, Tree,
  Tent, Factory, Warehouse, Home as Home2, Building, Building2,
  Bank, Hospital, School, Store, ShoppingCart, ShoppingBag, Tag,
  Ticket, Percent, IndianRupee, DollarSign as Dollar, Euro, PoundSterling,
  Yen, Bitcoin as Bitcoin2, Ethereum, Litecoin, Dogecoin, CreditCard as CreditCard2,
  Wallet as Wallet2, Receipt, ReceiptText, Calculator
} from 'lucide-react';

// Import for Charts
import { 
  LineChart as RechartsLineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart as RechartsPie, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart, 
  Area, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar as RechartsRadar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('All');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [watchlist, setWatchlist] = useState(['RELIANCE', 'TCS', 'HDFCBANK', 'BTC', 'ETH']);
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'Bitcoin approaching target ₹1,00,000', type: 'info', time: '09:30' },
    { id: 2, message: 'RELIANCE breakout confirmed', type: 'success', time: '10:15' }
  ]);
  const [darkMode, setDarkMode] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('recommendations');
  const [selectedSector, setSelectedSector] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);
  
  // Portfolio distribution state
  const [portfolioDistribution, setPortfolioDistribution] = useState({
    stocks: 60,
    crypto: 20,
    forex: 15,
    commodities: 5
  });

  // Recommendation state
  const [recommendations, setRecommendations] = useState([]);
  
  // Detailed analysis state
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [timeframe, setTimeframe] = useState('1D');
  
  // Settings state
  const [refreshInterval] = useState('30s');
  const [defaultCurrency] = useState('Indian Rupees (₹)');
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);

  const mainRef = useRef(null);
  const searchInputRef = useRef(null);

  // Generate Recommendations with detailed analysis
  useEffect(() => {
    const generateRecommendations = () => {
      const recs = [
        // Stock Recommendations
        {
          symbol: 'RELIANCE',
          name: 'Reliance Industries',
          type: 'Stock',
          action: 'BUY',
          entryPrice: '₹2,450',
          target: '₹2,800',
          stopLoss: '₹2,300',
          timeframe: '2-4 weeks',
          confidence: 88,
          reason: 'Strong breakout above resistance, increasing volume, institutional buying',
          analysis: {
            technical: 'RSI: 65, MACD: Bullish, Support: ₹2,350',
            fundamental: 'Strong quarterly results, Jio growth accelerating',
            risk: 'Market volatility, oil price fluctuations'
          },
          riskLevel: 'Medium',
          profitPotential: '14%',
          volume: 'Above Average'
        },
        {
          symbol: 'TCS',
          name: 'Tata Consultancy Services',
          type: 'Stock',
          action: 'SELL',
          entryPrice: '₹3,650',
          target: '₹3,400',
          stopLoss: '₹3,750',
          timeframe: '1-2 weeks',
          confidence: 75,
          reason: 'Resistance at ₹3,700, profit booking expected, decreasing volume',
          analysis: {
            technical: 'RSI: 72 (Overbought), MACD: Bearish crossover',
            fundamental: 'Client budget cuts affecting growth',
            risk: 'IT sector slowdown'
          },
          riskLevel: 'Low',
          profitPotential: '6.8%',
          volume: 'Average'
        },
        {
          symbol: 'HDFCBANK',
          name: 'HDFC Bank',
          type: 'Stock',
          action: 'BUY',
          entryPrice: '₹1,550',
          target: '₹1,700',
          stopLoss: '₹1,480',
          timeframe: '3-5 weeks',
          confidence: 82,
          reason: 'Oversold conditions, banking sector recovery, strong fundamentals',
          analysis: {
            technical: 'RSI: 42, Support: ₹1,500, Resistance: ₹1,650',
            fundamental: 'Strong NII growth, stable NPA ratios',
            risk: 'Interest rate changes'
          },
          riskLevel: 'Low',
          profitPotential: '9.7%',
          volume: 'High'
        },
        // Crypto Recommendations
        {
          symbol: 'BTC',
          name: 'Bitcoin',
          type: 'Crypto',
          action: 'BUY',
          entryPrice: '₹38,50,000',
          target: '₹42,00,000',
          stopLoss: '₹36,00,000',
          timeframe: '1-2 months',
          confidence: 85,
          reason: 'Halving event approaching, increasing institutional adoption, breaking key resistance',
          analysis: {
            technical: 'Breaking descending triangle, RSI: 58',
            fundamental: 'ETF inflows increasing, adoption growing',
            risk: 'Regulatory concerns, market volatility'
          },
          riskLevel: 'High',
          profitPotential: '18%',
          volume: 'Very High'
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          type: 'Crypto',
          action: 'BUY',
          entryPrice: '₹2,15,000',
          target: '₹2,50,000',
          stopLoss: '₹2,00,000',
          timeframe: '3-6 weeks',
          confidence: 80,
          reason: 'Ethereum 2.0 upgrades, DeFi growth, decreasing supply',
          analysis: {
            technical: 'Consolidating near support, RSI: 52',
            fundamental: 'Staking growth, layer-2 adoption',
            risk: 'Network congestion, gas fees'
          },
          riskLevel: 'High',
          profitPotential: '16%',
          volume: 'High'
        },
        // Forex Recommendations
        {
          symbol: 'USD/INR',
          name: 'US Dollar vs Indian Rupee',
          type: 'Forex',
          action: 'SELL',
          entryPrice: '83.25',
          target: '82.50',
          stopLoss: '83.75',
          timeframe: '1-3 days',
          confidence: 70,
          reason: 'Dollar weakening against major currencies, RBI intervention expected',
          analysis: {
            technical: 'Overbought on daily chart, resistance at 83.50',
            fundamental: 'Fed rate pause expected, strong RBI reserves',
            risk: 'Geopolitical tensions, oil price spike'
          },
          riskLevel: 'Medium',
          profitPotential: '0.9%',
          volume: 'Very High'
        },
        {
          symbol: 'EUR/INR',
          name: 'Euro vs Indian Rupee',
          type: 'Forex',
          action: 'BUY',
          entryPrice: '89.80',
          target: '91.20',
          stopLoss: '89.00',
          timeframe: '5-10 days',
          confidence: 68,
          reason: 'ECB hawkish stance, Eurozone recovery',
          analysis: {
            technical: 'Double bottom formation, RSI: 45',
            fundamental: 'Eurozone PMI improving',
            risk: 'Political uncertainty in EU'
          },
          riskLevel: 'Medium',
          profitPotential: '1.5%',
          volume: 'High'
        },
        // Additional Stocks
        {
          symbol: 'INFY',
          name: 'Infosys',
          type: 'Stock',
          action: 'HOLD',
          entryPrice: '₹1,520',
          target: '₹1,600',
          stopLoss: '₹1,450',
          timeframe: '2-3 weeks',
          confidence: 65,
          reason: 'Consolidation phase, wait for breakout above ₹1,550',
          analysis: {
            technical: 'Trading in range ₹1,480-₹1,560',
            fundamental: 'Deal wins slowing',
            risk: 'IT sector headwinds'
          },
          riskLevel: 'Low',
          profitPotential: '5.3%',
          volume: 'Average'
        },
        {
          symbol: 'ICICIBANK',
          name: 'ICICI Bank',
          type: 'Stock',
          action: 'BUY',
          entryPrice: '₹980',
          target: '₹1,100',
          stopLoss: '₹930',
          timeframe: '4-6 weeks',
          confidence: 78,
          reason: 'Strong loan growth, improving asset quality',
          analysis: {
            technical: 'Breaking out of consolidation, volume increasing',
            fundamental: 'Strong quarterly results',
            risk: 'Interest rate risk'
          },
          riskLevel: 'Medium',
          profitPotential: '12.2%',
          volume: 'Above Average'
        }
      ];
      setRecommendations(recs);
    };
    
    generateRecommendations();
  }, []);

  // Filter recommendations by type
  const filteredRecommendations = useMemo(() => {
    if (selectedMarket === 'All') return recommendations;
    return recommendations.filter(rec => rec.type === selectedMarket);
  }, [recommendations, selectedMarket]);

  // Update portfolio distribution function
  const updatePortfolioDistribution = (newDistribution) => {
    setPortfolioDistribution(newDistribution);
  };

  // Modified portfolio pie data
  const pieData = useMemo(() => [
    { name: 'Stocks', value: portfolioDistribution.stocks, color: '#10b981' },
    { name: 'Crypto', value: portfolioDistribution.crypto, color: '#8b5cf6' },
    { name: 'Forex', value: portfolioDistribution.forex, color: '#0ea5e9' },
    { name: 'Commodities', value: portfolioDistribution.commodities, color: '#f59e0b' },
  ], [portfolioDistribution]);

  // Chart data for performance
  const performanceData = useMemo(() => {
    return Array.from({length: 30}, (_, i) => ({
      date: `${i+1}`,
      portfolio: 100 + Math.sin(i * 0.3) * 15 + i * 0.5,
      nifty: 100 + Math.sin(i * 0.2) * 10 + i * 0.3
    }));
  }, []);

  // Market sentiment data
  const marketSentimentData = useMemo(() => [
    { name: 'Bullish', value: 65, color: '#10b981' },
    { name: 'Neutral', value: 25, color: '#f59e0b' },
    { name: 'Bearish', value: 10, color: '#ef4444' },
  ], []);

  // Generate initial data
  const generateAdvancedData = useCallback(() => {
    const stocks = [
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail', basePrice: 2450, baseChange: 2.15, marketCap: '17,45,000' },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services', basePrice: 3650, baseChange: -1.27, marketCap: '13,86,835' },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', basePrice: 1550, baseChange: 1.85, marketCap: '11,75,432' },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services', basePrice: 1520, baseChange: 0.45, marketCap: '6,32,456' },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', basePrice: 980, baseChange: 1.25, marketCap: '6,75,321' },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 620, baseChange: 0.75, marketCap: '5,45,678' },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', basePrice: 1120, baseChange: -0.25, marketCap: '6,12,345' },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', basePrice: 2450, baseChange: 0.85, marketCap: '5,98,765' },
      { symbol: 'ITC', name: 'ITC Limited', sector: 'FMCG', basePrice: 420, baseChange: 1.15, marketCap: '5,32,109' },
      { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', basePrice: 1750, baseChange: 0.95, marketCap: '3,45,678' },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', basePrice: 1050, baseChange: 1.35, marketCap: '3,21,098' },
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Engineering', basePrice: 3250, baseChange: 2.15, marketCap: '4,56,789' },
    ];

    const cryptos = [
      { symbol: 'BTC', name: 'Bitcoin', sector: 'Cryptocurrency', basePrice: 3850000, baseChange: 3.25, marketCap: '75,00,000' },
      { symbol: 'ETH', name: 'Ethereum', sector: 'Cryptocurrency', basePrice: 215000, baseChange: 2.15, marketCap: '25,00,000' },
      { symbol: 'BNB', name: 'Binance Coin', sector: 'Cryptocurrency', basePrice: 28000, baseChange: 1.85, marketCap: '4,20,000' },
      { symbol: 'XRP', name: 'Ripple', sector: 'Cryptocurrency', basePrice: 520, baseChange: 0.45, marketCap: '2,80,000' },
      { symbol: 'ADA', name: 'Cardano', sector: 'Cryptocurrency', basePrice: 450, baseChange: 1.25, marketCap: '1,60,000' },
    ];

    const forex = [
      { symbol: 'USD/INR', name: 'US Dollar', sector: 'Forex', basePrice: 83.25, baseChange: -0.15, marketCap: '-' },
      { symbol: 'EUR/INR', name: 'Euro', sector: 'Forex', basePrice: 89.80, baseChange: 0.25, marketCap: '-' },
      { symbol: 'GBP/INR', name: 'British Pound', sector: 'Forex', basePrice: 105.45, baseChange: 0.15, marketCap: '-' },
      { symbol: 'JPY/INR', name: 'Japanese Yen', sector: 'Forex', basePrice: 0.56, baseChange: -0.05, marketCap: '-' },
    ];

    let allAssets = [...stocks, ...cryptos, ...forex];

    return allAssets.map((asset, idx) => {
      const aiScore = (75 + Math.random() * 20).toFixed(1);
      const riskScore = (3 + Math.random() * 4).toFixed(1);
      const sentimentScore = (60 + Math.random() * 35).toFixed(1);
      
      // Get matching recommendation
      const matchingRec = recommendations.find(r => r.symbol === asset.symbol);
      
      return {
        ...asset,
        rank: idx + 1,
        price: asset.basePrice.toLocaleString('en-IN'),
        change: asset.baseChange.toFixed(2),
        volume: Math.floor(Math.random() * 10000000).toLocaleString(),
        totalScore: (85 - idx + Math.random() * 10).toFixed(1),
        aiScore,
        ictScore: (70 + Math.random() * 25).toFixed(1),
        sentimentScore,
        volumeProfile: ['Very High', 'High', 'Medium', 'Low'][Math.floor(Math.random() * 4)],
        signal: idx < 5 ? '🟢 STRONG BUY' : idx < 10 ? '🟢 BUY' : idx < 15 ? '🟡 HOLD' : '🔴 SELL',
        trend: asset.baseChange >= 0 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore,
        marketCapCr: asset.marketCap + ' Cr',
        peRatio: (Math.random() * 40).toFixed(1),
        dividendYield: (Math.random() * 4).toFixed(2) + '%',
        rsi: (40 + Math.random() * 40).toFixed(1),
        macd: (Math.random() - 0.3).toFixed(3),
        support: (asset.basePrice * 0.95).toLocaleString('en-IN'),
        resistance: (asset.basePrice * 1.05).toLocaleString('en-IN'),
        recommendation: matchingRec || {
          action: 'HOLD',
          target: (asset.basePrice * 1.08).toLocaleString('en-IN'),
          stopLoss: (asset.basePrice * 0.94).toLocaleString('en-IN'),
          confidence: 65,
          timeframe: '1-2 weeks'
        }
      };
    });
  }, [recommendations]);

  const [assets, setAssets] = useState(() => generateAdvancedData());

  // Performance statistics
  const [performanceStats] = useState({
    totalPortfolio: '₹24,85,000',
    dailyChange: '+2.4%',
    weeklyChange: '+8.7%',
    monthlyChange: '+15.2%',
    winRate: '76.2%',
    sharpeRatio: '2.1',
    maxDrawdown: '-8.4%'
  });

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Refresh data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(generateAdvancedData());
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [generateAdvancedData]);

  const sectors = ['All', 'Energy/Retail', 'IT Services', 'Banking', 'Telecom', 'FMCG', 'Engineering', 'Cryptocurrency', 'Forex'];

  const formatIndianPrice = (price) => {
    if (typeof price === 'string') {
      const num = parseFloat(price.replace(/[^0-9.-]+/g,""));
      if (isNaN(num)) return price;
      return formatIndianPrice(num);
    }
    
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)}L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(2)}K`;
    }
    return `₹${price.toFixed(2)}`;
  };

  // Filter assets based on various criteria
  const filteredAssets = useMemo(() => {
    let filtered = assets
      .filter(asset => selectedSector === 'All' || asset.sector === selectedSector)
      .filter(asset => selectedMarket === 'All' || 
        (selectedMarket === 'Stocks' && !['Cryptocurrency', 'Forex'].includes(asset.sector)) ||
        (selectedMarket === 'Crypto' && asset.sector === 'Cryptocurrency') ||
        (selectedMarket === 'Forex' && asset.sector === 'Forex'))
      .filter(asset => {
        if (riskFilter === 'All') return true;
        if (riskFilter === 'Low') return parseFloat(asset.riskScore) <= 4;
        if (riskFilter === 'Medium') return parseFloat(asset.riskScore) > 4 && parseFloat(asset.riskScore) <= 6;
        if (riskFilter === 'High') return parseFloat(asset.riskScore) > 6;
        return true;
      })
      .filter(asset => 
        asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Sort
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'Total Score': return parseFloat(b.totalScore) - parseFloat(a.totalScore);
        case 'AI Score': return parseFloat(b.aiScore) - parseFloat(a.aiScore);
        case 'Price Change': return parseFloat(b.change) - parseFloat(a.change);
        case 'Risk Score': return parseFloat(a.riskScore) - parseFloat(b.riskScore);
        case 'Market Cap': {
          const aValue = parseFloat(a.marketCapCr.replace(/[^0-9.-]+/g, ""));
          const bValue = parseFloat(b.marketCapCr.replace(/[^0-9.-]+/g, ""));
          return bValue - aValue;
        }
        default: return a.rank - b.rank;
      }
    });

    return filtered;
  }, [assets, selectedSector, riskFilter, searchQuery, sortBy, selectedMarket]);

  const toggleWatchlist = useCallback((symbol) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
    
    // Add alert
    const newAlert = {
      id: Date.now(),
      message: watchlist.includes(symbol) 
        ? `Removed ${symbol} from watchlist` 
        : `Added ${symbol} to watchlist`,
      type: 'info',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  }, [watchlist]);

  const refreshData = useCallback(() => {
    setAssets(generateAdvancedData());
    const newAlert = {
      id: Date.now(),
      message: 'Market data refreshed successfully',
      type: 'success',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  }, [generateAdvancedData]);

  const clearFilters = () => {
    setSelectedSector('All');
    setSelectedMarket('All');
    setRiskFilter('All');
    setSearchQuery('');
    setSortBy('Total Score');
  };

  // Detailed Asset View Component
  const AssetDetailView = ({ asset }) => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-black bg-opacity-75' : 'bg-white bg-opacity-75'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">{asset.symbol}</h2>
              <p className="text-gray-400">{asset.name}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`px-3 py-1 rounded ${asset.signal.includes('BUY') ? 'bg-emerald-600' : 'bg-red-600'}`}>
                  {asset.signal}
                </span>
                <span className="text-lg font-bold">{formatIndianPrice(asset.price)}</span>
                <span className={`text-lg ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                </span>
              </div>
            </div>
            <button onClick={() => setSelectedAsset(null)} className="p-2 hover:bg-gray-700 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-4 text-emerald-400">Trading Recommendations</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Action:</span>
                  <span className={`font-bold ${
                    asset.recommendation.action === 'BUY' ? 'text-emerald-400' :
                    asset.recommendation.action === 'SELL' ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {asset.recommendation.action}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Entry Price:</span>
                  <span className="font-bold">{formatIndianPrice(asset.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="font-bold text-emerald-400">{formatIndianPrice(asset.recommendation.target)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Stop Loss:</span>
                  <span className="font-bold text-red-400">{formatIndianPrice(asset.recommendation.stopLoss)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeframe:</span>
                  <span>{asset.recommendation.timeframe}</span>
                </div>
                <div className="flex justify-between">
                  <span>Confidence:</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-700 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${
                          asset.recommendation.confidence > 80 ? 'bg-emerald-400' :
                          asset.recommendation.confidence > 60 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${asset.recommendation.confidence}%` }}
                      />
                    </div>
                    <span className="ml-2">{asset.recommendation.confidence}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-emerald-400">Technical Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>RSI:</span>
                  <span className={parseFloat(asset.rsi) > 70 ? 'text-red-400' : parseFloat(asset.rsi) < 30 ? 'text-emerald-400' : ''}>
                    {asset.rsi} {parseFloat(asset.rsi) > 70 ? '(Overbought)' : parseFloat(asset.rsi) < 30 ? '(Oversold)' : ''}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>MACD:</span>
                  <span className={parseFloat(asset.macd) > 0 ? 'text-emerald-400' : 'text-red-400'}>
                    {asset.macd} {parseFloat(asset.macd) > 0 ? '(Bullish)' : '(Bearish)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Support:</span>
                  <span className="text-emerald-400">{formatIndianPrice(asset.support)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Resistance:</span>
                  <span className="text-red-400">{formatIndianPrice(asset.resistance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume:</span>
                  <span>{asset.volumeProfile}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-4 text-emerald-400">Risk Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className="font-bold mb-2">Position Sizing</h4>
                <p className="text-sm">Risk: 1-2% of portfolio</p>
                <p className="text-sm">Max allocation: 5% per trade</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className="font-bold mb-2">Exit Strategy</h4>
                <p className="text-sm">Trail stop loss after 5% gain</p>
                <p className="text-sm">Take partial profits at target</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className="font-bold mb-2">Risk/Reward</h4>
                <p className="text-sm">Minimum 1:2 ratio</p>
                <p className="text-sm">Stop loss 5-8% from entry</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button 
              onClick={() => toggleWatchlist(asset.symbol)}
              className={`px-4 py-2 rounded-lg flex items-center ${
                watchlist.includes(asset.symbol)
                  ? 'bg-yellow-600 hover:bg-yellow-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Star className={`w-4 h-4 mr-2 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
              {watchlist.includes(asset.symbol) ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
            <button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Set Price Alert
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
              View Detailed Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Recommendations Tab Component
  const RecommendationsTab = () => (
    <div className="space-y-6">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border border-emerald-500/30`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            <Target className="inline mr-2 text-emerald-400" />
            Trading Recommendations
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <select 
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border border-emerald-500/30`}
            >
              <option value="All">All Markets</option>
              <option value="Stocks">Stocks</option>
              <option value="Crypto">Cryptocurrency</option>
              <option value="Forex">Forex</option>
            </select>
            
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border border-emerald-500/30`}
            >
              <option value="1D">Today</option>
              <option value="1W">This Week</option>
              <option value="1M">This Month</option>
              <option value="3M">Next 3 Months</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRecommendations.map((rec, idx) => (
            <div 
              key={idx} 
              className={`p-5 rounded-xl border ${
                rec.action === 'BUY' ? 'border-emerald-500/50 bg-emerald-900/20' :
                rec.action === 'SELL' ? 'border-red-500/50 bg-red-900/20' :
                'border-yellow-500/50 bg-yellow-900/20'
              } hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold">{rec.symbol}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      rec.action === 'BUY' ? 'bg-emerald-600' :
                      rec.action === 'SELL' ? 'bg-red-600' :
                      'bg-yellow-600'
                    }`}>
                      {rec.action}
                    </span>
                  </div>
                  <p className="text-gray-400">{rec.name}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="px-2 py-1 text-xs rounded bg-gray-700">{rec.type}</span>
                    <span className={`px-2 py-1 text-xs rounded ${
                      rec.riskLevel === 'High' ? 'bg-red-900' :
                      rec.riskLevel === 'Medium' ? 'bg-yellow-900' : 'bg-emerald-900'
                    }`}>
                      {rec.riskLevel} Risk
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-400">{rec.profitPotential}</div>
                  <div className="text-sm text-gray-400">Profit Potential</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-400">Entry Price</div>
                  <div className="font-bold">{rec.entryPrice}</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-400">Target</div>
                  <div className="font-bold text-emerald-400">{rec.target}</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-400">Stop Loss</div>
                  <div className="font-bold text-red-400">{rec.stopLoss}</div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-400">Timeframe</div>
                  <div className="font-bold">{rec.timeframe}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Confidence Level</span>
                  <span className="font-bold">{rec.confidence}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      rec.confidence > 80 ? 'bg-emerald-400' :
                      rec.confidence > 60 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${rec.confidence}%` }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold mb-2 text-emerald-400">Analysis</h4>
                <p className="text-sm">{rec.reason}</p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => {
                      const asset = assets.find(a => a.symbol === rec.symbol);
                      if (asset) setSelectedAsset(asset);
                    }}
                    className="px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-700"
                  >
                    View Analysis
                  </button>
                  <button 
                    onClick={() => toggleWatchlist(rec.symbol)}
                    className={`px-3 py-1 text-sm rounded ${
                      watchlist.includes(rec.symbol)
                        ? 'bg-yellow-600 hover:bg-yellow-700'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <Star className={`w-4 h-4 inline mr-1 ${watchlist.includes(rec.symbol) ? 'fill-current' : ''}`} />
                    Watch
                  </button>
                </div>
                <button className="px-3 py-1 text-sm rounded bg-emerald-600 hover:bg-emerald-700">
                  Set Alert
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-emerald-400">📊 Trading Strategy & Risk Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} border border-emerald-500/20`}>
              <h4 className="font-bold mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                Risk Management Rules
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Maximum 2% risk per trade
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Minimum 1:2 risk-reward ratio
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Stop loss mandatory for every trade
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Maximum 5 open positions at once
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} border border-emerald-500/20`}>
              <h4 className="font-bold mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-emerald-400" />
                Entry Criteria
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  RSI between 30-70 range
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Volume above 20-day average
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Clear support/resistance levels
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Trend confirmation on higher timeframe
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} border border-emerald-500/20`}>
              <h4 className="font-bold mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
                Exit Strategy
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Take 50% profits at first target
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Trail stop loss after 5% gain
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Exit if fundamentals deteriorate
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Time stop after 2 weeks if stagnant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Total Portfolio</p>
              <p className="text-2xl font-bold">{performanceStats.totalPortfolio}</p>
            </div>
            <div className={`px-2 py-1 rounded text-sm ${performanceStats.dailyChange.includes('+') ? 'bg-emerald-600' : 'bg-red-600'}`}>
              {performanceStats.dailyChange}
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            <span className="mr-3">Weekly: {performanceStats.weeklyChange}</span>
            <span>Monthly: {performanceStats.monthlyChange}</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Win Rate</p>
              <p className="text-2xl font-bold">{performanceStats.winRate}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-400" />
          </div>
          <p className="text-sm text-gray-400 mt-2">Successful trades</p>
        </div>

        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Sharpe Ratio</p>
              <p className="text-2xl font-bold">{performanceStats.sharpeRatio}</p>
            </div>
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <p className="text-sm text-gray-400 mt-2">Risk-adjusted returns</p>
        </div>

        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Active Positions</p>
              <p className="text-2xl font-bold">{watchlist.length}</p>
            </div>
            <Activity className="w-8 h-8 text-emerald-400" />
          </div>
          <p className="text-sm text-gray-400 mt-2">In watchlist</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Performance Chart */}
        <div className={`lg:col-span-2 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <h3 className="font-bold mb-4">Portfolio Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="date" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${darkMode ? '#10b981' : '#059669'}`,
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="portfolio" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.2}
                  name="Your Portfolio"
                />
                <Area 
                  type="monotone" 
                  dataKey="nifty" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.2}
                  name="Nifty 50"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Distribution */}
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Portfolio Distribution</h3>
            <button 
              onClick={() => updatePortfolioDistribution({
                stocks: Math.floor(Math.random() * 40) + 40,
                crypto: Math.floor(Math.random() * 30) + 10,
                forex: Math.floor(Math.random() * 20) + 5,
                commodities: Math.floor(Math.random() * 15) + 2
              })}
              className="text-xs px-3 py-1 bg-emerald-600 rounded hover:bg-emerald-700"
            >
              Randomize
            </button>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPie>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
        <h3 className="font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveView('watchlist')}
            className="p-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 flex flex-col items-center justify-center"
          >
            <Heart className="w-8 h-8 mb-2" />
            <span>Watchlist</span>
          </button>
          <button 
            onClick={() => setActiveTab('recommendations')}
            className="p-4 rounded-lg bg-blue-600 hover:bg-blue-700 flex flex-col items-center justify-center"
          >
            <Target className="w-8 h-8 mb-2" />
            <span>Recommendations</span>
          </button>
          <button 
            onClick={refreshData}
            className="p-4 rounded-lg bg-purple-600 hover:bg-purple-700 flex flex-col items-center justify-center"
          >
            <RefreshCw className="w-8 h-8 mb-2" />
            <span>Refresh Data</span>
          </button>
          <button 
            onClick={() => setActiveView('settings')}
            className="p-4 rounded-lg bg-gray-700 hover:bg-gray-600 flex flex-col items-center justify-center"
          >
            <Settings className="w-8 h-8 mb-2" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Assets Table View
  const AssetsTableView = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search symbols or companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select 
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Markets</option>
              <option value="Stocks">Stocks</option>
              <option value="Crypto">Crypto</option>
              <option value="Forex">Forex</option>
            </select>
            
            <select 
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Total Score">Total Score</option>
              <option value="AI Score">AI Score</option>
              <option value="Price Change">Price Change</option>
              <option value="Risk Score">Risk Score</option>
              <option value="Market Cap">Market Cap</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Risk Filter:</span>
              <select 
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="px-3 py-2 rounded bg-gray-700 border border-emerald-500/30"
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <span className="text-sm text-emerald-400">
              Showing {filteredAssets.length} assets
            </span>
          </div>
          <button 
            onClick={clearFilters}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Assets Table */}
      <div className={`rounded-xl overflow-hidden border border-emerald-500/30 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-emerald-900/30">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Symbol</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Change</th>
                <th className="p-4 text-left">Signal</th>
                <th className="p-4 text-left">Action</th>
                <th className="p-4 text-left">Target</th>
                <th className="p-4 text-left">Stop Loss</th>
                <th className="p-4 text-left">Watch</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.slice(0, 15).map((asset, idx) => (
                <tr 
                  key={idx}
                  className={`border-t border-gray-700 hover:bg-gray-700/30 ${expandedAsset === idx ? 'bg-gray-700/50' : ''}`}
                  onClick={() => toggleWatchlist(asset.symbol)}
                >
                  <td className="p-4">
                    <div className={`font-bold ${idx < 3 ? 'text-yellow-400' : ''}`}>
                      #{asset.rank}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold">{asset.symbol}</div>
                    <div className="text-sm text-gray-400">{asset.name}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold">{formatIndianPrice(asset.price)}</div>
                  </td>
                  <td className="p-4">
                    <div className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      asset.signal.includes('STRONG BUY') ? 'bg-emerald-600' :
                      asset.signal.includes('BUY') ? 'bg-emerald-700' :
                      asset.signal.includes('SELL') ? 'bg-red-600' : 'bg-yellow-600'
                    }`}>
                      {asset.signal}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      asset.recommendation.action === 'BUY' ? 'bg-emerald-600' :
                      asset.recommendation.action === 'SELL' ? 'bg-red-600' : 'bg-yellow-600'
                    }`}>
                      {asset.recommendation.action}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-emerald-400">
                      {formatIndianPrice(asset.recommendation.target)}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-red-400">
                      {formatIndianPrice(asset.recommendation.stopLoss)}
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWatchlist(asset.symbol);
                      }}
                      className={`p-2 rounded-lg ${watchlist.includes(asset.symbol) ? 'text-yellow-400 bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-400'}`}
                    >
                      <Star className={`w-5 h-5 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAssets.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-gray-400">No assets found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );

  // Watchlist View
  const WatchlistView = () => {
    const watchlistAssets = assets.filter(asset => watchlist.includes(asset.symbol));
    
    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Heart className="mr-3 text-emerald-400" />
              Your Watchlist
              <span className="ml-3 px-3 py-1 bg-emerald-600 rounded-full text-sm">
                {watchlist.length} items
              </span>
            </h2>
            {watchlist.length > 0 && (
              <button
                onClick={() => setWatchlist([])}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
              >
                Clear All
              </button>
            )}
          </div>
          
          {watchlist.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">No assets in watchlist.</p>
              <p className="text-sm text-gray-500">Click the star icon on any asset to add it here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {watchlistAssets.map((asset, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-[1.02] transition-transform duration-200`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{asset.symbol}</h3>
                      <p className="text-gray-400">{asset.name}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-2 py-1 text-xs rounded bg-gray-700">{asset.sector}</span>
                        <span className={`px-2 py-1 text-xs rounded ${
                          parseFloat(asset.riskScore) <= 4 ? 'bg-emerald-600' :
                          parseFloat(asset.riskScore) <= 6 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}>
                          Risk: {asset.riskScore}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleWatchlist(asset.symbol)}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="font-bold">{formatIndianPrice(asset.price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Change:</span>
                      <span className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Action:</span>
                      <span className={`font-bold ${
                        asset.recommendation.action === 'BUY' ? 'text-emerald-400' :
                        asset.recommendation.action === 'SELL' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {asset.recommendation.action}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Target:</span>
                      <span className="font-bold text-emerald-400">
                        {formatIndianPrice(asset.recommendation.target)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stop Loss:</span>
                      <span className="font-bold text-red-400">
                        {formatIndianPrice(asset.recommendation.stopLoss)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      onClick={() => setSelectedAsset(asset)}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                    >
                      View Analysis
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.google.com/search?q=${asset.symbol}+stock`, '_blank')}
                      className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Research
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Settings View
  const SettingsView = () => (
    <div className="space-y-6">
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-emerald-500/30`}>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Settings className="mr-3 text-emerald-400" />
          Settings
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-4 text-lg">Portfolio Allocation</h3>
              <div className="space-y-4">
                {pieData.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={item.value}
                      onChange={(e) => {
                        const newValue = parseInt(e.target.value);
                        const newDistribution = {...portfolioDistribution};
                        const assetName = item.name.toLowerCase();
                        if (assetName in newDistribution) {
                          newDistribution[assetName] = newValue;
                          setPortfolioDistribution(newDistribution);
                        }
                      }}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, ${item.color} 0%, ${item.color} ${item.value}%, #374151 ${item.value}%, #374151 100%)`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Alert Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-400">Get notified when prices hit targets</p>
                  </div>
                  <button
                    onClick={() => setPriceAlerts(!priceAlerts)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${priceAlerts ? 'bg-emerald-600' : 'bg-gray-700'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${priceAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Signal Alerts</p>
                    <p className="text-sm text-gray-400">Receive trading signals</p>
                  </div>
                  <button
                    onClick={() => setSignalAlerts(!signalAlerts)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${signalAlerts ? 'bg-emerald-600' : 'bg-gray-700'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${signalAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-4 text-lg">Trading Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Default Stop Loss %</label>
                  <input 
                    type="number" 
                    defaultValue="5"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-2">Default Target %</label>
                  <input 
                    type="number" 
                    defaultValue="10"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-2">Max Position Size %</label>
                  <input 
                    type="number" 
                    defaultValue="5"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Data Management</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const dataStr = JSON.stringify(assets, null, 2);
                    const dataBlob = new Blob([dataStr], { type: 'application/json' });
                    const url = URL.createObjectURL(dataBlob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `trading-data-${new Date().toISOString().split('T')[0]}.json`;
                    link.click();
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export All Data
                </button>
                <button
                  onClick={refreshData}
                  className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Refresh Market Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Alerts Panel
  const AlertsPanel = () => (
    <div className={`fixed top-4 right-4 z-40 w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl border border-emerald-500/30 shadow-xl`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <Bell className="w-5 h-5 mr-2 text-emerald-400" />
          <span className="font-bold">Alerts</span>
          {notificationCount > 0 && (
            <span className="ml-2 px-2 py-1 bg-red-600 rounded-full text-xs">
              {notificationCount}
            </span>
          )}
        </div>
        <button onClick={() => setAlerts([])} className="text-sm text-gray-400 hover:text-white">
          Clear All
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {alerts.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            No new alerts
          </div>
        ) : (
          alerts.map(alert => (
            <div key={alert.id} className="p-4 border-b border-gray-700 hover:bg-gray-700/30">
              <div className="flex justify-between mb-1">
                <span className={`text-sm ${
                  alert.type === 'success' ? 'text-emerald-400' :
                  alert.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                }`}>
                  {alert.type.toUpperCase()}
                </span>
                <span className="text-xs text-gray-400">{alert.time}</span>
              </div>
              <p className="text-sm">{alert.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderView = () => {
    switch(activeView) {
      case 'dashboard': return <DashboardView />;
      case 'assets': return <AssetsTableView />;
      case 'recommendations': return <RecommendationsTab />;
      case 'watchlist': return <WatchlistView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div 
      ref={mainRef} 
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans`}
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0c0f1a 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Alerts Panel */}
      <AlertsPanel />

      {/* Asset Detail Modal */}
      {selectedAsset && <AssetDetailView asset={selectedAsset} />}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className={`absolute right-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { id: 'dashboard', icon: '📊', label: 'Dashboard' },
                { id: 'assets', icon: '📈', label: 'All Assets' },
                { id: 'recommendations', icon: '🎯', label: 'Recommendations' },
                { id: 'watchlist', icon: '⭐', label: 'Watchlist' },
                { id: 'settings', icon: '⚙️', label: 'Settings' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveView(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeView === tab.id ? 'bg-emerald-600 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mr-3"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Trading Analyzer
              </h1>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                AI-Powered Stock, Crypto & Forex Analysis
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`hidden md:block ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-4 py-2 border border-emerald-500/30`}>
              <div className="text-lg font-mono text-emerald-400">
                {currentTime.toLocaleTimeString('en-IN', { hour12: false })}
              </div>
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
                })}
              </div>
            </div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border border-emerald-500/30`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Desktop */}
        <div className="hidden lg:flex space-x-1">
          {[
            { id: 'dashboard', icon: '📊', label: 'Dashboard' },
            { id: 'assets', icon: '📈', label: 'All Assets' },
            { id: 'recommendations', icon: '🎯', label: 'Recommendations' },
            { id: 'watchlist', icon: '⭐', label: `Watchlist (${watchlist.length})` },
            { id: 'settings', icon: '⚙️', label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                activeView === tab.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Navigation Tabs - Mobile */}
        <div className="lg:hidden flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'dashboard', icon: '📊', label: 'Dash' },
            { id: 'recommendations', icon: '🎯', label: 'Recs' },
            { id: 'watchlist', icon: '⭐', label: `Watch (${watchlist.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap flex items-center ${
                activeView === tab.id 
                  ? 'bg-emerald-600 text-white'
                  : `${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {renderView()}
      </div>

      {/* Footer */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center space-x-4 flex-wrap">
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></div>
                Live Data
              </span>
              <span>•</span>
              <span>📊 {assets.length} Assets</span>
              <span>•</span>
              <span>🎯 {recommendations.length} Recommendations</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={refreshData}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
