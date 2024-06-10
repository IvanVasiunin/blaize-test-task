export default function GradientDot(props) {
  const { cx, cy, xOffset = 50, yOffsetBottom = 35 } = props;
  return (
    <g clipPath="url(#clipPath)">
      <line x1={cx} y1="0" x2={cx} y2={`calc(100% - ${yOffsetBottom}px)`} stroke="#FFFFFF" strokeDasharray="4 2" strokeOpacity={0.6} />
      <line x1={0 + xOffset} y1={cy} x2="100%" y2={cy} stroke="#FFFFFF" strokeDasharray="4 2" strokeOpacity={0.6} />
      <circle cx={cx} cy={cy} r="4.5" fill="url(#dotGradient)" />
    </g>
  );
};