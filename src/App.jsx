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
  Radar as RechartsRadar
} from 'recharts';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('Stocks');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('all'); // New tab state
  const [selectedSector, setSelectedSector] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Portfolio distribution state
  const [portfolioDistribution, setPortfolioDistribution] = useState({
    stocks: 60,
    crypto: 20,
    forex: 15,
    commodities: 5
  });

  // Recommendation state
  const [recommendations, setRecommendations] = useState([]);
  
  // Advanced State Variables
  const [connectionStatus] = useState('connected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [themeColor, setThemeColor] = useState('emerald');
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [gridView, setGridView] = useState(false);
  const [neuralNetworkMode, setNeuralNetworkMode] = useState(false);
  const [cyberpunkMode, setCyberpunkMode] = useState(false);
  const [quantumMode, setQuantumMode] = useState(false);
  const [aiAssistantActive, setAiAssistantActive] = useState(false);
  const [voiceCommands, setVoiceCommands] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [darkWebMonitoring, setDarkWebMonitoring] = useState(false);
  const [satelliteView, setSatelliteView] = useState(false);
  const [predictionAccuracy, setPredictionAccuracy] = useState(87.3);
  const [marketTemperature, setMarketTemperature] = useState(72);
  const [quantumEntanglement, setQuantumEntanglement] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState([]);
  const [cryptoMining, setCryptoMining] = useState(false);
  const [blockchainSync, setBlockchainSync] = useState(85);
  const [quantumBits, setQuantumBits] = useState([]);
  const [cyberAttackDetected, setCyberAttackDetected] = useState(false);
  const [aiInsights, setAiInsights] = useState([]);
  const [tradingBotsActive, setTradingBotsActive] = useState(3);
  const [timeTravelMode, setTimeTravelMode] = useState(false);
  const [parallelUniverse, setParallelUniverse] = useState(0);
  const [wormholeOpen, setWormholeOpen] = useState(false);
  
  // Settings state
  const [refreshInterval, setRefreshInterval] = useState('Manual');
  const [defaultCurrency, setDefaultCurrency] = useState('Indian Rupees (₹)');
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);
  
  const mainRef = useRef(null);
  const searchInputRef = useRef(null);

  // Generate Recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      const recs = [
        {
          symbol: 'RELIANCE',
          name: 'Reliance Industries',
          action: 'BUY',
          target: '₹1,700',
          stopLoss: '₹1,500',
          timeframe: '1-2 weeks',
          confidence: 85,
          reason: 'Strong institutional buying, breakout expected'
        },
        {
          symbol: 'TCS',
          name: 'TCS',
          action: 'SELL',
          target: '₹3,100',
          stopLoss: '₹3,400',
          timeframe: '3-5 days',
          confidence: 72,
          reason: 'Resistance at ₹3,300, profit booking expected'
        },
        {
          symbol: 'HDFCBANK',
          name: 'HDFC Bank',
          action: 'BUY',
          target: '₹1,050',
          stopLoss: '₹950',
          timeframe: '2-3 weeks',
          confidence: 88,
          reason: 'Oversold, banking sector recovery'
        },
        {
          symbol: 'INFY',
          name: 'Infosys',
          action: 'HOLD',
          target: '₹1,750',
          stopLoss: '₹1,600',
          timeframe: '1 week',
          confidence: 65,
          reason: 'Consolidation phase, wait for breakout'
        },
        {
          symbol: 'BTC',
          name: 'Bitcoin',
          action: 'BUY',
          target: '₹1,00,000',
          stopLoss: '₹90,000',
          timeframe: '1 month',
          confidence: 78,
          reason: 'Halving event approaching, bullish sentiment'
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          action: 'BUY',
          target: '₹3,800',
          stopLoss: '₹3,200',
          timeframe: '2 weeks',
          confidence: 82,
          reason: 'Ethereum 2.0 upgrades, increased adoption'
        }
      ];
      setRecommendations(recs);
    };
    
    generateRecommendations();
  }, []);

  // Update portfolio distribution function
  const updatePortfolioDistribution = (newDistribution) => {
    setPortfolioDistribution(newDistribution);
  };

  // Modified portfolio pie data
  const pieData = useMemo(() => [
    { name: 'Stocks', value: portfolioDistribution.stocks },
    { name: 'Crypto', value: portfolioDistribution.crypto },
    { name: 'Forex', value: portfolioDistribution.forex },
    { name: 'Commodities', value: portfolioDistribution.commodities },
  ], [portfolioDistribution]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Generate Quantum Bits
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumBits(prev => {
          const newBits = Array.from({length: 5}, () => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            state: Math.random() > 0.5 ? '|0⟩' : '|1⟩',
            spin: Math.random() * 360
          }));
          return newBits.slice(0, 20);
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quantumMode]);

  // Generate Neural Activity
  useEffect(() => {
    if (neuralNetworkMode) {
      const interval = setInterval(() => {
        setNeuralActivity(prev => {
          const newActivity = Array.from({length: 10}, (_, i) => ({
            id: Date.now() + i,
            intensity: Math.random() * 100,
            layer: Math.floor(Math.random() * 5),
            timestamp: Date.now()
          }));
          return [...newActivity, ...prev].slice(0, 50);
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [neuralNetworkMode]);

  // Quantum Entanglement Effect
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumEntanglement(prev => (prev + 1) % 100);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [quantumMode]);

  // Market Temperature Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketTemperature(prev => {
        const change = (Math.random() - 0.5) * 2;
        return Math.min(100, Math.max(0, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generate AI Insights
  useEffect(() => {
    const insights = [
      "Market showing fractal pattern in 4H timeframe",
      "Dark pool accumulation detected in banking sector",
      "Quantum resistance forming at 15,800 level",
      "Neural network predicts 78% probability of breakout",
      "Blockchain analysis shows institutional buying",
      "Time series anomaly detected in Asian session",
      "Sentiment analysis turning bullish across forums",
      "AI detects hidden support at Fibonacci 0.618",
      "Quantum computing model suggests trend reversal",
      "Neural oscillator showing overbought conditions"
    ];
    
    const interval = setInterval(() => {
      setAiInsights(prev => {
        const newInsight = insights[Math.floor(Math.random() * insights.length)];
        if (prev.length === 0 || prev[0]?.text !== newInsight) {
          return [{ id: Date.now(), text: newInsight, time: new Date().toLocaleTimeString() }, ...prev.slice(0, 4)];
        }
        return prev;
      });
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Performance optimization - useMemo for expensive calculations
  const generateAdvancedData = useCallback(() => {
    const stocks = [
      // Your existing stock data (truncated for brevity in this response)
      // Keep all your existing stock data here
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail', basePrice: 1560.60, baseChange: 0.15, marketCap: '21,09,105', weekHigh: 1581.30 },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services', basePrice: 3276.80, baseChange: -1.27, marketCap: '11,86,835', weekHigh: 4322.95 },
      // ... rest of your stock data
    ];

    return stocks.map((stock, idx) => {
      const aiScore = (85 + Math.random() * 15).toFixed(1);
      const riskScore = (3 + Math.random() * 4).toFixed(1);
      const sentimentScore = (70 + Math.random() * 30).toFixed(1);
      const quantumProbability = (Math.random() * 100).toFixed(1);
      const neuralStrength = (60 + Math.random() * 40).toFixed(1);
      
      // Generate buy/sell recommendation
      const actions = ['BUY', 'SELL', 'HOLD'];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const target = (stock.basePrice * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2);
      const stopLoss = (stock.basePrice * (1 - Math.random() * 0.05)).toFixed(2);
      const confidence = Math.floor(70 + Math.random() * 30);
      
      return {
        ...stock,
        rank: idx + 1,
        price: stock.basePrice.toFixed(2),
        change: stock.baseChange.toFixed(2),
        volume: Math.floor(Math.random() * 10000000).toLocaleString(),
        totalScore: (95 - idx * 2 + Math.random() * 5).toFixed(1),
        aiScore,
        ictScore: (80 + Math.random() * 20).toFixed(1),
        sentimentScore,
        volumeProfile: ['Very High', 'High', 'Medium'][Math.floor(Math.random() * 3)],
        signal: idx < 7 ? '🟢 STRONG BUY' : idx < 14 ? '🟢 BUY' : '🟡 HOLD',
        trend: stock.baseChange >= 0 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore,
        nextOptimal: ['NY Kill Zone', 'London Kill Zone', 'Silver Bullet'][Math.floor(Math.random() * 3)],
        institutionalFlow: stock.baseChange >= 0 ? 'Buying' : 'Selling',
        darkPoolActivity: (Math.random() * 100).toFixed(1) + 'M',
        shortInterest: (Math.random() * 15).toFixed(1) + '%',
        optionsFlow: stock.baseChange >= 0 ? 'Bullish' : 'Neutral',
        earningsDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        whaleActivity: Math.random() > 0.7 ? 'Detected' : 'Normal',
        marketCapCr: stock.marketCap + ' Cr',
        peRatio: (Math.random() * 50).toFixed(1),
        dividendYield: (Math.random() * 3).toFixed(2) + '%',
        weekHigh: stock.weekHigh.toFixed(2),
        rsi: (30 + Math.random() * 50).toFixed(1),
        macd: (Math.random() - 0.5).toFixed(3),
        support: (stock.basePrice * 0.95).toFixed(2),
        resistance: (stock.basePrice * 1.05).toFixed(2),
        quantumProbability,
        neuralStrength,
        blockchainConfidence: (70 + Math.random() * 30).toFixed(1),
        timeSeriesAnomaly: Math.random() > 0.8 ? 'Detected' : 'Normal',
        fractalDimension: (1.2 + Math.random() * 0.8).toFixed(2),
        entropy: (Math.random() * 10).toFixed(2),
        chaosIndex: (Math.random() * 100).toFixed(1),
        // Add recommendation fields
        recommendation: {
          action,
          target,
          stopLoss,
          confidence,
          timeframe: ['1-2 days', '3-5 days', '1 week', '2 weeks'][Math.floor(Math.random() * 4)]
        }
      };
    });
  }, []);

  const [assets, setAssets] = useState(() => generateAdvancedData());
  const [performanceStats] = useState({
    dailyProfit: '+2.4%',
    weeklyProfit: '+8.7%',
    winRate: '76.2%',
    sharpeRatio: '2.1',
    totalTrades: '1,247',
    profitFactor: '2.8',
    alpha: '1.24',
    beta: '0.87',
    maxDrawdown: '-8.4%',
    sortinoRatio: '3.2'
  });

  // Chart Data for Visualization
  const chartData = useMemo(() => {
    return Array.from({length: 20}, (_, i) => ({
      time: `${i}:00`,
      price: 1000 + Math.sin(i * 0.5) * 100 + Math.random() * 50,
      volume: Math.random() * 1000,
      sentiment: Math.random() * 100
    }));
  }, []);

  const radarData = useMemo(() => [
    { subject: 'Technical', A: 86, B: 70 },
    { subject: 'Sentiment', A: 92, B: 65 },
    { subject: 'Volume', A: 78, B: 85 },
    { subject: 'Momentum', A: 95, B: 72 },
    { subject: 'Volatility', A: 68, B: 90 },
    { subject: 'Trend', A: 88, B: 75 },
  ], []);

useEffect(() => {
  const timer = setInterval(() => setCurrentTime(new Date()), 1000);
  return () => clearInterval(timer);
}, []);

  // Simulate system metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() * 10 - 5))));
      setMemoryUsage(prev => Math.min(100, Math.max(30, prev + (Math.random() * 8 - 4))));
      setBatteryLevel(prev => {
        if (isCharging) {
          return Math.min(100, prev + 0.5);
        }
        return Math.max(10, prev - 0.2);
      });
      
      // Simulate cyber attacks occasionally
      if (Math.random() > 0.95) {
        setCyberAttackDetected(true);
        setTimeout(() => setCyberAttackDetected(false), 5000);
      }
      
      // Simulate blockchain sync
      setBlockchainSync(prev => {
        if (prev < 100) return prev + 0.1;
        return 100;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isCharging]);

  const sectors = ['All', 'Energy/Retail', 'Banking', 'Telecom', 'IT Services', 'NBFC', 'Engineering', 'Insurance', 'FMCG', 'FMCG/Cigarettes', 'Automobile', 'Pharma', 'Conglomerate', 'Power', 'Consumer Goods', 'Cement'];

  const formatIndianPrice = (price) => {
    const num = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.-]+/g,"")) : price;
    if (isNaN(num)) return '₹0';
    
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)}Cr`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)}L`;
    } else if (num >= 1000) {
      return `₹${(num / 1000).toFixed(2)}K`;
    }
    return `₹${num.toFixed(2)}`;
  };

  const marketSentiment = useMemo(() => ({
    overall: 'Bullish',
    sp500: '+0.8%',
    nasdaq: '+1.2%',
    fearGreedIndex: '75 (Extreme Greed)',
    putCallRatio: '0.68',
    vix: '15.2',
    advancers: '1,245',
    decliners: '876',
    quantumIndex: '42.6',
    chaosFactor: '23.4',
    entropyLevel: '67.8'
  }), []);

  const sessions = useMemo(() => [
    { name: 'Asian KZ', active: false, time: '6:30-9:30 AM IST', priority: 3, volatility: 'Medium', volume: 'Low' },
    { name: 'London KZ', active: true, time: '12:30-3:30 PM IST', priority: 5, volatility: 'High', volume: 'High' },
    { name: 'NY KZ', active: true, time: '5:30-8:30 PM IST', priority: 5, volatility: 'High', volume: 'Very High' },
    { name: 'Silver Bullet', active: false, time: '8:30-9:30 PM IST', priority: 4, volatility: 'Low', volume: 'Medium' },
    { name: 'Quantum Session', active: quantumMode, time: 'All Day', priority: 6, volatility: 'Extreme', volume: 'Quantum' }
  ], [quantumMode]);

  // Use useMemo for filtered assets
  const filteredAssets = useMemo(() => {
    let filtered = assets
      .filter(asset => selectedSector === 'All' || asset.sector === selectedSector)
      .filter(asset => {
        if (riskFilter === 'All') return true;
        if (riskFilter === 'Low') return parseFloat(asset.riskScore) <= 4;
        if (riskFilter === 'Medium') return parseFloat(asset.riskScore) > 4 && parseFloat(asset.riskScore) <= 6;
        if (riskFilter === 'High') return parseFloat(asset.riskScore) > 6;
        if (riskFilter === 'Quantum') return parseFloat(asset.quantumProbability) > 70;
        return true;
      })
      .filter(asset => 
        asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Filter by active tab
    if (activeTab === 'buy') {
      filtered = filtered.filter(asset => asset.recommendation.action === 'BUY');
    } else if (activeTab === 'sell') {
      filtered = filtered.filter(asset => asset.recommendation.action === 'SELL');
    } else if (activeTab === 'hold') {
      filtered = filtered.filter(asset => asset.recommendation.action === 'HOLD');
    }

    // Sort
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'Total Score': return parseFloat(b.totalScore) - parseFloat(a.totalScore);
        case 'AI Score': return parseFloat(b.aiScore) - parseFloat(a.aiScore);
        case 'Risk Score': return parseFloat(a.riskScore) - parseFloat(b.riskScore);
        case 'Volume Profile': return b.volumeProfile.localeCompare(a.volumeProfile);
        case 'Price Change': return parseFloat(b.change) - parseFloat(a.change);
        case 'Market Cap': return parseFloat(b.marketCapCr.replace(/,/g, '')) - parseFloat(a.marketCapCr.replace(/,/g, ''));
        case 'Quantum Probability': return parseFloat(b.quantumProbability) - parseFloat(a.quantumProbability);
        case 'Neural Strength': return parseFloat(b.neuralStrength) - parseFloat(a.neuralStrength);
        default: return a.rank - b.rank;
      }
    });

    return filtered;
  }, [assets, selectedSector, riskFilter, searchQuery, sortBy, activeTab]);

  const toggleWatchlist = useCallback((symbol) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(assets, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `quantum-trading-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    const newAlert = {
      id: Date.now(),
      message: `Quantum data exported successfully!`,
      type: 'success',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const toggleDetails = useCallback((index) => {
    setExpandedAsset(prev => prev === index ? null : index);
  }, []);

  const refreshData = useCallback(() => {
    setAssets(generateAdvancedData());
    
    const newAlert = {
      id: Date.now(),
      message: `Quantum data refreshed successfully`,
      type: 'info',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  }, [generateAdvancedData]);

  const clearFilters = () => {
    setSelectedSector('All');
    setRiskFilter('All');
    setSearchQuery('');
    setSortBy('Total Score');
    setActiveTab('all');
  };

  const quickAddToWatchlist = useCallback((symbol) => {
    toggleWatchlist(symbol);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, [toggleWatchlist]);

  const activateQuantumMode = () => {
    setQuantumMode(!quantumMode);
    
    const newAlert = {
      id: Date.now(),
      message: quantumMode ? `Quantum Mode Deactivated` : `🚀 Quantum Trading Mode Activated!`,
      type: 'success',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const activateNeuralNetwork = () => {
    setNeuralNetworkMode(!neuralNetworkMode);
    
    const newAlert = {
      id: Date.now(),
      message: neuralNetworkMode ? `Neural Network Deactivated` : `🧠 Neural Network Activated!`,
      type: 'info',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const openWormhole = () => {
    setWormholeOpen(true);
    setTimeTravelMode(true);
    
    setTimeout(() => {
      setWormholeOpen(false);
      setTimeTravelMode(false);
      setParallelUniverse(prev => prev + 1);
      
      const newAlert = {
        id: Date.now(),
        message: `🌀 Entered Parallel Universe #${parallelUniverse + 1}`,
        type: 'warning',
        time: new Date().toLocaleTimeString()
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
    }, 3000);
  };

  // Quantum Bits Component
  const QuantumBits = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {quantumBits.map((bit, i) => (
        <div
          key={bit.id}
          className="absolute w-2 h-2 rounded-full bg-cyan-400 opacity-70 animate-pulse"
          style={{
            left: `${bit.x}vw`,
            top: `${bit.y}vh`,
            transform: `rotate(${bit.spin}deg)`,
            animationDelay: `${i * 0.1}s`
          }}
        >
          <div className="text-[8px] text-cyan-300 absolute -top-4">{bit.state}</div>
        </div>
      ))}
    </div>
  );

  // Neural Network Visualization
  const NeuralNetworkViz = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-full bg-purple-500"
          style={{
            left: `${(i * 5) % 100}%`,
            animation: `neuralPulse ${2 + Math.random() * 3}s infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px w-full bg-blue-500"
          style={{
            top: `${(i * 7) % 100}%`,
            animation: `neuralPulse ${3 + Math.random() * 2}s infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
  );

  // System Status Component
  const SystemStatus = () => (
    <div className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-3 py-2 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <div className="flex items-center space-x-2" title="Connection Status">
        {connectionStatus === 'connected' ? (
          <Wifi className="w-4 h-4 text-emerald-400" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-400" />
        )}
        <span className="text-xs">{connectionStatus === 'connected' ? 'Online' : 'Offline'}</span>
      </div>
      <div className="flex items-center space-x-2" title="CPU Usage">
        <Cpu className="w-4 h-4 text-blue-400" />
        <span className="text-xs">{cpuUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Memory Usage">
        <Database className="w-4 h-4 text-purple-400" />
        <span className="text-xs">{memoryUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Battery">
        {isCharging ? (
          <BatteryCharging className="w-4 h-4 text-green-400" />
        ) : (
          <Battery className="w-4 h-4 text-yellow-400" />
        )}
        <span className="text-xs">{batteryLevel.toFixed(0)}%</span>
      </div>
      {quantumMode && (
        <div className="flex items-center space-x-2" title="Quantum Entanglement">
          <Atom className="w-4 h-4 text-cyan-400" />
          <span className="text-xs">{quantumEntanglement}%</span>
        </div>
      )}
    </div>
  );

  // AI Assistant Component
  const AiAssistant = () => (
    <div className={`fixed bottom-4 left-4 z-40 ${aiAssistantActive ? 'block' : 'hidden'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-purple-500' : 'border-purple-200'} shadow-xl max-w-sm`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <BrainCircuit className="w-5 h-5 text-purple-400 mr-2" />
            <span className="font-bold">Quantum AI Assistant</span>
          </div>
          <button onClick={() => setAiAssistantActive(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-300 mb-3">
          {aiInsights[0]?.text || "Analyzing market patterns..."}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={refreshData}
            className="text-xs px-2 py-1 bg-purple-600 rounded hover:bg-purple-700"
          >
            Refresh Analysis
          </button>
          <button 
            onClick={() => setVoiceCommands(!voiceCommands)}
            className="text-xs px-2 py-1 bg-blue-600 rounded hover:bg-blue-700"
          >
            {voiceCommands ? 'Mute' : 'Voice'}
          </button>
        </div>
      </div>
    </div>
  );

  // Cyber Attack Alert
  const CyberAttackAlert = () => (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${cyberAttackDetected ? 'block' : 'hidden'}`}>
      <div className="bg-red-900 border border-red-700 rounded-lg p-3 animate-pulse shadow-lg">
        <div className="flex items-center">
          <Siren className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
          <span className="font-bold text-red-300">🚨 CYBER ATTACK DETECTED!</span>
          <Siren className="w-5 h-5 text-red-400 ml-2 animate-pulse" />
        </div>
        <div className="text-sm text-red-200 mt-1">
          Quantum firewall activated. Threat neutralized.
        </div>
      </div>
    </div>
  );

  // Wormhole Effect
  const WormholeEffect = () => (
    <div className={`fixed inset-0 z-50 ${wormholeOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `wormhole ${1 + Math.random()}s infinite`,
              animationDelay: `${i * 0.01}s`
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-white animate-pulse">
            🌀 ENTERING WORMHOLE...
          </div>
        </div>
      </div>
    </div>
  );

  // Recommendations Tab Content
  const RecommendationsTab = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-purple-500' : 'border-purple-200'} mb-6`}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Target className="mr-2 text-purple-400" /> Trading Recommendations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec, idx) => (
          <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${rec.action === 'BUY' ? 'bg-emerald-900/30' : rec.action === 'SELL' ? 'bg-red-900/30' : 'bg-yellow-900/30'}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{rec.symbol}</h3>
                <p className="text-sm text-gray-400">{rec.name}</p>
              </div>
              <span className={`px-3 py-1 rounded text-sm font-bold ${rec.action === 'BUY' ? 'bg-emerald-600' : rec.action === 'SELL' ? 'bg-red-600' : 'bg-yellow-600'}`}>
                {rec.action}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Target:</span>
                <span className="font-bold text-emerald-400">{rec.target}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stop Loss:</span>
                <span className="font-bold text-red-400">{rec.stopLoss}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Timeframe:</span>
                <span className="font-bold">{rec.timeframe}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Confidence:</span>
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                    <div 
                      className={`h-2 rounded-full ${rec.confidence > 80 ? 'bg-emerald-400' : rec.confidence > 60 ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${rec.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{rec.confidence}%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-300">{rec.reason}</p>
            </div>
            
            <div className="mt-4 flex justify-between">
              <button className="px-3 py-1 text-sm bg-blue-600 rounded hover:bg-blue-700">
                Set Alert
              </button>
              <button className="px-3 py-1 text-sm bg-emerald-600 rounded hover:bg-emerald-700">
                Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-gray-900/50">
        <h3 className="font-bold mb-3 text-purple-400">📈 Recommendation Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-bold mb-2">Risk Management</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Stop Loss: 5-8% below entry</li>
              <li>• Target: 10-15% above entry</li>
              <li>• Risk/Reward: Minimum 1:2</li>
              <li>• Position Size: 2-5% of portfolio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Entry Criteria</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• RSI: 30-70 range</li>
              <li>• Volume: Above average</li>
              <li>• Trend: Confirmed direction</li>
              <li>• Support/Resistance: Key levels</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Exit Strategy</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Target: Take partial profits</li>
              <li>• Stop Loss: Trail after 5% gain</li>
              <li>• Time Stop: Exit after 2 weeks</li>
              <li>• Technical Break: Exit on breakdown</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <>
      {/* Quantum Effects */}
      {quantumMode && <QuantumBits />}
      {neuralNetworkMode && <NeuralNetworkViz />}
      
      {/* Cyber Attack Alert */}
      <CyberAttackAlert />
      
      {/* Wormhole Effect */}
      <WormholeEffect />
      
      {/* AI Assistant */}
      <AiAssistant />

      {/* System Status Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-sm">Quantum Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThermometerSun className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Market Temp: {marketTemperature.toFixed(1)}°</span>
          </div>
          <span className="text-sm text-gray-400 hidden md:block">
            Last update: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
        </div>
        <SystemStatus />
      </div>

      {/* Quantum Control Panel */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-cyan-500' : 'border-cyan-200'} relative z-10`}>
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🔮 QUANTUM CONTROL PANEL
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={activateQuantumMode}
              className={`px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg ${quantumMode ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'} text-white font-medium flex items-center`}
            >
              <Atom className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{quantumMode ? 'Quantum Active' : 'Activate Quantum'}</span>
            </button>
            <button
              onClick={activateNeuralNetwork}
              className={`px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg ${neuralNetworkMode ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium flex items-center`}
            >
              <BrainCircuit className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{neuralNetworkMode ? 'Neural Active' : 'Neural Network'}</span>
            </button>
            <button
              onClick={() => setCyberpunkMode(!cyberpunkMode)}
              className={`px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg ${cyberpunkMode ? 'bg-pink-700' : 'bg-pink-600 hover:bg-pink-700'} text-white font-medium flex items-center`}
            >
              <SatelliteDish className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Cyberpunk</span>
            </button>
          </div>
        </div>
        
        {/* Quantum Stats */}
        {quantumMode && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-900 bg-opacity-30' : 'bg-cyan-50'} border border-cyan-500`}>
              <div className="text-xs text-cyan-300">Quantum Entanglement</div>
              <div className="text-lg font-bold">{quantumEntanglement}%</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900 bg-opacity-30' : 'bg-purple-50'} border border-purple-500`}>
              <div className="text-xs text-purple-300">Neural Activity</div>
              <div className="text-lg font-bold">{neuralActivity.length}</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900 bg-opacity-30' : 'bg-green-50'} border border-green-500`}>
              <div className="text-xs text-green-300">Blockchain Sync</div>
              <div className="text-lg font-bold">{blockchainSync.toFixed(1)}%</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'} border border-red-500`}>
              <div className="text-xs text-red-300">Parallel Universes</div>
              <div className="text-lg font-bold">#{parallelUniverse}</div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Key Stats with Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 relative z-10">
        {/* Market Overview with Chart */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold flex items-center">
              <Globe className="mr-2 text-emerald-400" /> Market Overview
            </h3>
            <div className="flex space-x-1">
              {['1D', '1W', '1M'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-2 py-1 text-xs rounded ${selectedTimeframe === tf ? 'bg-emerald-600 text-white' : darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          <div className="h-40 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="time" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {Object.entries(marketSentiment).slice(0, 4).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key}</span>
                <span className={`px-2 py-1 rounded text-xs ${value.includes('+') ? 'bg-emerald-600' : value.includes('-') ? 'bg-red-600' : 'bg-emerald-800'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Radar Chart for Analysis */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-5 border ${darkMode ? 'border-purple-500/50' : 'border-purple-200'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center">
              <Radar className="mr-2 text-purple-400" size={20} /> 
              <span className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Skill Analysis Radar</span>
            </h3>
          </div>
          
          <div className="h-52 relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart 
                data={radarData}
                margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
              >
                <PolarGrid 
                  stroke={darkMode ? "#4b5563" : "#e5e7eb"} 
                  strokeWidth={0.5}
                  radialLines={false}
                />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ 
                    fill: darkMode ? "#d1d5db" : "#4b5563", 
                    fontSize: 12,
                    fontWeight: 500 
                  }}
                  tickLine={false}
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 100]}
                  tick={{ 
                    fill: darkMode ? "#9ca3af" : "#6b7280", 
                    fontSize: 10 
                  }}
                  stroke={darkMode ? "#4b5563" : "#e5e7eb"}
                  tickCount={5}
                />
                <RechartsRadar 
                  name="Current" 
                  dataKey="A" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fill="url(#currentGradient)" 
                  fillOpacity={0.4}
                />
                <RechartsRadar 
                  name="Average" 
                  dataKey="B" 
                  stroke="#10b981" 
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  fill="url(#averageGradient)" 
                  fillOpacity={0.2}
                />
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.6}/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="averageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#374151' : '#ffffff',
                    border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  labelStyle={{ 
                    color: darkMode ? '#f3f4f6' : '#111827',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}
                  formatter={(value) => [`${value}%`, 'Score']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Distribution - MODIFIED */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-blue-500' : 'border-blue-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold flex items-center">
              <PieChart className="mr-2 text-blue-400" /> Portfolio Distribution
            </h3>
            <button 
              onClick={() => updatePortfolioDistribution({
                stocks: Math.floor(Math.random() * 40) + 40,
                crypto: Math.floor(Math.random() * 30) + 10,
                forex: Math.floor(Math.random() * 20) + 5,
                commodities: Math.floor(Math.random() * 15) + 2
              })}
              className="text-xs px-2 py-1 bg-blue-600 rounded hover:bg-blue-700"
            >
              Randomize
            </button>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations Tab */}
      <div className="mb-6">
        <div className="flex border-b border-gray-700 mb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium ${activeTab === 'all' ? 'border-b-2 border-emerald-500 text-emerald-400' : 'text-gray-400'}`}
          >
            All Assets
          </button>
          <button
            onClick={() => setActiveTab('buy')}
            className={`px-4 py-2 font-medium ${activeTab === 'buy' ? 'border-b-2 border-emerald-500 text-emerald-400' : 'text-gray-400'}`}
          >
            Buy Recommendations
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`px-4 py-2 font-medium ${activeTab === 'sell' ? 'border-b-2 border-red-500 text-red-400' : 'text-gray-400'}`}
          >
            Sell Recommendations
          </button>
          <button
            onClick={() => setActiveTab('hold')}
            className={`px-4 py-2 font-medium ${activeTab === 'hold' ? 'border-b-2 border-yellow-500 text-yellow-400' : 'text-gray-400'}`}
          >
            Hold Recommendations
          </button>
        </div>

        {activeTab === 'all' ? (
          <>
            {/* Enhanced Controls with Quantum Features */}
            <div className="mb-6 flex flex-wrap gap-3 items-center relative z-10">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={quantumMode ? "Quantum search symbols..." : "Search symbols or companies..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <select 
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
                >
                  {['Stocks', 'Crypto', 'Forex'].map(market => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>

                <select 
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
                >
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>

                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
                >
                  {['Total Score', 'AI Score', 'Risk Score', 'Price Change', 'Market Cap'].map(sort => (
                    <option key={sort} value={sort}>{sort}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Enhanced Assets Table */}
            <div className={`${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} overflow-hidden mb-6 relative z-10`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${darkMode ? quantumMode ? 'bg-cyan-900 bg-opacity-50' : 'bg-emerald-900 bg-opacity-50' : quantumMode ? 'bg-cyan-50' : 'bg-emerald-50'}`}>
                    <tr>
                      <th className="p-3 text-left">Rank</th>
                      <th className="p-3 text-left">Symbol</th>
                      <th className="p-3 text-left">Price</th>
                      <th className="p-3 text-left">Change</th>
                      <th className="p-3 text-left">Signal</th>
                      <th className="p-3 text-left">Action</th>
                      <th className="p-3 text-left">Target</th>
                      <th className="p-3 text-left">Stop Loss</th>
                      <th className="p-3 text-left">Watch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAssets.slice(0, 10).map((asset, idx) => (
                      <tr 
                        key={idx}
                        className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
                      >
                        <td className="p-3">
                          <span className={`font-bold ${idx < 3 ? 'text-yellow-400' : ''}`}>
                            #{asset.rank}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="font-bold">{asset.symbol}</div>
                          <div className="text-xs text-gray-400">{asset.name}</div>
                        </td>
                        <td className="p-3">
                          <div className="font-bold">{formatIndianPrice(asset.price)}</div>
                        </td>
                        <td className="p-3">
                          <div className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            asset.signal.includes('STRONG') ? 'bg-emerald-600' : 
                            asset.signal.includes('BUY') ? 'bg-emerald-700' : 'bg-yellow-600'
                          }`}>
                            {asset.signal}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            asset.recommendation.action === 'BUY' ? 'bg-emerald-600' : 
                            asset.recommendation.action === 'SELL' ? 'bg-red-600' : 'bg-yellow-600'
                          }`}>
                            {asset.recommendation.action}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-emerald-400">
                            {formatIndianPrice(asset.recommendation.target)}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-red-400">
                            {formatIndianPrice(asset.recommendation.stopLoss)}
                          </div>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => quickAddToWatchlist(asset.symbol)}
                            className={`p-2 rounded ${watchlist.includes(asset.symbol) ? 'text-yellow-400 bg-yellow-900 bg-opacity-30' : 'text-gray-400 hover:text-yellow-400'}`}
                          >
                            <Star className={`w-5 h-5 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <RecommendationsTab />
        )}
      </div>
    </>
  );

  const WatchlistView = () => {
    const watchlistAssets = assets.filter(asset => watchlist.includes(asset.symbol));
    
    return (
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} relative z-10`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Heart className="mr-3 text-emerald-400" /> Your Watchlist
            <span className="ml-2 text-sm bg-emerald-600 px-2 py-1 rounded">{watchlist.length} items</span>
          </h2>
          {watchlist.length > 0 && (
            <button
              onClick={() => setWatchlist([])}
              className="px-3 py-1 text-sm bg-red-600 rounded hover:bg-red-700"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlistAssets.map((asset, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} hover:scale-[1.02] transition-transform duration-200`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{asset.symbol}</h3>
                    <p className="text-gray-400 text-sm">{asset.name}</p>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded mt-1 inline-block">{asset.sector}</span>
                  </div>
                  <button
                    onClick={() => toggleWatchlist(asset.symbol)}
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="space-y-3">
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
                    <span className="text-gray-400">Recommendation:</span>
                    <span className={`font-bold ${
                      asset.recommendation.action === 'BUY' ? 'text-emerald-400' : 
                      asset.recommendation.action === 'SELL' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {asset.recommendation.action}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="font-bold text-emerald-400">{formatIndianPrice(asset.recommendation.target)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stop Loss:</span>
                    <span className="font-bold text-red-400">{formatIndianPrice(asset.recommendation.stopLoss)}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                  <button 
                    onClick={() => toggleDetails(assets.findIndex(a => a.symbol === asset.symbol))}
                    className="px-3 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.google.com/search?q=${asset.symbol}+stock`, '_blank')}
                    className="px-3 py-1 text-sm bg-blue-600 rounded hover:bg-blue-700 flex items-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" /> Research
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const SettingsView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} relative z-10`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Cog className="mr-3 text-emerald-400" /> Settings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Portfolio Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Stocks Allocation</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={portfolioDistribution.stocks}
                  onChange={(e) => updatePortfolioDistribution({
                    ...portfolioDistribution,
                    stocks: parseInt(e.target.value)
                  })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>{portfolioDistribution.stocks}%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">Crypto Allocation</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={portfolioDistribution.crypto}
                  onChange={(e) => updatePortfolioDistribution({
                    ...portfolioDistribution,
                    crypto: parseInt(e.target.value)
                  })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>{portfolioDistribution.crypto}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-emerald-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Trading Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Default Stop Loss %</label>
                <input 
                  type="number" 
                  defaultValue="5"
                  className="w-full p-2 rounded bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Default Target %</label>
                <input 
                  type="number" 
                  defaultValue="10"
                  className="w-full p-2 rounded bg-gray-700"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Price Alerts</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={priceAlerts}
                  onChange={(e) => setPriceAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Signal Alerts</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={signalAlerts}
                  onChange={(e) => setSignalAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Data Management</h3>
            <div className="space-y-3">
              <button
                onClick={exportData}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center justify-center`}
              >
                <Download className="w-5 h-5 mr-2" />
                Export Data
              </button>
              <button
                onClick={refreshData}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium flex items-center justify-center`}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh All Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch(activeView) {
      case 'dashboard': return <DashboardView />;
      case 'watchlist': return <WatchlistView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div 
      ref={mainRef} 
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans relative overflow-hidden`}
      style={{
        background: cyberpunkMode 
          ? 'linear-gradient(45deg, #000 0%, #1a0033 50%, #000 100%)'
          : quantumMode
          ? 'linear-gradient(135deg, #000428 0%, #004e92 100%)'
          : darkMode
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes wormhole {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 1s linear forwards;
        }
      `}</style>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className={`absolute right-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { id: 'dashboard', icon: <Home className="w-5 h-5 mr-3" />, label: 'Dashboard' },
                { id: 'watchlist', icon: <Heart className="w-5 h-5 mr-3" />, label: 'Watchlist' },
                { id: 'settings', icon: <Cog className="w-5 h-5 mr-3" />, label: 'Settings' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveView(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeView === tab.id ? 'bg-emerald-600 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mr-3"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                Quantum Analyzer
              </h1>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                AI-Powered Trading Intelligence
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`hidden md:block ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-4 py-2 border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}>
              <div className="text-lg font-mono text-emerald-400">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'short', day: 'numeric', month: 'short'
                })}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
                title={darkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Desktop */}
        <div className="hidden lg:flex space-x-2">
          {[
            { id: 'dashboard', icon: <Home className="w-5 h-5 mr-2" />, label: 'Dashboard' },
            { id: 'watchlist', icon: <Heart className="w-5 h-5 mr-2" />, label: `Watchlist (${watchlist.length})` },
            { id: 'settings', icon: <Cog className="w-5 h-5 mr-2" />, label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium capitalize transition-colors flex items-center ${
                activeView === tab.id 
                  ? quantumMode 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white' 
                    : 'bg-emerald-600 text-white'
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Navigation Tabs - Mobile */}
        <div className="lg:hidden flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'dashboard', icon: '🏠', label: 'Dash' },
            { id: 'watchlist', icon: '⭐', label: `Watch (${watchlist.length})` },
            { id: 'settings', icon: '⚙️', label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium capitalize whitespace-nowrap flex items-center ${
                activeView === tab.id 
                  ? quantumMode 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white' 
                    : 'bg-emerald-600 text-white'
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
      <div className="p-4 relative z-10">
        {renderView()}
      </div>

      {/* Footer */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center space-x-4 flex-wrap">
              <span>⚡ Live Data</span>
              <span>•</span>
              <span>🧠 AI Analysis</span>
              <span>•</span>
              <span>📊 {filteredAssets.length} Assets</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={refreshData}
              className={`px-4 py-2 rounded-lg ${quantumMode ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-medium flex items-center`}
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
