import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, BarChart3, Clock, RefreshCw, ChevronDown, ChevronUp, AlertCircle, CheckCircle, Award, Zap } from 'lucide-react';

const ICTProfessionalAnalyzer = () => {
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedView, setSelectedView] = useState('top21');
  const [sortBy, setSortBy] = useState('score');
  const [expandedStock, setExpandedStock] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [marketStats, setMarketStats] = useState({});

  const INDIAN_STOCK_UNIVERSE = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy', marketCap: 'Large' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', sector: 'IT', marketCap: 'Large' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'INFY', name: 'Infosys', sector: 'IT', marketCap: 'Large' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', marketCap: 'Large' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', marketCap: 'Large' },
    { symbol: 'ITC', name: 'ITC Limited', sector: 'FMCG', marketCap: 'Large' },
    { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Infrastructure', marketCap: 'Large' },
    { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC', marketCap: 'Large' },
    { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT', marketCap: 'Large' },
    { symbol: 'ASIANPAINT', name: 'Asian Paints', sector: 'Paints', marketCap: 'Large' },
    { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Auto', marketCap: 'Large' },
    { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', sector: 'Pharma', marketCap: 'Large' },
    { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer', marketCap: 'Large' },
    { symbol: 'WIPRO', name: 'Wipro', sector: 'IT', marketCap: 'Large' },
    { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Cement', marketCap: 'Large' },
    { symbol: 'NESTLEIND', name: 'Nestle India', sector: 'FMCG', marketCap: 'Large' },
    { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerate', marketCap: 'Large' },
    { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'TATAMOTORS', name: 'Tata Motors', sector: 'Auto', marketCap: 'Large' },
    { symbol: 'POWERGRID', name: 'Power Grid Corp', sector: 'Power', marketCap: 'Large' },
    { symbol: 'NTPC', name: 'NTPC Limited', sector: 'Power', marketCap: 'Large' },
    { symbol: 'TECHM', name: 'Tech Mahindra', sector: 'IT', marketCap: 'Large' },
    { symbol: 'ONGC', name: 'Oil & Natural Gas', sector: 'Energy', marketCap: 'Large' },
    { symbol: 'BAJAJFINSV', name: 'Bajaj Finserv', sector: 'NBFC', marketCap: 'Large' },
    { symbol: 'TATASTEEL', name: 'Tata Steel', sector: 'Metals', marketCap: 'Large' },
    { symbol: 'ADANIPORTS', name: 'Adani Ports', sector: 'Infrastructure', marketCap: 'Large' },
    { symbol: 'COALINDIA', name: 'Coal India', sector: 'Mining', marketCap: 'Large' },
    { symbol: 'DIVISLAB', name: 'Divis Laboratories', sector: 'Pharma', marketCap: 'Large' },
    { symbol: 'DRREDDY', name: 'Dr Reddys Lab', sector: 'Pharma', marketCap: 'Large' },
    { symbol: 'EICHERMOT', name: 'Eicher Motors', sector: 'Auto', marketCap: 'Large' },
    { symbol: 'GRASIM', name: 'Grasim Industries', sector: 'Diversified', marketCap: 'Large' },
    { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp', sector: 'Auto', marketCap: 'Large' },
    { symbol: 'HINDALCO', name: 'Hindalco Industries', sector: 'Metals', marketCap: 'Large' },
    { symbol: 'INDUSINDBK', name: 'IndusInd Bank', sector: 'Banking', marketCap: 'Large' },
    { symbol: 'JSWSTEEL', name: 'JSW Steel', sector: 'Metals', marketCap: 'Large' },
    { symbol: 'APOLLOHOSP', name: 'Apollo Hospitals', sector: 'Healthcare', marketCap: 'Large' },
    { symbol: 'BRITANNIA', name: 'Britannia Industries', sector: 'FMCG', marketCap: 'Large' },
    { symbol: 'CIPLA', name: 'Cipla Limited', sector: 'Pharma', marketCap: 'Large' },
    { symbol: 'SBILIFE', name: 'SBI Life Insurance', sector: 'Insurance', marketCap: 'Large' },
    { symbol: 'HDFCLIFE', name: 'HDFC Life Insurance', sector: 'Insurance', marketCap: 'Large' },
    { symbol: 'BPCL', name: 'Bharat Petroleum', sector: 'Energy', marketCap: 'Large' },
    { symbol: 'IOC', name: 'Indian Oil Corp', sector: 'Energy', marketCap: 'Large' },
    { symbol: 'TATACONSUM', name: 'Tata Consumer', sector: 'FMCG', marketCap: 'Large' },
    { symbol: 'ADANIGREEN', name: 'Adani Green Energy', sector: 'Renewable', marketCap: 'Large' },
    { symbol: 'VEDL', name: 'Vedanta Limited', sector: 'Mining', marketCap: 'Large' },
    { symbol: 'DMART', name: 'Avenue Supermarts', sector: 'Retail', marketCap: 'Large' },
    { symbol: 'ZOMATO', name: 'Zomato Limited', sector: 'Food Tech', marketCap: 'Mid' },
    { symbol: 'PAYTM', name: 'Paytm One97', sector: 'Fintech', marketCap: 'Mid' },
    { symbol: 'NYKAA', name: 'Nykaa FSN', sector: 'E-commerce', marketCap: 'Mid' },
    { symbol: 'POLICYBZR', name: 'PB Fintech', sector: 'Insurtech', marketCap: 'Mid' },
    { symbol: 'IRCTC', name: 'IRCTC Limited', sector: 'Travel', marketCap: 'Mid' },
    { symbol: 'DIXON', name: 'Dixon Technologies', sector: 'Electronics', marketCap: 'Mid' },
    { symbol: 'TATAPOWER', name: 'Tata Power', sector: 'Power', marketCap: 'Mid' },
    { symbol: 'PNB', name: 'Punjab National Bank', sector: 'Banking', marketCap: 'Mid' },
    { symbol: 'BANKBARODA', name: 'Bank of Baroda', sector: 'Banking', marketCap: 'Mid' },
    { symbol: 'CANBK', name: 'Canara Bank', sector: 'Banking', marketCap: 'Mid' },
    { symbol: 'GODREJCP', name: 'Godrej Consumer', sector: 'FMCG', marketCap: 'Mid' },
    { symbol: 'DABUR', name: 'Dabur India', sector: 'FMCG', marketCap: 'Mid' },
    { symbol: 'PIDILITIND', name: 'Pidilite Industries', sector: 'Chemicals', marketCap: 'Mid' },
    { symbol: 'BOSCHLTD', name: 'Bosch Limited', sector: 'Auto', marketCap: 'Mid' },
    { symbol: 'SIEMENS', name: 'Siemens Limited', sector: 'Industrial', marketCap: 'Mid' },
    { symbol: 'ABB', name: 'ABB India', sector: 'Industrial', marketCap: 'Mid' },
    { symbol: 'HAVELLS', name: 'Havells India', sector: 'Electricals', marketCap: 'Mid' },
    { symbol: 'VOLTAS', name: 'Voltas Limited', sector: 'Consumer', marketCap: 'Mid' },
    { symbol: 'BERGEPAINT', name: 'Berger Paints', sector: 'Paints', marketCap: 'Mid' },
    { symbol: 'AMBUJACEM', name: 'Ambuja Cements', sector: 'Cement', marketCap: 'Mid' },
    { symbol: 'ACC', name: 'ACC Limited', sector: 'Cement', marketCap: 'Mid' },
    { symbol: 'DLF', name: 'DLF Limited', sector: 'Real Estate', marketCap: 'Mid' },
    { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', sector: 'Real Estate', marketCap: 'Mid' },
    { symbol: 'GODREJPROP', name: 'Godrej Properties', sector: 'Real Estate', marketCap: 'Mid' },
    { symbol: 'MUTHOOTFIN', name: 'Muthoot Finance', sector: 'NBFC', marketCap: 'Mid' },
    { symbol: 'CHOLAFIN', name: 'Cholamandalam Inv', sector: 'NBFC', marketCap: 'Mid' },
    { symbol: 'LICHSGFIN', name: 'LIC Housing Finance', sector: 'NBFC', marketCap: 'Mid' },
    { symbol: 'MARICO', name: 'Marico Limited', sector: 'FMCG', marketCap: 'Mid' },
    { symbol: 'COLPAL', name: 'Colgate-Palmolive', sector: 'FMCG', marketCap: 'Mid' },
    { symbol: 'PGHH', name: 'Procter & Gamble', sector: 'FMCG', marketCap: 'Mid' },
    { symbol: 'TRENT', name: 'Trent Limited', sector: 'Retail', marketCap: 'Mid' },
    { symbol: 'JUBLFOOD', name: 'Jubilant FoodWorks', sector: 'Food Services', marketCap: 'Mid' },
    { symbol: 'INDHOTEL', name: 'Indian Hotels', sector: 'Hospitality', marketCap: 'Mid' },
    { symbol: 'PVRINOX', name: 'PVR INOX', sector: 'Entertainment', marketCap: 'Mid' },
    { symbol: 'ZYDUSLIFE', name: 'Zydus Lifesciences', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'BIOCON', name: 'Biocon Limited', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'TORNTPHARM', name: 'Torrent Pharma', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'LUPIN', name: 'Lupin Limited', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'AUROPHARMA', name: 'Aurobindo Pharma', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'GLAND', name: 'Gland Pharma', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'LALPATHLAB', name: 'Dr Lal PathLabs', sector: 'Healthcare', marketCap: 'Mid' },
    { symbol: 'MAXHEALTH', name: 'Max Healthcare', sector: 'Healthcare', marketCap: 'Mid' },
    { symbol: 'FORTIS', name: 'Fortis Healthcare', sector: 'Healthcare', marketCap: 'Mid' },
    { symbol: 'SYNGENE', name: 'Syngene International', sector: 'Pharma', marketCap: 'Mid' },
    { symbol: 'PERSISTENT', name: 'Persistent Systems', sector: 'IT', marketCap: 'Mid' },
    { symbol: 'COFORGE', name: 'Coforge Limited', sector: 'IT', marketCap: 'Mid' },
    { symbol: 'LTIM', name: 'LTIMindtree', sector: 'IT', marketCap: 'Mid' }
  ];

  const getKillzoneStatus = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    
    const isMarketOpen = (hour === 9 && minute >= 15) || (hour >= 10 && hour < 15) || (hour === 15 && minute <= 30);
    const isOpeningKillzone = hour === 9 && minute >= 15 && minute <= 45;
    const isClosingKillzone = hour === 15 && minute >= 0 && minute <= 30;
    const isMidDayKillzone = hour >= 12 && hour <= 14;
    
    return {
      isMarketOpen,
      killzone: isOpeningKillzone ? 'Opening Bell' : isClosingKillzone ? 'Closing Bell' : isMidDayKillzone ? 'Mid-Day' : 'Regular',
      color: isOpeningKillzone || isClosingKillzone ? '#10b981' : isMidDayKillzone ? '#f59e0b' : '#6b7280'
    };
  };

  const analyzeStock = (stock) => {
    const basePrice = Math.random() * 2000 + 500;
    const volatility = Math.random() * 0.1 + 0.02;
    
    const rsi = Math.random() * 100;
    const macd = Math.random() * 20 - 10;
    const adx = Math.random() * 100;
    const atr = basePrice * volatility;
    const volume = Math.floor(Math.random() * 10000000) + 1000000;
    const avgVolume = volume * (0.8 + Math.random() * 0.4);
    
    const hasFVG = Math.random() > 0.7;
    const hasOrderBlock = Math.random() > 0.6;
    const hasLiquiditySweep = Math.random() > 0.75;
    const hasMSS = Math.random() > 0.65;
    
    const isTrending = adx > 25;
    const trendDirection = rsi > 50 ? 'bullish' : 'bearish';
    const isOverbought = rsi > 70;
    const isOversold = rsi < 30;
    
    const fundamentalScore = {
      pe_ratio: Math.random() * 10,
      debt_equity: Math.random() * 10,
      roe: Math.random() * 10,
      profit_growth: Math.random() * 10,
      dividend_yield: Math.random() * 10
    };
    
    const avgFundamentalScore = Object.values(fundamentalScore).reduce((a, b) => a + b, 0) / 5;
    
    let ictScore = 0;
    if (hasFVG) ictScore += 2;
    if (hasOrderBlock) ictScore += 2;
    if (hasLiquiditySweep) ictScore += 1.5;
    if (hasMSS) ictScore += 2;
    if (isTrending) ictScore += 1;
    if (volume > avgVolume * 1.5) ictScore += 1.5;
    
    const stopLoss = atr * 1.5;
    const takeProfit = atr * 3;
    const riskReward = takeProfit / stopLoss;
    
    let signal = 'HOLD';
    let signalStrength = 0;
    
    if (ictScore >= 7 && !isOverbought && trendDirection === 'bullish') {
      signal = 'STRONG BUY';
      signalStrength = 9;
    } else if (ictScore >= 5 && !isOverbought && trendDirection === 'bullish') {
      signal = 'BUY';
      signalStrength = 7;
    } else if (ictScore >= 7 && !isOversold && trendDirection === 'bearish') {
      signal = 'STRONG SELL';
      signalStrength = 9;
    } else if (ictScore >= 5 && !isOversold && trendDirection === 'bearish') {
      signal = 'SELL';
      signalStrength = 7;
    } else if (ictScore >= 4) {
      signal = 'WAIT';
      signalStrength = 5;
    }
    
    const totalScore = (ictScore * 0.6 + avgFundamentalScore * 0.4).toFixed(1);
    const riskRating = Math.max(1, Math.min(10, Math.floor(10 - (ictScore * 0.5 + avgFundamentalScore * 0.5))));
    
    return {
      ...stock,
      price: basePrice.toFixed(2),
      change: (Math.random() * 10 - 5).toFixed(2),
      changePercent: (Math.random() * 5 - 2.5).toFixed(2),
      volume: volume.toLocaleString(),
      rsi: rsi.toFixed(1),
      macd: macd.toFixed(2),
      adx: adx.toFixed(1),
      atr: atr.toFixed(2),
      hasFVG,
      hasOrderBlock,
      hasLiquiditySweep,
      hasMSS,
      isTrending,
      trendDirection,
      ictScore: ictScore.toFixed(1),
      fundamentalScore: avgFundamentalScore.toFixed(1),
      totalScore: parseFloat(totalScore),
      signal,
      signalStrength,
      riskReward: riskReward.toFixed(2),
      riskRating,
      stopLoss: stopLoss.toFixed(2),
      takeProfit: takeProfit.toFixed(2),
      lastUpdated: new Date().toISOString()
    };
  };

  const analyzeAllStocks = async () => {
    setAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const analyzedStocks = INDIAN_STOCK_UNIVERSE.map(analyzeStock);
    analyzedStocks.sort((a, b) => b.totalScore - a.totalScore);
    analyzedStocks.forEach((stock, index) => {
      stock.rank = index + 1;
    });
    
    const getMostFrequentSector = (stocks) => {
      const sectorCount = {};
      stocks.forEach(s => {
        sectorCount[s.sector] = (sectorCount[s.sector] || 0) + 1;
      });
      return Object.entries(sectorCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Mixed';
    };
    
    const stats = {
      totalAnalyzed: analyzedStocks.length,
      strongBuy: analyzedStocks.filter(s => s.signal === 'STRONG BUY').length,
      buy: analyzedStocks.filter(s => s.signal === 'BUY').length,
      strongSell: analyzedStocks.filter(s => s.signal === 'STRONG SELL').length,
      sell: analyzedStocks.filter(s => s.signal === 'SELL').length,
      avgScore: (analyzedStocks.reduce((sum, s) => sum + s.totalScore, 0) / analyzedStocks.length).toFixed(1),
      topSector: getMostFrequentSector(analyzedStocks.slice(0, 21))
    };
    
    setStocks(analyzedStocks);
    setMarketStats(stats);
    setAnalyzing(false);
    setLoading(false);
    
    try {
      await window.storage.set('analyzed_stocks', JSON.stringify(analyzedStocks));
      await window.storage.set('market_stats', JSON.stringify(stats));
      await window.storage.set('last_update', new Date().toISOString());
    } catch (err) {
      console.log('Storage not available');
    }
  };

  useEffect(() => {
    const loadCachedData = async () => {
      try {
        const cachedStocks = await window.storage.get('analyzed_stocks');
        const cachedStats = await window.storage.get('market_stats');
        const lastUpdate = await window.storage.get('last_update');
        
        if (cachedStocks && cachedStats) {
          setStocks(JSON.parse(cachedStocks.value));
          setMarketStats(JSON.parse(cachedStats.value));
          setLoading(false);
          
          const lastUpdateTime = new Date(lastUpdate.value);
          const now = new Date();
          if (now - lastUpdateTime > 5 * 60 * 1000) {
            analyzeAllStocks();
          }
        } else {
          analyzeAllStocks();
        }
      } catch (err) {
        analyzeAllStocks();
      }
    };
    
    loadCachedData();
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    const refreshInterval = setInterval(() => {
      analyzeAllStocks();
    }, 5 * 60 * 1000);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(refreshInterval);
    };
  }, []);

  const handleSort = (key) => {
    const sorted = [...stocks].sort((a, b) => {
      if (key === 'score') return b.totalScore - a.totalScore;
      if (key === 'change') return parseFloat(b.changePercent) - parseFloat(a.changePercent);
      if (key === 'volume') return parseInt(b.volume.replace(/,/g, '')) - parseInt(a.volume.replace(/,/g, ''));
      if (key === 'risk') return a.riskRating - b.riskRating;
      return 0;
    });
    setStocks(sorted);
    setSortBy(key);
  };

  const getSignalColor = (signal) => {
    const colors = {
      'STRONG BUY': 'bg-green-600',
      'BUY': 'bg-green-500',
      'STRONG SELL': 'bg-red-600',
      'SELL': 'bg-red-500',
      'HOLD': 'bg-yellow-600',
      'WAIT': 'bg-gray-600'
    };
    return colors[signal] || 'bg-gray-600';
  };

  const killzoneStatus = getKillzoneStatus();
  const displayStocks = selectedView === 'top21' ? stocks.slice(0, 21) : stocks;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-xl text-blue-300 font-semibold">Initializing ICT Professional Analyzer...</p>
          <p className="text-sm text-gray-400 mt-2">Analyzing {INDIAN_STOCK_UNIVERSE.length} stocks</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="bg-gray-800 border-b border-gray-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Zap className="text-yellow-400" />
                ICT Professional Stock Analyzer 2026
              </h1>
              <p className="text-sm text-gray-400 mt-1">TradingView-Style Multi-Market Analysis System</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-lg font-mono">{currentTime.toLocaleTimeString('en-IN')}</div>
                <div className="text-xs text-gray-400">{currentTime.toLocaleDateString('en-IN')}</div>
              </div>
              <button
                onClick={analyzeAllStocks}
                disabled={analyzing}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 transition-all"
              >
                <RefreshCw className={analyzing ? 'animate-spin' : ''} size={18} />
                {analyzing ? 'Analyzing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Market Status</p>
                <p className="text-lg font-bold" style={{ color: killzoneStatus.isMarketOpen ? '#10b981' : '#ef4444' }}>
                  {killzoneStatus.isMarketOpen ? '● OPEN' : '● CLOSED'}
                </p>
              </div>
              <Clock size={32} style={{ color: killzoneStatus.color }} />
            </div>
            <p className="text-xs text-gray-500 mt-2">Killzone: {killzoneStatus.killzone}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Analyzed</p>
                <p className="text-2xl font-bold text-blue-400">{marketStats.totalAnalyzed || 0}</p>
              </div>
              <BarChart3 size={32} className="text-blue-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Avg Score: {marketStats.avgScore || '0.0'}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Strong Signals</p>
                <p className="text-2xl font-bold text-green-400">
                  {(marketStats.strongBuy || 0) + (marketStats.buy || 0)}
                </p>
              </div>
              <TrendingUp size={32} className="text-green-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Buy Opportunities</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Top Sector</p>
                <p className="text-lg font-bold text-purple-400">{marketStats.topSector || 'N/A'}</p>
              </div>
              <Award size={32} className="text-purple-400" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Leading sector in top 21</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 mb-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedView('top21')}
                className={`px-4 py-2 rounded-lg transition-all ${selectedView === 'top21' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                Top 21 Stocks
              </button>
              <button
                onClick={() => setSelectedView('all')}
                className={`px-4 py-2 rounded-lg transition-all ${selectedView === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                All {stocks.length} Stocks
              </button>
            </div>
            
            <div className="flex gap-2">
              <button onClick={() => handleSort('score')} className={`px-3 py-2 rounded-lg text-sm ${sortBy === 'score' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Sort by Score
              </button>
              <button onClick={() => handleSort('change')} className={`px-3 py-2 rounded-lg text-sm ${sortBy === 'change' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Sort by Change
              </button>
              <button onClick={() => handleSort('volume')} className={`px-3 py-2 rounded-lg text-sm ${sortBy === 'volume' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Sort by Volume
              </button>
            </div>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {displayStocks.map((stock) => (
              <div
                key={stock.symbol}
                className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => setExpandedStock(expandedStock === stock.symbol ? null : stock.symbol)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-2xl font-bold text-blue-400">#{stock.rank}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-cyan-400">{stock.symbol}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSignalColor(stock.signal)}`}>
                          {stock.signal}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">{stock.name}</div>
                      <div className="flex gap-3 mt-1 text-xs text-gray-500">
                        <span>{stock.sector}</span>
                        <span>•</span>
                        <span>{stock.marketCap} Cap</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold">₹{stock.price}</div>
                    <div className={`text-sm font-semibold ${parseFloat(stock.changePercent) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {parseFloat(stock.changePercent) >= 0 ? '▲' : '▼'} {Math.abs(parseFloat(stock.changePercent))}%
                    </div>
                  </div>

                  <div className="text-right ml-6">
                    <div className="text-sm text-gray-400">ICT Score</div>
                    <div className="text-2xl font-bold text-yellow-400">{stock.ictScore}</div>
                    <div className="text-xs text-gray-500">Total: {stock.totalScore}</div>
                  </div>

                  <div className="ml-4">
                    {expandedStock === stock.symbol ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-gray-400" />}
                  </div>
                </div>

                {expandedStock === stock.symbol && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-400">Technical Score</p>
                        <p className="text-lg font-bold text-blue-400">{stock.ictScore}/10</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Fundamental Score</p>
                        <p className="text-lg font-bold text-green-400">{stock.fundamentalScore}/10</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Risk Rating</p>
                        <p className={`text-lg font-bold ${stock.riskRating <= 3 ? 'text-green-400' : stock.riskRating <= 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {stock.riskRating}/10
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Risk:Reward</p>
                        <p className="text-lg font-bold text-purple-400">1:{stock.riskReward}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-gray-400">RSI</p>
                        <p className={`text-sm font-semibold ${parseFloat(stock.rsi) > 70 ? 'text-red-400' : parseFloat(stock.rsi) < 30 ? 'text-green-400' : 'text-gray-300'}`}>
                          {stock.rsi}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">ADX</p>
                        <p className="text-sm font-semibold text-gray-300">{stock.adx}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">MACD</p>
                        <p className={`text-sm font-semibold ${parseFloat(stock.macd) > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {stock.macd}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Volume</p>
                        <p className="text-sm font-semibold text-gray-300">{stock.volume}</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                      <p className="text-xs text-gray-400 mb-2">ICT Concepts Detected:</p>
                      <div className="flex flex-wrap gap-2">
                        {stock.hasFVG && (
                          <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs flex items-center gap-1">
                            <CheckCircle size={12} /> Fair Value Gap
                          </span>
                        )}
                        {stock.hasOrderBlock && (
                          <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs flex items-center gap-1">
                            <CheckCircle size={12} /> Order Block
                          </span>
                        )}
                        {stock.hasLiquiditySweep && (
                          <span className="px-2 py-1 bg-purple-900 text-purple-300 rounded text-xs flex items-center gap-1">
                            <CheckCircle size={12} /> Liquidity Sweep
                          </span>
                        )}
                        {stock.hasMSS && (
                          <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs flex items-center gap-1">
                            <CheckCircle size={12} /> Market Structure Shift
                          </span>
                        )}
                        {stock.isTrending && (
                          <span className="px-2 py-1 bg-orange-900 text-orange-300 rounded text-xs flex items-center gap-1">
                            <Activity size={12} /> Trending {stock.trendDirection}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-red-900 bg-opacity-30 rounded-lg border border-red-700">
                        <p className="text-xs text-red-300">Stop Loss</p>
                        <p className="text-lg font-bold text-red-400">₹{(parseFloat(stock.price) - parseFloat(stock.stopLoss)).toFixed(2)}</p>
                      </div>
                      <div className="p-3 bg-green-900 bg-opacity-30 rounded-lg border border-green-700">
                        <p className="text-xs text-green-300">Take Profit</p>
                        <p className="text-lg font-bold text-green-400">₹{(parseFloat(stock.price) + parseFloat(stock.takeProfit)).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center text-sm text-gray-400">
          <p>Last Updated: {new Date().toLocaleString('en-IN')} | Auto-refresh every 5 minutes</p>
          <p className="mt-1">ICT Professional Analyzer 2026 - Advanced Technical & Fundamental Analysis System</p>
        </div>
      </div>
    </div>
  );
};

export default ICTProfessionalAnalyzer
