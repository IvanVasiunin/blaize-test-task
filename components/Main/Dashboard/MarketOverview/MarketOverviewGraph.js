'use client'
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import etherum from '@/assets/etherum.png';
import polyCluster from '@/assets/polyCluster.png';
import polyGaming from '@/assets/polyGaming.png';

import CustomTooltip from './CustomTooltip';
import GradientDot from './GradientDot';

const data = [
  { name: 'Aug 06', ethCore: 20, poly: 80, polyGaming: 50 },
  { name: 'Aug 07', ethCore: 40, poly: 60, polyGaming: 70 },
  { name: 'Aug 08', ethCore: 80, poly: 40, polyGaming: 60 },
  { name: 'Aug 09', ethCore: 120, poly: 100, polyGaming: 70 },
  { name: 'Aug 10', ethCore: 70, poly: 120, polyGaming: 100 },
  { name: 'Aug 11', ethCore: 140, poly: 90, polyGaming: 120 },
  { name: 'Aug 12', ethCore: 110, poly: 180, polyGaming: 80 }
];

const networkData = [
  { image: etherum.src, dataKey: 'ethCore', name: 'ETH-CORE', network: 'ETH' },
  { image: polyCluster.src, dataKey: 'poly', name: 'Poly', network: 'Polygon' },
  { image: polyGaming.src, dataKey: 'polyGaming', name: 'Poly Gaming', network: 'Polygon' }
];

export default function MarketOverviewGraph() {
  const [activeLine, setActiveLine] = useState(null);
  const [tooltipData, setTooltipData] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [showAxes, setShowAxes] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowAxes(window.innerWidth > 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseOver = (dataKey) => {
    setActiveLine(dataKey);
    setTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setActiveLine(null);
    setTooltipVisible(false);
  };

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      const activePayload = state.activePayload.filter(payload => payload.dataKey === activeLine);
      setTooltipData(activePayload);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={355}>
      <LineChart data={data} onMouseMove={handleMouseMove}>
        <defs>
          <linearGradient id="ethCoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CBB2FC" />
            <stop offset="54%" stopColor="#A4D1EB" />
            <stop offset="100%" stopColor="#80A6F8" />
          </linearGradient>
          <linearGradient id="polyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B385FF" />
            <stop offset="100%" stopColor="#8844FC" />
          </linearGradient>
          <linearGradient id="polyGamingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EA0909" />
            <stop offset="100%" stopColor="#AF0D02" />
          </linearGradient>
          <linearGradient id="dotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#41B7FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00FF73', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadowEthCore" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#A4D1EB" />
          </filter>
          <filter id="shadowPoly" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8844FC" />
          </filter>
          <filter id="shadowPolyGaming" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#AF0D02" />
          </filter>
          <clipPath id="clipPath">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <CartesianGrid stroke="#FFFFFF" strokeOpacity={0.08} strokeWidth={1} vertical={false} />
        {showAxes && (
          <>
            <XAxis 
              dataKey="name" 
              stroke="#4D4E59" 
              tick={{ fontSize: 14, fill: '#4D4E59', fontWeight: 500 }} 
              strokeOpacity={0.16} 
              strokeWidth={1} 
            />
            <YAxis 
              tickFormatter={(tick) => `$${tick.toFixed(2)}`}
              stroke="#4D4E59"
              tick={{ fontSize: 14, fill: '#4D4E59', fontWeight: 500 }}
              strokeOpacity={0.16}
              strokeWidth={1}
            />
          </>
        )}
        <Tooltip
          content={<CustomTooltip dataKey={activeLine} networkData={networkData} />}
          active={tooltipVisible}
          payload={tooltipData}
        />
        <Line
          type="monotone"
          dataKey="ethCore"
          stroke="url(#ethCoreGradient)"
          strokeWidth={activeLine === 'ethCore' ? 4 : 3}
          dot={false}
          activeDot={activeLine === 'ethCore' ? <GradientDot xOffset={50} yOffsetBottom={35} /> : false}
          strokeOpacity={activeLine === 'ethCore' || !activeLine ? 1 : 0.2}
          onMouseOver={() => handleMouseOver('ethCore')}
          onMouseOut={handleMouseOut}
          style={activeLine === 'ethCore' ? { filter: 'url(#shadowEthCore)', cursor: 'pointer' } : { cursor: 'pointer' }}
        />
        <Line
          type="monotone"
          dataKey="poly"
          stroke="url(#polyGradient)"
          strokeWidth={activeLine === 'poly' ? 4 : 3}
          dot={false}
          activeDot={activeLine === 'poly' ? <GradientDot xOffset={50} yOffsetBottom={35} /> : false}
          strokeOpacity={activeLine === 'poly' || !activeLine ? 1 : 0.2}
          onMouseOver={() => handleMouseOver('poly')}
          onMouseOut={handleMouseOut}
          style={activeLine === 'poly' ? { filter: 'url(#shadowPoly)', cursor: 'pointer' } : { cursor: 'pointer' }}
        />
        <Line
          type="monotone"
          dataKey="polyGaming"
          stroke="url(#polyGamingGradient)"
          strokeWidth={activeLine === 'polyGaming' ? 4 : 3}
          dot={false}
          activeDot={activeLine === 'polyGaming' ? <GradientDot xOffset={50} yOffsetBottom={35} /> : false}
          strokeOpacity={activeLine === 'polyGaming' || !activeLine ? 1 : 0.2}
          onMouseOver={() => handleMouseOver('polyGaming')}
          onMouseOut={handleMouseOut}
          style={activeLine === 'polyGaming' ? { filter: 'url(#shadowPolyGaming)', cursor: 'pointer' } : { cursor: 'pointer' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};