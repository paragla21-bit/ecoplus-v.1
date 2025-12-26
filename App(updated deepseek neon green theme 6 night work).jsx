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
  const [selectedSector, setSelectedSector] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      }, 11000);
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
      }, 11000);
      return () => clearInterval(interval);
    }
  }, [neuralNetworkMode]);

  // Quantum Entanglement Effect
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumEntanglement(prev => (prev + 1) % 100);
      }, 5000);
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
    }, 11000);
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
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Engineering', basePrice: 3200.00, baseChange: 0.78, marketCap: '4,40,000', weekHigh: 3450.00 },
      { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC', basePrice: 7200.00, baseChange: 0.45, marketCap: '4,45,210', weekHigh: 7500.00 },
      { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerate', basePrice: 3000.00, baseChange: 1.25, marketCap: '3,45,000', weekHigh: 3200.00 },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', basePrice: 1050.00, baseChange: -0.42, marketCap: '3,24,450', weekHigh: 1150.00 },
      { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile', basePrice: 10500.00, baseChange: -0.65, marketCap: '3,17,625', weekHigh: 11500.00 },
      { symbol: 'SUNPHARMA', name: 'Sun Pharma', sector: 'Pharma', basePrice: 1250.00, baseChange: 0.32, marketCap: '3,00,000', weekHigh: 1350.00 },
      { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Goods', basePrice: 3500.00, baseChange: 0.55, marketCap: '3,10,000', weekHigh: 3750.00 },
      { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Cement', basePrice: 9500.00, baseChange: -0.28, marketCap: '2,74,550', weekHigh: 10200.00 },
      { symbol: 'ASIANPAINT', name: 'Asian Paints', sector: 'Consumer Goods', basePrice: 2850.00, baseChange: -0.15, marketCap: '2,73,000', weekHigh: 3300.00 },
      { symbol: 'WIPRO', name: 'Wipro', sector: 'IT Services', basePrice: 520.40, baseChange: 0.45, marketCap: '2,72,000', weekHigh: 545.00 },
      { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT Services', basePrice: 1250.00, baseChange: -0.48, marketCap: '3,39,000', weekHigh: 1450.00 },
      { symbol: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automobile', basePrice: 1800.00, baseChange: 0.88, marketCap: '2,22,000', weekHigh: 1950.00 },
      { symbol: 'NTPC', name: 'NTPC', sector: 'Power', basePrice: 320.00, baseChange: 0.18, marketCap: '3,10,400', weekHigh: 340.00 },
      { symbol: 'POWERGRID', name: 'Power Grid', sector: 'Power', basePrice: 280.00, baseChange: -0.10, marketCap: '2,60,000', weekHigh: 310.00 },
      { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', basePrice: 1750.00, baseChange: -0.30, marketCap: '3,48,000', weekHigh: 1900.00 },
      { symbol: 'TATASTEEL', name: 'Tata Steel', sector: 'Metals', basePrice: 150.00, baseChange: 1.10, marketCap: '1,85,000', weekHigh: 170.00 },
      { symbol: 'JSWSTEEL', name: 'JSW Steel', sector: 'Metals', basePrice: 900.00, baseChange: 0.40, marketCap: '2,15,000', weekHigh: 950.00 },
      { symbol: 'ADANIPORTS', name: 'Adani Ports', sector: 'Infrastructure', basePrice: 1350.00, baseChange: 0.90, marketCap: '2,90,000', weekHigh: 1450.00 },
      { symbol: 'GRASIM', name: 'Grasim Industries', sector: 'Textiles/Cement', basePrice: 2200.00, baseChange: -0.45, marketCap: '1,50,000', weekHigh: 2400.00 },
      { symbol: 'NESTLEIND', name: 'Nestle India', sector: 'FMCG', basePrice: 2500.00, baseChange: 0.15, marketCap: '2,40,000', weekHigh: 2700.00 },
      { symbol: 'ONGC', name: 'ONGC', sector: 'Oil & Gas', basePrice: 260.00, baseChange: 0.60, marketCap: '3,25,000', weekHigh: 285.00 },
      { symbol: 'COALINDIA', name: 'Coal India', sector: 'Mining', basePrice: 450.00, baseChange: -0.20, marketCap: '2,75,000', weekHigh: 480.00 },
      { symbol: 'HINDALCO', name: 'Hindalco', sector: 'Metals', basePrice: 600.00, baseChange: 0.85, marketCap: '1,35,000', weekHigh: 640.00 },
      { symbol: 'TATAMOTORS', name: 'Tata Motors', sector: 'Automobile', basePrice: 950.00, baseChange: -1.20, marketCap: '3,15,000', weekHigh: 1050.00 },
      { symbol: 'SBILIFE', name: 'SBI Life Insurance', sector: 'Insurance', basePrice: 1450.00, baseChange: 0.35, marketCap: '1,45,000', weekHigh: 1550.00 },
      { symbol: 'HDFCLIFE', name: 'HDFC Life', sector: 'Insurance', basePrice: 650.00, baseChange: -0.10, marketCap: '1,38,000', weekHigh: 710.00 },
      { symbol: 'BPCL', name: 'BPCL', sector: 'Oil & Gas', basePrice: 600.00, baseChange: 0.75, marketCap: '1,30,000', weekHigh: 650.00 },
      { symbol: 'DRREDDY', name: 'Dr. Reddys', sector: 'Pharma', basePrice: 6200.00, baseChange: 0.25, marketCap: '1,05,000', weekHigh: 6500.00 },
      { symbol: 'CIPLA', name: 'Cipla', sector: 'Pharma', basePrice: 1450.00, baseChange: 0.15, marketCap: '1,15,000', weekHigh: 1550.00 },
      { symbol: 'DIVISLAB', name: 'Divis Lab', sector: 'Pharma', basePrice: 3800.00, baseChange: -0.50, marketCap: '1,00,000', weekHigh: 4200.00 },
      { symbol: 'APOLLOHOSP', name: 'Apollo Hospitals', sector: 'Healthcare', basePrice: 6100.00, baseChange: 0.80, marketCap: '88,000', weekHigh: 6500.00 },
      { symbol: 'BAJAJ-AUTO', name: 'Bajaj Auto', sector: 'Automobile', basePrice: 8500.00, baseChange: 1.10, marketCap: '2,40,000', weekHigh: 9000.00 },
      { symbol: 'EICHERMOT', name: 'Eicher Motors', sector: 'Automobile', basePrice: 4200.00, baseChange: -0.30, marketCap: '1,15,000', weekHigh: 4500.00 },
      { symbol: 'BRITANNIA', name: 'Britannia', sector: 'FMCG', basePrice: 5000.00, baseChange: 0.20, marketCap: '1,20,000', weekHigh: 5300.00 },
      { symbol: 'INDUSINDBK', name: 'IndusInd Bank', sector: 'Banking', basePrice: 1450.00, baseChange: -0.90, marketCap: '1,12,000', weekHigh: 1600.00 },
      { symbol: 'TECHM', name: 'Tech Mahindra', sector: 'IT Services', basePrice: 1300.00, baseChange: 0.55, marketCap: '1,25,000', weekHigh: 1450.00 },
      { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp', sector: 'Automobile', basePrice: 4500.00, baseChange: 0.35, marketCap: '90,000', weekHigh: 4900.00 },
      { symbol: 'SHREECEM', name: 'Shree Cement', sector: 'Cement', basePrice: 25000.00, baseChange: -0.15, marketCap: '90,000', weekHigh: 28000.00 },
      { symbol: 'ADANIGREEN', name: 'Adani Green', sector: 'Energy', basePrice: 1800.00, baseChange: 1.45, marketCap: '2,80,000', weekHigh: 2000.00 },
      { symbol: 'ADANITRANS', name: 'Adani Energy Sol', sector: 'Power', basePrice: 1100.00, baseChange: 0.70, marketCap: '1,25,000', weekHigh: 1250.00 },
      { symbol: 'DMART', name: 'Avenue Supermarts', sector: 'Retail', basePrice: 4500.00, baseChange: -0.25, marketCap: '2,90,000', weekHigh: 4800.00 },
      { symbol: 'BAJAJHLDNG', name: 'Bajaj Holdings', sector: 'Finance', basePrice: 8200.00, baseChange: 0.10, marketCap: '92,000', weekHigh: 8800.00 },
      { symbol: 'DLF', name: 'DLF', sector: 'Real Estate', basePrice: 850.00, baseChange: 1.20, marketCap: '2,10,000', weekHigh: 950.00 },
      { symbol: 'HAL', name: 'Hindustan Aero', sector: 'Defense', basePrice: 4200.00, baseChange: 2.10, marketCap: '2,80,000', weekHigh: 4500.00 },
      { symbol: 'BEL', name: 'Bharat Electronics', sector: 'Defense', basePrice: 280.00, baseChange: 1.80, marketCap: '2,05,000', weekHigh: 310.00 },
      { symbol: 'SIEMENS', name: 'Siemens', sector: 'Engineering', basePrice: 6500.00, baseChange: 0.90, marketCap: '2,30,000', weekHigh: 7200.00 },
      { symbol: 'IRFC', name: 'IRFC', sector: 'Finance', basePrice: 175.00, baseChange: 1.50, marketCap: '2,25,000', weekHigh: 220.00 },
      { symbol: 'IOC', name: 'Indian Oil', sector: 'Oil & Gas', basePrice: 165.00, baseChange: -0.40, marketCap: '2,30,000', weekHigh: 190.00 },
      { symbol: 'ZOMATO', name: 'Zomato', sector: 'Internet', basePrice: 260.00, baseChange: 2.50, marketCap: '2,30,000', weekHigh: 298.00 },
      { symbol: 'JIOFIN', name: 'Jio Financial', sector: 'Finance', basePrice: 350.00, baseChange: 0.80, marketCap: '2,20,000', weekHigh: 390.00 },
      { symbol: 'GAIL', name: 'GAIL', sector: 'Gas', basePrice: 210.00, baseChange: 0.35, marketCap: '1,38,000', weekHigh: 235.00 },
      { symbol: 'PFC', name: 'PFC', sector: 'Finance', basePrice: 480.00, baseChange: 1.15, marketCap: '1,25,000', weekHigh: 550.00 },
      { symbol: 'RECLTD', name: 'REC Ltd', sector: 'Finance', basePrice: 520.00, baseChange: 0.95, marketCap: '1,35,000', weekHigh: 600.00 },
      { symbol: 'VBL', name: 'Varun Beverages', sector: 'FMCG', basePrice: 650.00, baseChange: 0.60, marketCap: '2,10,000', weekHigh: 700.00 },
      { symbol: 'GODREJCP', name: 'Godrej Consumer', sector: 'FMCG', basePrice: 1250.00, baseChange: -0.15, marketCap: '1,28,000', weekHigh: 1400.00 },
      { symbol: 'PIDILITIND', name: 'Pidilite', sector: 'Chemicals', basePrice: 3100.00, baseChange: 0.40, marketCap: '1,55,000', weekHigh: 3300.00 },
      { symbol: 'TRENT', name: 'Trent', sector: 'Retail', basePrice: 7000.00, baseChange: 3.20, marketCap: '2,50,000', weekHigh: 7800.00 },
      { symbol: 'TATACONSUM', name: 'Tata Consumer', sector: 'FMCG', basePrice: 1100.00, baseChange: -0.25, marketCap: '1,05,000', weekHigh: 1250.00 },
      { symbol: 'AMBUJACEM', name: 'Ambuja Cement', sector: 'Cement', basePrice: 630.00, baseChange: 0.50, marketCap: '1,55,000', weekHigh: 700.00 },
      { symbol: 'ABB', name: 'ABB India', sector: 'Engineering', basePrice: 7800.00, baseChange: 1.10, marketCap: '1,65,000', weekHigh: 8500.00 },
      { symbol: 'CANBK', name: 'Canara Bank', sector: 'Banking', basePrice: 115.00, baseChange: -0.30, marketCap: '1,05,000', weekHigh: 130.00 },
      { symbol: 'PNB', name: 'PNB', sector: 'Banking', basePrice: 125.00, baseChange: -0.80, marketCap: '1,35,000', weekHigh: 145.00 },
      { symbol: 'BANKBARODA', name: 'Bank of Baroda', sector: 'Banking', basePrice: 250.00, baseChange: -0.20, marketCap: '1,30,000', weekHigh: 290.00 },
      { symbol: 'VEDL', name: 'Vedanta', sector: 'Mining', basePrice: 450.00, baseChange: 1.40, marketCap: '1,65,000', weekHigh: 500.00 },
      { symbol: 'CHOLAFIN', name: 'Cholamandalam', sector: 'NBFC', basePrice: 1350.00, baseChange: 0.65, marketCap: '1,12,000', weekHigh: 1500.00 },

      // === TOP 50 MID CAP INDIAN STOCKS ===
      { symbol: 'YESBANK', name: 'Yes Bank', sector: 'Banking', basePrice: 25.40, baseChange: 1.20, marketCap: '78,500', weekHigh: 32.00 },
      { symbol: 'IDFCFIRSTB', name: 'IDFC First Bank', sector: 'Banking', basePrice: 82.15, baseChange: -0.40, marketCap: '58,200', weekHigh: 100.00 },
      { symbol: 'RVNL', name: 'Rail Vikas Nigam', sector: 'Railways', basePrice: 480.00, baseChange: 2.50, marketCap: '1,00,000', weekHigh: 600.00 },
      { symbol: 'IREDA', name: 'IREDA', sector: 'Finance', basePrice: 220.50, baseChange: 1.15, marketCap: '60,000', weekHigh: 310.00 },
      { symbol: 'TATAELXSI', name: 'Tata Elxsi', sector: 'IT Services', basePrice: 7200.00, baseChange: -0.80, marketCap: '45,000', weekHigh: 9200.00 },
      { symbol: 'MAZDOCK', name: 'Mazagon Dock', sector: 'Defense', basePrice: 4200.00, baseChange: 3.50, marketCap: '85,000', weekHigh: 5800.00 },
      { symbol: 'COCHINSHIP', name: 'Cochin Shipyard', sector: 'Defense', basePrice: 1500.00, baseChange: 2.80, marketCap: '40,000', weekHigh: 2900.00 },
      { symbol: 'NHPC', name: 'NHPC', sector: 'Power', basePrice: 95.00, baseChange: 0.45, marketCap: '95,000', weekHigh: 118.00 },
      { symbol: 'SJVN', name: 'SJVN', sector: 'Power', basePrice: 135.00, baseChange: 1.20, marketCap: '53,000', weekHigh: 170.00 },
      { symbol: 'POLYCAB', name: 'Polycab India', sector: 'Cables', basePrice: 6500.00, baseChange: 0.75, marketCap: '98,000', weekHigh: 7500.00 },
      { symbol: 'KEI', name: 'KEI Industries', sector: 'Cables', basePrice: 4200.00, baseChange: 1.10, marketCap: '38,000', weekHigh: 4800.00 },
      { symbol: 'PERSISTENT', name: 'Persistent Sys', sector: 'IT Services', basePrice: 4800.00, baseChange: 0.95, marketCap: '72,000', weekHigh: 5500.00 },
      { symbol: 'MPHASIS', name: 'Mphasis', sector: 'IT Services', basePrice: 2800.00, baseChange: -0.30, marketCap: '52,000', weekHigh: 3100.00 },
      { symbol: 'MAXHEALTH', name: 'Max Healthcare', sector: 'Healthcare', basePrice: 850.00, baseChange: 0.50, marketCap: '82,000', weekHigh: 950.00 },
      { symbol: 'LUPIN', name: 'Lupin', sector: 'Pharma', basePrice: 1900.00, baseChange: 0.65, marketCap: '86,000', weekHigh: 2200.00 },
      { symbol: 'AUROPHARMA', name: 'Aurobindo Pharma', sector: 'Pharma', basePrice: 1400.00, baseChange: 0.40, marketCap: '82,000', weekHigh: 1550.00 },
      { symbol: 'GLAND', name: 'Gland Pharma', sector: 'Pharma', basePrice: 1700.00, baseChange: -1.20, marketCap: '28,000', weekHigh: 2100.00 },
      { symbol: 'VOLTAS', name: 'Voltas', sector: 'Consumer Durables', basePrice: 1600.00, baseChange: 0.85, marketCap: '53,000', weekHigh: 1850.00 },
      { symbol: 'BLUESTARCO', name: 'Blue Star', sector: 'Consumer Durables', basePrice: 1550.00, baseChange: 1.10, marketCap: '32,000', weekHigh: 1700.00 },
      { symbol: 'DIXON', name: 'Dixon Tech', sector: 'Electronics', basePrice: 12500.00, baseChange: 2.45, marketCap: '75,000', weekHigh: 15000.00 },
      { symbol: 'CONCOR', name: 'CONCOR', sector: 'Logistics', basePrice: 900.00, baseChange: -0.15, marketCap: '55,000', weekHigh: 1100.00 },
      { symbol: 'DELHIVERY', name: 'Delhivery', sector: 'Logistics', basePrice: 400.00, baseChange: -0.80, marketCap: '30,000', weekHigh: 480.00 },
      { symbol: 'BHEL', name: 'BHEL', sector: 'Engineering', basePrice: 280.00, baseChange: 1.50, marketCap: '98,000', weekHigh: 335.00 },
      { symbol: 'CUMMINSIND', name: 'Cummins India', sector: 'Engineering', basePrice: 3500.00, baseChange: 0.40, marketCap: '97,000', weekHigh: 4000.00 },
      { symbol: 'JSWENERGY', name: 'JSW Energy', sector: 'Power', basePrice: 700.00, baseChange: 0.90, marketCap: '1,20,000', weekHigh: 750.00 },
      { symbol: 'OIL', name: 'Oil India', sector: 'Oil & Gas', basePrice: 550.00, baseChange: 1.25, marketCap: '60,000', weekHigh: 760.00 },
      { symbol: 'PETRONET', name: 'Petronet LNG', sector: 'Oil & Gas', basePrice: 310.00, baseChange: -0.45, marketCap: '46,000', weekHigh: 360.00 },
      { symbol: 'BALAMINES', name: 'Balaji Amines', sector: 'Chemicals', basePrice: 2200.00, baseChange: -1.10, marketCap: '7,000', weekHigh: 2800.00 },
      { symbol: 'SRF', name: 'SRF Ltd', sector: 'Chemicals', basePrice: 2300.00, baseChange: 0.35, marketCap: '68,000', weekHigh: 2600.00 },
      { symbol: 'TATACOMM', name: 'Tata Comm', sector: 'Telecom', basePrice: 1850.00, baseChange: -0.20, marketCap: '52,000', weekHigh: 2100.00 },
      { symbol: 'ITI', name: 'ITI Ltd', sector: 'Telecom', basePrice: 280.00, baseChange: 4.50, marketCap: '27,000', weekHigh: 380.00 },
      { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', sector: 'Real Estate', basePrice: 1800.00, baseChange: 0.70, marketCap: '65,000', weekHigh: 2000.00 },
      { symbol: 'PHOENIXLTD', name: 'Phoenix Mills', sector: 'Real Estate', basePrice: 1600.00, baseChange: 1.15, marketCap: '57,000', weekHigh: 1800.00 },
      { symbol: 'PAGEIND', name: 'Page Industries', sector: 'Textiles', basePrice: 42000.00, baseChange: -0.40, marketCap: '47,000', weekHigh: 46000.00 },
      { symbol: 'KPRMILL', name: 'KPR Mill', sector: 'Textiles', basePrice: 900.00, baseChange: 0.25, marketCap: '30,000', weekHigh: 1000.00 },
      { symbol: 'NYKAA', name: 'FSN E-Commerce', sector: 'Internet', basePrice: 185.00, baseChange: 0.60, marketCap: '53,000', weekHigh: 230.00 },
      { symbol: 'POLICYBZR', name: 'PB Fintech', sector: 'Internet', basePrice: 1600.00, baseChange: 1.10, marketCap: '72,000', weekHigh: 1800.00 },
      { symbol: 'MRF', name: 'MRF', sector: 'Tyres', basePrice: 135000.00, baseChange: -0.10, marketCap: '57,000', weekHigh: 151000.00 },
      { symbol: 'BALKRISIND', name: 'Balkrishna Ind', sector: 'Tyres', basePrice: 2900.00, baseChange: 0.35, marketCap: '56,000', weekHigh: 3300.00 },
      { symbol: 'APOLLOTYRE', name: 'Apollo Tyres', sector: 'Tyres', basePrice: 500.00, baseChange: -0.45, marketCap: '32,000', weekHigh: 560.00 },
      { symbol: 'AUBANK', name: 'AU Small Finance', sector: 'Banking', basePrice: 650.00, baseChange: -0.80, marketCap: '48,000', weekHigh: 730.00 },
      { symbol: 'FEDERALBNK', name: 'Federal Bank', sector: 'Banking', basePrice: 190.00, baseChange: 0.25, marketCap: '46,000', weekHigh: 210.00 },
      { symbol: 'ASHOKLEY', name: 'Ashok Leyland', sector: 'Automobile', basePrice: 220.00, baseChange: 0.65, marketCap: '65,000', weekHigh: 260.00 },
      { symbol: 'ESCORTS', name: 'Escorts Kubota', sector: 'Automobile', basePrice: 3800.00, baseChange: -0.20, marketCap: '49,000', weekHigh: 4400.00 },
      { symbol: 'UBL', name: 'United Breweries', sector: 'Beverages', basePrice: 1950.00, baseChange: 0.40, marketCap: '51,000', weekHigh: 2200.00 },
      { symbol: 'TATAINVEST', name: 'Tata Investment', sector: 'Finance', basePrice: 6800.00, baseChange: 1.50, marketCap: '34,000', weekHigh: 9800.00 },
      { symbol: 'POONAWALLA', name: 'Poonawalla Fin', sector: 'NBFC', basePrice: 380.00, baseChange: -1.10, marketCap: '29,000', weekHigh: 520.00 },
      { symbol: 'LICHSGFIN', name: 'LIC Housing Fin', sector: 'Finance', basePrice: 620.00, baseChange: 0.20, marketCap: '34,000', weekHigh: 800.00 },
      { symbol: 'ABCAPITAL', name: 'Aditya Birla Cap', sector: 'Finance', basePrice: 210.00, baseChange: 0.45, marketCap: '55,000', weekHigh: 250.00 },

      // === TOP 50 SMALL CAP INDIAN STOCKS ===
      { symbol: 'SUZLON', name: 'Suzlon Energy', sector: 'Renewable', basePrice: 65.20, baseChange: -1.10, marketCap: '88,000', weekHigh: 86.00 },
      { symbol: 'JWL', name: 'Jupiter Wagons', sector: 'Railways', basePrice: 510.00, baseChange: 1.50, marketCap: '21,000', weekHigh: 700.00 },
      { symbol: 'TEXRAIL', name: 'Texmaco Rail', sector: 'Railways', basePrice: 210.00, baseChange: 2.10, marketCap: '8,500', weekHigh: 300.00 },
      { symbol: 'NBCC', name: 'NBCC India', sector: 'Construction', basePrice: 90.00, baseChange: 0.45, marketCap: '16,200', weekHigh: 200.00 },
      { symbol: 'HUDCO', name: 'HUDCO', sector: 'Finance', basePrice: 220.00, baseChange: 1.15, marketCap: '44,000', weekHigh: 350.00 },
      { symbol: 'RITES', name: 'RITES Ltd', sector: 'Railways', basePrice: 300.00, baseChange: 0.60, marketCap: '14,500', weekHigh: 410.00 },
      { symbol: 'IRCON', name: 'IRCON Intl', sector: 'Construction', basePrice: 230.00, baseChange: 1.80, marketCap: '21,500', weekHigh: 350.00 },
      { symbol: 'IFCI', name: 'IFCI Ltd', sector: 'Finance', basePrice: 65.00, baseChange: 3.20, marketCap: '17,000', weekHigh: 90.00 },
      { symbol: 'PPLPHARMA', name: 'Piramal Pharma', sector: 'Pharma', basePrice: 250.00, baseChange: 0.90, marketCap: '33,000', weekHigh: 310.00 },
      { symbol: 'EASEMYTRIP', name: 'Easy Trip Planners', sector: 'Online Travel', basePrice: 35.00, baseChange: -0.40, marketCap: '6,200', weekHigh: 54.00 },
      { symbol: 'GENUSPOWER', name: 'Genus Power', sector: 'Electricals', basePrice: 400.00, baseChange: 1.55, marketCap: '12,000', weekHigh: 480.00 },
      { symbol: 'PATELENG', name: 'Patel Engineering', sector: 'Construction', basePrice: 55.00, baseChange: 0.85, marketCap: '4,600', weekHigh: 79.00 },
      { symbol: 'PCJEWELLER', name: 'PC Jeweller', sector: 'Jewellery', basePrice: 150.00, baseChange: 4.95, marketCap: '7,000', weekHigh: 180.00 },
      { symbol: 'SOUTHBANK', name: 'South Indian Bank', sector: 'Banking', basePrice: 24.50, baseChange: -0.20, marketCap: '6,400', weekHigh: 39.00 },
      { symbol: 'UCOBANK', name: 'UCO Bank', sector: 'Banking', basePrice: 45.00, baseChange: 0.10, marketCap: '54,000', weekHigh: 70.00 },
      { symbol: 'IOB', name: 'Indian Overseas', sector: 'Banking', basePrice: 58.00, baseChange: -0.15, marketCap: '1,10,000', weekHigh: 84.00 },
      { symbol: 'MANAPPURAM', name: 'Manappuram Fin', sector: 'Finance', basePrice: 160.00, baseChange: -2.10, marketCap: '13,500', weekHigh: 230.00 },
      { symbol: 'MGL', name: 'Mahanagar Gas', sector: 'Gas', basePrice: 1450.00, baseChange: 0.40, marketCap: '14,000', weekHigh: 1900.00 },
      { symbol: 'CASTROLIND', name: 'Castrol India', sector: 'Oil', basePrice: 210.00, baseChange: 0.25, marketCap: '20,000', weekHigh: 275.00 },
      { symbol: 'RPOWER', name: 'Reliance Power', sector: 'Power', basePrice: 35.00, baseChange: 1.45, marketCap: '14,000', weekHigh: 54.00 },
      { symbol: 'RTNPOWER', name: 'RattanIndia Power', sector: 'Power', basePrice: 14.50, baseChange: 0.80, marketCap: '7,800', weekHigh: 21.00 },
      { symbol: 'INFIBEAM', name: 'Infibeam Avenues', sector: 'Fintech', basePrice: 28.00, baseChange: -0.35, marketCap: '7,800', weekHigh: 42.00 },
      { symbol: 'RENUKA', name: 'Shree Renuka Sugars', sector: 'Sugar', basePrice: 42.00, baseChange: -0.10, marketCap: '8,900', weekHigh: 55.00 },
      { symbol: 'EIDPARRY', name: 'EID Parry', sector: 'Sugar/Agri', basePrice: 800.00, baseChange: 0.55, marketCap: '14,200', weekHigh: 900.00 },
      { symbol: 'TATACOFFEE', name: 'Tata Coffee', sector: 'Tea/Coffee', basePrice: 350.00, baseChange: 0.20, marketCap: '6,500', weekHigh: 400.00 },
      { symbol: 'HBLPOWER', name: 'HBL Power', sector: 'Electricals', basePrice: 600.00, baseChange: 1.10, marketCap: '16,600', weekHigh: 710.00 },
      { symbol: 'GRAVITA', name: 'Gravita India', sector: 'Recycling', basePrice: 2100.00, baseChange: 0.95, marketCap: '14,500', weekHigh: 2600.00 },
      { symbol: 'RAILTEL', name: 'Railtel Corp', sector: 'Telecom', basePrice: 400.00, baseChange: 1.25, marketCap: '12,800', weekHigh: 615.00 },
      { symbol: 'ZENSARTECH', name: 'Zensar Tech', sector: 'IT Services', basePrice: 750.00, baseChange: 0.40, marketCap: '17,000', weekHigh: 850.00 },
      { symbol: 'KPITTECH', name: 'KPIT Tech', sector: 'IT/Auto', basePrice: 1400.00, baseChange: -0.65, marketCap: '38,000', weekHigh: 1900.00 },
      { symbol: 'TANLA', name: 'Tanla Platforms', sector: 'Cloud Comm', basePrice: 850.00, baseChange: -1.20, marketCap: '11,400', weekHigh: 1100.00 },
      { symbol: 'NAZARA', name: 'Nazara Tech', sector: 'Gaming', basePrice: 950.00, baseChange: 0.35, marketCap: '7,300', weekHigh: 1100.00 },
      { symbol: 'HFCL', name: 'HFCL Ltd', sector: 'Telecom', basePrice: 120.00, baseChange: 1.10, marketCap: '17,400', weekHigh: 170.00 },
      { symbol: 'PRINCEPIPE', name: 'Prince Pipes', sector: 'Pipes', basePrice: 500.00, baseChange: -0.40, marketCap: '5,500', weekHigh: 780.00 },
      { symbol: 'SUPREMEIND', name: 'Supreme Ind', sector: 'Plastics', basePrice: 4500.00, baseChange: 0.15, marketCap: '57,000', weekHigh: 6300.00 },
      { symbol: 'BSOFT', name: 'Birlasoft', sector: 'IT Services', basePrice: 600.00, baseChange: 0.25, marketCap: '16,500', weekHigh: 850.00 },
      { symbol: 'HAPPYFORGE', name: 'Happy Forgings', sector: 'Auto Parts', basePrice: 1100.00, baseChange: 0.70, marketCap: '10,400', weekHigh: 1300.00 },
      { symbol: 'CAMS', name: 'CAMS Ltd', sector: 'Finance', basePrice: 4400.00, baseChange: 1.45, marketCap: '21,500', weekHigh: 4900.00 },
      { symbol: 'CDSL', name: 'CDSL', sector: 'Finance', basePrice: 1500.00, baseChange: 2.10, marketCap: '31,500', weekHigh: 1750.00 },
      { symbol: 'KAYNES', name: 'Kaynes Tech', sector: 'Electronics', basePrice: 5500.00, baseChange: 1.15, marketCap: '35,000', weekHigh: 6000.00 },
      { symbol: 'SULA', name: 'Sula Vineyards', sector: 'Alcohol', basePrice: 450.00, baseChange: -0.10, marketCap: '3,800', weekHigh: 699.00 },
      { symbol: 'NETWEB', name: 'Netweb Tech', sector: 'IT/Server', basePrice: 2800.00, baseChange: 1.95, marketCap: '15,600', weekHigh: 3100.00 },
      { symbol: 'AETHER', name: 'Aether Ind', sector: 'Chemicals', basePrice: 900.00, baseChange: -0.50, marketCap: '11,500', weekHigh: 1100.00 },
      { symbol: 'TMB', name: 'Tamilnad Merc', sector: 'Banking', basePrice: 480.00, baseChange: 0.15, marketCap: '7,600', weekHigh: 580.00 },
      { symbol: 'KARURVYSYA', name: 'Karur Vysya', sector: 'Banking', basePrice: 210.00, baseChange: 0.45, marketCap: '16,800', weekHigh: 235.00 },
      { symbol: 'GRSE', name: 'Garden Reach', sector: 'Defense', basePrice: 1400.00, baseChange: 2.25, marketCap: '16,000', weekHigh: 2800.00 },
      { symbol: 'BDL', name: 'Bharat Dynamics', sector: 'Defense', basePrice: 1100.00, baseChange: 1.40, marketCap: '40,000', weekHigh: 1650.00 },
      { symbol: 'DATA-PATTERNS', name: 'Data Patterns', sector: 'Defense', basePrice: 2500.00, baseChange: 0.85, marketCap: '14,000', weekHigh: 3600.00 },
      { symbol: 'MTARTECH', name: 'MTAR Tech', sector: 'Defense/Energy', basePrice: 1800.00, baseChange: -0.30, marketCap: '5,500', weekHigh: 2900.00 },
      { symbol: 'SANGHVIMOV', name: 'Sanghvi Movers', sector: 'Infra', basePrice: 800.00, baseChange: 0.50, marketCap: '3,500', weekHigh: 1500.00 },

      // === TOP 50 CRYPTO COINS ===
      { symbol: 'BTC', name: 'Bitcoin', sector: 'Blockchain', basePrice: 95500.00, baseChange: 1.25, marketCap: '1.8T', weekHigh: 99000.00 },
      { symbol: 'ETH', name: 'Ethereum', sector: 'Smart Contract', basePrice: 3450.00, baseChange: 0.85, marketCap: '415B', weekHigh: 4000.00 },
      { symbol: 'SOL', name: 'Solana', sector: 'Smart Contract', basePrice: 240.00, baseChange: 3.50, marketCap: '110B', weekHigh: 260.00 },
      { symbol: 'BNB', name: 'Binance Coin', sector: 'Exchange', basePrice: 620.00, baseChange: -0.20, marketCap: '95B', weekHigh: 720.00 },
      { symbol: 'XRP', name: 'Ripple', sector: 'Payments', basePrice: 2.50, baseChange: 15.20, marketCap: '140B', weekHigh: 2.90 },
      { symbol: 'ADA', name: 'Cardano', sector: 'Blockchain', basePrice: 1.10, baseChange: 5.40, marketCap: '38B', weekHigh: 1.30 },
      { symbol: 'DOGE', name: 'Dogecoin', sector: 'Meme', basePrice: 0.38, baseChange: -2.10, marketCap: '55B', weekHigh: 0.45 },
      { symbol: 'AVAX', name: 'Avalanche', sector: 'Smart Contract', basePrice: 45.00, baseChange: 1.15, marketCap: '18B', weekHigh: 60.00 },
      { symbol: 'DOT', name: 'Polkadot', sector: 'Interoperability', basePrice: 9.50, baseChange: 0.65, marketCap: '14B', weekHigh: 12.00 },
      { symbol: 'TRX', name: 'TRON', sector: 'Blockchain', basePrice: 0.22, baseChange: 0.10, marketCap: '19B', weekHigh: 0.25 },
      { symbol: 'LINK', name: 'Chainlink', sector: 'Oracle', basePrice: 22.00, baseChange: 1.45, marketCap: '14B', weekHigh: 28.00 },
      { symbol: 'MATIC', name: 'Polygon', sector: 'Layer 2', basePrice: 0.60, baseChange: 0.80, marketCap: '6B', weekHigh: 1.20 },
      { symbol: 'SHIB', name: 'Shiba Inu', sector: 'Meme', basePrice: 0.00003, baseChange: -1.50, marketCap: '18B', weekHigh: 0.00004 },
      { symbol: 'LTC', name: 'Litecoin', sector: 'Payments', basePrice: 120.00, baseChange: 2.20, marketCap: '9B', weekHigh: 140.00 },
      { symbol: 'BCH', name: 'Bitcoin Cash', sector: 'Payments', basePrice: 550.00, baseChange: 1.10, marketCap: '11B', weekHigh: 700.00 },
      { symbol: 'NEAR', name: 'Near Protocol', sector: 'Blockchain', basePrice: 7.50, baseChange: 3.10, marketCap: '8B', weekHigh: 9.00 },
      { symbol: 'ICP', name: 'Internet Computer', sector: 'Cloud', basePrice: 12.00, baseChange: 0.40, marketCap: '5B', weekHigh: 20.00 },
      { symbol: 'FIL', name: 'Filecoin', sector: 'Storage', basePrice: 6.50, baseChange: -0.50, marketCap: '3B', weekHigh: 11.00 },
      { symbol: 'UNI', name: 'Uniswap', sector: 'DEX', basePrice: 12.50, baseChange: 4.20, marketCap: '7B', weekHigh: 16.00 },
      { symbol: 'PEPE', name: 'Pepe', sector: 'Meme', basePrice: 0.00002, baseChange: 12.50, marketCap: '8B', weekHigh: 0.00003 },
      { symbol: 'STX', name: 'Stacks', sector: 'Bitcoin Layer', basePrice: 2.20, baseChange: 1.80, marketCap: '3B', weekHigh: 3.80 },
      { symbol: 'APT', name: 'Aptos', sector: 'Blockchain', basePrice: 13.00, baseChange: 0.90, marketCap: '6B', weekHigh: 19.00 },
      { symbol: 'SUI', name: 'Sui', sector: 'Blockchain', basePrice: 3.80, baseChange: 5.60, marketCap: '10B', weekHigh: 4.10 },
      { symbol: 'OP', name: 'Optimism', sector: 'Layer 2', basePrice: 2.50, baseChange: 2.10, marketCap: '3B', weekHigh: 4.80 },
      { symbol: 'ARB', name: 'Arbitrum', sector: 'Layer 2', basePrice: 0.95, baseChange: 1.10, marketCap: '4B', weekHigh: 2.40 },
      { symbol: 'AAVE', name: 'Aave', sector: 'Lending', basePrice: 220.00, baseChange: 3.40, marketCap: '3B', weekHigh: 280.00 },
      { symbol: 'MKR', name: 'Maker', sector: 'DeFi', basePrice: 1800.00, baseChange: 0.20, marketCap: '2B', weekHigh: 4000.00 },
      { symbol: 'RNDR', name: 'Render', sector: 'AI/Computing', basePrice: 8.50, baseChange: 4.50, marketCap: '3B', weekHigh: 13.00 },
      { symbol: 'GRT', name: 'The Graph', sector: 'Indexing', basePrice: 0.35, baseChange: 1.10, marketCap: '3B', weekHigh: 0.50 },
      { symbol: 'TAO', name: 'Bittensor', sector: 'AI', basePrice: 600.00, baseChange: 2.80, marketCap: '4B', weekHigh: 750.00 },
      { symbol: 'FET', name: 'Fetch.ai', sector: 'AI', basePrice: 1.80, baseChange: 3.10, marketCap: '4B', weekHigh: 3.40 },
      { symbol: 'JUP', name: 'Jupiter', sector: 'Solana Ecosystem', basePrice: 1.20, baseChange: 2.50, marketCap: '1B', weekHigh: 1.80 },
      { symbol: 'FLOKI', name: 'Floki', sector: 'Meme', basePrice: 0.00025, baseChange: 8.10, marketCap: '2B', weekHigh: 0.00035 },
      { symbol: 'BONK', name: 'Bonk', sector: 'Meme', basePrice: 0.00005, baseChange: 6.40, marketCap: '3B', weekHigh: 0.00006 },
      { symbol: 'TIA', name: 'Celestia', sector: 'Modular', basePrice: 8.50, baseChange: 0.50, marketCap: '2B', weekHigh: 20.00 },
      { symbol: 'WIF', name: 'Dogwifhat', sector: 'Meme', basePrice: 3.50, baseChange: 10.20, marketCap: '3B', weekHigh: 4.80 },
      { symbol: 'INJ', name: 'Injective', sector: 'DeFi', basePrice: 28.00, baseChange: 1.10, marketCap: '2B', weekHigh: 52.00 },
      { symbol: 'THETA', name: 'Theta Network', sector: 'Video', basePrice: 1.80, baseChange: 0.40, marketCap: '2B', weekHigh: 3.80 },
      { symbol: 'VET', name: 'VeChain', sector: 'Supply Chain', basePrice: 0.04, baseChange: 2.15, marketCap: '3B', weekHigh: 0.06 },
      { symbol: 'FTM', name: 'Fantom', sector: 'Blockchain', basePrice: 1.10, baseChange: 5.20, marketCap: '3B', weekHigh: 1.30 },
      { symbol: 'SEI', name: 'Sei', sector: 'DeFi', basePrice: 0.65, baseChange: 3.40, marketCap: '2B', weekHigh: 1.10 },
      { symbol: 'KAS', name: 'Kaspa', sector: 'Blockchain', basePrice: 0.18, baseChange: 1.10, marketCap: '4B', weekHigh: 0.22 },
      { symbol: 'XLM', name: 'Stellar', sector: 'Payments', basePrice: 0.55, baseChange: 15.40, marketCap: '16B', weekHigh: 0.65 },
      { symbol: 'HBAR', name: 'Hedera', sector: 'Blockchain', basePrice: 0.35, baseChange: 12.10, marketCap: '12B', weekHigh: 0.42 },
      { symbol: 'LDO', name: 'Lido', sector: 'Liquid Staking', basePrice: 1.50, baseChange: 0.80, marketCap: '1B', weekHigh: 4.00 },
      { symbol: 'PYTH', name: 'Pyth Network', sector: 'Oracle', basePrice: 0.50, baseChange: 2.10, marketCap: '1B', weekHigh: 1.10 },
      { symbol: 'ENA', name: 'Ethena', sector: 'Stablecoin', basePrice: 0.85, baseChange: 5.40, marketCap: '2B', weekHigh: 1.50 },
      { symbol: 'IMX', name: 'Immutable', sector: 'Gaming', basePrice: 1.90, baseChange: 0.30, marketCap: '3B', weekHigh: 3.50 },
      { symbol: 'BEAM', name: 'Beam', sector: 'Gaming', basePrice: 0.02, baseChange: 1.10, marketCap: '1B', weekHigh: 0.04 },
      { symbol: 'EGLD', name: 'MultiversX', sector: 'Blockchain', basePrice: 45.00, baseChange: 0.90, marketCap: '1B', weekHigh: 75.00 },

      // === TOP 50 FOREX PAIRS ===
      { symbol: 'USDINR', name: 'USD/INR', sector: 'Currency', basePrice: 84.45, baseChange: 0.05, marketCap: 'N/A', weekHigh: 84.60 },
      { symbol: 'EURUSD', name: 'EUR/USD', sector: 'Currency', basePrice: 1.05, baseChange: -0.12, marketCap: 'N/A', weekHigh: 1.10 },
      { symbol: 'GBPUSD', name: 'GBP/USD', sector: 'Currency', basePrice: 1.26, baseChange: 0.08, marketCap: 'N/A', weekHigh: 1.30 },
      { symbol: 'USDJPY', name: 'USD/JPY', sector: 'Currency', basePrice: 150.20, baseChange: 0.45, marketCap: 'N/A', weekHigh: 155.00 },
      { symbol: 'AUDUSD', name: 'AUD/USD', sector: 'Currency', basePrice: 0.65, baseChange: -0.25, marketCap: 'N/A', weekHigh: 0.68 },
      { symbol: 'USDCAD', name: 'USD/CAD', sector: 'Currency', basePrice: 1.40, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.42 },
      { symbol: 'USDCHF', name: 'USD/CHF', sector: 'Currency', basePrice: 0.88, baseChange: -0.05, marketCap: 'N/A', weekHigh: 0.92 },
      { symbol: 'NZDUSD', name: 'NZD/USD', sector: 'Currency', basePrice: 0.59, baseChange: -0.15, marketCap: 'N/A', weekHigh: 0.62 },
      { symbol: 'EURGBP', name: 'EUR/GBP', sector: 'Currency', basePrice: 0.83, baseChange: -0.10, marketCap: 'N/A', weekHigh: 0.86 },
      { symbol: 'EURJPY', name: 'EUR/JPY', sector: 'Currency', basePrice: 158.40, baseChange: 0.30, marketCap: 'N/A', weekHigh: 164.00 },
      { symbol: 'GBPJPY', name: 'GBP/JPY', sector: 'Currency', basePrice: 190.10, baseChange: 0.50, marketCap: 'N/A', weekHigh: 198.00 },
      { symbol: 'EURCHF', name: 'EUR/CHF', sector: 'Currency', basePrice: 0.93, baseChange: -0.02, marketCap: 'N/A', weekHigh: 0.98 },
      { symbol: 'AUDJPY', name: 'AUD/JPY', sector: 'Currency', basePrice: 98.50, baseChange: 0.15, marketCap: 'N/A', weekHigh: 102.00 },
      { symbol: 'EURAUD', name: 'EUR/AUD', sector: 'Currency', basePrice: 1.62, baseChange: 0.12, marketCap: 'N/A', weekHigh: 1.68 },
      { symbol: 'GBPAUD', name: 'GBP/AUD', sector: 'Currency', basePrice: 1.94, baseChange: 0.25, marketCap: 'N/A', weekHigh: 1.98 },
      { symbol: 'USDSGD', name: 'USD/SGD', sector: 'Currency', basePrice: 1.34, baseChange: 0.05, marketCap: 'N/A', weekHigh: 1.36 },
      { symbol: 'USDHKD', name: 'USD/HKD', sector: 'Currency', basePrice: 7.78, baseChange: 0.01, marketCap: 'N/A', weekHigh: 7.85 },
      { symbol: 'USDCNH', name: 'USD/CNH', sector: 'Currency', basePrice: 7.25, baseChange: 0.08, marketCap: 'N/A', weekHigh: 7.30 },
      { symbol: 'USDZAR', name: 'USD/ZAR', sector: 'Currency', basePrice: 18.20, baseChange: 0.45, marketCap: 'N/A', weekHigh: 19.50 },
      { symbol: 'USDMXN', name: 'USD/MXN', sector: 'Currency', basePrice: 20.30, baseChange: 0.60, marketCap: 'N/A', weekHigh: 21.00 },
      { symbol: 'USDTHB', name: 'USD/THB', sector: 'Currency', basePrice: 34.50, baseChange: 0.10, marketCap: 'N/A', weekHigh: 36.00 },
      { symbol: 'USDTRY', name: 'USD/TRY', sector: 'Currency', basePrice: 34.80, baseChange: 0.05, marketCap: 'N/A', weekHigh: 36.00 },
      { symbol: 'EURCAD', name: 'EUR/CAD', sector: 'Currency', basePrice: 1.48, baseChange: -0.05, marketCap: 'N/A', weekHigh: 1.52 },
      { symbol: 'GBPCAD', name: 'GBP/CAD', sector: 'Currency', basePrice: 1.76, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.82 },
      { symbol: 'AUDCAD', name: 'AUD/CAD', sector: 'Currency', basePrice: 0.92, baseChange: -0.15, marketCap: 'N/A', weekHigh: 0.96 },
      { symbol: 'NZDCAD', name: 'NZD/CAD', sector: 'Currency', basePrice: 0.83, baseChange: -0.20, marketCap: 'N/A', weekHigh: 0.88 },
      { symbol: 'CHFJPY', name: 'CHF/JPY', sector: 'Currency', basePrice: 171.20, baseChange: 0.55, marketCap: 'N/A', weekHigh: 176.00 },
      { symbol: 'AUDNZD', name: 'AUD/NZD', sector: 'Currency', basePrice: 1.09, baseChange: 0.05, marketCap: 'N/A', weekHigh: 1.12 },
      { symbol: 'EURNZD', name: 'EUR/NZD', sector: 'Currency', basePrice: 1.77, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.84 },
      { symbol: 'GBPNZD', name: 'GBP/NZD', sector: 'Currency', basePrice: 2.12, baseChange: 0.15, marketCap: 'N/A', weekHigh: 2.20 },
      { symbol: 'CADJPY', name: 'CAD/JPY', sector: 'Currency', basePrice: 107.50, baseChange: 0.35, marketCap: 'N/A', weekHigh: 112.00 },
      { symbol: 'NZDJPY', name: 'NZD/JPY', sector: 'Currency', basePrice: 88.40, baseChange: 0.25, marketCap: 'N/A', weekHigh: 94.00 },
      { symbol: 'AUDCHF', name: 'AUD/CHF', sector: 'Currency', basePrice: 0.58, baseChange: -0.10, marketCap: 'N/A', weekHigh: 0.62 },
      { symbol: 'EURSEK', name: 'EUR/SEK', sector: 'Currency', basePrice: 11.45, baseChange: 0.05, marketCap: 'N/A', weekHigh: 11.80 },
      { symbol: 'EURNOK', name: 'EUR/NOK', sector: 'Currency', basePrice: 11.80, baseChange: 0.08, marketCap: 'N/A', weekHigh: 12.20 },
      { symbol: 'USDSEK', name: 'USD/SEK', sector: 'Currency', basePrice: 10.90, baseChange: 0.15, marketCap: 'N/A', weekHigh: 11.30 },
      { symbol: 'USDNOK', name: 'USD/NOK', sector: 'Currency', basePrice: 11.20, baseChange: 0.20, marketCap: 'N/A', weekHigh: 11.60 },
      { symbol: 'USDDKK', name: 'USD/DKK', sector: 'Currency', basePrice: 7.05, baseChange: 0.02, marketCap: 'N/A', weekHigh: 7.20 },
      { symbol: 'USDSGD', name: 'USD/SGD', sector: 'Currency', basePrice: 1.35, baseChange: 0.03, marketCap: 'N/A', weekHigh: 1.38 },
      { symbol: 'USDPLN', name: 'USD/PLN', sector: 'Currency', basePrice: 4.10, baseChange: 0.25, marketCap: 'N/A', weekHigh: 4.30 },
      { symbol: 'GBPSGD', name: 'GBP/SGD', sector: 'Currency', basePrice: 1.69, baseChange: 0.12, marketCap: 'N/A', weekHigh: 1.75 },
      { symbol: 'EURSGD', name: 'EUR/SGD', sector: 'Currency', basePrice: 1.42, baseChange: -0.05, marketCap: 'N/A', weekHigh: 1.48 },
      { symbol: 'USDHUF', name: 'USD/HUF', sector: 'Currency', basePrice: 380.00, baseChange: 0.45, marketCap: 'N/A', weekHigh: 405.00 },
      { symbol: 'USDCZK', name: 'USD/CZK', sector: 'Currency', basePrice: 23.80, baseChange: 0.15, marketCap: 'N/A', weekHigh: 24.50 },
      { symbol: 'USDILS', name: 'USD/ILS', sector: 'Currency', basePrice: 3.75, baseChange: -0.10, marketCap: 'N/A', weekHigh: 3.90 },
      { symbol: 'USDARARS', name: 'USD/SAR', sector: 'Currency', basePrice: 3.75, baseChange: 0.00, marketCap: 'N/A', weekHigh: 3.76 },
      { symbol: 'USDAED', name: 'USD/AED', sector: 'Currency', basePrice: 3.67, baseChange: 0.00, marketCap: 'N/A', weekHigh: 3.68 },
      { symbol: 'XAUUSD', name: 'Gold/USD', sector: 'Commodity', basePrice: 2650.00, baseChange: 0.45, marketCap: 'N/A', weekHigh: 2790.00 },
      { symbol: 'XAGUSD', name: 'Silver/USD', sector: 'Commodity', basePrice: 31.20, baseChange: 1.10, marketCap: 'N/A', weekHigh: 35.00 },
      { symbol: 'USDOLLAR', name: 'DXY Index', sector: 'Index', basePrice: 106.50, baseChange: 0.15, marketCap: 'N/A', weekHigh: 108.00 }
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

  const pieData = useMemo(() => [
    { name: 'Stocks', value: 40 },
    { name: 'Crypto', value: 25 },
    { name: 'Forex', value: 20 },
    { name: 'Commodities', value: 15 },
  ], []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Use useMemo for filtered assets
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

useEffect(() => {
  const timer = setInterval(() => setCurrentTime(new Date()), 300000); // 5 minutes = 300,000ms
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
    }, 6000);
    
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

  const topGainers = useMemo(() => [...assets].sort((a, b) => parseFloat(b.change) - parseFloat(a.change)).slice(0, 3), [assets]);
  const topLosers = useMemo(() => [...assets].sort((a, b) => parseFloat(a.change) - parseFloat(b.change)).slice(0, 3), [assets]);

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
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-sm">Quantum Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThermometerSun className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Market Temp: {marketTemperature.toFixed(1)}°</span>
          </div>
          <span className="text-sm text-gray-400">Last update: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <SystemStatus />
      </div>

      {/* Quantum Control Panel */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-cyan-500' : 'border-cyan-200'} relative z-10`}>
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🔮 QUANTUM CONTROL PANEL
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={activateQuantumMode}
              className={`px-4 py-2 rounded-lg ${quantumMode ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'} text-white font-medium flex items-center`}
            >
              <Atom className="w-4 h-4 mr-2" />
              {quantumMode ? 'Quantum Active' : 'Activate Quantum'}
            </button>
            <button
              onClick={activateNeuralNetwork}
              className={`px-4 py-2 rounded-lg ${neuralNetworkMode ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium flex items-center`}
            >
              <BrainCircuit className="w-4 h-4 mr-2" />
              {neuralNetworkMode ? 'Neural Active' : 'Neural Network'}
            </button>
            <button
              onClick={() => setCyberpunkMode(!cyberpunkMode)}
              className={`px-4 py-2 rounded-lg ${cyberpunkMode ? 'bg-pink-700' : 'bg-pink-600 hover:bg-pink-700'} text-white font-medium flex items-center`}
            >
              <SatelliteDish className="w-4 h-4 mr-2" />
              Cyberpunk
            </button>
            <button
              onClick={openWormhole}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium flex items-center"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Open Wormhole
            </button>
            <button
              onClick={() => setCryptoMining(!cryptoMining)}
              className={`px-4 py-2 rounded-lg ${cryptoMining ? 'bg-yellow-700' : 'bg-yellow-600 hover:bg-yellow-700'} text-white font-medium flex items-center`}
            >
              <Bitcoin className="w-4 h-4 mr-2" />
              {cryptoMining ? 'Mining...' : 'Crypto Mine'}
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
              {['1D', '1W', '1M', '3M', 'Quantum'].map((tf) => (
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

        {/* Radar Chart for Analysis */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-purple-500' : 'border-purple-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <Radar className="mr-2 text-purple-400" /> Analysis Radar
          </h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <PolarRadiusAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <RechartsRadar name="Current" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                <RechartsRadar name="Average" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        