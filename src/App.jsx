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
  Cast, Airplay, Bluetooth, Server, HardDrive, Cctv, Fingerprint, Key,
  Rocket, Sparkles, Target as Crosshair, Swords, Shield as ShieldCheck,
  Award, Trophy, Crown, Gem, Diamond, Coins, Wallet, CreditCard, Bitcoin,
  MessageSquare, PhoneCall, Video, Mail, BellRing, Siren, Siren as Alarm,
  VolumeX, Volume1, Volume2 as VolumeHigh, Mic, MicOff, Headphones,
  Music, Play, Pause, StopCircle, SkipBack, SkipForward, RotateCcw,
  Calendar, Map, Navigation, Compass, Globe2, MapPin, Layers, Grid,
  Cpu as Processor, MemoryStick, HardDrive as Storage, Router,
  Database as Data, Binary, Code, Terminal, Cursor, MousePointerClick,
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
  // Font Family Definitions
  const fontStyles = {
    heading: "'Montserrat', 'Segoe UI', 'Roboto', sans-serif",
    body: "'Roboto Mono', 'Courier New', monospace"
  };

  // Color Theme - Dark Black, Dark Gray, Neon Green
  const themeColors = {
    darkBlack: '#0a0a0a',
    darkGray: '#1a1a1a',
    darkerGray: '#2d2d2d',
    lightGray: '#3a3a3a',
    neonGreen: '#00ff41',
    neonGreenDark: '#00cc33',
    neonCyan: '#00ffff',
    neonBlue: '#0088ff',
    textPrimary: '#ffffff',
    textSecondary: '#b0b0b0',
    textTertiary: '#888888',
    border: '#333333',
    success: '#00ff41',
    warning: '#ff9900',
    danger: '#ff0040',
    info: '#0088ff'
  };

  // State Variables
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('Stocks');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedSector, setSelectedSector] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Advanced State Variables
  const [connectionStatus] = useState('connected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [themeColor, setThemeColor] = useState('neonGreen');
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

  // Responsive Design Check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      }, 300);
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
      }, 500);
      return () => clearInterval(interval);
    }
  }, [neuralNetworkMode]);

  // Quantum Entanglement Effect
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumEntanglement(prev => (prev + 1) % 100);
      }, 1000);
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
      // === TOP 75 LARGE CAP INDIAN STOCKS ===
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail', basePrice: 1560.60, baseChange: 0.15, marketCap: '21,09,105', weekHigh: 1581.30 },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services', basePrice: 3276.80, baseChange: -1.27, marketCap: '11,86,835', weekHigh: 4322.95 },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', basePrice: 992.00, baseChange: -0.52, marketCap: '7,60,379', weekHigh: 1020.50 },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', basePrice: 2106.00, baseChange: -0.83, marketCap: '12,61,762', weekHigh: 2174.50 },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', basePrice: 1351.00, baseChange: -0.65, marketCap: '9,62,840', weekHigh: 1500.00 },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 966.50, baseChange: -0.25, marketCap: '8,92,046', weekHigh: 999.00 },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services', basePrice: 1657.00, baseChange: -0.38, marketCap: '6,86,108', weekHigh: 1982.80 },
      { symbol: 'LICI', name: 'LIC of India', sector: 'Insurance', basePrice: 850.00, baseChange: -0.35, marketCap: '5,38,000', weekHigh: 925.00 },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', basePrice: 2400.00, baseChange: 0.25, marketCap: '5,64,000', weekHigh: 2550.00 },
      { symbol: 'ITC', name: 'ITC', sector: 'FMCG/Cigarettes', basePrice: 430.00, baseChange: 0.12, marketCap: '5,37,500', weekHigh: 460.00 },
      // ... (rest of your data remains the same)
    ];

    return stocks.map((stock, idx) => {
      const aiScore = (85 + Math.random() * 15).toFixed(1);
      const riskScore = (3 + Math.random() * 4).toFixed(1);
      const sentimentScore = (70 + Math.random() * 30).toFixed(1);
      const quantumProbability = (Math.random() * 100).toFixed(1);
      const neuralStrength = (60 + Math.random() * 40).toFixed(1);
      
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
        signal: idx < 7 ? 'STRONG BUY' : idx < 14 ? 'BUY' : 'HOLD',
        trend: stock.baseChange >= 0 ? 'BULLISH' : 'BEARISH',
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
        chaosIndex: (Math.random() * 100).toFixed(1)
      };
    });
  }, []);

  const [assets, setAssets] = useState(() => generateAdvancedData());
  
  // Filtered assets with useMemo
  const filteredAssets = useMemo(() => {
    return assets
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
      )
      .sort((a, b) => {
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
  }, [assets, selectedSector, riskFilter, searchQuery, sortBy]);

  // Performance Stats
  const performanceStats = useMemo(() => ({
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
  }), []);

  // Chart Data
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

  // Enhanced Portfolio Data
  const portfolioData = useMemo(() => [
    { name: 'Large Cap', value: 35, color: themeColors.neonGreen },
    { name: 'Mid Cap', value: 25, color: themeColors.neonGreenDark },
    { name: 'Small Cap', value: 20, color: '#009900' },
    { name: 'Crypto', value: 15, color: themeColors.neonCyan },
    { name: 'Forex', value: 5, color: themeColors.neonBlue }
  ], [themeColors]);

  // Market Stats
  const marketStats = useMemo(() => ({
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: quantumMode ? 'QUANTUM FLUX' : 'TRENDING',
    totalMarketCap: '45.2T',
    advancingStocks: Math.floor(assets.length * 0.65),
    decliningStocks: Math.floor(assets.length * 0.35),
    totalVolume: '₹4.2T',
    putCallRatio: '0.68',
    quantumEntanglement: `${quantumEntanglement}%`,
    neuralActivity: neuralActivity.length,
    aiPredictions: '1,247'
  }), [assets, quantumMode, quantumEntanglement, neuralActivity.length]);

  // Time update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // System metrics
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
      
      if (Math.random() > 0.95) {
        setCyberAttackDetected(true);
        setTimeout(() => setCyberAttackDetected(false), 3000);
      }
      
      setBlockchainSync(prev => {
        if (prev < 100) return prev + 0.1;
        return 100;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isCharging]);

  // Helper functions
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

  const sectors = ['All', 'Energy/Retail', 'Banking', 'Telecom', 'IT Services', 'NBFC', 'Engineering', 'Insurance', 'FMCG', 'FMCG/Cigarettes', 'Automobile', 'Pharma', 'Conglomerate', 'Power', 'Consumer Goods', 'Cement'];

  // Component Functions
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

  // Enhanced Components
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

  const SystemStatus = () => (
    <div className={`flex items-center space-x-4 rounded-lg px-3 py-2 border border-[${themeColors.border}]`}
         style={{ backgroundColor: themeColors.darkGray }}>
      <div className="flex items-center space-x-2" title="Connection Status">
        {connectionStatus === 'connected' ? (
          <Wifi className="w-4 h-4" style={{ color: themeColors.neonGreen }} />
        ) : (
          <WifiOff className="w-4 h-4" style={{ color: themeColors.danger }} />
        )}
        <span className="text-xs" style={{ color: themeColors.textSecondary }}>Online</span>
      </div>
      <div className="flex items-center space-x-2" title="CPU Usage">
        <Cpu className="w-4 h-4" style={{ color: themeColors.neonCyan }} />
        <span className="text-xs" style={{ color: themeColors.textSecondary }}>{cpuUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Memory Usage">
        <Database className="w-4 h-4" style={{ color: themeColors.neonBlue }} />
        <span className="text-xs" style={{ color: themeColors.textSecondary }}>{memoryUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Battery">
        {isCharging ? (
          <BatteryCharging className="w-4 h-4" style={{ color: themeColors.neonGreen }} />
        ) : (
          <Battery className="w-4 h-4" style={{ color: themeColors.warning }} />
        )}
        <span className="text-xs" style={{ color: themeColors.textSecondary }}>{batteryLevel.toFixed(0)}%</span>
      </div>
    </div>
  );

  // Enhanced Portfolio Distribution Component
  const EnhancedPortfolioChart = () => (
    <div className="rounded-xl p-4" style={{ 
      backgroundColor: themeColors.darkGray,
      border: `1px solid ${themeColors.border}`
    }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold" style={{ 
          fontFamily: fontStyles.heading,
          color: themeColors.textPrimary 
        }}>
          <PieChart className="mr-2 inline" style={{ color: themeColors.neonGreen }} size={20} />
          Portfolio Distribution
        </h3>
        <span className="text-xs" style={{ color: themeColors.textSecondary }}>Real-time</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPie>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Allocation']}
                contentStyle={{
                  backgroundColor: themeColors.darkGray,
                  border: `1px solid ${themeColors.border}`,
                  borderRadius: '6px',
                  color: themeColors.textPrimary
                }}
              />
            </RechartsPie>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3">
          {portfolioData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-sm mr-2" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm" style={{ 
                  color: themeColors.textSecondary,
                  fontFamily: fontStyles.body 
                }}>
                  {item.name}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-bold" style={{ color: themeColors.textPrimary }}>
                  {item.value}%
                </span>
                <div className="w-20 h-2 rounded-full overflow-hidden" style={{ backgroundColor: themeColors.darkerGray }}>
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${item.value}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Asset Table
  const EnhancedAssetTable = () => (
    <div className="overflow-x-auto rounded-lg" style={{ 
      border: `1px solid ${themeColors.border}`,
      backgroundColor: themeColors.darkGray 
    }}>
      <table className="w-full min-w-[1000px]">
        <thead style={{ backgroundColor: themeColors.darkerGray }}>
          <tr>
            {['Rank', 'Symbol', 'Price', 'Change', 'Volume', 'Signal', 'Actions'].map((header, idx) => (
              <th 
                key={idx} 
                className="p-3 text-left text-sm font-bold border-b"
                style={{ 
                  fontFamily: fontStyles.heading,
                  color: themeColors.neonGreen,
                  borderColor: themeColors.border 
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAssets.slice(0, 10).map((asset, idx) => (
            <tr 
              key={idx} 
              className={`border-b transition-colors duration-200 ${
                idx % 2 === 0 ? '' : ''
              }`}
              style={{ 
                borderColor: themeColors.border,
                backgroundColor: idx % 2 === 0 ? themeColors.darkGray : themeColors.darkerGray 
              }}
            >
              <td className="p-3">
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded font-bold`}
                     style={{ 
                       fontFamily: fontStyles.body,
                       backgroundColor: idx < 3 ? themeColors.neonGreen : themeColors.darkerGray,
                       color: idx < 3 ? themeColors.darkBlack : themeColors.textPrimary 
                     }}>
                  {idx + 1}
                </div>
              </td>
              <td className="p-3">
                <div className="font-bold" style={{ 
                  fontFamily: fontStyles.heading,
                  color: themeColors.textPrimary 
                }}>
                  {asset.symbol}
                </div>
                <div className="text-xs" style={{ 
                  fontFamily: fontStyles.body,
                  color: themeColors.textSecondary 
                }}>
                  {asset.name}
                </div>
              </td>
              <td className="p-3">
                <div className="font-bold" style={{ 
                  fontFamily: fontStyles.body,
                  color: themeColors.textPrimary 
                }}>
                  {formatIndianPrice(asset.price)}
                </div>
              </td>
              <td className="p-3">
                <div className={`flex items-center font-bold`}
                     style={{ 
                       fontFamily: fontStyles.body,
                       color: parseFloat(asset.change) >= 0 ? themeColors.success : themeColors.danger 
                     }}>
                  {parseFloat(asset.change) >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                </div>
              </td>
              <td className="p-3">
                <div className="text-sm" style={{ 
                  fontFamily: fontStyles.body,
                  color: themeColors.textSecondary 
                }}>
                  {asset.volume}
                </div>
              </td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded text-xs font-bold`}
                      style={{ 
                        fontFamily: fontStyles.heading,
                        backgroundColor: asset.signal.includes('STRONG') 
                          ? themeColors.neonGreen 
                          : asset.signal.includes('BUY') 
                          ? themeColors.neonGreenDark
                          : themeColors.warning,
                        color: asset.signal.includes('STRONG') ? themeColors.darkBlack : themeColors.textPrimary 
                      }}>
                  {asset.signal}
                </span>
              </td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-700 rounded" style={{ color: themeColors.textSecondary }}>
                    <Star className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded" style={{ color: themeColors.textSecondary }}>
                    <Bell className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Price Chart Component
  const EnhancedPriceChart = () => (
    <div className="rounded-xl p-4" style={{ 
      backgroundColor: themeColors.darkGray,
      border: `1px solid ${themeColors.border}`
    }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold" style={{ 
          fontFamily: fontStyles.heading,
          color: themeColors.textPrimary 
        }}>
          <TrendingUp className="mr-2 inline" style={{ color: themeColors.neonGreen }} size={20} />
          NIFTY 50 Live Chart
        </h3>
        <div className="flex space-x-2">
          {['1m', '5m', '15m', '1h', '4h', '1D', '1W'].map((tf) => (
            <button
              key={tf}
              className={`px-3 py-1 rounded text-sm ${selectedTimeframe === tf ? 'font-bold' : ''}`}
              style={{ 
                fontFamily: fontStyles.body,
                backgroundColor: selectedTimeframe === tf ? themeColors.neonGreen : themeColors.darkerGray,
                color: selectedTimeframe === tf ? themeColors.darkBlack : themeColors.textSecondary 
              }}
              onClick={() => setSelectedTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={themeColors.neonGreen} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={themeColors.neonGreen} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={themeColors.border} />
            <XAxis 
              dataKey="time" 
              stroke={themeColors.textSecondary}
              tick={{ fill: themeColors.textSecondary }}
            />
            <YAxis 
              stroke={themeColors.textSecondary}
              tick={{ fill: themeColors.textSecondary }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: themeColors.darkGray,
                border: `1px solid ${themeColors.border}`,
                color: themeColors.textPrimary
              }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke={themeColors.neonGreen}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Market Stats Panel
  const MarketStatsPanel = () => (
    <div className="rounded-xl p-4" style={{ 
      backgroundColor: themeColors.darkGray,
      border: `1px solid ${themeColors.border}`
    }}>
      <h3 className="text-lg font-bold mb-4" style={{ 
        fontFamily: fontStyles.heading,
        color: themeColors.textPrimary 
      }}>
        <Activity className="mr-2 inline" style={{ color: themeColors.neonGreen }} size={20} />
        Market Stats
      </h3>
      
      <div className="space-y-3">
        {[
          { label: 'Total Assets', value: marketStats.totalAssets, icon: '📊' },
          { label: 'Strong Signals', value: marketStats.strongSignals, icon: '🎯' },
          { label: 'Avg Accuracy', value: marketStats.averageAccuracy, icon: '📈' },
          { label: 'Advancing', value: marketStats.advancingStocks, icon: '↗️' },
          { label: 'Declining', value: marketStats.decliningStocks, icon: '↘️' },
          { label: 'Total Volume', value: marketStats.totalVolume, icon: '💰' }
        ].map((stat, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">{stat.icon}</span>
              <span className="text-sm" style={{ color: themeColors.textSecondary }}>
                {stat.label}
              </span>
            </div>
            <span className="font-bold" style={{ color: themeColors.textPrimary }}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  // Quick Actions Panel
  const QuickActionsPanel = () => (
    <div className="rounded-xl p-4" style={{ 
      backgroundColor: themeColors.darkGray,
      border: `1px solid ${themeColors.border}`
    }}>
      <h3 className="text-lg font-bold mb-4" style={{ 
        fontFamily: fontStyles.heading,
        color: themeColors.textPrimary 
      }}>
        <Zap className="mr-2 inline" style={{ color: themeColors.neonGreen }} size={20} />
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-2 gap-2">
        <button 
          onClick={refreshData}
          className="p-3 rounded flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
          style={{ backgroundColor: themeColors.darkerGray }}
        >
          <RefreshCw className="w-5 h-5 mb-1" style={{ color: themeColors.neonGreen }} />
          <span className="text-xs" style={{ color: themeColors.textSecondary }}>Refresh</span>
        </button>
        
        <button 
          onClick={exportData}
          className="p-3 rounded flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
          style={{ backgroundColor: themeColors.darkerGray }}
        >
          <Download className="w-5 h-5 mb-1" style={{ color: themeColors.neonCyan }} />
          <span className="text-xs" style={{ color: themeColors.textSecondary }}>Export</span>
        </button>
        
        <button 
          onClick={() => setAiAssistantActive(!aiAssistantActive)}
          className="p-3 rounded flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
          style={{ backgroundColor: themeColors.darkerGray }}
        >
          <Brain className="w-5 h-5 mb-1" style={{ color: themeColors.neonBlue }} />
          <span className="text-xs" style={{ color: themeColors.textSecondary }}>AI Assist</span>
        </button>
        
        <button 
          onClick={toggleFullscreen}
          className="p-3 rounded flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
          style={{ backgroundColor: themeColors.darkerGray }}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 mb-1" style={{ color: themeColors.warning }} />
          ) : (
            <Maximize2 className="w-5 h-5 mb-1" style={{ color: themeColors.warning }} />
          )}
          <span className="text-xs" style={{ color: themeColors.textSecondary }}>
            {isFullscreen ? 'Exit FS' : 'Fullscreen'}
          </span>
        </button>
      </div>
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <>
      {/* Quantum Effects */}
      {quantumMode && <QuantumBits />}
      
      {/* Search and Filters */}
      <div className="mb-6 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" 
                  style={{ color: themeColors.textTertiary }} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search symbols or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: themeColors.darkerGray,
              color: themeColors.textPrimary,
              border: `1px solid ${themeColors.border}`,
              fontFamily: fontStyles.body,
              focusRingColor: themeColors.neonGreen
            }}
          />
        </div>

        <select 
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className="px-4 py-2 rounded-lg focus:outline-none"
          style={{ 
            backgroundColor: themeColors.darkerGray,
            color: themeColors.textPrimary,
            border: `1px solid ${themeColors.border}`,
            fontFamily: fontStyles.body
          }}
        >
          {['Stocks', 'Crypto', 'Forex', 'Futures', 'Options'].map(market => (
            <option key={market} value={market}>{market}</option>
          ))}
        </select>

        <select 
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className="px-4 py-2 rounded-lg focus:outline-none"
          style={{ 
            backgroundColor: themeColors.darkerGray,
            color: themeColors.textPrimary,
            border: `1px solid ${themeColors.border}`,
            fontFamily: fontStyles.body
          }}
        >
          {['All', 'Low', 'Medium', 'High'].map(risk => (
            <option key={risk} value={risk}>{risk}</option>
          ))}
        </select>

        <button
          onClick={clearFilters}
          className="px-4 py-2 rounded-lg flex items-center hover:opacity-80 transition-opacity"
          style={{ 
            backgroundColor: themeColors.darkerGray,
            color: themeColors.textPrimary,
            border: `1px solid ${themeColors.border}`,
            fontFamily: fontStyles.body
          }}
        >
          <X className="w-4 h-4 mr-2" />
          Clear
        </button>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-4">
          <EnhancedPriceChart />
          <EnhancedAssetTable />
        </div>
        
        {/* Right Column - Info Panels */}
        <div className="space-y-4">
          <EnhancedPortfolioChart />
          <MarketStatsPanel />
          <QuickActionsPanel />
        </div>
      </div>
    </>
  );

  // Watchlist View
  const WatchlistView = () => {
    const watchlistAssets = assets.filter(asset => watchlist.includes(asset.symbol));
    
    return (
      <div className="rounded-xl p-6" style={{ 
        backgroundColor: themeColors.darkGray,
        border: `1px solid ${themeColors.border}`
      }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center" style={{ 
            fontFamily: fontStyles.heading,
            color: themeColors.textPrimary 
          }}>
            <Heart className="mr-3" style={{ color: themeColors.neonGreen }} />
            Your Watchlist
            <span className="ml-2 text-sm px-2 py-1 rounded" style={{ 
              backgroundColor: themeColors.neonGreen,
              color: themeColors.darkBlack,
              fontFamily: fontStyles.body 
            }}>
              {watchlist.length} items
            </span>
          </h2>
          {watchlist.length > 0 && (
            <button
              onClick={() => setWatchlist([])}
              className="px-3 py-1 text-sm rounded hover:opacity-80 transition-opacity"
              style={{ 
                backgroundColor: themeColors.danger,
                color: themeColors.textPrimary,
                fontFamily: fontStyles.body 
              }}
            >
              Clear All
            </button>
          )}
        </div>
        
        {watchlist.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-4" style={{ color: themeColors.textTertiary }} />
            <p className="mb-4" style={{ color: themeColors.textSecondary }}>
              No assets in watchlist.
            </p>
            <p className="text-sm" style={{ color: themeColors.textTertiary }}>
              Click the star icon on any asset to add it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlistAssets.map((asset, idx) => (
              <div key={idx} className="p-4 rounded-lg hover:scale-[1.02] transition-transform duration-200"
                   style={{ 
                     backgroundColor: themeColors.darkerGray,
                     border: `1px solid ${themeColors.border}`
                   }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg" style={{ 
                      fontFamily: fontStyles.heading,
                      color: themeColors.textPrimary 
                    }}>
                      {asset.symbol}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: themeColors.textSecondary }}>
                      {asset.name}
                    </p>
                    <span className="text-xs px-2 py-1 rounded inline-block"
                          style={{ 
                            backgroundColor: themeColors.darkGray,
                            color: themeColors.textTertiary,
                            fontFamily: fontStyles.body 
                          }}>
                      {asset.sector}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleWatchlist(asset.symbol)}
                    style={{ color: themeColors.warning }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <span style={{ color: themeColors.textSecondary }}>Price:</span>
                    <span className="font-bold" style={{ color: themeColors.textPrimary }}>
                      {formatIndianPrice(asset.price)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: themeColors.textSecondary }}>Change:</span>
                    <span className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: themeColors.textSecondary }}>Signal:</span>
                    <span className={`font-bold ${
                      asset.signal.includes('STRONG') ? 'text-green-400' : 
                      asset.signal.includes('BUY') ? 'text-green-300' : 'text-yellow-400'
                    }`}>
                      {asset.signal}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Settings View
  const SettingsView = () => (
    <div className="rounded-xl p-6" style={{ 
      backgroundColor: themeColors.darkGray,
      border: `1px solid ${themeColors.border}`
    }}>
      <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ 
        fontFamily: fontStyles.heading,
        color: themeColors.textPrimary 
      }}>
        <Cog className="mr-3" style={{ color: themeColors.neonGreen }} />
        Settings
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4" style={{ color: themeColors.textPrimary }}>Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: themeColors.textPrimary }}>Dark Mode</p>
                  <p className="text-sm" style={{ color: themeColors.textSecondary }}>Switch theme</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-green-600' : 'bg-gray-600'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div>
                <p className="font-medium mb-2" style={{ color: themeColors.textPrimary }}>Theme Color</p>
                <div className="flex space-x-2">
                  {['neonGreen', 'neonCyan', 'neonBlue'].map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`w-8 h-8 rounded-full ${themeColor === color ? 'ring-2 ring-white' : ''}`}
                      style={{ backgroundColor: themeColors[color] }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4" style={{ color: themeColors.textPrimary }}>Data Management</h3>
            <div className="space-y-3">
              <button
                onClick={exportData}
                className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ 
                  backgroundColor: themeColors.neonGreen,
                  color: themeColors.darkBlack,
                  fontFamily: fontStyles.body 
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Export Data
              </button>
              <button
                onClick={refreshData}
                className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ 
                  backgroundColor: themeColors.darkerGray,
                  color: themeColors.textPrimary,
                  border: `1px solid ${themeColors.border}`,
                  fontFamily: fontStyles.body 
                }}
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

  // Render view based on activeView
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
      className="min-h-screen font-sans relative overflow-hidden"
      style={{
        backgroundColor: themeColors.darkBlack,
        color: themeColors.textPrimary,
        fontFamily: fontStyles.body
      }}
    >
      {/* Custom CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap');
        
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${themeColors.darkGray};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${themeColors.border};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${themeColors.neonGreen};
        }
        
        input, select, button {
          outline: none !important;
        }
        
        input:focus, select:focus {
          box-shadow: 0 0 0 2px ${themeColors.neonGreen}40;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 p-4 border-b" style={{ 
        backgroundColor: themeColors.darkGray,
        borderColor: themeColors.border 
      }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mr-3"
              style={{ color: themeColors.textPrimary }}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold" style={{ 
                fontFamily: fontStyles.heading,
                background: `linear-gradient(90deg, ${themeColors.neonGreen}, ${themeColors.neonCyan})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Quantum Trading Pro
              </h1>
              <p className="text-sm mt-1" style={{ color: themeColors.textSecondary }}>
                AI-Powered Trading Intelligence | Design by ParagArtbook
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="px-4 py-2 rounded-lg" style={{ 
                backgroundColor: themeColors.darkerGray,
                border: `1px solid ${themeColors.border}`
              }}>
                <div className="text-lg font-mono" style={{ color: themeColors.neonGreen }}>
                  {currentTime.toLocaleTimeString('en-IN')}
                </div>
                <div className="text-xs" style={{ color: themeColors.textSecondary }}>
                  {currentTime.toLocaleDateString('en-IN', { 
                    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                style={{ 
                  backgroundColor: themeColors.darkerGray,
                  border: `1px solid ${themeColors.border}`,
                  color: themeColors.textPrimary 
                }}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={toggleFullscreen}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                style={{ 
                  backgroundColor: themeColors.darkerGray,
                  border: `1px solid ${themeColors.border}`,
                  color: themeColors.textPrimary 
                }}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
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
                  ? 'text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
              style={{ 
                backgroundColor: activeView === tab.id ? themeColors.neonGreen : themeColors.darkerGray,
                color: activeView === tab.id ? themeColors.darkBlack : themeColors.textPrimary,
                fontFamily: fontStyles.heading 
              }}
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
                activeView === tab.id ? 'text-white' : 'text-gray-300'
              }`}
              style={{ 
                backgroundColor: activeView === tab.id ? themeColors.neonGreen : themeColors.darkerGray,
                color: activeView === tab.id ? themeColors.darkBlack : themeColors.textPrimary,
                fontFamily: fontStyles.heading 
              }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="absolute right-0 top-0 h-full w-64 p-4" style={{ backgroundColor: themeColors.darkGray }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: themeColors.textPrimary }}>Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: themeColors.textPrimary }}>
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
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeView === tab.id ? 'text-white' : 'text-gray-300'
                  }`}
                  style={{ 
                    backgroundColor: activeView === tab.id ? themeColors.neonGreen : 'transparent',
                    color: activeView === tab.id ? themeColors.darkBlack : themeColors.textPrimary 
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${themeColors.border}` }}>
              <SystemStatus />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="p-4 border-t" style={{ 
        backgroundColor: themeColors.darkGray,
        borderColor: themeColors.border 
      }}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm" style={{ color: themeColors.textSecondary }}>
            <div className="flex items-center space-x-4 flex-wrap">
              <span>⚡ Live Data</span>
              <span>•</span>
              <span>🧠 AI Analysis</span>
              <span>•</span>
              <span>🇮🇳 Made in India</span>
            </div>
            <p className="mt-1">
              {filteredAssets.length} Assets filtered | ⭐ {watchlist.length} in watchlist
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={refreshData}
              className="px-4 py-2 rounded-lg font-medium flex items-center hover:opacity-80 transition-opacity"
              style={{ 
                backgroundColor: themeColors.neonGreen,
                color: themeColors.darkBlack,
                fontFamily: fontStyles.body 
              }}
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh Data
            </button>
            <div className="text-xs" style={{ color: themeColors.textSecondary }}>
              Updated: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>
        </div>
      </footer>

      {/* Alerts Notification */}
      {alerts.length > 0 && (
        <div className="fixed bottom-4 right-4 z-30 space-y-2 max-w-sm">
          {alerts.slice(0, 2).map(alert => (
            <div 
              key={alert.id}
              className="p-3 rounded-lg shadow-lg border-l-4"
              style={{ 
                backgroundColor: themeColors.darkGray,
                borderLeftColor: alert.type === 'success' ? themeColors.neonGreen : themeColors.info,
                border: `1px solid ${themeColors.border}`
              }}
            >
              <div className="flex items-center">
                {alert.type === 'success' ? '✅' : 'ℹ️'}
                <span className="ml-2 text-sm" style={{ color: themeColors.textPrimary }}>
                  {alert.message}
                </span>
              </div>
              <div className="text-xs mt-1" style={{ color: themeColors.textSecondary }}>
                {alert.time}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-2 border-t" style={{ 
          backgroundColor: themeColors.darkGray,
          borderColor: themeColors.border 
        }}>
          <div className="flex justify-around">
            {['📈', '⭐', '⚙️'].map((icon, idx) => {
              const views = ['dashboard', 'watchlist', 'settings'];
              return (
                <button 
                  key={idx} 
                  className="p-3 text-xl"
                  onClick={() => setActiveView(views[idx])}
                  style={{ 
                    color: activeView === views[idx] ? themeColors.neonGreen : themeColors.textSecondary 
                  }}
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
