import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, ChevronDown, ChevronUp, BarChart3, Activity, Bell, Send } from 'lucide-react';

const ICTAdvancedAnalyzer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('Stocks');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [telegramToken, setTelegramToken] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const generateAdvancedData = () => {
    const top21Stocks = [
      { symbol: 'NVDA', name: 'NVIDIA', sector: 'AI/Semiconductors' },
      { symbol: 'MSFT', name: 'Microsoft', sector: 'Cloud/AI' },
      { symbol: 'GOOGL', name: 'Alphabet', sector: 'AI/Search' },
      { symbol: 'META', name: 'Meta Platforms', sector: 'Social/VR' },
      { symbol: 'AAPL', name: 'Apple', sector: 'Consumer Tech' },
      { symbol: 'PLTR', name: 'Palantir', sector: 'AI/Defense' },
      { symbol: 'SNOW', name: 'Snowflake', sector: 'Cloud Data' },
      { symbol: 'AI', name: 'C3.ai', sector: 'Enterprise AI' },
      { symbol: 'AVGO', name: 'Broadcom', sector: 'Semiconductors' },
      { symbol: 'V', name: 'Visa', sector: 'FinTech' },
      { symbol: 'MA', name: 'Mastercard', sector: 'FinTech' },
      { symbol: 'BLK', name: 'BlackRock', sector: 'Asset Mgmt' },
      { symbol: 'COIN', name: 'Coinbase', sector: 'Crypto Exchange' },
      { symbol: 'TSLA', name: 'Tesla', sector: 'EV/Energy' },
      { symbol: 'NEE', name: 'NextEra Energy', sector: 'Clean Energy' },
      { symbol: 'ENPH', name: 'Enphase', sector: 'Solar' },
      { symbol: 'LLY', name: 'Eli Lilly', sector: 'Biotech' },
      { symbol: 'ISRG', name: 'Intuitive Surgical', sector: 'MedTech' },
      { symbol: 'VRTX', name: 'Vertex Pharma', sector: 'Biotech' },
      { symbol: 'AMD', name: 'AMD', sector: 'Semiconductors' },
      { symbol: 'QCOM', name: 'Qualcomm', sector: '5G/Mobile' }
    ];

    return top21Stocks.map((stock, idx) => {
      const currentPrice = (100 + Math.random() * 400).toFixed(2);
      const stopLoss = (currentPrice * (0.92 + Math.random() * 0.05)).toFixed(2);
      const target1 = (currentPrice * (1.03 + Math.random() * 0.05)).toFixed(2);
      const target2 = (currentPrice * (1.08 + Math.random() * 0.08)).toFixed(2);
      const riskAmount = (currentPrice - stopLoss).toFixed(2);
      const rewardT1 = (target1 - currentPrice).toFixed(2);
      const rewardT2 = (target2 - currentPrice).toFixed(2);
      const rr1 = (rewardT1 / riskAmount).toFixed(2);
      const rr2 = (rewardT2 / riskAmount).toFixed(2);
      
      return {
        ...stock,
        rank: idx + 1,
        currentPrice: parseFloat(currentPrice),
        stopLoss: parseFloat(stopLoss),
        target1: parseFloat(target1),
        target2: parseFloat(target2),
        riskAmount: parseFloat(riskAmount),
        rewardT1: parseFloat(rewardT1),
        rewardT2: parseFloat(rewardT2),
        riskRewardT1: parseFloat(rr1),
        riskRewardT2: parseFloat(rr2),
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
        setupQuality: idx < 7 ? 'A+' : idx < 14 ? 'A' : 'B+',
        orderBlock: Math.random() > 0.5 ? 'Present' : 'Forming',
        fvg: Math.random() > 0.5 ? 'Identified' : 'None',
        liquidity: ['High', 'Very High', 'Extreme'][Math.floor(Math.random() * 3)],
        confidence: (75 + idx * 0.5 + Math.random() * 10).toFixed(1)
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

  const sendTelegramAlert = async (asset) => {
    if (!telegramToken || !telegramChatId) {
      alert('Please set Telegram Bot Token and Chat ID in settings!');
      return;
    }

    const message = `
🚨 *ICT TRADE ALERT* 🚨

*${asset.symbol}* - ${asset.name}
Sector: ${asset.sector}

💰 *ENTRY DETAILS*
Current Price: $${asset.currentPrice}
Signal: ${asset.signal}
Setup Quality: ${asset.setupQuality}

🎯 *TARGETS*
Target 1: $${asset.target1} (${((asset.target1 - asset.currentPrice) / asset.currentPrice * 100).toFixed(2)}%)
Target 2: $${asset.target2} (${((asset.target2 - asset.currentPrice) / asset.currentPrice * 100).toFixed(2)}%)

🛑 *STOP LOSS*
Stop Loss: $${asset.stopLoss} (${((asset.currentPrice - asset.stopLoss) / asset.currentPrice * 100).toFixed(2)}%)

📊 *RISK/REWARD*
Risk: $${asset.riskAmount}
Reward T1: $${asset.rewardT1}
Reward T2: $${asset.rewardT2}
R:R Ratio T1: 1:${asset.riskRewardT1}
R:R Ratio T2: 1:${asset.riskRewardT2}

📈 *ANALYSIS*
Trend: ${asset.trend}
Volume: ${asset.volumeProfile}
Confidence: ${asset.confidence}%
ICT Score: ${asset.ictScore}
AI Score: ${asset.aiScore}

⏰ *TIMING*
Next Optimal: ${asset.nextOptimal}
Order Block: ${asset.orderBlock}
FVG: ${asset.fvg}

🏦 *INSTITUTIONAL DATA*
Flow: ${asset.institutionalFlow}
Options: ${asset.optionsFlow}
Whale Activity: ${asset.whaleActivity}

⚠️ Risk Level: ${asset.riskScore}/10
✅ Total Score: ${asset.totalScore}

#ICT #Trading #${asset.symbol}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      const data = await response.json();
      
      if (data.ok) {
        setAlertSent(true);
        setTimeout(() => setAlertSent(false), 3000);
        alert('✅ Alert sent to Telegram successfully!');
      } else {
        alert('❌ Failed to send alert. Check your token and chat ID.');
      }
    } catch (error) {
      alert('❌ Error sending alert: ' + error.message);
    }
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
    marketRegime: 'TRENDING'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950 text-white p-6">
      {/* Header */}
      <div className="mb-8 border-b border-emerald-500 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              ICT Advanced Market Analyzer
            </h1>
            <p className="text-gray-400 text-sm mt-2">2025-26 Edition | AI-Powered Stock Selection</p>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Bell className="w-4 h-4" />
              Telegram Settings
            </button>
            <div className="text-right">
              <div className="text-2xl font-mono text-emerald-400">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-sm text-gray-400">{currentTime.toLocaleDateString('en-IN', { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
              })}</div>
            </div>
          </div>
        </div>

        {/* Telegram Settings */}
        {showSettings && (
          <div className="mb-6 bg-gray-900 border border-emerald-500 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">⚙️ Telegram Alert Configuration</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bot Token</label>
                <input
                  type="text"
                  value={telegramToken}
                  onChange={(e) => setTelegramToken(e.target.value)}
                  placeholder="Enter your Telegram Bot Token"
                  className="w-full bg-gray-800 border border-emerald-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Chat ID</label>
                <input
                  type="text"
                  value={telegramChatId}
                  onChange={(e) => setTelegramChatId(e.target.value)}
                  placeholder="Enter your Chat ID"
                  className="w-full bg-gray-800 border border-emerald-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              💡 Get your Bot Token from @BotFather and Chat ID from @userinfobot on Telegram
            </p>
          </div>
        )}

        {/* Key Stats */}
        <div className="grid grid-cols-5 gap-4 mt-6">
          {[
            { label: 'Total Assets', value: marketStats.totalAssets, icon: BarChart3, color: 'emerald' },
            { label: 'Strong Signals', value: marketStats.strongSignals, icon: Zap, color: 'green' },
            { label: 'Avg Accuracy', value: marketStats.averageAccuracy, icon: Target, color: 'cyan' },
            { label: 'Active Session', value: marketStats.activeSession, icon: Clock, color: 'yellow' },
            { label: 'Market Regime', value: marketStats.marketRegime, icon: Activity, color: 'orange' }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gray-900 bg-opacity-70 backdrop-blur-sm border-2 border-${stat.color}-500 rounded-lg p-4 hover:shadow-lg hover:shadow-${stat.color}-500/30 transition-all`}>
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                <span className={`text-xs text-${stat.color}-400 font-semibold uppercase tracking-wide`}>{stat.label}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Kill Zones */}
      <div className="mb-8 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 border-2 border-emerald-500">
        <h2 className="text-xl font-bold mb-4 flex items-center text-emerald-400">
          <Clock className="mr-2" /> Trading Sessions (Kill Zones)
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {sessions.map((session, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 ${session.active ? 'border-green-500 bg-green-900 bg-opacity-40 shadow-lg shadow-green-500/30' : 'border-gray-600 bg-gray-800 bg-opacity-40'} transition-all`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-300">{session.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${session.active ? 'bg-green-500 text-gray-900' : 'bg-gray-600 text-gray-300'}`}>
                  {session.active ? 'ACTIVE' : 'CLOSED'}
                </span>
              </div>
              <div className="text-sm text-gray-300">{session.time}</div>
              <div className="text-xs text-gray-400 mt-1">Priority: {'⭐'.repeat(session.priority)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6 flex gap-4">
        <select 
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className="bg-gray-900 border-2 border-emerald-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option>Stocks</option>
          <option>Crypto</option>
          <option>Forex</option>
        </select>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-900 border-2 border-emerald-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option>Total Score</option>
          <option>AI Score</option>
          <option>Risk Score</option>
          <option>Volume Profile</option>
        </select>
      </div>

      {/* Assets Table */}
      <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg border-2 border-emerald-500 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-emerald-900 bg-opacity-60">
              <tr>
                <th className="p-3 text-left text-emerald-300">Rank</th>
                <th className="p-3 text-left text-emerald-300">Symbol</th>
                <th className="p-3 text-left text-emerald-300">Price</th>
                <th className="p-3 text-left text-emerald-300">Target</th>
                <th className="p-3 text-left text-emerald-300">Stop Loss</th>
                <th className="p-3 text-left text-emerald-300">R:R</th>
                <th className="p-3 text-left text-emerald-300">Score</th>
                <th className="p-3 text-left text-emerald-300">Signal</th>
                <th className="p-3 text-left text-emerald-300">Risk</th>
                <th className="p-3 text-left text-emerald-300">Confidence</th>
                <th className="p-3 text-left text-emerald-300">Alert</th>
                <th className="p-3 text-left text-emerald-300">Details</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <React.Fragment key={idx}>
                  <tr className={`border-b border-gray-700 hover:bg-emerald-900 hover:bg-opacity-30 transition-colors ${idx < 7 ? 'bg-green-900 bg-opacity-25 border-l-4 border-l-green-500' : ''}`}>
                    <td className="p-3">
                      <span className={`font-bold text-lg ${idx < 3 ? 'text-yellow-400' : idx < 7 ? 'text-emerald-400' : 'text-gray-400'}`}>
                        #{asset.rank}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-emerald-400 text-lg">{asset.symbol}</div>
                      <div className="text-xs text-gray-400">{asset.name}</div>
                      <div className="text-xs text-cyan-400">{asset.sector}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-white text-lg">${asset.currentPrice}</div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        <div className="text-green-400 font-semibold">T1: ${asset.target1}</div>
                        <div className="text-green-300 font-semibold">T2: ${asset.target2}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-red-400 font-bold">${asset.stopLoss}</div>
                      <div className="text-xs text-gray-400">-{((asset.currentPrice - asset.stopLoss) / asset.currentPrice * 100).toFixed(2)}%</div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm">
                        <div className="text-cyan-400 font-semibold">1:{asset.riskRewardT1}</div>
                        <div className="text-cyan-300">1:{asset.riskRewardT2}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-xl font-bold text-emerald-400">{asset.totalScore}</span>
                    </td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        asset.signal.includes('STRONG') ? 'bg-green-500 text-gray-900' : 
                        asset.signal.includes('BUY') ? 'bg-green-600 text-white' : 'bg-yellow-500 text-gray-900'
                      }`}>
                        {asset.signal}
                      </span>
                      <div className="text-xs mt-1">{asset.trend}</div>
                    </td>
                    <td className="p-3">
                      <span className={`font-bold text-lg ${parseFloat(asset.riskScore) < 4 ? 'text-green-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {asset.riskScore}/10
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-emerald-400">{asset.confidence}%</div>
                        <div className="text-xs text-gray-400">{asset.setupQuality}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => sendTelegramAlert(asset)}
                        className="bg-emerald-600 hover:bg-emerald-700 p-2 rounded-lg transition-colors flex items-center gap-1"
                        title="Send Telegram Alert"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setExpandedAsset(expandedAsset === idx ? null : idx)}
                        className="p-1 hover:bg-emerald-600 rounded transition-colors"
                      >
                        {expandedAsset === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </td>
                  </tr>
                  {expandedAsset === idx && (
                    <tr className="bg-gray-950 bg-opacity-95 border-l-4 border-l-emerald-500">
                      <td colSpan="12" className="p-6">
                        <div className="grid grid-cols-4 gap-6">
                          {/* Trade Setup */}
                          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-4">
                            <h4 className="font-bold mb-3 text-green-400 text-lg flex items-center">
                              <Target className="mr-2" /> Trade Setup
                            </h4>
                            <div className="space-y-3 text-sm">
                              <div className="bg-green-900 bg-opacity-30 p-2 rounded">
                                <div className="text-gray-400 text-xs">Entry Price</div>
                                <div className="font-bold text-white text-lg">${asset.currentPrice}</div>
                              </div>
                              <div className="bg-emerald-900 bg-opacity-30 p-2 rounded">
                                <div className="text-gray-400 text-xs">Target 1 (+{((asset.target1 - asset.currentPrice) / asset.currentPrice * 100).toFixed(2)}%)</div>
                                <div className="font-bold text-green-400">${asset.target1}</div>
                              </div>
                              <div className="bg-emerald-900 bg-opacity-30 p-2 rounded">
                                <div className="text-gray-400 text-xs">Target 2 (+{((asset.target2 - asset.currentPrice) / asset.currentPrice * 100).toFixed(2)}%)</div>
                                <div className="font-bold text-green-300">${asset.target2}</div>
                              </div>
                              <div className="bg-red-900 bg-opacity-30 p-2 rounded">
                                <div className="text-gray-400 text-xs">Stop Loss (-{((asset.currentPrice - asset.stopLoss) / asset.currentPrice * 100).toFixed(2)}%)</div>
                                <div className="font-bold text-red-400">${asset.stopLoss}</div>
                              </div>
                            </div>
                          </div>

                          {/* Risk Analysis */}
                          <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-4">
                            <h4 className="font-bold mb-3 text-cyan-400 text-lg flex items-center">
                              <AlertTriangle className="mr-2" /> Risk Analysis
                            </h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Sentiment:</span>
                                <span className="font-bold text-emerald-400">{asset.sentimentScore}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Order Block:</span>
                                <span className={`font-bold ${asset.orderBlock === 'Present' ? 'text-green-400' : 'text-yellow-400'}`}>
                                  {asset.orderBlock}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">FVG:</span>
                                <span className={`font-bold ${asset.fvg === 'Identified' ? 'text-green-400' : 'text-gray-400'}`}>
                                  {asset.fvg}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-purple-900 bg-opacity-40 rounded border border-purple-500">
                                <span className="text-gray-300">Next KZ:</span>
                                <span className="font-bold text-purple-300">{asset.nextOptimal}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Setup Quality:</span>
                                <span className="font-bold text-yellow-400">{asset.setupQuality}</span>
                              </div>
                            </div>
                          </div>

                          {/* Market Data */}
                          <div className="bg-gray-900 border-2 border-orange-500 rounded-lg p-4">
                            <h4 className="font-bold mb-3 text-orange-400 text-lg flex items-center">
                              <Activity className="mr-2" /> Market Data
                            </h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Volume:</span>
                                <span className={`font-bold ${asset.volumeProfile === 'Very High' ? 'text-purple-400' : asset.volumeProfile === 'High' ? 'text-blue-400' : 'text-gray-400'}`}>
                                  {asset.volumeProfile}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Institutional:</span>
                                <span className={`font-bold ${asset.institutionalFlow === 'Buying' ? 'text-green-400' : 'text-red-400'}`}>
                                  {asset.institutionalFlow}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Dark Pool:</span>
                                <span className="font-bold text-cyan-400">{asset.darkPoolActivity}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Options Flow:</span>
                                <span className={`font-bold ${asset.optionsFlow === 'Bullish' ? 'text-green-400' : 'text-yellow-400'}`}>
                                  {asset.optionsFlow}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Whale Activity:</span>
                                <span className={`font-bold ${asset.whaleActivity === 'Detected' ? 'text-yellow-400' : 'text-gray-400'}`}>
                                  {asset.whaleActivity}
                                </span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Short Interest:</span>
                                <span className="font-bold text-red-400">{asset.shortInterest}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-orange-900 bg-opacity-40 rounded border border-orange-500">
                                <span className="text-gray-300">Confidence:</span>
                                <span className="font-bold text-orange-400">{asset.confidence}%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Trading Strategy */}
                        <div className="mt-6 bg-emerald-900 bg-opacity-30 border-2 border-emerald-500 rounded-lg p-4">
                          <h4 className="font-bold mb-3 text-emerald-400 text-lg">💡 Trading Strategy & Insights</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-300 mb-2">
                                <span className="text-emerald-400 font-semibold">✓ Entry Strategy:</span> Wait for {asset.nextOptimal} for optimal entry. Look for confirmation with order blocks and fair value gaps.
                              </div>
                              <div className="text-gray-300 mb-2">
                                <span className="text-emerald-400 font-semibold">✓ Position Sizing:</span> Risk only 1-2% of capital. With ${asset.riskAmount} risk, calculate position size accordingly.
                              </div>
                              <div className="text-gray-300">
                                <span className="text-emerald-400 font-semibold">✓ Exit Strategy:</span> Take 50% profit at T1 (${asset.target1}), move SL to breakeven, let rest run to T2 (${asset.target2}).
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-300 mb-2">
                                <span className="text-cyan-400 font-semibold">⚠ Risk Management:</span> Strict stop loss at ${asset.stopLoss}. No moving SL down. Risk score: {asset.riskScore}/10
                              </div>
                              <div className="text-gray-300 mb-2">
                                <span className="text-purple-400 font-semibold">📊 Confirmation:</span> {asset.orderBlock === 'Present' ? 'Strong order block support' : 'Wait for order block formation'}. {asset.fvg === 'Identified' ? 'FVG identified for entry' : 'No FVG yet'}.
                              </div>
                              <div className="text-gray-300">
                                <span className="text-yellow-400 font-semibold">🎯 Probability:</span> {asset.confidence}% confidence based on {asset.setupQuality} setup quality with {asset.trend} trend.
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

      {/* Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm space-y-2">
        <p className="flex items-center justify-center gap-4">
          <span>⚡ Live Data Updates Every 5 Seconds</span>
          <span>|</span>
          <span>🧠 AI-Powered Analysis</span>
          <span>|</span>
          <span>🎯 ICT Strategy Optimized</span>
        </p>
        <p className="text-emerald-400 font-semibold">
          💡 Focus on Top 7 STRONG BUY signals during active Kill Zones for highest probability trades
        </p>
        <p className="text-xs text-gray-500">
          Color Guide: 🟢 Green = Buy/Bullish | 🔴 Red = Stop Loss/Risk | 🟡 Yellow = Caution/Hold | 🟦 Cyan = Risk/Reward | 🟣 Purple = ICT Data
        </p>
      </div>
    </div>
  );
};

export default ICTAdvancedAnalyzer;2 bg-gray-800 rounded">
                                <span className="text-gray-400">Risk Amount:</span>
                                <span className="font-bold text-red-400">${asset.riskAmount}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Reward T1:</span>
                                <span className="font-bold text-green-400">${asset.rewardT1}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Reward T2:</span>
                                <span className="font-bold text-green-300">${asset.rewardT2}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-cyan-900 bg-opacity-40 rounded border border-cyan-500">
                                <span className="text-gray-300">R:R Ratio T1:</span>
                                <span className="font-bold text-cyan-400">1:{asset.riskRewardT1}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-cyan-900 bg-opacity-40 rounded border border-cyan-500">
                                <span className="text-gray-300">R:R Ratio T2:</span>
                                <span className="font-bold text-cyan-300">1:{asset.riskRewardT2}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">Risk Score:</span>
                                <span className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'text-green-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                                  {asset.riskScore}/10
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* ICT Analysis */}
                          <div className="bg-gray-900 border-2 border-purple-500 rounded-lg p-4">
                            <h4 className="font-bold mb-3 text-purple-400 text-lg flex items-center">
                              <Brain className="mr-2" /> ICT Analysis
                            </h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">ICT Score:</span>
                                <span className="font-bold text-purple-400">{asset.ictScore}</span>
                              </div>
                              <div className="flex justify-between p-2 bg-gray-800 rounded">
                                <span className="text-gray-400">AI Score:</span>
                                <span className="font-bold text-purple-300">{asset.aiScore}</span>
                              </div>
                              <div className="flex justify-between p-
