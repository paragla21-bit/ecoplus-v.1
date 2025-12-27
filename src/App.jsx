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
  Wallet as Wallet2, Receipt, ReceiptText, Calculator,
  TrendingUp as Bull, TrendingDown as BearIcon, ArrowUpRight, ArrowDownRight,
  Target as Bullseye, BarChart as Candlestick, ZoomIn, ZoomOut, GitBranch,
  GitMerge, GitPullRequest, GitCommit, GitCompare, GitFork,
  Code2, TerminalSquare, Brackets, Parentheses, Braces, Slash
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
  // ... (पहले की सभी state variables यहाँ रहेंगी, सिर्फ नए add कर रहे हैं)

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
  
  // नई State Variables Recommendations के लिए
  const [showRecommendationDetails, setShowRecommendationDetails] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState('All');
  const [timeframeFilter, setTimeframeFilter] = useState('All');
  const [confidenceFilter, setConfidenceFilter] = useState('All');
  const [showSMCModal, setShowSMCModal] = useState(false);
  const [showICTModal, setShowICTModal] = useState(false);
  
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

  // ====================== NEW: RECOMMENDATIONS DATA ======================
  const generateRecommendations = useCallback(() => {
    const smcConcepts = [
      "Order Blocks",
      "Fair Value Gap (FVG)",
      "Liquidity Pools",
      "Market Structure Shift",
      "Break of Structure (BOS)",
      "Change of Character (CHoCH)",
      "Mitigation Blocks",
      "Premium & Discount Zones"
    ];
    
    const ictConcepts = [
      "Kill Zones (Asian/London/NY)",
      "Silver Bullet",
      "Optimal Trade Entry (OTE)",
      "Market Maker Models",
      "Liquidity Voids",
      "Displacement",
      "Power of 3",
      "Time & Price"
    ];
    
    const strategies = ['SMC', 'ICT', 'Quantum', 'Neural', 'Hybrid', 'Institutional'];
    const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];
    const confidenceLevels = ['Very High', 'High', 'Medium', 'Low'];
    
    return Array.from({length: 75}, (_, idx) => {
      const strategy = strategies[Math.floor(Math.random() * strategies.length)];
      const timeframe = timeframes[Math.floor(Math.random() * timeframes.length)];
      const confidence = confidenceLevels[Math.floor(Math.random() * confidenceLevels.length)];
      const basePrice = 1000 + Math.random() * 5000;
      const entryPrice = basePrice * (1 + (Math.random() * 0.02 - 0.01));
      const targetPrice = entryPrice * (1.02 + Math.random() * 0.05);
      const stopLoss = entryPrice * (0.98 - Math.random() * 0.02);
      
      // Generate reasoning based on strategy
      let reasoning = '';
      if (strategy === 'SMC') {
        const concept = smcConcepts[Math.floor(Math.random() * smcConcepts.length)];
        reasoning = `Strong ${concept} formation detected at ₹${entryPrice.toFixed(2)}. Price reacted perfectly at order block zone. Market structure shows clear break of structure (BOS) with subsequent change of character (CHoCH).`;
      } else if (strategy === 'ICT') {
        const concept = ictConcepts[Math.floor(Math.random() * ictConcepts.length)];
        reasoning = `ICT ${concept} setup confirmed. Optimal Trade Entry (OTE) aligned with Kill Zone timing. Liquidity sweep followed by displacement into FVG.`;
      } else if (strategy === 'Quantum') {
        reasoning = `Quantum entanglement pattern detected with 87.3% probability. Neural network predicts fractal completion at this level. Time-series analysis shows anomaly convergence.`;
      } else {
        reasoning = `Institutional accumulation detected via dark pool prints. Volume profile shows high volume node at entry. Options flow indicates smart money positioning.`;
      }
      
      // Risk to Reward Ratio
      const reward = targetPrice - entryPrice;
      const risk = entryPrice - stopLoss;
      const rrRatio = (reward / risk).toFixed(2);
      
      // Probability of Success
      const probability = confidence === 'Very High' ? 85 + Math.random() * 15 :
                         confidence === 'High' ? 70 + Math.random() * 15 :
                         confidence === 'Medium' ? 55 + Math.random() * 15 : 40 + Math.random() * 15;
      
      return {
        id: idx + 1,
        symbol: ['RELIANCE', 'TCS', 'HDFCBANK', 'INFY', 'BHARTIARTL', 'ICICIBANK', 'SBIN', 'WIPRO', 'HCLTECH', 'TATAMOTORS'][Math.floor(Math.random() * 10)],
        name: ['Reliance', 'TCS', 'HDFC Bank', 'Infosys', 'Airtel', 'ICICI Bank', 'SBI', 'Wipro', 'HCL Tech', 'Tata Motors'][Math.floor(Math.random() * 10)],
        strategy,
        timeframe,
        confidence,
        entryPrice: entryPrice.toFixed(2),
        targetPrice: targetPrice.toFixed(2),
        stopLoss: stopLoss.toFixed(2),
        currentPrice: basePrice.toFixed(2),
        reasoning,
        rrRatio,
        probability: probability.toFixed(1),
        status: Math.random() > 0.5 ? 'Active' : 'Pending',
        signal: Math.random() > 0.3 ? 'BUY' : 'SELL',
        pnl: (Math.random() * 10 - 2).toFixed(2),
        smcIndicators: ['Order Block', 'FVG', 'BOS', 'Liquidity'][Math.floor(Math.random() * 4)],
        ictIndicators: ['Kill Zone', 'OTE', 'Silver Bullet', 'Displacement'][Math.floor(Math.random() * 4)],
        volumeProfile: Math.random() > 0.5 ? 'High Volume Node' : 'Low Volume Node',
        marketStructure: Math.random() > 0.5 ? 'Bullish' : 'Bearish',
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
      };
    });
  }, []);

  const [recommendations, setRecommendations] = useState(() => generateRecommendations());
  
  // Filtered recommendations
  const filteredRecommendations = useMemo(() => {
    return recommendations
      .filter(rec => selectedStrategy === 'All' || rec.strategy === selectedStrategy)
      .filter(rec => timeframeFilter === 'All' || rec.timeframe === timeframeFilter)
      .filter(rec => {
        if (confidenceFilter === 'All') return true;
        return rec.confidence === confidenceFilter;
      })
      .slice(0, 21); // Top 21 recommendations
  }, [recommendations, selectedStrategy, timeframeFilter, confidenceFilter]);

  // ====================== SMC & ICT ANALYSIS DATA ======================
  const smcAnalysisData = useMemo(() => [
    { concept: 'Order Blocks', strength: 85, occurrence: 'High', impact: 4.2 },
    { concept: 'Fair Value Gaps', strength: 78, occurrence: 'Medium', impact: 3.8 },
    { concept: 'Liquidity Pools', strength: 92, occurrence: 'Very High', impact: 4.8 },
    { concept: 'Market Structure', strength: 88, occurrence: 'High', impact: 4.5 },
    { concept: 'Break of Structure', strength: 76, occurrence: 'Medium', impact: 3.9 },
    { concept: 'Mitigation Blocks', strength: 82, occurrence: 'High', impact: 4.1 },
  ], []);

  const ictAnalysisData = useMemo(() => [
    { concept: 'Asian Kill Zone', accuracy: 72, winRate: '68%', avgProfit: '2.4%' },
    { concept: 'London Kill Zone', accuracy: 85, winRate: '76%', avgProfit: '3.2%' },
    { concept: 'NY Kill Zone', accuracy: 88, winRate: '79%', avgProfit: '3.8%' },
    { concept: 'Silver Bullet', accuracy: 91, winRate: '82%', avgProfit: '4.5%' },
    { concept: 'Optimal Trade Entry', accuracy: 84, winRate: '75%', avgProfit: '3.5%' },
    { concept: 'Market Maker Models', accuracy: 79, winRate: '71%', avgProfit: '2.9%' },
  ], []);

  // ====================== REST OF THE EXISTING CODE ======================
  // (पहले का सारा कोड यहाँ रहेगा, सिर्फ recommendations से related parts add किए हैं)

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
      // ... (पहले की पूरी stocks array यहाँ रहेगी)
      // ... existing stocks data ...
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
        chaosIndex: (Math.random() * 100).toFixed(1)
      };
    });
  }, []);

  const [assets, setAssets] = useState(() => generateAdvancedData());
  
  // ... (बाकी सभी existing functions और variables)

  // ====================== NEW COMPONENTS ======================

  // Recommendation Details Modal
  const RecommendationDetailsModal = ({ recommendation, onClose }) => {
    if (!recommendation) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">🎯 Trade Recommendation Details</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className="font-bold mb-3 text-emerald-400">📊 Trade Setup</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Symbol:</span>
                      <span className="font-bold">{recommendation.symbol}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Strategy:</span>
                      <span className={`font-bold ${
                        recommendation.strategy === 'SMC' ? 'text-purple-400' :
                        recommendation.strategy === 'ICT' ? 'text-cyan-400' :
                        'text-emerald-400'
                      }`}>
                        {recommendation.strategy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Timeframe:</span>
                      <span className="font-bold">{recommendation.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Signal:</span>
                      <span className={`font-bold ${recommendation.signal === 'BUY' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {recommendation.signal}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className="font-bold mb-3 text-cyan-400">💰 Price Levels</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Price:</span>
                      <span className="font-bold">₹{recommendation.entryPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Target Price:</span>
                      <span className="font-bold text-emerald-400">₹{recommendation.targetPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stop Loss:</span>
                      <span className="font-bold text-red-400">₹{recommendation.stopLoss}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current Price:</span>
                      <span className="font-bold">₹{recommendation.currentPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className="font-bold mb-3 text-purple-400">📈 Risk Management</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Risk/Reward:</span>
                      <span className="font-bold">{recommendation.rrRatio}:1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Probability:</span>
                      <span className="font-bold">{recommendation.probability}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Confidence:</span>
                      <span className={`font-bold ${
                        recommendation.confidence === 'Very High' ? 'text-emerald-400' :
                        recommendation.confidence === 'High' ? 'text-green-400' :
                        recommendation.confidence === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {recommendation.confidence}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-bold ${recommendation.status === 'Active' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                        {recommendation.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className="font-bold mb-3 text-blue-400">🔍 Indicators</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">SMC Indicator:</span>
                      <span className="font-bold">{recommendation.smcIndicators}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">ICT Indicator:</span>
                      <span className="font-bold">{recommendation.ictIndicators}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volume Profile:</span>
                      <span className="font-bold">{recommendation.volumeProfile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Structure:</span>
                      <span className={`font-bold ${recommendation.marketStructure === 'Bullish' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {recommendation.marketStructure}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
              <h3 className="font-bold mb-3 text-yellow-400">🧠 Reasoning & Analysis</h3>
              <p className="text-gray-300">{recommendation.reasoning}</p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Trade executed for ${recommendation.symbol} at ₹${recommendation.entryPrice}`);
                  onClose();
                }}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                Execute Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top 21 Recommendations Section
  const TopRecommendationsSection = () => (
    <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-xl border ${darkMode ? 'border-emerald-500/50' : 'border-emerald-200'} p-4 relative z-10`}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <Target className="mr-2 text-emerald-400" /> Top 21 Trade Recommendations
          </h2>
          <p className="text-sm text-gray-400">SMC & ICT based trading setups with entry/exit levels</p>
        </div>
        
        <div className="flex space-x-2">
          <select 
            value={selectedStrategy}
            onChange={(e) => setSelectedStrategy(e.target.value)}
            className={`px-3 py-2 rounded-lg text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
          >
            <option value="All">All Strategies</option>
            <option value="SMC">SMC</option>
            <option value="ICT">ICT</option>
            <option value="Quantum">Quantum</option>
            <option value="Neural">Neural</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          
          <select 
            value={timeframeFilter}
            onChange={(e) => setTimeframeFilter(e.target.value)}
            className={`px-3 py-2 rounded-lg text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
          >
            <option value="All">All Timeframes</option>
            <option value="1m">1 Minute</option>
            <option value="5m">5 Minutes</option>
            <option value="15m">15 Minutes</option>
            <option value="1H">1 Hour</option>
            <option value="4H">4 Hours</option>
            <option value="1D">Daily</option>
          </select>
          
          <select 
            value={confidenceFilter}
            onChange={(e) => setConfidenceFilter(e.target.value)}
            className={`px-3 py-2 rounded-lg text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
          >
            <option value="All">All Confidence</option>
            <option value="Very High">Very High</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className={`${darkMode ? 'bg-emerald-900 bg-opacity-30' : 'bg-emerald-50'}`}>
            <tr>
              <th className="p-3 text-left text-sm">#</th>
              <th className="p-3 text-left text-sm">Symbol</th>
              <th className="p-3 text-left text-sm">Strategy</th>
              <th className="p-3 text-left text-sm">Entry → Target</th>
              <th className="p-3 text-left text-sm">Stop Loss</th>
              <th className="p-3 text-left text-sm">R:R</th>
              <th className="p-3 text-left text-sm">Confidence</th>
              <th className="p-3 text-left text-sm">Signal</th>
              <th className="p-3 text-left text-sm">Details</th>
              <th className="p-3 text-left text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecommendations.map((rec, idx) => (
              <tr 
                key={rec.id} 
                className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
              >
                <td className="p-3">
                  <span className={`font-bold ${idx < 5 ? 'text-yellow-400' : idx < 10 ? 'text-emerald-400' : 'text-gray-400'}`}>
                    #{rec.id}
                  </span>
                </td>
                <td className="p-3">
                  <div className="font-bold">{rec.symbol}</div>
                  <div className="text-xs text-gray-400">{rec.name}</div>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    rec.strategy === 'SMC' ? 'bg-purple-600' :
                    rec.strategy === 'ICT' ? 'bg-cyan-600' :
                    rec.strategy === 'Quantum' ? 'bg-blue-600' :
                    'bg-emerald-600'
                  }`}>
                    {rec.strategy}
                  </span>
                  <div className="text-xs text-gray-400 mt-1">{rec.timeframe}</div>
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <ArrowUpRight className="w-3 h-3 text-emerald-400 mr-1" />
                      <span className="font-bold">₹{rec.entryPrice}</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowUpRight className="w-3 h-3 text-green-400 mr-1" />
                      <span className="text-emerald-400 font-bold">₹{rec.targetPrice}</span>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center">
                    <ArrowDownRight className="w-3 h-3 text-red-400 mr-1" />
                    <span className="text-red-400 font-bold">₹{rec.stopLoss}</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className={`font-bold ${
                    parseFloat(rec.rrRatio) >= 3 ? 'text-emerald-400' :
                    parseFloat(rec.rrRatio) >= 2 ? 'text-green-400' :
                    parseFloat(rec.rrRatio) >= 1 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {rec.rrRatio}:1
                  </span>
                </td>
                <td className="p-3">
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    rec.confidence === 'Very High' ? 'bg-emerald-700' :
                    rec.confidence === 'High' ? 'bg-green-600' :
                    rec.confidence === 'Medium' ? 'bg-yellow-600' : 'bg-red-600'
                  }`}>
                    {rec.confidence}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{rec.probability}%</div>
                </td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${
                    rec.signal === 'BUY' ? 'bg-emerald-700 text-white' : 'bg-red-700 text-white'
                  }`}>
                    {rec.signal}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setShowRecommendationDetails(rec)}
                    className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm flex items-center"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => quickAddToWatchlist(rec.symbol)}
                    className={`p-2 rounded ${watchlist.includes(rec.symbol) ? 'text-yellow-400 bg-yellow-900 bg-opacity-30' : 'text-gray-400 hover:text-yellow-400'}`}
                    title="Add to Watchlist"
                  >
                    <Star className={`w-5 h-5 ${watchlist.includes(rec.symbol) ? 'fill-current' : ''}`} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // SMC Analysis Component
  const SMCAnalysisModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <GitBranch className="mr-2 text-purple-400" /> Smart Money Concepts (SMC) Analysis
            </h2>
            <button onClick={() => setShowSMCModal(false)} className="p-2 hover:bg-gray-800 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 text-purple-400">🔍 Core Concepts</h3>
              <div className="space-y-3">
                {[
                  { concept: 'Order Blocks', desc: 'Price areas where institutional orders are placed' },
                  { concept: 'Fair Value Gaps', desc: 'Imbalances created by rapid price movements' },
                  { concept: 'Liquidity Pools', desc: 'Areas where stop losses are concentrated' },
                  { concept: 'Market Structure', desc: 'Overall trend and price action framework' },
                  { concept: 'Break of Structure', desc: 'Violation of existing market structure' },
                  { concept: 'Mitigation Blocks', desc: 'Price levels that mitigate previous moves' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                    <div>
                      <div className="font-bold">{item.concept}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 text-purple-400">📊 SMC Strength Analysis</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={smcAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="concept" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                    <Tooltip />
                    <Bar dataKey="strength" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
            <h3 className="font-bold mb-3 text-purple-400">🎯 Current SMC Signals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {smcAnalysisData.map((item, idx) => (
                <div key={idx} className={`p-3 rounded border ${darkMode ? 'border-purple-500' : 'border-purple-200'}`}>
                  <div className="text-sm text-gray-400 mb-1">{item.concept}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">{item.strength}%</div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      item.occurrence === 'Very High' ? 'bg-emerald-600' :
                      item.occurrence === 'High' ? 'bg-green-600' :
                      item.occurrence === 'Medium' ? 'bg-yellow-600' : 'bg-red-600'
                    }`}>
                      {item.occurrence}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Impact: {item.impact}/5</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={() => setShowSMCModal(false)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ICT Analysis Component
  const ICTAnalysisModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <GitMerge className="mr-2 text-cyan-400" /> ICT (Inner Circle Trader) Analysis
            </h2>
            <button onClick={() => setShowICTModal(false)} className="p-2 hover:bg-gray-800 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 text-cyan-400">⏰ Kill Zone Analysis</h3>
              <div className="space-y-4">
                {[
                  { zone: 'Asian Kill Zone', time: '6:30-9:30 AM IST', accuracy: '72%', strength: 'Medium' },
                  { zone: 'London Kill Zone', time: '12:30-3:30 PM IST', accuracy: '85%', strength: 'High' },
                  { zone: 'NY Kill Zone', time: '5:30-8:30 PM IST', accuracy: '88%', strength: 'Very High' },
                  { zone: 'Silver Bullet', time: '8:30-9:30 PM IST', accuracy: '91%', strength: 'Very High' },
                ].map((item, idx) => (
                  <div key={idx} className={`p-3 rounded border ${darkMode ? 'border-cyan-500' : 'border-cyan-200'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold">{item.zone}</div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        item.strength === 'Very High' ? 'bg-emerald-600' :
                        item.strength === 'High' ? 'bg-green-600' : 'bg-yellow-600'
                      }`}>
                        {item.strength}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">{item.time}</div>
                    <div className="flex justify-between text-sm">
                      <span>Accuracy: {item.accuracy}</span>
                      <span className="text-emerald-400">{item.accuracy} win rate</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 text-cyan-400">📈 ICT Strategy Performance</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ictAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="concept" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                    <Tooltip />
                    <Bar dataKey="accuracy" fill="#06b6d4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
            <h3 className="font-bold mb-3 text-cyan-400">🔍 ICT Core Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { model: 'Market Maker Model', desc: 'Identifies institutional manipulation', strength: '85%' },
                { model: 'Optimal Trade Entry', desc: 'Best price for entry with low risk', strength: '82%' },
                { model: 'Liquidity Voids', desc: 'Gaps where price accelerates', strength: '78%' },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded border ${darkMode ? 'border-cyan-500' : 'border-cyan-200'}`}>
                  <div className="font-bold mb-2">{item.model}</div>
                  <div className="text-sm text-gray-400 mb-3">{item.desc}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">Success Rate</div>
                    <div className="text-emerald-400 font-bold">{item.strength}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={() => setShowICTModal(false)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Updated AnalysisView with SMC/ICT Integration
  const AnalysisView = () => (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl border ${darkMode ? 'border-gray-800' : 'border-gray-200'} relative z-10`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <LineChart className="mr-3 text-emerald-400" /> Advanced Analysis
        </h2>
        
        {/* SMC & ICT Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setShowSMCModal(true)}
            className={`p-4 rounded-lg border ${darkMode ? 'border-purple-500 hover:border-purple-400' : 'border-purple-200 hover:border-purple-300'} ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-200`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <GitBranch className="w-6 h-6 text-purple-400 mr-3" />
                <div>
                  <h3 className="font-bold text-lg">Smart Money Concepts</h3>
                  <p className="text-sm text-gray-400">Institutional trading patterns</p>
                </div>
              </div>
              <div className="text-emerald-400 font-bold">85%</div>
            </div>
            <div className="text-sm text-gray-300">Order Blocks • FVGs • Liquidity • BOS • CHoCH</div>
          </button>
          
          <button
            onClick={() => setShowICTModal(true)}
            className={`p-4 rounded-lg border ${darkMode ? 'border-cyan-500 hover:border-cyan-400' : 'border-cyan-200 hover:border-cyan-300'} ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-200`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <GitMerge className="w-6 h-6 text-cyan-400 mr-3" />
                <div>
                  <h3 className="font-bold text-lg">ICT Concepts</h3>
                  <p className="text-sm text-gray-400">Inner Circle Trader methodology</p>
                </div>
              </div>
              <div className="text-emerald-400 font-bold">88%</div>
            </div>
            <div className="text-sm text-gray-300">Kill Zones • OTE • Silver Bullet • Market Maker Models</div>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Activity className="mr-2" /> Technical Indicators
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'RSI', value: '68.4', status: 'Neutral' },
                  { name: 'MACD', value: '2.45', status: 'Bullish' },
                  { name: 'Bollinger Bands', value: 'Upper Band', status: 'Warning' },
                  { name: 'Moving Averages', value: 'Golden Cross', status: 'Bullish' },
                  { name: 'Volume Profile', value: 'High Volume Node', status: 'Strong' },
                  { name: 'Fibonacci', value: '0.618 Retracement', status: 'Key Level' }
                ].map((indicator, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span>{indicator.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{indicator.value}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        indicator.status === 'Bullish' ? 'bg-emerald-600' : 
                        indicator.status === 'Warning' ? 'bg-yellow-600' : 
                        indicator.status === 'Strong' ? 'bg-blue-600' : 'bg-gray-600'
                      }`}>
                        {indicator.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Shield className="mr-2" /> Risk Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Portfolio Risk</span>
                  <span className="text-yellow-400 font-bold">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span>Diversification Score</span>
                  <span className="text-emerald-400 font-bold">82%</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Drawdown</span>
                  <span className="text-red-400 font-bold">-8.4%</span>
                </div>
                <div className="flex justify-between">
                  <span>Value at Risk (95%)</span>
                  <span className="text-yellow-400 font-bold">-12.2%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Globe className="mr-2" /> Market Insights
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Market Sentiment</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-700 rounded-full mr-2">
                      <div className="w-3/4 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <span className="text-emerald-400 font-bold">76% Bullish</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Volatility Index (VIX)</span>
                  <span className="text-yellow-400 font-bold">15.2</span>
                </div>
                <div className="flex justify-between">
                  <span>Put/Call Ratio</span>
                  <span className="text-emerald-400 font-bold">0.68</span>
                </div>
                <div className="flex justify-between">
                  <span>Advance/Decline</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-400">1,245</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-red-400">876</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Market Breadth</span>
                  <span className="text-emerald-400 font-bold">Positive</span>
                </div>
                <div className="flex justify-between">
                  <span>Institutional Activity</span>
                  <span className="text-emerald-400 font-bold">High</span>
                </div>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="font-bold mb-3 flex items-center">
                <Brain className="mr-2" /> AI Predictions
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Next Week Outlook</span>
                  <span className="text-emerald-400 font-bold">Bullish</span>
                </div>
                <div className="flex justify-between">
                  <span>Confidence Level</span>
                  <span className="text-emerald-400 font-bold">87.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Top Sector</span>
                  <span className="text-emerald-400 font-bold">IT Services</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk Assessment</span>
                  <span className="text-yellow-400 font-bold">Moderate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Updated DashboardView with Recommendations
  const DashboardView = () => (
    <>
      {/* Quantum Effects */}
      {quantumMode && <QuantumBits />}
      {neuralNetworkMode && <NeuralNetworkViz />}
      
      {/* Modals */}
      {showSMCModal && <SMCAnalysisModal />}
      {showICTModal && <ICTAnalysisModal />}
      {showRecommendationDetails && (
        <RecommendationDetailsModal 
          recommendation={showRecommendationDetails} 
          onClose={() => setShowRecommendationDetails(null)} 
        />
      )}
      
      {/* ... (rest of the existing DashboardView code) ... */}
      
      {/* AI Insights Stream के बाद Top Recommendations Add करें */}
      <TopRecommendationsSection />
      
      {/* ... (बाकी का existing DashboardView code) ... */}
    </>
  );

  // ... (बाकी सभी existing functions और components)

  return (
    <div 
      ref={mainRef} 
      className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans relative overflow-hidden`}
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* TradingView-like theme styling */}
      <style jsx>{`
        .tradingview-chart {
          background: ${darkMode ? '#131722' : '#ffffff'};
          border: 1px solid ${darkMode ? '#2a2e39' : '#e0e3eb'};
        }
        
        .tradingview-header {
          background: ${darkMode ? '#1e222d' : '#f8f9fa'};
          border-bottom: 1px solid ${darkMode ? '#2a2e39' : '#e0e3eb'};
        }
        
        .tradingview-widget {
          background: ${darkMode ? '#1e222d' : '#ffffff'};
          border: 1px solid ${darkMode ? '#2a2e39' : '#e0e3eb'};
        }
        
        .grid-line {
          stroke: ${darkMode ? '#2a2e39' : '#e0e3eb'};
        }
        
        .price-up {
          color: ${darkMode ? '#26a69a' : '#089981'};
        }
        
        .price-down {
          color: ${darkMode ? '#ef5350' : '#f23645'};
        }
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* ... (rest of the existing JSX structure with updated theme classes) ... */}
      
      <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Header content with updated theme */}
      </div>
      
      <div className="p-4 relative z-10">
        {activeView === 'dashboard' && <DashboardView />}
        {activeView === 'watchlist' && <WatchlistView />}
        {activeView === 'analysis' && <AnalysisView />}
        {activeView === 'settings' && <SettingsView />}
      </div>
      
      {/* Footer with updated theme */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Footer content */}
      </div>
    </div>
  );
};

export default App;