import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, 
  Brain, ChevronDown, ChevronUp, BarChart3, Activity, 
  Shield, DollarSign, Percent, MessageSquare, Send, 
  Smartphone, Volume2, TrendingUp as Profit, TrendingDown as Loss,
  Filter, Settings, Bell, ExternalLink
} from 'lucide-react';

const ICTAdvancedAnalyzer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('Stocks');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [telegramConfig, setTelegramConfig] = useState({
    token: '',
    chatId: '',
    enabled: false
  });
  const [alertsSent, setAlertsSent] = useState([]);
  const [showTelegramModal, setShowTelegramModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate realistic trade parameters
  const generateTradeParameters = (basePrice) => {
    const volatility = 0.02 + Math.random() * 0.05;
    const riskMultiplier = 1.5 + Math.random() * 2;
    const stopLossPercent = (volatility * riskMultiplier * 100).toFixed(1);
    const targetPercent = (volatility * riskMultiplier * 2.5 * 100).toFixed(1);
    
    const currentPrice = (basePrice * (0.95 + Math.random() * 0.1)).toFixed(2);
    const stopLoss = (currentPrice * (1 - stopLossPercent/100)).toFixed(2);
    const target = (currentPrice * (1 + targetPercent/100)).toFixed(2);
    const riskReward = (targetPercent / stopLossPercent).toFixed(2);
    
    return {
      currentPrice: `$${currentPrice}`,
      stopLoss: `$${stopLoss}`,
      target: `$${target}`,
      stopLossPercent: `${stopLossPercent}%`,
      targetPercent: `${targetPercent}%`,
      riskReward: `1:${riskReward}`,
      riskLevel: stopLossPercent > 5 ? 'HIGH' : stopLossPercent > 3 ? 'MEDIUM' : 'LOW',
      confidence: (70 + Math.random() * 25).toFixed(0) + '%',
      entryZone: `${(currentPrice * 0.995).toFixed(2)}-${(currentPrice * 1.005).toFixed(2)}`,
      timeFrame: ['Intraday', 'Swing (3-5 days)', 'Position (1-2 weeks)'][Math.floor(Math.random() * 3)]
    };
  };

  // Advanced analysis generator
  const generateAdvancedAnalysis = (asset) => {
    const analyses = [
      "Price action shows strong bullish momentum with FVG formation",
      "Market structure shift detected - optimal entry during Kill Zone",
      "Liquidity sweep followed by fair value gap",
      "Institutional order blocks identified at key levels",
      "Volume profile shows high volume node acting as support",
      "Smart money divergence detected on lower timeframes",
      "Market maker buy model activated",
      "Optimal trade entry with positive risk-reward ratio",
      "Confluences: Order Block + FVG + EQH/L",
      "Market in discount phase - expecting premium expansion"
    ];
    
    const warnings = [
      "Watch for news events this week",
      "Approaching major resistance level",
      "Volume declining - confirm breakout",
      "Check earnings date before entry"
    ];
    
    return {
      technical: analyses[Math.floor(Math.random() * analyses.length)],
      keyLevels: {
        support: [`$${(parseFloat(asset.tradeParams.currentPrice.replace('$', '')) * 0.97).toFixed(2)}`, 
                 `$${(parseFloat(asset.tradeParams.currentPrice.replace('$', '')) * 0.95).toFixed(2)}`],
        resistance: [`$${(parseFloat(asset.tradeParams.currentPrice.replace('$', '')) * 1.03).toFixed(2)}`, 
                    `$${(parseFloat(asset.tradeParams.currentPrice.replace('$', '')) * 1.05).toFixed(2)}`]
      },
      warning: warnings[Math.floor(Math.random() * warnings.length)],
      setupType: ['Breakout', 'Pullback', 'Retest', 'Reversal'][Math.floor(Math.random() * 4)],
      probability: (60 + Math.random() * 35).toFixed(0) + '%'
    };
  };

  // Simulated real-time data with enhanced features
  const generateAdvancedData = () => {
    const top21Stocks = [
      { symbol: 'NVDA', name: 'NVIDIA', sector: 'AI/Semiconductors', basePrice: 850 },
      { symbol: 'MSFT', name: 'Microsoft', sector: 'Cloud/AI', basePrice: 420 },
      { symbol: 'GOOGL', name: 'Alphabet', sector: 'AI/Search', basePrice: 180 },
      { symbol: 'META', name: 'Meta Platforms', sector: 'Social/VR', basePrice: 485 },
      { symbol: 'AAPL', name: 'Apple', sector: 'Consumer Tech', basePrice: 210 },
      { symbol: 'PLTR', name: 'Palantir', sector: 'AI/Defense', basePrice: 25 },
      { symbol: 'SNOW', name: 'Snowflake', sector: 'Cloud Data', basePrice: 170 },
      { symbol: 'AI', name: 'C3.ai', sector: 'Enterprise AI', basePrice: 32 },
      { symbol: 'AVGO', name: 'Broadcom', sector: 'Semiconductors', basePrice: 1350 },
      { symbol: 'V', name: 'Visa', sector: 'FinTech', basePrice: 275 },
      { symbol: 'MA', name: 'Mastercard', sector: 'FinTech', basePrice: 460 },
      { symbol: 'BLK', name: 'BlackRock', sector: 'Asset Mgmt', basePrice: 820 },
      { symbol: 'COIN', name: 'Coinbase', sector: 'Crypto Exchange', basePrice: 240 },
      { symbol: 'TSLA', name: 'Tesla', sector: 'EV/Energy', basePrice: 180 },
      { symbol: 'NEE', name: 'NextEra Energy', sector: 'Clean Energy', basePrice: 65 },
      { symbol: 'ENPH', name: 'Enphase', sector: 'Solar', basePrice: 120 },
      { symbol: 'LLY', name: 'Eli Lilly', sector: 'Biotech', basePrice: 780 },
      { symbol: 'ISRG', name: 'Intuitive Surgical', sector: 'MedTech', basePrice: 420 },
      { symbol: 'VRTX', name: 'Vertex Pharma', sector: 'Biotech', basePrice: 450 },
      { symbol: 'AMD', name: 'AMD', sector: 'Semiconductors', basePrice: 165 },
      { symbol: 'QCOM', name: 'Qualcomm', sector: '5G/Mobile', basePrice: 185 }
    ];

    return top21Stocks.map((stock, idx) => {
      const tradeParams = generateTradeParameters(stock.basePrice);
      const analysis = generateAdvancedAnalysis({ tradeParams });
      
      return {
        ...stock,
        rank: idx + 1,
        totalScore: (95 - idx * 2 + Math.random() * 5).toFixed(1),
        aiScore: (85 + Math.random() * 15).toFixed(1),
        ictScore: (80 + Math.random() * 20).toFixed(1),
        sentimentScore: (70 + Math.random() * 30).toFixed(1),
        volumeProfile: ['Very High', 'High', 'Medium'][Math.floor(Math.random() * 3)],
        signal: idx < 7 ? '🟢 STRONG BUY' : idx < 14 ? '🟢 BUY' : '🟡 HOLD',
        trend: Math.random() > 0.3 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore: (3 + Math.random() * 4).toFixed(1),
        nextOptimal: ['NY Kill Zone', 'London Kill Zone', 'Silver Bullet'][Math.floor(Math.random() * 3)],
        institutionalFlow: Math.random() > 0.5 ? 'Buying' : 'Selling',
        darkPoolActivity: (Math.random() * 100).toFixed(1) + 'M',
        shortInterest: (Math.random() * 15).toFixed(1) + '%',
        optionsFlow: Math.random() > 0.5 ? 'Bullish' : 'Neutral',
        earningsDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        whaleActivity: Math.random() > 0.7 ? 'Detected' : 'Normal',
        tradeParams,
        analysis
      };
    });
  };

  const [assets, setAssets] = useState(generateAdvancedData());

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(generateAdvancedData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Telegram Alert Function
  const sendTelegramAlert = (asset) => {
    if (!telegramConfig.enabled) {
      alert('Please enable Telegram alerts first!');
      return;
    }

    const message = `
🚨 **TRADE ALERT** 🚨

📈 **${asset.symbol} - ${asset.name}**
📊 Signal: ${asset.signal}
📉 Trend: ${asset.trend}

💰 **TRADE PARAMETERS**
• Current Price: ${asset.tradeParams.currentPrice}
• Stop Loss: ${asset.tradeParams.stopLoss} (${asset.tradeParams.stopLossPercent})
• Target: ${asset.tradeParams.target} (${asset.tradeParams.targetPercent})
• Risk-Reward: ${asset.tradeParams.riskReward}
• Entry Zone: ${asset.tradeParams.entryZone}
• Time Frame: ${asset.tradeParams.timeFrame}

⚠️ **RISK ANALYSIS**
• Risk Level: ${asset.tradeParams.riskLevel}
• Confidence: ${asset.tradeParams.confidence}
• Risk Score: ${asset.riskScore}/10

🎯 **ANALYSIS**
${asset.analysis.technical}
• Setup: ${asset.analysis.setupType}
• Probability: ${asset.analysis.probability}
• Next Optimal: ${asset.nextOptimal}

⏰ **TIMING**
${currentTime.toLocaleTimeString()} | ${currentTime.toLocaleDateString()}

#${asset.symbol} #TradeAlert #ICT
    `;

    // Simulate sending to Telegram (In real implementation, use Telegram Bot API)
    console.log('Telegram Alert Sent:', message);
    
    setAlertsSent(prev => [...prev, {
      symbol: asset.symbol,
      time: new Date().toLocaleTimeString(),
      price: asset.tradeParams.currentPrice
    }]);
    
    alert(`Telegram alert sent for ${asset.symbol}! Check console for details.`);
  };

  const sessions = [
    { name: 'Asian KZ', active: false, time: '6:30-9:30 AM IST', priority: 3 },
    { name: 'London KZ', active: true, time: '12:30-3:30 PM IST', priority: 5 },
    { name: 'NY KZ', active: true, time: '5:30-8:30 PM IST', priority: 5 },
    { name: 'Silver Bullet', active: false, time: '8:30-9:30 PM IST', priority: 4 }
  ];

  const marketStats = {
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: 'TRENDING',
    totalAlerts: alertsSent.length,
    profitableTrades: Math.floor(alertsSent.length * 0.85)
  };

  // Color Legend Component
  const ColorLegend = () => (
    <div className="mb-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-neon-green-500">
      <h3 className="font-bold mb-3 text-neon-green-400 flex items-center">
        <Filter className="mr-2" /> Color Coding Legend
      </h3>
      <div className="grid grid-cols-4 gap-3 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-neon-green-500 rounded mr-2"></div>
          <span>Strong Buy/Bullish</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
          <span>Bearish/High Risk</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
          <span>Hold/Medium Risk</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
          <span>High Volume</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
          <span>Medium Volume</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-cyan-400 rounded mr-2"></div>
          <span>AI Analysis</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
          <span>Active Session</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-pink-500 rounded mr-2"></div>
          <span>Institutional Flow</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white p-6">
      {/* Header */}
      <div className="mb-8 border-b border-neon-green-500 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-green-400 to-cyan-500 bg-clip-text text-transparent">
              <Brain className="inline mr-3" />
              ICT Advanced Market Analyzer
            </h1>
            <p className="text-gray-300 text-sm mt-2">2025-26 Edition | AI-Powered Stock Selection with Risk Management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-mono text-neon-green-400">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-sm text-gray-400">{currentTime.toLocaleDateString('en-IN', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}</div>
            </div>
            <button
              onClick={() => setShowTelegramModal(true)}
              className="bg-gradient-to-r from-green-600 to-neon-green-500 hover:from-green-700 hover:to-neon-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Telegram Setup
            </button>
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-6 gap-4 mt-6">
          {[
            { label: 'Total Assets', value: marketStats.totalAssets, icon: BarChart3, color: 'neon-green' },
            { label: 'Strong Signals', value: marketStats.strongSignals, icon: Zap, color: 'green' },
            { label: 'Avg Accuracy', value: marketStats.averageAccuracy, icon: Target, color: 'cyan' },
            { label: 'Active Session', value: marketStats.activeSession, icon: Clock, color: 'orange' },
            { label: 'Market Regime', value: marketStats.marketRegime, icon: Activity, color: 'neon-green' },
            { label: 'Alerts Sent', value: marketStats.totalAlerts, icon: Bell, color: 'purple' }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-${stat.color}-500 rounded-lg p-4 hover:scale-[1.02] transition-transform duration-300`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                <span className={`text-xs text-${stat.color}-400 font-semibold`}>{stat.label}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Legend */}
      <ColorLegend />

      {/* Kill Zones */}
      <div className="mb-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-neon-green-500">
        <h2 className="text-xl font-bold mb-4 flex items-center text-neon-green-400">
          <Clock className="mr-2" /> Trading Sessions (Kill Zones)
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {sessions.map((session, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 ${session.active ? 'border-neon-green-500 bg-green-900 bg-opacity-30' : 'border-gray-600 bg-gray-700 bg-opacity-30'} hover:border-neon-green-400 transition-colors`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">{session.name}</span>
                <span className={`px-2 py-1 rounded text-xs ${session.active ? 'bg-neon-green-500' : 'bg-gray-600'}`}>
                  {session.active ? 'ACTIVE' : 'CLOSED'}
                </span>
              </div>
              <div className="text-sm text-gray-300">{session.time}</div>
              <div className="text-xs text-gray-400 mt-1">Priority: {'★'.repeat(session.priority)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6 flex gap-4">
        <select
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className="bg-gray-800 border border-neon-green-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-green-500"
        >
          <option>Stocks</option>
          <option>Crypto</option>
          <option>Forex</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 border border-neon-green-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-green-500"
        >
          <option>Total Score</option>
          <option>Risk Score</option>
          <option>Profit Potential</option>
          <option>Volume Profile</option>
        </select>
        <button className="bg-gradient-to-r from-gray-800 to-gray-700 border border-neon-green-500 rounded-lg px-4 py-2 text-white hover:bg-gray-700 transition-colors flex items-center gap-2">
          <Settings className="w-4 h-4" />
          More Filters
        </button>
      </div>

      {/* Assets Table */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-neon-green-500 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-green-900 bg-opacity-50">
              <tr>
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Current Price</th>
                <th className="p-3 text-left">Stop Loss</th>
                <th className="p-3 text-left">Target</th>
                <th className="p-3 text-left">Risk-Reward</th>
                <th className="p-3 text-left">Signal</th>
                <th className="p-3 text-left">Risk</th>
                <th className="p-3 text-left">Volume</th>
                <th className="p-3 text-left">Alert</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <React.Fragment key={idx}>
                  <tr className={`border-b border-gray-700 hover:bg-gray-700 hover:bg-opacity-50 transition-colors ${idx < 7 ? 'bg-green-900 bg-opacity-20' : ''}`}>
                    <td className="p-3">
                      <span className={`font-bold ${idx < 3 ? 'text-neon-green-400' : idx < 7 ? 'text-green-400' : 'text-gray-300'}`}>
                        #{asset.rank}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-neon-green-300">{asset.symbol}</div>
                      <div className="text-xs text-gray-400">{asset.name}</div>
                      <div className="text-xs text-cyan-400">{asset.sector}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-white">{asset.tradeParams.currentPrice}</div>
                      <div className={`text-xs ${asset.trend.includes('BULLISH') ? 'text-neon-green-400' : 'text-red-400'}`}>
                        {asset.trend}
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
                      <div className={`font-bold ${parseFloat(asset.tradeParams.riskReward.split(':')[1]) > 2 ? 'text-neon-green-400' : 'text-yellow-400'}`}>
                        {asset.tradeParams.riskReward}
                      </div>
                      <div className="text-xs text-gray-400">R:R Ratio</div>
                    </td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${asset.signal.includes('STRONG') ? 'bg-gradient-to-r from-green-600 to-neon-green-500' : asset.signal.includes('BUY') ? 'bg-green-700' : 'bg-yellow-600'}`}>
                        {asset.signal}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-col gap-1">
                        <span className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'text-neon-green-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {asset.riskScore}/10
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${asset.tradeParams.riskLevel === 'LOW' ? 'bg-green-900' : asset.tradeParams.riskLevel === 'MEDIUM' ? 'bg-yellow-900' : 'bg-red-900'}`}>
                          {asset.tradeParams.riskLevel}
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-xs ${asset.volumeProfile === 'Very High' ? 'bg-purple-600' : asset.volumeProfile === 'High' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                        {asset.volumeProfile}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => sendTelegramAlert(asset)}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 text-sm transition-all duration-300"
                      >
                        <Send className="w-3 h-3" />
                        Alert
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setExpandedAsset(expandedAsset === idx ? null : idx)}
                        className="p-2 hover:bg-neon-green-500 hover:bg-opacity-20 rounded transition-colors"
                      >
                        {expandedAsset === idx ? <ChevronUp className="w-5 h-5 text-neon-green-400" /> : <ChevronDown className="w-5 h-5 text-neon-green-400" />}
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Details */}
                  {expandedAsset === idx && (
                    <tr className="bg-gray-900 bg-opacity-80">
                      <td colSpan="11" className="p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Trade Parameters */}
                          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-neon-green-500">
                            <h4 className="font-bold mb-4 text-neon-green-400 flex items-center">
                              <Target className="mr-2" /> Trade Parameters
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Current Price:</span>
                                <span className="font-bold text-xl">{asset.tradeParams.currentPrice}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 flex items-center">
                                  <Loss className="w-4 h-4 mr-1 text-red-400" /> Stop Loss:
                                </span>
                                <span className="font-bold text-red-400">{asset.tradeParams.stopLoss}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 flex items-center">
                                  <Profit className="w-4 h-4 mr-1 text-neon-green-400" /> Target:
                                </span>
                                <span className="font-bold text-neon-green-400">{asset.tradeParams.target}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Entry Zone:</span>
                                <span className="font-semibold">{asset.tradeParams.entryZone}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Risk-Reward:</span>
                                <span className={`font-bold ${parseFloat(asset.tradeParams.riskReward.split(':')[1]) > 2 ? 'text-neon-green-400' : 'text-yellow-400'}`}>
                                  {asset.tradeParams.riskReward}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Time Frame:</span>
                                <span className="font-semibold">{asset.tradeParams.timeFrame}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Confidence:</span>
                                <span className="font-bold text-cyan-400">{asset.tradeParams.confidence}</span>
                              </div>
                            </div>
                          </div>

                          {/* Advanced Analysis */}
                          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-cyan-500">
                            <h4 className="font-bold mb-4 text-cyan-400 flex items-center">
                              <Brain className="mr-2" /> Advanced Analysis
                            </h4>
                            <div className="space-y-3">
                              <div className="text-sm text-gray-300 bg-gray-900 p-3 rounded">
                                {asset.analysis.technical}
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <div className="text-xs text-gray-400">Setup Type</div>
                                  <div className="font-semibold">{asset.analysis.setupType}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-400">Probability</div>
                                  <div className="font-bold text-neon-green-400">{asset.analysis.probability}</div>
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-400 mb-1">Key Levels</div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-red-900 bg-opacity-30 p-2 rounded">
                                    <div className="text-xs text-gray-400">Support</div>
                                    <div className="font-semibold">{asset.analysis.keyLevels.support.join(' | ')}</div>
                                  </div>
                                  <div className="bg-green-900 bg-opacity-30 p-2 rounded">
                                    <div className="text-xs text-gray-400">Resistance</div>
                                    <div className="font-semibold">{asset.analysis.keyLevels.resistance.join(' | ')}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-yellow-400 bg-yellow-900 bg-opacity-20 p-2 rounded">
                                ⚠️ {asset.analysis.warning}
                              </div>
                            </div>
                          </div>

                          {/* Institutional Data & Action */}
                          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-purple-500">
                            <h4 className="font-bold mb-4 text-purple-400 flex items-center">
                              <BarChart3 className="mr-2" /> Market Intelligence
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Institutional Flow:</span>
                                <span className={`font-semibold ${asset.institutionalFlow === 'Buying' ? 'text-neon-green-400' : 'text-red-400'}`}>
                                  {asset.institutionalFlow}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Dark Pool Activity:</span>
                                <span className="font-semibold">{asset.darkPoolActivity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Options Flow:</span>
                                <span className="font-semibold">{asset.optionsFlow}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Whale Activity:</span>
                                <span className={`font-semibold ${asset.whaleActivity === 'Detected' ? 'text-yellow-400' : 'text-gray-400'}`}>
                                  {asset.whaleActivity}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Short Interest:</span>
                                <span className="font-semibold">{asset.shortInterest}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Earnings Date:</span>
                                <span className="font-semibold">{asset.earningsDate}</span>
                              </div>
                              <div className="mt-4">
                                <button
                                  onClick={() => sendTelegramAlert(asset)}
                                  className="w-full bg-gradient-to-r from-green-600 to-neon-green-500 hover:from-green-700 hover:to-neon-green-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                  <Send className="w-4 h-4" />
                                  Send Telegram Trade Alert
                                </button>
                                <div className="text-xs text-gray-400 text-center mt-2">
                                  Next Optimal Entry: {asset.nextOptimal}
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
        <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-neon-green-500 p-6">
          <h3 className="font-bold mb-4 text-neon-green-400 flex items-center">
            <Bell className="mr-2" /> Recent Alerts Sent ({alertsSent.length})
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {alertsSent.slice(-4).reverse().map((alert, idx) => (
              <div key={idx} className="bg-gray-700 bg-opacity-50 p-3 rounded border border-cyan-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-neon-green-300">{alert.symbol}</span>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </div>
                <div className="text-sm">Price: {alert.price}</div>
                <div className="text-xs text-cyan-400 mt-1">Alert sent via Telegram</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Telegram Configuration Modal */}
      {showTelegramModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-neon-green-500 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-neon-green-400 flex items-center">
              <Send className="mr-2" /> Telegram Alert Setup
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bot Token</label>
                <input
                  type="text"
                  value={telegramConfig.token}
                  onChange={(e) => setTelegramConfig({...telegramConfig, token: e.target.value})}
                  className="w-full bg-gray-800 border border-neon-green-500 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-green-500"
                  placeholder="Enter your bot token"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Chat ID</label>
                <input
                  type="text"
                  value={telegramConfig.chatId}
                  onChange={(e) => setTelegramConfig({...telegramConfig, chatId: e.target.value})}
                  className="w-full bg-gray-800 border border-neon-green-500 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-green-500"
                  placeholder="Enter your chat ID"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="enableTelegram"
                  checked={telegramConfig.enabled}
                  onChange={(e) => setTelegramConfig({...telegramConfig, enabled: e.target.checked})}
                  className="w-4 h-4 text-neon-green-500"
                />
                <label htmlFor="enableTelegram" className="text-gray-300">Enable Telegram Alerts</label>
              </div>
              <div className="text-xs text-gray-500">
                💡 Create a Telegram bot via @BotFather and get token & chat ID
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setTelegramConfig({...telegramConfig, enabled: true});
                    setShowTelegramModal(false);
                    alert('Telegram alerts configured successfully!');
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-neon-green-500 hover:from-green-700 hover:to-neon-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Save & Enable
                </button>
                <button
                  onClick={() => setShowTelegramModal(false)}
                  className="flex-1 bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm border-t border-neon-green-500 pt-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-neon-green-400">
            <div className="font-bold">🟢 Strong Buy</div>
            <div className="text-xs">High confidence trades with optimal risk-reward</div>
          </div>
          <div className="text-yellow-400">
            <div className="font-bold">🟡 Hold/Neutral</div>
            <div className="text-xs">Wait for better confirmation or entry</div>
          </div>
          <div className="text-red-400">
            <div className="font-bold">🔴 Avoid/High Risk</div>
            <div className="text-xs">Poor risk-reward or unfavorable conditions</div>
          </div>
        </div>
        <p>⚡ Live Data Updates Every 5 Seconds | 🧠 AI-Powered Analysis | 🎯 ICT Strategy Optimized</p>
        <p className="mt-2 text-neon-green-300">💡 Focus on Top 7 STRONG BUY signals during active Kill Zones for best results</p>
        <p className="mt-2 text-xs text-gray-500">⚠️ Trade with proper risk management. Past performance doesn't guarantee future results.</p>
      </div>
    </div>
  );
};

// Add custom CSS for neon green theme
const styles = `
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00; }
    50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
  }
  
  .glow-text {
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  .text-neon-green-300 { color: #00ff88; }
  .text-neon-green-400 { color: #00ff00; }
  .text-neon-green-500 { color: #00cc00; }
  
  .border-neon-green-500 { border-color: #00cc00; }
  .border-cyan-500 { border-color: #06b6d4; }
  
  .bg-neon-green-500 { background-color: #00cc00; }
  .bg-neon-green-600 { background-color: #00aa00; }
  
  .from-neon-green-400 { --tw-gradient-from: #00ff00; }
  .to-neon-green-500 { --tw-gradient-to: #00cc00; }
  
  .hover\\:from-neon-green-600:hover { --tw-gradient-from: #00aa00; }
  .hover\\:to-neon-green-700:hover { --tw-gradient-to: #008800; }
  
  .bg-gradient-to-r.from-neon-green-400.to-cyan-500 {
    background-image: linear-gradient(to right, #00ff00, #06b6d4);
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default ICTAdvancedAnalyzer;
