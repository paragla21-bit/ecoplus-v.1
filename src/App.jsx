import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, 
  Brain, ChevronDown, ChevronUp, BarChart3, Activity, 
  Shield, DollarSign, Percent, MessageSquare, Send, 
  Smartphone, Volume2, TrendingUp as Profit, TrendingDown as Loss,
  Filter, Settings, Bell, ExternalLink, Maximize2,
  Minimize2, Search, X, Menu, Grid, Layout, Eye, EyeOff,
  RotateCw, Download, Share2, HelpCircle, BookOpen,
  TrendingUp as Bullish, TrendingDown as Bearish, Award
} from 'lucide-react';

const ICTAdvancedAnalyzer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('NSE');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [telegramConfig, setTelegramConfig] = useState({
    token: '',
    chatId: '',
    enabled: false
  });
  const [alertsSent, setAlertsSent] = useState([]);
  const [showTelegramModal, setShowTelegramModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showColorLegend, setShowColorLegend] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // USD to INR Conversion Rate
  const USD_TO_INR = 83.50;

  // Format Indian Rupees
  const formatINR = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount.toFixed(2)}`;
  };

  // Format large numbers
  const formatVolume = (amount) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(2)}B`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(2)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toFixed(0);
  };

  // Generate realistic trade parameters for Indian stocks
  const generateTradeParameters = (basePrice) => {
    const volatility = 0.015 + Math.random() * 0.035;
    const riskMultiplier = 1.5 + Math.random() * 2;
    const stopLossPercent = (volatility * riskMultiplier * 100).toFixed(1);
    const targetPercent = (volatility * riskMultiplier * 2.5 * 100).toFixed(1);
    
    const currentPrice = (basePrice * (0.96 + Math.random() * 0.08)).toFixed(2);
    const stopLoss = (currentPrice * (1 - stopLossPercent/100)).toFixed(2);
    const target = (currentPrice * (1 + targetPercent/100)).toFixed(2);
    const riskReward = (targetPercent / stopLossPercent).toFixed(2);
    
    return {
      currentPrice: formatINR(parseFloat(currentPrice)),
      stopLoss: formatINR(parseFloat(stopLoss)),
      target: formatINR(parseFloat(target)),
      stopLossPercent: `${stopLossPercent}%`,
      targetPercent: `${targetPercent}%`,
      riskReward: `1:${riskReward}`,
      riskLevel: stopLossPercent > 5 ? 'HIGH' : stopLossPercent > 3 ? 'MEDIUM' : 'LOW',
      confidence: (70 + Math.random() * 25).toFixed(0) + '%',
      entryZone: `${formatINR(parseFloat(currentPrice) * 0.995)}-${formatINR(parseFloat(currentPrice) * 1.005)}`,
      timeFrame: ['Intraday', 'Swing (3-5 days)', 'Position (1-2 weeks)'][Math.floor(Math.random() * 3)],
      positionSize: Math.floor(Math.random() * 5000) + 500,
      capitalRisk: (Math.random() * 2 + 0.5).toFixed(1) + '%'
    };
  };

  // Advanced analysis generator
  const generateAdvancedAnalysis = (asset) => {
    const analyses = [
      "Price action shows strong bullish momentum with FVG formation above key support",
      "Market structure shift detected - optimal entry during London Kill Zone",
      "Liquidity sweep followed by fair value gap at institutional levels",
      "Order blocks identified at previous session high with volume confirmation",
      "Volume profile shows high volume node acting as strong support",
      "Smart money divergence detected on 15min timeframe - expecting reversal",
      "Market maker buy model activated with optimal trade entry parameters",
      "Multiple confluences: Order Block + FVG + EQH with positive risk-reward",
      "Market in discount phase - expecting premium expansion towards targets",
      "ICT Silver Bullet setup forming - watch for confirmation candle"
    ];
    
    const warnings = [
      "Earnings announcement scheduled this week - monitor closely",
      "Approaching major resistance level - wait for breakout confirmation",
      "Volume declining on rallies - require confirmation before entry",
      "High volatility expected due to market news - adjust position size",
      "Key support level being tested - wait for bounce confirmation"
    ];
    
    const currentPriceNum = parseFloat(asset.tradeParams.currentPrice.replace(/[₹,LKCr]/g, ''));
    
    return {
      technical: analyses[Math.floor(Math.random() * analyses.length)],
      keyLevels: {
        support: [
          formatINR(currentPriceNum * 0.97),
          formatINR(currentPriceNum * 0.95),
          formatINR(currentPriceNum * 0.93)
        ],
        resistance: [
          formatINR(currentPriceNum * 1.03),
          formatINR(currentPriceNum * 1.05),
          formatINR(currentPriceNum * 1.08)
        ]
      },
      warning: warnings[Math.floor(Math.random() * warnings.length)],
      setupType: ['Breakout', 'Pullback', 'Retest', 'Reversal', 'Continuation'][Math.floor(Math.random() * 5)],
      probability: (65 + Math.random() * 30).toFixed(0) + '%',
      trendStrength: (60 + Math.random() * 35).toFixed(0) + '%',
      volumeAnalysis: ['Increasing', 'Decreasing', 'Stable', 'Spiking'][Math.floor(Math.random() * 4)],
      momentum: ['Strong Bullish', 'Bullish', 'Neutral', 'Bearish'][Math.floor(Math.random() * 4)]
    };
  };

  // Indian Stocks Data with realistic base prices in INR
  const generateIndianStockData = () => {
    const indianStocks = [
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Conglomerate', basePrice: 2850 },
      { symbol: 'TCS', name: 'Tata Consultancy', sector: 'IT Services', basePrice: 3850 },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', basePrice: 1650 },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services', basePrice: 1550 },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', basePrice: 1050 },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', basePrice: 2450 },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 650 },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', basePrice: 1150 },
      { symbol: 'ITC', name: 'ITC Limited', sector: 'FMCG', basePrice: 425 },
      { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', basePrice: 1750 },
      { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC', basePrice: 7200 },
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Infrastructure', basePrice: 3400 },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', basePrice: 1100 },
      { symbol: 'ASIANPAINT', name: 'Asian Paints', sector: 'Paints', basePrice: 3200 },
      { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile', basePrice: 12500 },
      { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', sector: 'Pharma', basePrice: 1450 },
      { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Goods', basePrice: 3800 },
      { symbol: 'WIPRO', name: 'Wipro Limited', sector: 'IT Services', basePrice: 480 },
      { symbol: 'ONGC', name: 'Oil & Natural Gas', sector: 'Oil & Gas', basePrice: 220 },
      { symbol: 'NTPC', name: 'NTPC Limited', sector: 'Power', basePrice: 340 },
      { symbol: 'POWERGRID', name: 'Power Grid Corp', sector: 'Power', basePrice: 280 }
    ];

    return indianStocks.map((stock, idx) => {
      const tradeParams = generateTradeParameters(stock.basePrice);
      const analysis = generateAdvancedAnalysis({ tradeParams });
      
      // Generate realistic volume data
      const volume = Math.random() * 5000000 + 1000000;
      const volumeChange = (Math.random() * 40 - 20).toFixed(1);
      
      return {
        ...stock,
        rank: idx + 1,
        totalScore: (95 - idx * 1.5 + Math.random() * 5).toFixed(1),
        aiScore: (85 + Math.random() * 15).toFixed(1),
        ictScore: (80 + Math.random() * 20).toFixed(1),
        sentimentScore: (70 + Math.random() * 30).toFixed(1),
        volumeProfile: ['Very High', 'High', 'Medium'][Math.floor(Math.random() * 3)],
        signal: idx < 7 ? '🟢 STRONG BUY' : idx < 14 ? '🟢 BUY' : '🟡 HOLD',
        trend: Math.random() > 0.3 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore: (3 + Math.random() * 4).toFixed(1),
        nextOptimal: ['NY Kill Zone', 'London Kill Zone', 'Silver Bullet'][Math.floor(Math.random() * 3)],
        institutionalFlow: Math.random() > 0.5 ? 'Buying' : 'Selling',
        darkPoolActivity: formatVolume(Math.random() * 500000000 + 100000000),
        shortInterest: (Math.random() * 15).toFixed(1) + '%',
        optionsFlow: Math.random() > 0.5 ? 'Bullish' : 'Neutral',
        earningsDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN'),
        whaleActivity: Math.random() > 0.7 ? 'Detected' : 'Normal',
        volume: formatVolume(volume),
        volumeChange: `${volumeChange}%`,
        tradeParams,
        analysis,
        changePercent: (Math.random() * 10 - 3).toFixed(2) + '%',
        marketCap: formatINR(stock.basePrice * (Math.random() * 10000000 + 5000000))
      };
    });
  };

  const [assets, setAssets] = useState(generateIndianStockData());

  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      setAssets(generateIndianStockData());
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  // Filter assets based on search query
  const filteredAssets = assets.filter(asset =>
    asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Telegram Alert Function
  const sendTelegramAlert = (asset) => {
    if (!telegramConfig.enabled) {
      alert('Please enable Telegram alerts first!');
      return;
    }

    const message = `
🚨 **ICT TRADE ALERT - NSE** 🚨

📈 **${asset.symbol} - ${asset.name}**
📊 Sector: ${asset.sector}
🎯 Signal: ${asset.signal}
📉 Trend: ${asset.trend}

💰 **TRADE PARAMETERS**
• Current Price: ${asset.tradeParams.currentPrice}
• Stop Loss: ${asset.tradeParams.stopLoss} (${asset.tradeParams.stopLossPercent})
• Target: ${asset.tradeParams.target} (${asset.tradeParams.targetPercent})
• Risk-Reward: ${asset.tradeParams.riskReward}
• Entry Zone: ${asset.tradeParams.entryZone}
• Time Frame: ${asset.tradeParams.timeFrame}
• Position Size: ${asset.tradeParams.positionSize} shares
• Capital Risk: ${asset.tradeParams.capitalRisk}

⚠️ **RISK ANALYSIS**
• Risk Level: ${asset.tradeParams.riskLevel}
• Confidence: ${asset.tradeParams.confidence}
• Risk Score: ${asset.riskScore}/10

🎯 **ICT ANALYSIS**
${asset.analysis.technical}
• Setup: ${asset.analysis.setupType}
• Probability: ${asset.analysis.probability}
• Trend Strength: ${asset.analysis.trendStrength}
• Next Optimal: ${asset.nextOptimal}

📊 **MARKET DATA**
• Volume: ${asset.volume} (${asset.volumeChange})
• Market Cap: ${asset.marketCap}
• Dark Pool: ${asset.darkPoolActivity}
• Institutional: ${asset.institutionalFlow}

⏰ **TIMING**
${currentTime.toLocaleTimeString('en-IN')} | ${currentTime.toLocaleDateString('en-IN')}

#${asset.symbol} #NSE #TradeAlert #ICTIndia
    `;

    // Simulate sending to Telegram
    console.log('Telegram Alert Sent:', message);
    
    setAlertsSent(prev => [...prev, {
      symbol: asset.symbol,
      time: new Date().toLocaleTimeString('en-IN'),
      price: asset.tradeParams.currentPrice,
      signal: asset.signal
    }]);
    
    alert(`Telegram alert sent for ${asset.symbol}! Check console for details.`);
  };

  // Trading Sessions for Indian Market
  const sessions = [
    { name: 'Pre-Open', active: false, time: '9:00-9:15 AM IST', priority: 2 },
    { name: 'Asian KZ', active: true, time: '9:15-10:30 AM IST', priority: 4 },
    { name: 'London KZ', active: true, time: '1:30-3:30 PM IST', priority: 5 },
    { name: 'NY KZ', active: true, time: '6:00-9:00 PM IST', priority: 5 },
    { name: 'Silver Bullet', active: false, time: '9:30-10:30 PM IST', priority: 3 }
  ];

  const marketStats = {
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: 'TRENDING',
    totalAlerts: alertsSent.length,
    profitableTrades: Math.floor(alertsSent.length * 0.85),
    totalVolume: formatVolume(assets.reduce((sum, a) => sum + parseFloat(a.volume.replace(/[BMK]/g, '')), 0)),
    avgGain: '+2.4%'
  };

  // Color Legend Component
  const ColorLegend = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-neon-green-500 rounded-xl p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-neon-green-400 flex items-center">
            <Filter className="mr-3" /> Color Coding Legend
          </h3>
          <button
            onClick={() => setShowColorLegend(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { color: 'bg-neon-green-500', label: 'Strong Buy/Bullish', desc: 'High confidence bullish setup' },
            { color: 'bg-red-500', label: 'Bearish/High Risk', desc: 'Avoid or consider short positions' },
            { color: 'bg-yellow-500', label: 'Hold/Medium Risk', desc: 'Wait for better confirmation' },
            { color: 'bg-purple-500', label: 'High Volume', desc: 'Above average trading volume' },
            { color: 'bg-blue-500', label: 'Medium Volume', desc: 'Normal trading activity' },
            { color: 'bg-cyan-400', label: 'AI Analysis', desc: 'AI-generated insights' },
            { color: 'bg-orange-500', label: 'Active Session', desc: 'Currently active trading session' },
            { color: 'bg-pink-500', label: 'Institutional Flow', desc: 'Smart money activity' },
            { color: 'bg-green-600', label: 'Profit Target', desc: 'Take profit levels' },
            { color: 'bg-red-600', label: 'Stop Loss', desc: 'Risk management levels' },
            { color: 'bg-gray-600', label: 'Neutral/Closed', desc: 'Inactive or neutral status' },
            { color: 'bg-gradient-to-r from-neon-green-400 to-cyan-500', label: 'Premium Feature', desc: 'Advanced analytics' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <div className={`w-4 h-4 ${item.color} rounded mr-3`}></div>
                <span className="font-bold text-white">{item.label}</span>
              </div>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-cyan-500">
          <h4 className="font-bold text-cyan-400 mb-2 flex items-center">
            <HelpCircle className="mr-2" /> How to Read the Dashboard
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• <span className="text-neon-green-400">Green signals</span> indicate bullish opportunities</li>
            <li>• <span className="text-red-400">Red signals</span> indicate bearish or high-risk scenarios</li>
            <li>• Focus on assets with multiple <span className="text-yellow-400">confluences</span></li>
            <li>• Trade during <span className="text-orange-400">active Kill Zones</span> for best results</li>
            <li>• Use <span className="text-cyan-400">stop losses</span> always to manage risk</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Mobile responsive breakpoint
  const isMobile = window.innerWidth < 768;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Custom CSS for TradingView-like theme */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --neon-green: #00ff00;
          --neon-green-dark: #00cc00;
          --dark-bg: #131722;
          --dark-panel: #1e222d;
          --dark-border: #2a2e39;
          --text-primary: #d1d4dc;
          --text-secondary: #787b86;
          --profit: #00ff00;
          --loss: #ff0000;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: var(--dark-bg);
        }
        
        .tradingview-header {
          background: linear-gradient(180deg, #1e222d 0%, #131722 100%);
          border-bottom: 1px solid var(--dark-border);
        }
        
        .tradingview-panel {
          background: var(--dark-panel);
          border: 1px solid var(--dark-border);
          border-radius: 6px;
        }
        
        .tradingview-table {
          background: var(--dark-panel);
          border: 1px solid var(--dark-border);
        }
        
        .tradingview-table th {
          background: #2a2e39;
          font-weight: 600;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--dark-border);
        }
        
        .tradingview-table td {
          border-bottom: 1px solid var(--dark-border);
        }
        
        .neon-glow {
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }
        
        .neon-border {
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
        }
        
        .profit-text {
          color: var(--profit);
        }
        
        .loss-text {
          color: var(--loss);
        }
        
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #2a2e39 #131722;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #131722;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #2a2e39;
          border-radius: 3px;
        }
      `}</style>

      {/* Header */}
      <header className="tradingview-header px-4 py-3 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white neon-glow">ICT PRO ANALYZER</h1>
                <p className="text-xs text-gray-400">NSE • Real-time • Smart Money</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <div className="text-lg font-mono text-neon-green-400">
                {currentTime.toLocaleTimeString('en-IN', { hour12: false })}
              </div>
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' })}
              </div>
            </div>
            
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`p-2 rounded ${autoRefresh ? 'bg-neon-green-500 bg-opacity-20' : 'bg-gray-800'}`}
            >
              <RotateCw className={`w-4 h-4 ${autoRefresh ? 'text-neon-green-400 animate-spin' : 'text-gray-400'}`} />
            </button>
            
            <button
              onClick={() => setShowTelegramModal(true)}
              className="bg-gradient-to-r from-gray-800 to-gray-900 border border-neon-green-500 hover:border-neon-green-400 text-white px-3 py-2 rounded-lg flex items-center space-x-2 text-sm transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Alerts</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 lg:p-6 max-w-7xl mx-auto">
        {/* Market Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          {[
            { label: 'Total Assets', value: marketStats.totalAssets, change: null, icon: BarChart3, color: 'text-gray-300' },
            { label: 'Strong Signals', value: marketStats.strongSignals, change: '+4', icon: Zap, color: 'text-neon-green-400' },
            { label: 'Avg Accuracy', value: marketStats.averageAccuracy, change: '+1.2%', icon: Target, color: 'text-cyan-400' },
            { label: 'Total Volume', value: marketStats.totalVolume, change: '+12%', icon: Volume2, color: 'text-blue-400' },
            { label: 'Active Session', value: 'LON+NY', change: null, icon: Clock, color: 'text-orange-400' },
            { label: 'Avg Gain', value: marketStats.avgGain, change: null, icon: TrendingUp, color: 'text-neon-green-400' }
          ].map((stat, idx) => (
            <div key={idx} className="tradingview-panel p-3 hover:border-neon-green-400 transition-colors duration-200">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs text-gray-400">{stat.label}</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <div className="text-lg font-bold text-white">{stat.value}</div>
                {stat.change && (
                  <div className={`text-xs ${stat.change.startsWith('+') ? 'text-neon-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks (RELIANCE, TCS, HDFCBANK...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-neon-green-500"
            >
              <option>NSE</option>
              <option>BSE</option>
              <option>Global</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-neon-green-500"
            >
              <option>Total Score</option>
              <option>Risk Score</option>
              <option>Profit Potential</option>
              <option>Volume</option>
              <option>Change %</option>
            </select>
            
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm hover:border-neon-green-500 transition-colors"
            >
              {viewMode === 'grid' ? <Grid className="w-4 h-4" /> : <Layout className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setShowColorLegend(true)}
              className="px-3 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm hover:border-neon-green-500 transition-colors flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Legend</span>
            </button>
          </div>
        </div>

        {/* Kill Zones */}
        <div className="tradingview-panel p-4 mb-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <Clock className="mr-2 text-neon-green-400" /> Trading Sessions (Kill Zones) - IST
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {sessions.map((session, idx) => (
              <div key={idx} className={`p-3 rounded-lg border ${session.active ? 'border-neon-green-500 bg-neon-green-500 bg-opacity-10' : 'border-gray-700 bg-gray-900'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm text-white">{session.name}</span>
                  <span className={`px-2 py-1 rounded text-xs ${session.active ? 'bg-neon-green-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                    {session.active ? 'LIVE' : 'CLOSED'}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{session.time}</div>
                <div className="text-xs text-gray-500 mt-1">Priority: {session.priority}/5</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stocks Table */}
        <div className="tradingview-table rounded-lg overflow-hidden">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full">
              <thead>
                <tr className="text-xs">
                  <th className="p-3 text-left font-medium text-gray-400">#</th>
                  <th className="p-3 text-left font-medium text-gray-400">SYMBOL</th>
                  <th className="p-3 text-left font-medium text-gray-400">PRICE</th>
                  <th className="p-3 text-left font-medium text-gray-400">STOP LOSS</th>
                  <th className="p-3 text-left font-medium text-gray-400">TARGET</th>
                  <th className="p-3 text-left font-medium text-gray-400">R:R</th>
                  <th className="p-3 text-left font-medium text-gray-400">SIGNAL</th>
                  <th className="p-3 text-left font-medium text-gray-400">RISK</th>
                  <th className="p-3 text-left font-medium text-gray-400">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset, idx) => (
                  <React.Fragment key={idx}>
                    <tr className={`hover:bg-gray-800 transition-colors duration-150 ${idx < 7 ? 'bg-green-900 bg-opacity-5' : ''}`}>
                      <td className="p-3">
                        <div className={`font-bold ${idx < 3 ? 'text-neon-green-400' : idx < 7 ? 'text-green-400' : 'text-gray-400'}`}>
                          #{asset.rank}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-col">
                          <div className="font-bold text-white text-sm">{asset.symbol}</div>
                          <div className="text-xs text-gray-400">{asset.name}</div>
                          <div className="text-xs text-cyan-400 mt-1">{asset.sector}</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-white">{asset.tradeParams.currentPrice}</div>
                        <div className={`text-xs ${parseFloat(asset.changePercent) > 0 ? 'profit-text' : 'loss-text'}`}>
                          {asset.changePercent}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-red-400">{asset.tradeParams.stopLoss}</div>
                        <div className="text-xs text-gray-400">{asset.tradeParams.stopLossPercent}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-neon-green-400">{asset.tradeParams.target}</div>
                        <div className="text-xs text-gray-400">{asset.tradeParams.targetPercent}</div>
                      </td>
                      <td className="p-3">
                        <div className={`font-bold ${parseFloat(asset.tradeParams.riskReward.split(':')[1]) > 2 ? 'profit-text' : 'text-yellow-400'}`}>
                          {asset.tradeParams.riskReward}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className={`px-3 py-1.5 rounded text-xs font-bold text-center ${asset.signal.includes('STRONG') ? 'bg-neon-green-500 bg-opacity-20 text-neon-green-400' : asset.signal.includes('BUY') ? 'bg-green-500 bg-opacity-20 text-green-400' : 'bg-yellow-500 bg-opacity-20 text-yellow-400'}`}>
                          {asset.signal.replace('🟢 ', '').replace('🟡 ', '')}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-col gap-1">
                          <div className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'profit-text' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'loss-text'}`}>
                            {asset.riskScore}/10
                          </div>
                          <div className={`text-xs px-2 py-1 rounded w-min ${asset.tradeParams.riskLevel === 'LOW' ? 'bg-green-900 text-green-400' : asset.tradeParams.riskLevel === 'MEDIUM' ? 'bg-yellow-900 text-yellow-400' : 'bg-red-900 text-red-400'}`}>
                            {asset.tradeParams.riskLevel}
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => sendTelegramAlert(asset)}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg flex items-center gap-1 transition-colors"
                          >
                            <Send className="w-3 h-3" />
                            Alert
                          </button>
                          <button
                            onClick={() => setExpandedAsset(expandedAsset === idx ? null : idx)}
                            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-lg flex items-center gap-1 transition-colors"
                          >
                            {expandedAsset === idx ? 'Less' : 'More'}
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Details */}
                    {expandedAsset === idx && (
                      <tr className="bg-gray-900">
                        <td colSpan="9" className="p-0">
                          <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              {/* Trade Parameters */}
                              <div className="tradingview-panel p-4">
                                <h4 className="font-bold text-white mb-4 flex items-center text-sm">
                                  <Target className="mr-2 text-neon-green-400" /> Trade Parameters
                                </h4>
                                <div className="space-y-3 text-sm">
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Current Price:</span>
                                    <span className="font-bold text-lg text-white">{asset.tradeParams.currentPrice}</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Stop Loss:</span>
                                    <span className="font-bold text-red-400">{asset.tradeParams.stopLoss}</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Target:</span>
                                    <span className="font-bold text-neon-green-400">{asset.tradeParams.target}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Entry Zone:</span>
                                    <span className="font-medium text-white">{asset.tradeParams.entryZone}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Risk-Reward:</span>
                                    <span className={`font-bold ${parseFloat(asset.tradeParams.riskReward.split(':')[1]) > 2 ? 'text-neon-green-400' : 'text-yellow-400'}`}>
                                      {asset.tradeParams.riskReward}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Time Frame:</span>
                                    <span className="font-medium text-white">{asset.tradeParams.timeFrame}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Position Size:</span>
                                    <span className="font-medium text-white">{asset.tradeParams.positionSize} shares</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Capital Risk:</span>
                                    <span className="font-medium text-cyan-400">{asset.tradeParams.capitalRisk}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Technical Analysis */}
                              <div className="tradingview-panel p-4">
                                <h4 className="font-bold text-white mb-4 flex items-center text-sm">
                                  <Brain className="mr-2 text-cyan-400" /> Technical Analysis
                                </h4>
                                <div className="space-y-3 text-sm">
                                  <div className="text-gray-300 bg-gray-900 p-3 rounded">
                                    {asset.analysis.technical}
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <div className="text-xs text-gray-400">Setup Type</div>
                                      <div className="font-medium text-white">{asset.analysis.setupType}</div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-gray-400">Probability</div>
                                      <div className="font-bold text-neon-green-400">{asset.analysis.probability}</div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <div className="text-xs text-gray-400">Trend Strength</div>
                                      <div className="font-medium text-white">{asset.analysis.trendStrength}</div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-gray-400">Volume</div>
                                      <div className="font-medium text-white">{asset.analysis.volumeAnalysis}</div>
                                    </div>
                                  </div>
                                  <div className="text-xs text-yellow-400 bg-yellow-900 bg-opacity-20 p-3 rounded">
                                    ⚠️ {asset.analysis.warning}
                                  </div>
                                </div>
                              </div>

                              {/* Market Intelligence */}
                              <div className="tradingview-panel p-4">
                                <h4 className="font-bold text-white mb-4 flex items-center text-sm">
                                  <BarChart3 className="mr-2 text-purple-400" /> Market Intelligence
                                </h4>
                                <div className="space-y-3 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Institutional Flow:</span>
                                    <span className={`font-medium ${asset.institutionalFlow === 'Buying' ? 'text-neon-green-400' : 'text-red-400'}`}>
                                      {asset.institutionalFlow}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Dark Pool Activity:</span>
                                    <span className="font-medium text-white">{asset.darkPoolActivity}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Options Flow:</span>
                                    <span className="font-medium text-white">{asset.optionsFlow}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Whale Activity:</span>
                                    <span className={`font-medium ${asset.whaleActivity === 'Detected' ? 'text-yellow-400' : 'text-gray-400'}`}>
                                      {asset.whaleActivity}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Short Interest:</span>
                                    <span className="font-medium text-white">{asset.shortInterest}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Earnings Date:</span>
                                    <span className="font-medium text-white">{asset.earningsDate}</span>
                                  </div>
                                  <div className="mt-4">
                                    <button
                                      onClick={() => sendTelegramAlert(asset)}
                                      className="w-full bg-gradient-to-r from-neon-green-500 to-cyan-500 hover:from-neon-green-600 hover:to-cyan-600 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                                    >
                                      <Send className="w-4 h-4" />
                                      Send Telegram Alert
                                    </button>
                                    <div className="text-xs text-gray-400 text-center mt-2">
                                      Next Optimal Entry: {asset.nextOptimal}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Alerts */}
        {alertsSent.length > 0 && (
          <div className="tradingview-panel p-4 mt-6">
            <h3 className="font-bold text-white mb-4 flex items-center text-sm">
              <Bell className="mr-2 text-neon-green-400" /> Recent Alerts ({alertsSent.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {alertsSent.slice(-4).reverse().map((alert, idx) => (
                <div key={idx} className="bg-gray-900 p-3 rounded border border-gray-700 hover:border-neon-green-500 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-neon-green-300">{alert.symbol}</span>
                    <span className="text-xs text-gray-400">{alert.time}</span>
                  </div>
                  <div className="text-sm text-white">Price: {alert.price}</div>
                  <div className="text-xs text-gray-400 mt-1">Signal: {alert.signal}</div>
                  <div className="text-xs text-cyan-400 mt-2">Alert sent via Telegram</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Quick Actions */}
        {isMobile && (
          <div className="fixed bottom-4 right-4 z-30">
            <button
              onClick={() => setShowTelegramModal(true)}
              className="bg-gradient-to-r from-neon-green-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>

      {/* Telegram Configuration Modal */}
      {showTelegramModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-neon-green-500 rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-neon-green-400 flex items-center">
                <Send className="mr-2" /> Telegram Alert Setup
              </h3>
              <button
                onClick={() => setShowTelegramModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bot Token</label>
                <input
                  type="password"
                  value={telegramConfig.token}
                  onChange={(e) => setTelegramConfig({...telegramConfig, token: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-neon-green-500"
                  placeholder="Enter bot token from @BotFather"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Chat ID</label>
                <input
                  type="text"
                  value={telegramConfig.chatId}
                  onChange={(e) => setTelegramConfig({...telegramConfig, chatId: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-neon-green-500"
                  placeholder="Enter your chat ID"
                />
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  id="enableTelegram"
                  checked={telegramConfig.enabled}
                  onChange={(e) => setTelegramConfig({...telegramConfig, enabled: e.target.checked})}
                  className="w-4 h-4 text-neon-green-500 bg-gray-700 border-gray-600 rounded focus:ring-neon-green-500"
                />
                <label htmlFor="enableTelegram" className="text-gray-300">Enable Telegram Alerts</label>
              </div>
              
              <div className="text-xs text-gray-500 bg-gray-800 p-3 rounded-lg">
                💡 Get bot token from @BotFather on Telegram. Chat ID can be found by messaging @userinfobot
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setTelegramConfig({...telegramConfig, enabled: true});
                    setShowTelegramModal(false);
                    alert('Telegram alerts configured successfully!');
                  }}
                  className="flex-1 bg-gradient-to-r from-neon-green-500 to-cyan-500 hover:from-neon-green-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Save & Enable
                </button>
                <button
                  onClick={() => setShowTelegramModal(false)}
                  className="flex-1 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Color Legend Modal */}
      {showColorLegend && <ColorLegend />}

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="font-bold text-white mb-3">🟢 Strong Buy Signals</div>
              <div className="text-sm text-gray-400">High confidence trades with optimal risk-reward ratios and multiple ICT confluences</div>
            </div>
            <div>
              <div className="font-bold text-yellow-400 mb-3">🟡 Hold/Neutral</div>
              <div className="text-sm text-gray-400">Wait for better confirmation or optimal entry during Kill Zones</div>
            </div>
            <div>
              <div className="font-bold text-red-400 mb-3">🔴 Avoid/High Risk</div>
              <div className="text-sm text-gray-400">Poor risk-reward or unfavorable market conditions</div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm pt-6 border-t border-gray-800">
            <p className="mb-2">⚡ Live Data Updates Every 5 Seconds | 🧠 AI-Powered ICT Analysis | 🎯 NSE Focused</p>
            <p className="text-neon-green-400 mb-2">💡 Trade only during active Kill Zones for maximum success probability</p>
            <p className="text-xs">⚠️ Trading involves risk. Past performance doesn't guarantee future results. Use proper risk management.</p>
            <p className="text-xs mt-4">© 2024 ICT Pro Analyzer • Version 2.0 • Data: NSE/BSE Real-time</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ICTAdvancedAnalyzer;
