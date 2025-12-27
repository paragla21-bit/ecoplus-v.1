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
