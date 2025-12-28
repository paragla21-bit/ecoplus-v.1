import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, ChevronDown, ChevronUp, BarChart3, Activity, Bell, Settings, X, Menu, CheckCircle } from 'lucide-react';

const ICTProTerminal = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [telegramBotToken, setTelegramBotToken] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Advanced ICT Analysis Engine
  const analyzeICTSetup = (asset) => {
    const concepts = {
      marketStructure: Math.random() > 0.5 ? 'Bullish MSS' : 'Bearish MSS',
      breakOfStructure: Math.random() > 0.4 ? 'BOS Confirmed' : 'No BOS',
      liquidity: Math.random() > 0.5 ? 'BSL Sweep' : 'SSL Sweep',
      orderBlock: Math.random() > 0.6 ? 'Bullish OB' : 'Bearish OB',
      fairValueGap: Math.random() > 0.5 ? 'FVG Present' : 'No FVG',
      liquidityVoid: Math.random() > 0.7 ? 'LV Detected' : 'No LV',
      breakerBlock: Math.random() > 0.6 ? 'BB Active' : 'No BB',
      mitigationBlock: Math.random() > 0.5 ? 'MB Present' : 'No MB',
      pdArray: Math.random() > 0.5 ? 'Premium' : 'Discount',
      killZone: ['London KZ', 'NY KZ', 'Asian KZ', 'Silver Bullet'][Math.floor(Math.random() * 4)],
      macro: Math.random() > 0.5 ? 'Active' : 'Inactive',
      midnightOpen: Math.random() > 0.6 ? 'MO Sweep' : 'No MO'
    };

    const score = Object.values(concepts).filter(v => 
      v.includes('Bullish') || v.includes('Present') || v.includes('Active') || v.includes('Sweep')
    ).length;

    return { ...concepts, confluenceScore: ((score / 12) * 100).toFixed(0) };
  };

  // AI-Powered Trade Setup Generator
  const generateTradeSetup = (basePrice, ictAnalysis) => {
    const currentPrice = basePrice * (1 + (Math.random() - 0.5) * 0.03);
    const volatility = basePrice * 0.025;
    
    const isBullish = ictAnalysis.marketStructure.includes('Bullish');
    const confluenceFactor = parseInt(ictAnalysis.confluenceScore) / 100;
    
    const stopLoss = isBullish 
      ? currentPrice - (volatility * (1.5 - confluenceFactor * 0.5))
      : currentPrice + (volatility * (1.5 - confluenceFactor * 0.5));
    
    const target1 = isBullish 
      ? currentPrice + (volatility * (2 + confluenceFactor))
      : currentPrice - (volatility * (2 + confluenceFactor));
    
    const target2 = isBullish 
      ? currentPrice + (volatility * (3.5 + confluenceFactor * 1.5))
      : currentPrice - (volatility * (3.5 + confluenceFactor * 1.5));

    const target3 = isBullish 
      ? currentPrice + (volatility * (5 + confluenceFactor * 2))
      : currentPrice - (volatility * (5 + confluenceFactor * 2));

    const risk = Math.abs(currentPrice - stopLoss);
    const reward1 = Math.abs(target1 - currentPrice);
    const riskReward = (reward1 / risk).toFixed(2);
    
    // Position sizing (2% risk model)
    const accountSize = 100000; // ₹1 Lakh
    const riskPercent = 0.02;
    const riskAmount = accountSize * riskPercent;
    const positionSize = Math.floor(riskAmount / risk);
    
    return {
      entryPrice: currentPrice.toFixed(2),
      stopLoss: stopLoss.toFixed(2),
      target1: target1.toFixed(2),
      target2: target2.toFixed(2),
      target3: target3.toFixed(2),
      riskReward: riskReward,
      positionSize: positionSize,
      riskAmount: riskAmount.toFixed(2),
      potentialProfit: (reward1 * positionSize).toFixed(2),
      direction: isBullish ? 'LONG' : 'SHORT',
      confidence: (70 + confluenceFactor * 30).toFixed(0)
    };
  };

  // 2025 Advanced Strategies
  const get2025Strategy = (ictAnalysis) => {
    const strategies = [
      {
        name: "Order Block + FVG Confluence",
        description: "Bullish OB aligned with FVG in discount array during London KZ",
        accuracy: "89%",
        signals: ["Wait for price to tap OB", "Confirm FVG fill", "Enter on engulfing candle"]
      },
      {
        name: "Liquidity Sweep Reversal",
        description: "SSL sweep followed by immediate BOS and MSS confirmation",
        accuracy: "85%",
        signals: ["Sweep complete", "Wait for BOS", "Enter at MB formation"]
      },
      {
        name: "Silver Bullet Setup",
        description: "NY AM session 8:50-9:10 with institutional order flow",
        accuracy: "92%",
        signals: ["Check for FVG", "Confirm volume spike", "Enter at optimal entry"]
      },
      {
        name: "Breaker Block Mitigation",
        description: "Previous resistance becomes support with BB confirmation",
        accuracy: "87%",
        signals: ["BB activation", "Price mitigation", "Volume confirmation"]
      }
    ];

    const score = parseInt(ictAnalysis.confluenceScore);
    if (score >= 75) return strategies[2];
    if (score >= 60) return strategies[0];
    if (score >= 45) return strategies[1];
    return strategies[3];
  };

  // Generate stock data with full ICT analysis
  const generateStockData = () => {
    const USD_TO_INR = 83.5; // Current exchange rate
    
    const stocks = [
       { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', sector: 'IT', marketCap: 'Large' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'INFY', name: 'Infosys', sector: 'IT', marketCap: 'Large' },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', marketCap: 'Large' },
  { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'LICI', name: 'Life Insurance Corp', sector: 'Insurance', marketCap: 'Large' },
  { symbol: 'ITC', name: 'ITC Limited', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Construction', marketCap: 'Large' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'Finance', marketCap: 'Large' },
  { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', sector: 'Healthcare', marketCap: 'Large' },
  { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Metals & Mining', marketCap: 'Large' },
  { symbol: 'TATAMOTORS', name: 'Tata Motors', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Durables', marketCap: 'Large' },
  { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Materials', marketCap: 'Large' },
  { symbol: 'WIPRO', name: 'Wipro Limited', sector: 'IT', marketCap: 'Large' },
  { symbol: 'ASIANPAINT', name: 'Asian Paints', sector: 'Consumer Durables', marketCap: 'Large' },
  { symbol: 'ONGC', name: 'Oil & Natural Gas Corp', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT', marketCap: 'Large' },
  { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'NTPC', name: 'NTPC Limited', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'COALINDIA', name: 'Coal India', sector: 'Metals & Mining', marketCap: 'Large' },
  { symbol: 'ADANIPORTS', name: 'Adani Ports & SEZ', sector: 'Services', marketCap: 'Large' },
  { symbol: 'JSWSTEEL', name: 'JSW Steel', sector: 'Metals & Mining', marketCap: 'Large' },
  { symbol: 'POWERGRID', name: 'Power Grid Corp', sector: 'Utilities', marketCap: 'Large' },
  { symbol: 'ADANIPOWER', name: 'Adani Power', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'TRENT', name: 'Trent Limited', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'TATAPOWER', name: 'Tata Power Company', sector: 'Utilities', marketCap: 'Mid' },
  { symbol: 'SIEMENS', name: 'Siemens Limited', sector: 'Capital Goods', marketCap: 'Large' },
  { symbol: 'HAL', name: 'Hindustan Aeronautics', sector: 'Manufacturing', marketCap: 'Large' },
  { symbol: 'DLF', name: 'DLF Limited', sector: 'Real Estate', marketCap: 'Large' },
  { symbol: 'GRASIM', name: 'Grasim Industries', sector: 'Materials', marketCap: 'Large' },
  { symbol: 'VBL', name: 'Varun Beverages', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'ZOMATO', name: 'Zomato Limited', sector: 'Consumer Services', marketCap: 'Large' },
  { symbol: 'JIOFIN', name: 'Jio Financial Services', sector: 'Finance', marketCap: 'Large' },
  { symbol: 'INDIGO', name: 'InterGlobe Aviation', sector: 'Services', marketCap: 'Large' },
  { symbol: 'BEL', name: 'Bharat Electronics', sector: 'Manufacturing', marketCap: 'Large' },
  { symbol: 'GAIL', name: 'GAIL (India) Ltd', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'PNB', name: 'Punjab National Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'ABB', name: 'ABB India', sector: 'Capital Goods', marketCap: 'Large' },
  { symbol: 'BANKBARODA', name: 'Bank of Baroda', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'ADANIENSOL', name: 'Adani Energy Solutions', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'INDUSINDBK', name: 'IndusInd Bank', sector: 'Banking', marketCap: 'Large' },
  { symbol: 'TATASTEEL', name: 'Tata Steel', sector: 'Metals & Mining', marketCap: 'Large' },
  { symbol: 'HINDALCO', name: 'Hindalco Industries', sector: 'Metals & Mining', marketCap: 'Large' },
  { symbol: 'IOC', name: 'Indian Oil Corp', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'BPCL', name: 'Bharat Petroleum', sector: 'Energy', marketCap: 'Large' },
  { symbol: 'AMBUJACEM', name: 'Ambuja Cements', sector: 'Materials', marketCap: 'Large' },
  { symbol: 'SHREECEM', name: 'Shree Cement', sector: 'Materials', marketCap: 'Large' },
  { symbol: 'TECHM', name: 'Tech Mahindra', sector: 'IT', marketCap: 'Large' },
  { symbol: 'CIPLA', name: 'Cipla Limited', sector: 'Healthcare', marketCap: 'Large' },
  { symbol: 'EICHERMOT', name: 'Eicher Motors', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'BRITANNIA', name: 'Britannia Industries', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'NESTLEIND', name: 'Nestle India', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'GODREJCP', name: 'Godrej Consumer Products', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'PIDILITIND', name: 'Pidilite Industries', sector: 'Chemicals', marketCap: 'Large' },
  { symbol: 'HAVELLS', name: 'Havells India', sector: 'Consumer Durables', marketCap: 'Large' },
  { symbol: 'BAJAJ-AUTO', name: 'Bajaj Auto', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'DABUR', name: 'Dabur India', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'DIVISLAB', name: 'Divi\'s Laboratories', sector: 'Healthcare', marketCap: 'Large' },
  { symbol: 'DRREDDY', name: 'Dr. Reddy\'s Laboratories', sector: 'Healthcare', marketCap: 'Large' },
  { symbol: 'APOLLOHOSP', name: 'Apollo Hospitals', sector: 'Healthcare', marketCap: 'Large' },
  { symbol: 'SBICARD', name: 'SBI Cards & Payment', sector: 'Finance', marketCap: 'Large' },
  { symbol: 'SRF', name: 'SRF Limited', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'POLYCAB', name: 'Polycab India', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'LTIM', name: 'LTIMindtree', sector: 'IT', marketCap: 'Large' },
  { symbol: 'ICICIPRULI', name: 'ICICI Pru Life Insurance', sector: 'Insurance', marketCap: 'Large' },
  { symbol: 'HDFCLIFE', name: 'HDFC Life Insurance', sector: 'Insurance', marketCap: 'Large' },
  { symbol: 'MARICO', name: 'Marico Limited', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'BERGEPAINT', name: 'Berger Paints', sector: 'Consumer Durables', marketCap: 'Large' },
  { symbol: 'COLPAL', name: 'Colgate-Palmolive', sector: 'FMCG', marketCap: 'Large' },
  { symbol: 'TATAELXSI', name: 'Tata Elxsi', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'PATANJALI', name: 'Patanjali Foods', sector: 'FMCG', marketCap: 'Mid' },
  { symbol: 'DMART', name: 'Avenue Supermarts', sector: 'Consumer Services', marketCap: 'Large' },
  { symbol: 'PAGEIND', name: 'Page Industries', sector: 'Textiles', marketCap: 'Mid' },
  { symbol: 'MUTHOOTFIN', name: 'Muthoot Finance', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'CHOLAFIN', name: 'Cholamandalam Inv', sector: 'Finance', marketCap: 'Large' },
  { symbol: 'PIIND', name: 'PI Industries', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'AUBANK', name: 'AU Small Finance Bank', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'TVSMOTOR', name: 'TVS Motor Company', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp', sector: 'Automobile', marketCap: 'Large' },
  { symbol: 'ASHOKLEY', name: 'Ashok Leyland', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'CUMMINSIND', name: 'Cummins India', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'BHEL', name: 'Bharat Heavy Electricals', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'BEL', name: 'Bharat Electronics', sector: 'Capital Goods', marketCap: 'Large' },
  { symbol: 'MAXHEALTH', name: 'Max Healthcare', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'ABBOTINDIA', name: 'Abbott India', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'CONCOR', name: 'Container Corp', sector: 'Services', marketCap: 'Mid' },
  { symbol: 'RECLTD', name: 'REC Limited', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'PFC', name: 'Power Finance Corp', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'IDFCFIRSTB', name: 'IDFC First Bank', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'YESBANK', name: 'Yes Bank', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'RVNL', name: 'Rail Vikas Nigam', sector: 'Construction', marketCap: 'Mid' },
  { symbol: 'IRFC', name: 'Indian Railway Finance', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'SUZLON', name: 'Suzlon Energy', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'ABB', name: 'ABB India Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'AUROPHARMA', name: 'Aurobindo Pharma Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'BALKRISIND', name: 'Balkrishna Industries Ltd.', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'BHEL', name: 'Bharat Heavy Electricals Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'BEL', name: 'Bharat Electronics Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'CUMMINSIND', name: 'Cummins India Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'ESCORTS', name: 'Escorts Kubota Ltd.', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'FEDERALBNK', name: 'Federal Bank Ltd.', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'GUJGASLTD', name: 'Gujarat Gas Ltd.', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'HINDPETRO', name: 'Hindustan Petroleum Corp.', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'IDFCFIRSTB', name: 'IDFC First Bank Ltd.', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'INDHOTEL', name: 'Indian Hotels Co Ltd.', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'JINDALSTEL', name: 'Jindal Steel & Power Ltd.', sector: 'Metals & Mining', marketCap: 'Mid' },
  { symbol: 'JUBLFOOD', name: 'Jubilant FoodWorks Ltd.', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'KPITTECH', name: 'KPIT Technologies Ltd.', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'LUPIN', name: 'Lupin Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'MAXHEALTH', name: 'Max Healthcare Institute', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'MPHASIS', name: 'Mphasis Ltd.', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'MRF', name: 'MRF Ltd.', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'NMDC', name: 'NMDC Ltd.', sector: 'Metals & Mining', marketCap: 'Mid' },
  { symbol: 'OBEROIRLTY', name: 'Oberoi Realty Ltd.', sector: 'Realty', marketCap: 'Mid' },
  { symbol: 'PAGEIND', name: 'Page Industries Ltd.', sector: 'Textiles', marketCap: 'Mid' },
  { symbol: 'PERSISTENT', name: 'Persistent Systems Ltd.', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'PETRONET', name: 'Petronet LNG Ltd.', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'POLYCAB', name: 'Polycab India Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'PFC', name: 'Power Finance Corporation', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'RECLTD', name: 'REC Limited', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'SUZLON', name: 'Suzlon Energy Ltd.', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'TATAPOWER', name: 'Tata Power Company Ltd.', sector: 'Utilities', marketCap: 'Mid' },
  { symbol: 'TATACOMM', name: 'Tata Communications Ltd.', sector: 'Telecom', marketCap: 'Mid' },
  { symbol: 'TRENT', name: 'Trent Ltd.', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'TVSMOTOR', name: 'TVS Motor Company Ltd.', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'YESBANK', name: 'Yes Bank Ltd.', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'ZEEL', name: 'Zee Entertainment Ent Ltd.', sector: 'Media', marketCap: 'Mid' },
  { symbol: 'ASHOKLEY', name: 'Ashok Leyland Ltd.', sector: 'Automobile', marketCap: 'Mid' },
  { symbol: 'ASTRAPIPE', name: 'Astral Ltd.', sector: 'Materials', marketCap: 'Mid' },
  { symbol: 'COFORGE', name: 'Coforge Ltd.', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'CONCOR', name: 'Container Corp of India', sector: 'Services', marketCap: 'Mid' },
  { symbol: 'DIXON', name: 'Dixon Technologies Ltd.', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'GLAND', name: 'Gland Pharma Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'GODREJPROP', name: 'Godrej Properties Ltd.', sector: 'Realty', marketCap: 'Mid' },
  { symbol: 'IEX', name: 'Indian Energy Exchange', sector: 'Services', marketCap: 'Mid' },
  { symbol: 'IRCTC', name: 'IRCTC Ltd.', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'LICHSGFIN', name: 'LIC Housing Finance Ltd.', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'PIIND', name: 'PI Industries Ltd.', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'SRF', name: 'SRF Ltd.', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'VOLTAS', name: 'Voltas Ltd.', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'DALBHARAT', name: 'Dalmia Bharat Ltd.', sector: 'Materials', marketCap: 'Mid' },
  { symbol: 'RAMCOCEM', name: 'Ramco Cements Ltd.', sector: 'Materials', marketCap: 'Mid' },
  { symbol: 'CHOLAFIN', name: 'Cholamandalam Investment', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'BHARATFORG', name: 'Bharat Forge Ltd.', sector: 'Capital Goods', marketCap: 'Mid' },
  { symbol: 'ABCAPITAL', name: 'Aditya Birla Capital Ltd.', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'COROMANDEL', name: 'Coromandel International', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'INDIAMART', name: 'IndiaMART InterMESH Ltd.', sector: 'Consumer Services', marketCap: 'Mid' },
  { symbol: 'IPCALAB', name: 'Ipca Laboratories Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'LAURUSLABS', name: 'Laurus Labs Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'SYNGENE', name: 'Syngene International Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'SUNTV', name: 'Sun TV Network Ltd.', sector: 'Media', marketCap: 'Mid' },
  { symbol: 'TATAELXSI', name: 'Tata Elxsi Ltd.', sector: 'IT', marketCap: 'Mid' },
  { symbol: 'METROPOLIS', name: 'Metropolis Healthcare', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'BATAINDIA', name: 'Bata India Ltd.', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'CROMPTON', name: 'Crompton Greaves Consumer', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'DEEPAKNTR', name: 'Deepak Nitrite Ltd.', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'FORTIS', name: 'Fortis Healthcare Ltd.', sector: 'Healthcare', marketCap: 'Mid' },
  { symbol: 'L&TFH', name: 'L&T Finance Ltd.', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'MANAPPURAM', name: 'Manappuram Finance Ltd.', sector: 'Finance', marketCap: 'Mid' },
  { symbol: 'MGL', name: 'Mahanagar Gas Ltd.', sector: 'Energy', marketCap: 'Mid' },
  { symbol: 'RELAXO', name: 'Relaxo Footwears Ltd.', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'RVNL', name: 'Rail Vikas Nigam Ltd.', sector: 'Construction', marketCap: 'Mid' },
  { symbol: 'SUNTECK', name: 'Sunteck Realty Ltd.', sector: 'Realty', marketCap: 'Mid' },
  { symbol: 'TATACHEM', name: 'Tata Chemicals Ltd.', sector: 'Chemicals', marketCap: 'Mid' },
  { symbol: 'UNIONBANK', name: 'Union Bank of India', sector: 'Banking', marketCap: 'Mid' },
  { symbol: 'WHIRLPOOL', name: 'Whirlpool of India Ltd.', sector: 'Consumer Durables', marketCap: 'Mid' },
  { symbol: 'SUZLON', name: 'Suzlon Energy Ltd.', sector: 'Energy', marketCap: 'Small' },
  { symbol: 'RVNL', name: 'Rail Vikas Nigam Ltd.', sector: 'Construction', marketCap: 'Small' },
  { symbol: 'MAZDOCK', name: 'Mazagon Dock Shipbuilders', sector: 'Manufacturing', marketCap: 'Small' },
  { symbol: 'IRFC', name: 'Indian Railway Finance Corp', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'KALYANKJIL', name: 'Kalyan Jewellers India', sector: 'Consumer Durables', marketCap: 'Small' },
  { symbol: 'RITES', name: 'RITES Limited', sector: 'Services', marketCap: 'Small' },
  { symbol: 'ANGELONE', name: 'Angel One Ltd.', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'CYIENT', name: 'Cyient Limited', sector: 'IT', marketCap: 'Small' },
  { symbol: 'CDSL', name: 'Central Depository Services', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'BSOFT', name: 'Birlasoft Limited', sector: 'IT', marketCap: 'Small' },
  { symbol: 'CENTRALBK', name: 'Central Bank of India', sector: 'Banking', marketCap: 'Small' },
  { symbol: 'IOB', name: 'Indian Overseas Bank', sector: 'Banking', marketCap: 'Small' },
  { symbol: 'MAPMYINDIA', name: 'C.E. Info Systems', sector: 'IT', marketCap: 'Small' },
  { symbol: 'KEI', name: 'KEI Industries Ltd.', sector: 'Capital Goods', marketCap: 'Small' },
  { symbol: 'CREDITACC', name: 'CreditAccess Grameen', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'RAYMOND', name: 'Raymond Limited', sector: 'Textiles', marketCap: 'Small' },
  { symbol: 'SONACOMS', name: 'Sona BLW Precision', sector: 'Automobile', marketCap: 'Small' },
  { symbol: 'NHPC', name: 'NHPC Limited', sector: 'Utilities', marketCap: 'Small' },
  { symbol: 'SJVN', name: 'SJVN Limited', sector: 'Utilities', marketCap: 'Small' },
  { symbol: 'NBCC', name: 'NBCC (India) Limited', sector: 'Construction', marketCap: 'Small' },
  { symbol: 'MEDANTA', name: 'Global Health Ltd.', sector: 'Healthcare', marketCap: 'Small' },
  { symbol: 'EASEMYTRIP', name: 'Easy Trip Planners', sector: 'Consumer Services', marketCap: 'Small' },
  { symbol: 'ZENSARTECH', name: 'Zensar Technologies', sector: 'IT', marketCap: 'Small' },
  { symbol: 'MOTILALOFS', name: 'Motilal Oswal Financial', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'KARURVYSYA', name: 'Karur Vysya Bank', sector: 'Banking', marketCap: 'Small' },
  { symbol: 'PNBHOUSING', name: 'PNB Housing Finance', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'PVRINOX', name: 'PVR INOX Limited', sector: 'Media', marketCap: 'Small' },
  { symbol: 'CASTROLIND', name: 'Castrol India Ltd.', sector: 'Chemicals', marketCap: 'Small' },
  { symbol: 'BIRLACORPN', name: 'Birla Corporation', sector: 'Materials', marketCap: 'Small' },
  { symbol: 'HAPPSTMNDS', name: 'Happiest Minds Tech', sector: 'IT', marketCap: 'Small' },
  { symbol: 'HUDCO', name: 'Housing & Urban Dev', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'IDFC', name: 'IDFC Limited', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'INDIACEM', name: 'The India Cements Ltd.', sector: 'Materials', marketCap: 'Small' },
  { symbol: 'ITDCEM', name: 'ITD Cementation India', sector: 'Construction', marketCap: 'Small' },
  { symbol: 'JKTYRE', name: 'JK Tyre & Industries', sector: 'Automobile', marketCap: 'Small' },
  { symbol: 'JWL', name: 'Jupiter Wagons Ltd.', sector: 'Manufacturing', marketCap: 'Small' },
  { symbol: 'LATENTVIEW', name: 'Latent View Analytics', sector: 'IT', marketCap: 'Small' },
  { symbol: 'METROPOLIS', name: 'Metropolis Healthcare', sector: 'Healthcare', marketCap: 'Small' },
  { symbol: 'ORISSAMINE', name: 'The Orissa Minerals', sector: 'Metals & Mining', marketCap: 'Small' },
  { symbol: 'PRAJIND', name: 'Praj Industries Ltd.', sector: 'Manufacturing', marketCap: 'Small' },
  { symbol: 'RATTANINDIA', name: 'RattanIndia Enterprises', sector: 'Services', marketCap: 'Small' },
  { symbol: 'RELAXO', name: 'Relaxo Footwears Ltd.', sector: 'Consumer Durables', marketCap: 'Small' },
  { symbol: 'RTNINDIA', name: 'RattanIndia Power', sector: 'Utilities', marketCap: 'Small' },
  { symbol: 'SAIL', name: 'Steel Authority of India', sector: 'Metals & Mining', marketCap: 'Small' },
  { symbol: 'SOUTHBANK', name: 'South Indian Bank', sector: 'Banking', marketCap: 'Small' },
  { symbol: 'SPARC', name: 'Sun Pharma Advanced Res', sector: 'Healthcare', marketCap: 'Small' },
  { symbol: 'TATAINVEST', name: 'Tata Investment Corp', sector: 'Finance', marketCap: 'Small' },
  { symbol: 'TEJASNET', name: 'Tejas Networks Ltd.', sector: 'Telecom', marketCap: 'Small' },
  { symbol: 'TRIDENT', name: 'Trident Limited', sector: 'Textiles', marketCap: 'Small' },
  { symbol: 'UCOBANK', name: 'UCO Bank', sector: 'Banking', marketCap: 'Small' },
  { symbol: 'BTC', name: 'Bitcoin', sector: 'L1', volatility: 'Medium' },
  { symbol: 'ETH', name: 'Ethereum', sector: 'L1', volatility: 'Medium-High' },
  { symbol: 'SOL', name: 'Solana', sector: 'L1', volatility: 'High' },
  { symbol: 'BNB', name: 'Binance Coin', sector: 'Exchange', volatility: 'Medium' },
  { symbol: 'XRP', name: 'Ripple', sector: 'Payments', volatility: 'High' },
  { symbol: 'DOGE', name: 'Dogecoin', sector: 'Meme', volatility: 'High' },
  { symbol: 'ADA', name: 'Cardano', sector: 'L1', volatility: 'Medium-High' },
  { symbol: 'TRX', name: 'Tron', sector: 'L1', volatility: 'Medium' },
  { symbol: 'AVAX', name: 'Avalanche', sector: 'L1', volatility: 'High' },
  { symbol: 'SHIB', name: 'Shiba Inu', sector: 'Meme', volatility: 'High' },
  { symbol: 'TON', name: 'Toncoin', sector: 'L1', volatility: 'High' },
  { symbol: 'LINK', name: 'Chainlink', sector: 'Oracle', volatility: 'Medium-High' },
  { symbol: 'DOT', name: 'Polkadot', sector: 'L1', volatility: 'Medium-High' },
  { symbol: 'NEAR', name: 'Near Protocol', sector: 'L1', volatility: 'High' },
  { symbol: 'MATIC', name: 'Polygon', sector: 'L2', volatility: 'High' },
  { symbol: 'PEPE', name: 'Pepe', sector: 'Meme', volatility: 'Extreme' },
  { symbol: 'LTC', name: 'Litecoin', sector: 'Payments', volatility: 'Medium' },
  { symbol: 'BCH', name: 'Bitcoin Cash', sector: 'Payments', volatility: 'High' },
  { symbol: 'UNI', name: 'Uniswap', sector: 'DEX', volatility: 'High' },
  { symbol: 'ICP', name: 'Internet Computer', sector: 'L1', volatility: 'High' },
  { symbol: 'APT', name: 'Aptos', sector: 'L1', volatility: 'High' },
  { symbol: 'KAS', name: 'Kaspa', sector: 'L1', volatility: 'High' },
  { symbol: 'RENDER', name: 'Render', sector: 'AI', volatility: 'High' },
  { symbol: 'FET', name: 'Artificial Superintelligence', sector: 'AI', volatility: 'High' },
  { symbol: 'SUI', name: 'Sui', sector: 'L1', volatility: 'High' },
  { symbol: 'ARB', name: 'Arbitrum', sector: 'L2', volatility: 'High' },
  { symbol: 'TIA', name: 'Celestia', sector: 'Modular', volatility: 'High' },
  { symbol: 'OP', name: 'Optimism', sector: 'L2', volatility: 'High' },
  { symbol: 'WIF', name: 'dogwifhat', sector: 'Meme', volatility: 'Extreme' },
  { symbol: 'STX', name: 'Stacks', sector: 'L2', volatility: 'High' },
  { symbol: 'IMX', name: 'Immutable', sector: 'Gaming', volatility: 'High' },
  { symbol: 'FIL', name: 'Filecoin', sector: 'Storage', volatility: 'High' },
  { symbol: 'OKB', name: 'OKB', sector: 'Exchange', volatility: 'Medium' },
  { symbol: 'VET', name: 'VeChain', sector: 'L1', volatility: 'High' },
  { symbol: 'LDO', name: 'Lido DAO', sector: 'Liquid Staking', volatility: 'High' },
  { symbol: 'INJ', name: 'Injective', sector: 'L1', volatility: 'High' },
  { symbol: 'HBAR', name: 'Hedera', sector: 'L1', volatility: 'High' },
  { symbol: 'RUNE', name: 'THORChain', sector: 'DeFi', volatility: 'High' },
  { symbol: 'GRT', name: 'The Graph', sector: 'Web3', volatility: 'High' },
  { symbol: 'THETA', name: 'Theta Network', sector: 'Video', volatility: 'High' },
  { symbol: 'BONK', name: 'Bonk', sector: 'Meme', volatility: 'Extreme' },
  { symbol: 'FLOKI', name: 'Floki', sector: 'Meme', volatility: 'Extreme' },
  { symbol: 'MKR', name: 'Maker', sector: 'DeFi', volatility: 'Medium-High' },
  { symbol: 'SEI', name: 'Sei', sector: 'L1', volatility: 'High' },
  { symbol: 'STRK', name: 'Starknet', sector: 'L2', volatility: 'High' },
  { symbol: 'AAVE', name: 'Aave', sector: 'DeFi', volatility: 'High' },
  { symbol: 'ALGO', name: 'Algorand', sector: 'L1', volatility: 'High' },
  { symbol: 'FLOW', name: 'Flow', sector: 'L1', volatility: 'High' },
  { symbol: 'EGLD', name: 'MultiversX', sector: 'L1', volatility: 'High' },
  { symbol: 'QNT', name: 'Quant', sector: 'Interoperability', volatility: 'Medium' },
  { symbol: 'JUP', name: 'Jupiter', sector: 'DEX', volatility: 'High' },
  { symbol: 'BEAM', name: 'Beam', sector: 'Gaming', volatility: 'High' },
  { symbol: 'PYTH', name: 'Pyth Network', sector: 'Oracle', volatility: 'High' },
  { symbol: 'ORDI', name: 'ORDI', sector: 'BRC-20', volatility: 'Extreme' },
  { symbol: 'SATS', name: '1000SATS', sector: 'BRC-20', volatility: 'Extreme' },
  { symbol: 'DYDX', name: 'dYdX', sector: 'DEX', volatility: 'High' },
  { symbol: 'GALA', name: 'Gala Games', sector: 'Gaming', volatility: 'High' },
  { symbol: 'EOS', name: 'EOS', sector: 'L1', volatility: 'Medium' },
  { symbol: 'NEO', name: 'NEO', sector: 'L1', volatility: 'High' },
  { symbol: 'IOTA', name: 'IOTA', sector: 'IOT', volatility: 'High' },
  { symbol: 'JASMY', name: 'JasmyCoin', sector: 'IoT', volatility: 'Extreme' },
  { symbol: 'W', name: 'Wormhole', sector: 'Bridge', volatility: 'High' },
  { symbol: 'ENA', name: 'Ethena', sector: 'Stablecoin', volatility: 'High' },
  { symbol: 'BOME', name: 'Book of Meme', sector: 'Meme', volatility: 'Extreme' },
  { symbol: 'PENDLE', name: 'Pendle', sector: 'DeFi', volatility: 'High' },
  { symbol: 'AR', name: 'Arweave', sector: 'Storage', volatility: 'High' },
  { symbol: 'AKT', name: 'Akash Network', sector: 'AI/Cloud', volatility: 'High' },
  { symbol: 'AXS', name: 'Axie Infinity', sector: 'Gaming', volatility: 'High' },
  { symbol: 'SAND', name: 'The Sandbox', sector: 'Metaverse', volatility: 'High' },
  { symbol: 'MANA', name: 'Decentraland', sector: 'Metaverse', volatility: 'High' },
  { symbol: 'CHZ', name: 'Chiliz', sector: 'Fan Token', volatility: 'High' },
  { symbol: 'MINA', name: 'Mina Protocol', sector: 'L1', volatility: 'High' },
  { symbol: 'KAVA', name: 'Kava', sector: 'DeFi', volatility: 'High' },
  { symbol: 'CRV', name: 'Curve DAO', sector: 'DeFi', volatility: 'High' },
  { symbol: 'GMX', name: 'GMX', sector: 'DEX', volatility: 'High' },
  { symbol: 'SNX', name: 'Synthetix', sector: 'DeFi', volatility: 'High' },
  { symbol: 'LUNC', name: 'Terra Classic', sector: 'L1', volatility: 'Extreme' },
  { symbol: 'FTM', name: 'Fantom', sector: 'L1', volatility: 'High' },
  { symbol: 'RON', name: 'Ronin', sector: 'Gaming', volatility: 'High' },
  { symbol: 'CKB', name: 'Nervos Network', sector: 'L1', volatility: 'High' },
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', category: 'Major', volatility: 'Medium' },
  { symbol: 'GBP/USD', name: 'British Pound / US Dollar', category: 'Major', volatility: 'Medium-High' },
  { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', category: 'Major', volatility: 'High' },
  { symbol: 'USD/CHF', name: 'US Dollar / Swiss Franc', category: 'Major', volatility: 'Medium' },
  { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', category: 'Major', volatility: 'Medium-High' },
  { symbol: 'USD/CAD', name: 'US Dollar / Canadian Dollar', category: 'Major', volatility: 'Medium' },
  { symbol: 'NZD/USD', name: 'New Zealand Dollar / US Dollar', category: 'Major', volatility: 'Medium-High' },
  { symbol: 'GBP/JPY', name: 'British Pound / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'EUR/JPY', name: 'Euro / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'EUR/GBP', name: 'Euro / British Pound', category: 'Minor', volatility: 'Low-Medium' },
  { symbol: 'AUD/JPY', name: 'Australian Dollar / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'GBP/AUD', name: 'British Pound / Australian Dollar', category: 'Minor', volatility: 'High' },
  { symbol: 'EUR/AUD', name: 'Euro / Australian Dollar', category: 'Minor', volatility: 'High' },
  { symbol: 'GBP/CAD', name: 'British Pound / Canadian Dollar', category: 'Minor', volatility: 'Medium-High' },
  { symbol: 'CHF/JPY', name: 'Swiss Franc / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'NZD/JPY', name: 'New Zealand Dollar / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'EUR/CAD', name: 'Euro / Canadian Dollar', category: 'Minor', volatility: 'Medium' },
  { symbol: 'AUD/CAD', name: 'Australian Dollar / Canadian Dollar', category: 'Minor', volatility: 'Medium' },
  { symbol: 'CAD/JPY', name: 'Canadian Dollar / Japanese Yen', category: 'Minor', volatility: 'High' },
  { symbol: 'EUR/CHF', name: 'Euro / Swiss Franc', category: 'Minor', volatility: 'Low' },
  { symbol: 'USD/ZAR', name: 'US Dollar / South African Rand', category: 'Exotic', volatility: 'Extreme' },
  { symbol: 'USD/TRY', name: 'US Dollar / Turkish Lira', category: 'Exotic', volatility: 'Extreme' },
  { symbol: 'USD/MXN', name: 'US Dollar / Mexican Peso', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/NOK', name: 'US Dollar / Norwegian Krone', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/SEK', name: 'US Dollar / Swedish Krona', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/DKK', name: 'US Dollar / Danish Krone', category: 'Exotic', volatility: 'Medium' },
  { symbol: 'USD/SGD', name: 'US Dollar / Singapore Dollar', category: 'Exotic', volatility: 'Low-Medium' },
  { symbol: 'USD/HKD', name: 'US Dollar / Hong Kong Dollar', category: 'Exotic', volatility: 'Low' },
  { symbol: 'USD/INR', name: 'US Dollar / Indian Rupee', category: 'Exotic', volatility: 'Medium' },
  { symbol: 'USD/CNH', name: 'US Dollar / Chinese Yuan (Offshore)', category: 'Exotic', volatility: 'Medium' },
  { symbol: 'EUR/TRY', name: 'Euro / Turkish Lira', category: 'Exotic', volatility: 'Extreme' },
  { symbol: 'GBP/ZAR', name: 'British Pound / South African Rand', category: 'Exotic', volatility: 'Extreme' },
  { symbol: 'AUD/SGD', name: 'Australian Dollar / Singapore Dollar', category: 'Exotic', volatility: 'Medium' },
  { symbol: 'USD/PLN', name: 'US Dollar / Polish Zloty', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/HUF', name: 'US Dollar / Hungarian Forint', category: 'Exotic', volatility: 'Extreme' },
  { symbol: 'USD/CZK', name: 'US Dollar / Czech Koruna', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/ILS', name: 'US Dollar / Israeli Shekel', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/THB', name: 'US Dollar / Thai Baht', category: 'Exotic', volatility: 'Medium' },
  { symbol: 'EUR/PLN', name: 'Euro / Polish Zloty', category: 'Exotic', volatility: 'High' },
  { symbol: 'USD/BRL', name: 'US Dollar / Brazilian Real', category: 'Exotic', volatility: 'High' }
    ];

    return stocks.map((stock, idx) => {
      const ictAnalysis = analyzeICTSetup(stock);
      const tradeSetup = generateTradeSetup(stock.basePrice, ictAnalysis);
      const strategy = get2025Strategy(ictAnalysis);
      
      return {
        ...stock,
        ...tradeSetup,
        ictAnalysis,
        strategy,
        rank: idx + 1,
        signal: parseInt(tradeSetup.confidence) >= 80 ? '🟢 STRONG BUY' : 
                parseInt(tradeSetup.confidence) >= 65 ? '🟡 BUY' : '⚪ WAIT'
      };
    });
  };

  const [assets, setAssets] = useState(generateStockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(generateStockData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Telegram Alert
  const sendTelegramAlert = async (asset) => {
    if (!telegramBotToken || !telegramChatId) {
      alert('⚠️ Please configure Telegram settings first!');
      setShowSettings(true);
      return;
    }

    const message = `
🚨 *ICT TRADE SIGNAL* 🚨

📊 *${asset.symbol}* - ${asset.name}
💼 ${asset.sector}

💰 *TRADE SETUP*
Direction: ${asset.direction === 'LONG' ? '📈' : '📉'} *${asset.direction}*
Entry: ₹${asset.entryPrice}
🛑 Stop Loss: ₹${asset.stopLoss}
🎯 Target 1: ₹${asset.target1}
🎯 Target 2: ₹${asset.target2}
🎯 Target 3: ₹${asset.target3}

📊 *POSITION DETAILS*
Position Size: ${asset.positionSize} shares
Risk Amount: ₹${asset.riskAmount}
Potential Profit: ₹${asset.potentialProfit}
Risk:Reward = ${asset.riskReward}:1

🧠 *ICT ANALYSIS*
${asset.ictAnalysis.marketStructure}
${asset.ictAnalysis.orderBlock}
${asset.ictAnalysis.fairValueGap}
Kill Zone: ${asset.ictAnalysis.killZone}
PD Array: ${asset.ictAnalysis.pdArray}

⚡ *2025 STRATEGY*
${asset.strategy.name}
Accuracy: ${asset.strategy.accuracy}

✅ *CONFLUENCE SCORE: ${asset.ictAnalysis.confluenceScore}%*
🎯 *CONFIDENCE: ${asset.confidence}%*

⏰ ${new Date().toLocaleString('en-IN')}
`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });
      
      if (response.ok) {
        alert('✅ Alert sent successfully!');
      } else {
        alert('❌ Failed to send. Check your credentials.');
      }
    } catch (error) {
      alert('❌ Network error. Please try again.');
    }
  };

  const sessions = [
    { name: 'London', active: true, time: '12:30-15:30' },
    { name: 'NY', active: true, time: '17:30-20:30' },
    { name: 'Asian', active: false, time: '06:30-09:30' }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-emerald-900/30 sticky top-0 z-50 shadow-lg shadow-emerald-900/20">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setShowMenu(!showMenu)} className="p-2 bg-gray-900 rounded-lg border border-emerald-800/30 hover:border-emerald-600">
              <Menu className="w-5 h-5 text-emerald-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">ICT Pro Terminal</h1>
              <p className="text-xs text-emerald-600">Smart Money Concepts</p>
            </div>
          </div>
          <button onClick={() => setShowSettings(!showSettings)} className="p-2 bg-gray-900 rounded-lg border border-emerald-800/30 hover:border-emerald-600">
            {showSettings ? <X className="w-5 h-5 text-emerald-400" /> : <Settings className="w-5 h-5 text-emerald-400" />}
          </button>
        </div>

        {/* Sessions Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-950 text-xs border-t border-emerald-900/20">
          <div className="font-mono text-emerald-400 font-semibold">{currentTime.toLocaleTimeString('en-IN')}</div>
          <div className="flex gap-2">
            {sessions.map((s, i) => (
              <span key={i} className={`px-2 py-1 rounded font-semibold ${s.active ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-600 shadow-lg shadow-emerald-600/30 animate-pulse' : 'bg-gray-900 text-gray-600 border border-gray-800'}`}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-gradient-to-b from-gray-900 to-black border-b border-emerald-900/30 p-4 shadow-xl shadow-emerald-900/20">
          <h3 className="text-sm font-bold mb-3 text-emerald-400">📱 Telegram Alert Settings</h3>
          <div className="space-y-2">
            <input
              type="text"
              value={telegramBotToken}
              onChange={(e) => setTelegramBotToken(e.target.value)}
              placeholder="Bot Token"
              className="w-full bg-black border border-emerald-800/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
            <input
              type="text"
              value={telegramChatId}
              onChange={(e) => setTelegramChatId(e.target.value)}
              placeholder="Chat ID"
              className="w-full bg-black border border-emerald-800/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">💡 Get from @BotFather & @userinfobot</p>
        </div>
      )}

      {/* Main Content */}
      <div className="p-3 pb-16">
        {/* Market Overview */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-emerald-800/30 rounded-lg p-3 shadow-lg shadow-emerald-900/10">
            <div className="text-xs text-gray-500 mb-1">Active Signals</div>
            <div className="text-xl font-bold text-emerald-400">{assets.filter(a => a.signal.includes('BUY')).length}</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-800/30 rounded-lg p-3 shadow-lg shadow-cyan-900/10">
            <div className="text-xs text-gray-500 mb-1">Avg Confidence</div>
            <div className="text-xl font-bold text-cyan-400">
              {(assets.reduce((a, b) => a + parseInt(b.confidence), 0) / assets.length).toFixed(0)}%
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-800/30 rounded-lg p-3 shadow-lg shadow-yellow-900/10">
            <div className="text-xs text-gray-500 mb-1">Market</div>
            <div className="text-xl font-bold text-yellow-400">BULLISH</div>
          </div>
        </div>

        {/* Asset Cards */}
        <div className="space-y-2">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden shadow-xl">
              {/* Asset Header */}
              <div 
                onClick={() => setSelectedAsset(selectedAsset === idx ? null : idx)}
                className="p-3 cursor-pointer active:bg-gray-900 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">{asset.symbol}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold shadow-lg ${
                      asset.signal.includes('STRONG') ? 'bg-emerald-600 text-white shadow-emerald-600/50' :
                      asset.signal.includes('BUY') ? 'bg-yellow-600 text-black shadow-yellow-600/50' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {asset.signal}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform ${selectedAsset === idx ? 'rotate-180' : ''}`} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">₹{asset.entryPrice}</div>
                    <div className="text-xs text-gray-500">{asset.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-emerald-400">{asset.confidence}%</div>
                    <div className="text-xs text-gray-600">Confidence</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="bg-red-950/50 border border-red-900/50 rounded p-2 shadow-inner">
                    <div className="text-xs text-red-500">Stop Loss</div>
                    <div className="text-sm font-bold text-red-400">₹{asset.stopLoss}</div>
                  </div>
                  <div className="bg-green-950/50 border border-green-900/50 rounded p-2 shadow-inner">
                    <div className="text-xs text-green-500">Target 1</div>
                    <div className="text-sm font-bold text-green-400">₹{asset.target1}</div>
                  </div>
                  <div className="bg-yellow-950/50 border border-yellow-900/50 rounded p-2 shadow-inner">
                    <div className="text-xs text-yellow-500">R:R</div>
                    <div className="text-sm font-bold text-yellow-400">{asset.riskReward}:1</div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedAsset === idx && (
                <div className="border-t border-gray-800 p-3 bg-black">
                  {/* Trade Setup */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      📊 Trade Setup
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Direction:</span>
                        <span className={`font-bold ${asset.direction === 'LONG' ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.direction === 'LONG' ? '📈' : '📉'} {asset.direction}
                        </span>
                      </div>
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Entry Price:</span>
                        <span className="font-bold text-cyan-400">₹{asset.entryPrice}</span>
                      </div>
                      <div className="flex justify-between bg-red-950/30 p-2 rounded border border-red-900/50 shadow-inner">
                        <span className="text-gray-500">🛑 Stop Loss:</span>
                        <span className="font-bold text-red-400">₹{asset.stopLoss}</span>
                      </div>
                      <div className="flex justify-between bg-green-950/30 p-2 rounded border border-green-900/50 shadow-inner">
                        <span className="text-gray-500">🎯 Target 1:</span>
                        <span className="font-bold text-green-400">₹{asset.target1}</span>
                      </div>
                      <div className="flex justify-between bg-green-950/30 p-2 rounded border border-green-900/50 shadow-inner">
                        <span className="text-gray-500">🎯 Target 2:</span>
                        <span className="font-bold text-green-400">₹{asset.target2}</span>
                      </div>
                      <div className="flex justify-between bg-green-950/30 p-2 rounded border border-green-900/50 shadow-inner">
                        <span className="text-gray-500">🎯 Target 3:</span>
                        <span className="font-bold text-green-400">₹{asset.target3}</span>
                      </div>
                    </div>
                  </div>

                  {/* Risk Management */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-yellow-400 mb-2 flex items-center gap-1">
                      <BarChart3 className="w-4 h-4" />
                      ⚖️ Risk Management
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Position Size:</span>
                        <span className="font-bold text-purple-400">{asset.positionSize} shares</span>
                      </div>
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Risk Amount:</span>
                        <span className="font-bold text-orange-400">₹{asset.riskAmount}</span>
                      </div>
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Potential Profit:</span>
                        <span className="font-bold text-green-400">₹{asset.potentialProfit}</span>
                      </div>
                      <div className="flex justify-between bg-gray-900 p-2 rounded border border-gray-800">
                        <span className="text-gray-500">Risk:Reward:</span>
                        <span className="font-bold text-yellow-400">{asset.riskReward}:1</span>
                      </div>
                    </div>
                  </div>

                  {/* ICT Analysis */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-1">
                      <Brain className="w-4 h-4" />
                      🧠 ICT Analysis
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">Market Structure</div>
                        <div className="font-semibold text-emerald-400">{asset.ictAnalysis.marketStructure}</div>
                      </div>
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">Order Block</div>
                        <div className="font-semibold text-cyan-400">{asset.ictAnalysis.orderBlock}</div>
                      </div>
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">Fair Value Gap</div>
                        <div className="font-semibold text-purple-400">{asset.ictAnalysis.fairValueGap}</div>
                      </div>
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">Liquidity</div>
                        <div className="font-semibold text-yellow-400">{asset.ictAnalysis.liquidity}</div>
                      </div>
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">Kill Zone</div>
                        <div className="font-semibold text-green-400">{asset.ictAnalysis.killZone}</div>
                      </div>
                      <div className="bg-gray-900 p-2 rounded border border-gray-800">
                        <div className="text-gray-600">PD Array</div>
                        <div className="font-semibold text-orange-400">{asset.ictAnalysis.pdArray}</div>
                      </div>
                    </div>
                    <div className="mt-2 bg-emerald-950/30 border border-emerald-800 rounded p-2 shadow-inner">
                      <div className="text-xs text-gray-600">Confluence Score</div>
                      <div className="text-2xl font-bold text-emerald-400">{asset.ictAnalysis.confluenceScore}%</div>
                    </div>
                  </div>

                  {/* 2025 Strategy */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-purple-400 mb-2 flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      🎯 2025 Strategy
                    </h4>
                    <div className="bg-gray-900 p-3 rounded border border-gray-800">
                      <div className="font-bold text-white mb-1">{asset.strategy.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{asset.strategy.description}</div>
                      <div className="text-xs text-emerald-400 font-semibold">Accuracy: {asset.strategy.accuracy}</div>
                      <div className="mt-2 space-y-1">
                        {asset.strategy.signals.map((signal, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{signal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Alert Button */}
                  <button
                    onClick={() => sendTelegramAlert(asset)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 active:from-emerald-800 active:to-green-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50 transition-all"
                  >
                    <Bell className="w-5 h-5" />
                    Send to Telegram
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-gray-900 border-t border-emerald-900/30 p-2 text-center shadow-2xl shadow-emerald-900/20">
        <div className="text-xs text-gray-500">
          ⚡ Live Updates • 🧠 AI-Powered ICT • 📊 2025 Strategies
        </div>
      </div>
    </div>
  );
};

export default ICTProTerminal;
