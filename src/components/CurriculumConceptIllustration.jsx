import React from 'react';

const TOPIC_CONFIG = {
  2: {
    1: ['place-value', 'Bảng giá trị hàng', '🔢'],
    2: ['operation', 'Xếp dữ kiện phép tính', '🧮'],
    3: ['polyline', 'Đường gấp khúc', '📏'],
    4: ['measure', 'Thang đổi đơn vị', '⚖️'],
    5: ['groups', 'Các nhóm bằng nhau', '🟣'],
    6: ['fraction', 'Chia đều thành các phần', '🍎'],
    7: ['solids', 'Quan sát hình khối', '🧊'],
    8: ['time', 'Đồng hồ – lịch – số liệu', '🕒'],
  },
  3: {
    1: ['groups', 'Nhân – chia theo nhóm', '✖️'],
    2: ['angles', 'Góc và hình tròn', '📐'],
    3: ['place-value', 'Bảng giá trị hàng nghìn', '🔢'],
    4: ['measure', 'Đơn vị đo thực tế', '🌡️'],
    5: ['place-value', 'Đọc số theo từng hàng', '💎'],
    6: ['area', 'Chu vi và diện tích', '📏'],
    7: ['money', 'Khay tiền mua sắm', '💵'],
    8: ['data', 'Đọc và so sánh số liệu', '📊'],
  },
  4: {
    1: ['place-value', 'Các hàng và lớp của số', '🔢'],
    2: ['operation', 'Sơ đồ phép tính', '🧮'],
    3: ['angles', 'Góc và đường thẳng', '📐'],
    4: ['measure', 'Bậc thang đổi đơn vị', '⚖️'],
    5: ['fraction', 'Thanh phân số', '🍫'],
    6: ['fraction-op', 'Phép tính phân số', '➗'],
    7: ['area', 'Hình bình hành – hình thoi', '🔷'],
    8: ['ratio', 'Sơ đồ đoạn thẳng tỉ số', '🟦'],
  },
  5: {
    1: ['decimal', 'Bảng số thập phân', '🔢'],
    2: ['operation', 'Đặt tính thẳng hàng', '🧮'],
    3: ['percent', 'Lưới một trăm ô', '💯'],
    4: ['triangle', 'Đáy và chiều cao', '📐'],
    5: ['circle', 'Bán kính – đường kính', '⭕'],
    6: ['volume', 'Mô hình hình khối', '🧊'],
    7: ['motion', 'Sơ đồ chuyển động', '🚗'],
    8: ['time', 'Trục thời gian', '⏱️'],
  },
};

const CARD_CLASS =
  'my-2 mx-auto w-full max-w-xl overflow-hidden rounded-2xl border-2 border-sky-200 bg-gradient-to-b from-sky-50 via-white to-amber-50/50 p-2.5 shadow-inner';

function getGivenTokens(question = '') {
  return question.match(/\d+(?:[ .]\d{3})*(?:,\d+)?(?:\/\d+)?/g)?.slice(0, 5) || [];
}

function ConceptHeader({ icon, title }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-2">
      <span className="rounded-full border border-sky-200 bg-white/90 px-2.5 py-1 text-[10px] font-black text-sky-950 sm:text-xs">
        {icon} {title}
      </span>
      <span className="text-[9px] font-bold text-slate-500">Nhìn dữ kiện • Tự tìm đáp án</span>
    </div>
  );
}

function GivenTokens({ tokens }) {
  if (!tokens.length) return null;
  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-black text-slate-600">
      <span>Dữ kiện:</span>
      {tokens.map((token, index) => (
        <span key={`${token}-${index}`} className="rounded-lg border border-amber-200 bg-white px-2 py-1 text-amber-900 shadow-xs">
          {token}
        </span>
      ))}
    </div>
  );
}

function PlaceValueVisual({ tokens, grade }) {
  const value = (tokens[0] || (grade === 2 ? '345' : grade === 3 ? '5307' : '15280400')).replace(/\D/g, '');
  const labels = grade === 2
    ? ['Trăm', 'Chục', 'Đơn vị']
    : grade === 3
    ? ['Nghìn', 'Trăm', 'Chục', 'Đơn vị']
    : ['Triệu', 'Trăm nghìn', 'Chục nghìn', 'Nghìn', 'Trăm', 'Chục', 'Đơn vị'];
  const digits = value.slice(-labels.length).padStart(labels.length, '•').split('');
  return (
    <div className={`grid gap-1 ${labels.length > 4 ? 'grid-cols-4 sm:grid-cols-7' : labels.length === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
      {labels.map((label, index) => (
        <div key={label} className="min-w-0 rounded-xl border border-sky-200 bg-white p-1.5 text-center shadow-xs">
          <div className="truncate text-[8px] font-black uppercase text-slate-500 sm:text-[9px]">{label}</div>
          <div className="text-lg font-black text-sky-700 sm:text-xl">{digits[index]}</div>
        </div>
      ))}
    </div>
  );
}

function OperationVisual({ question, tokens }) {
  const symbol = question.includes('+') ? '+' : question.includes('-') ? '−' : /x|×/.test(question) ? '×' : question.includes(':') ? '÷' : '→';
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="rounded-2xl border-2 border-blue-300 bg-white px-3 py-2 text-lg font-black text-blue-900">{tokens[0] || 'Số 1'}</div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-xl font-black text-amber-950 shadow">{symbol}</div>
      <div className="rounded-2xl border-2 border-violet-300 bg-white px-3 py-2 text-lg font-black text-violet-900">{tokens[1] || 'Số 2'}</div>
      <div className="text-lg font-black text-slate-500">=</div>
      <div className="flex h-11 min-w-11 items-center justify-center rounded-2xl border-2 border-dashed border-rose-400 bg-rose-50 px-2 text-lg font-black text-rose-600">?</div>
    </div>
  );
}

function PolylineVisual({ tokens }) {
  return (
    <div>
      <svg viewBox="0 0 360 100" className="h-24 w-full" role="img" aria-label="Đường gấp khúc có các đoạn cần cộng độ dài">
        <polyline points="25,72 125,22 225,72 335,28" fill="none" stroke="#0ea5e9" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        {[[25, 72, 'A'], [125, 22, 'B'], [225, 72, 'C'], [335, 28, 'D']].map(([x, y, label]) => (
          <g key={label}><circle cx={x} cy={y} r="9" fill="#f59e0b" /><text x={x} y={y - 14} textAnchor="middle" fontSize="13" fontWeight="900" fill="#334155">{label}</text></g>
        ))}
      </svg>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function MeasureVisual({ tokens }) {
  const stepColors = ['bg-emerald-400', 'bg-emerald-300', 'bg-emerald-200', 'bg-emerald-100'];
  return (
    <div>
      <div className="grid grid-cols-4 items-end gap-1 text-center">
        {['Lớn', 'Vừa', 'Nhỏ', 'Rất nhỏ'].map((label, index) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className={`w-full rounded-t-xl border border-emerald-300 ${stepColors[index]}`} style={{ height: `${52 - index * 9}px` }} />
            <span className="text-[8px] font-black text-emerald-900">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 text-center text-[9px] font-bold text-slate-600">Mỗi bậc đổi đơn vị theo một hệ số xác định</div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function GroupsVisual({ tokens }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[0, 1, 2].map((group) => (
          <div key={group} className="flex min-h-14 min-w-20 items-center justify-center gap-1 rounded-2xl border-2 border-violet-200 bg-white p-2 shadow-xs">
            {[0, 1, 2].map((item) => <span key={item} className="h-4 w-4 rounded-full bg-violet-400 ring-2 ring-violet-100" />)}
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-[10px] font-black text-violet-800">Số nhóm × Số phần tử trong mỗi nhóm</div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function FractionVisual({ tokens, operation = false }) {
  const fraction = tokens.find((token) => token.includes('/')) || '3/8';
  const [rawNumerator, rawDenominator] = fraction.split('/').map(Number);
  const denominator = Math.min(Math.max(rawDenominator || 8, 2), 12);
  const numerator = Math.min(rawNumerator || 3, denominator);
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="grid flex-1 overflow-hidden rounded-xl border-2 border-violet-300" style={{ gridTemplateColumns: `repeat(${denominator}, minmax(0, 1fr))` }}>
          {Array.from({ length: denominator }).map((_, index) => (
            <span key={index} className={`h-10 border-r border-white ${index < numerator ? 'bg-violet-400' : 'bg-white'}`} />
          ))}
        </div>
        {operation && <><span className="text-xl font-black text-amber-600">?</span><div className="h-10 flex-1 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50" /></>}
      </div>
      <div className="mt-2 flex justify-between text-[9px] font-black text-violet-800"><span>Tử số: phần được chọn</span><span>Mẫu số: tổng số phần bằng nhau</span></div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function SolidsVisual() {
  return (
    <div className="flex items-end justify-center gap-5 py-1">
      <div className="text-center"><div className="text-5xl drop-shadow">🥫</div><span className="text-[9px] font-black text-slate-600">Khối trụ</span></div>
      <div className="text-center"><div className="text-5xl drop-shadow">⚽</div><span className="text-[9px] font-black text-slate-600">Khối cầu</span></div>
      <div className="text-center"><div className="mx-auto h-12 w-16 -skew-x-6 rounded-lg border-2 border-indigo-400 bg-indigo-100 shadow"></div><span className="text-[9px] font-black text-slate-600">Tứ giác</span></div>
    </div>
  );
}

function TimeVisual({ tokens }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <div className="relative h-20 w-20 rounded-full border-4 border-amber-400 bg-white shadow-inner">
          <span className="absolute left-1/2 top-2 h-7 w-1 origin-bottom -translate-x-1/2 rotate-45 rounded bg-slate-700" />
          <span className="absolute left-1/2 top-1/2 h-1 w-7 origin-left -translate-y-1/2 rounded bg-rose-500" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900" />
        </div>
        <div className="flex-1 rounded-2xl border-2 border-amber-200 bg-white p-2">
          <div className="flex justify-between text-[9px] font-black text-slate-500"><span>Bắt đầu</span><span>Kết thúc</span></div>
          <div className="my-2 border-t-4 border-dotted border-amber-400" />
          <div className="text-center text-[10px] font-black text-amber-900">Tìm khoảng thời gian hoặc thời điểm</div>
        </div>
      </div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function AnglesVisual() {
  return (
    <div className="grid grid-cols-3 gap-2 text-center">
      {[
        ['∠', 'Góc nhọn'], ['∟', 'Góc vuông'], ['⦝', 'Góc tù'],
      ].map(([symbol, label]) => (
        <div key={label} className="rounded-2xl border-2 border-indigo-200 bg-white p-2 shadow-xs">
          <div className="text-4xl font-black text-indigo-600">{symbol}</div><div className="text-[9px] font-black text-slate-600">{label}</div>
        </div>
      ))}
    </div>
  );
}

function AreaVisual({ tokens, triangle = false }) {
  return (
    <div>
      <div className="relative mx-auto h-24 max-w-xs">
        {triangle ? (
          <div className="absolute bottom-1 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[85px] border-b-[80px] border-x-transparent border-b-emerald-300" />
        ) : (
          <div className="absolute inset-x-8 bottom-2 top-2 -skew-x-12 border-2 border-emerald-500 bg-[linear-gradient(to_right,rgba(16,185,129,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,.18)_1px,transparent_1px)] bg-[size:18px_18px]" />
        )}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-white px-2 py-0.5 text-[9px] font-black text-emerald-900 shadow">đáy</div>
        <div className="absolute right-6 top-5 border-l-2 border-dashed border-rose-400 pl-1 text-[9px] font-black text-rose-700">chiều cao</div>
      </div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function MoneyVisual({ tokens }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(tokens.length ? tokens.slice(0, 4) : ['10 000', '20 000', '50 000']).map((token, index) => (
          <div key={`${token}-${index}`} className="rotate-[-2deg] rounded-xl border-2 border-emerald-300 bg-emerald-100 px-3 py-2 text-xs font-black text-emerald-900 shadow">₫ {token}</div>
        ))}
      </div>
      <div className="mt-2 text-center text-[10px] font-black text-slate-600">Gộp tiền hoặc tìm số tiền trả lại</div>
    </div>
  );
}

function DataVisual({ tokens }) {
  return (
    <div>
      <div className="flex h-24 items-end justify-center gap-3 border-b-2 border-l-2 border-slate-300 px-3">
        {[42, 72, 55, 84].map((height, index) => <div key={index} className="w-9 rounded-t-lg bg-gradient-to-t from-sky-500 to-cyan-300" style={{ height: `${height}%` }} />)}
      </div>
      <div className="mt-1 grid grid-cols-4 text-center text-[8px] font-black text-slate-500"><span>Nhóm 1</span><span>Nhóm 2</span><span>Nhóm 3</span><span>Nhóm 4</span></div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function RatioVisual({ tokens }) {
  return (
    <div>
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-1"><span className="h-7 rounded-lg bg-sky-400" /><span className="h-7 rounded-lg bg-sky-400" /><span className="h-7 rounded-lg bg-sky-400" /><span className="h-7 rounded-lg bg-sky-400" /></div>
        <div className="grid grid-cols-3 gap-1"><span className="h-7 rounded-lg bg-amber-400" /><span className="h-7 rounded-lg bg-amber-400" /><span className="h-7 rounded-lg bg-amber-400" /></div>
      </div>
      <div className="mt-2 text-center text-[10px] font-black text-slate-600">Chia tổng hoặc hiệu thành các phần bằng nhau</div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function DecimalVisual({ tokens }) {
  const number = tokens[0] || '85,24';
  const [whole = '85', decimal = '24'] = number.split(',');
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 text-center">
      <div className="rounded-2xl border-2 border-blue-300 bg-white p-2"><div className="text-[9px] font-black text-slate-500">PHẦN NGUYÊN</div><div className="text-2xl font-black text-blue-700">{whole}</div></div>
      <div className="flex items-center text-3xl font-black text-rose-500">,</div>
      <div className="rounded-2xl border-2 border-violet-300 bg-white p-2"><div className="text-[9px] font-black text-slate-500">PHẦN THẬP PHÂN</div><div className="text-2xl font-black text-violet-700">{decimal}</div></div>
    </div>
  );
}

function PercentVisual({ question, tokens }) {
  const explicitPercent = question.match(/(\d+(?:,\d+)?)%/)?.[1];
  const filled = explicitPercent ? Math.min(Math.round(Number(explicitPercent.replace(',', '.'))), 100) : 0;
  return (
    <div>
      <div className="mx-auto grid w-fit grid-cols-10 overflow-hidden rounded-lg border-2 border-rose-300 bg-white">
        {Array.from({ length: 100 }).map((_, index) => <span key={index} className={`h-2.5 w-2.5 border-b border-r border-rose-100 ${index < filled ? 'bg-rose-400' : 'bg-white'}`} />)}
      </div>
      <div className="mt-2 text-center text-[10px] font-black text-rose-800">100 ô nhỏ tương ứng 100%</div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function CircleVisual({ tokens }) {
  return (
    <div>
      <div className="relative mx-auto h-28 w-28 rounded-full border-4 border-cyan-500 bg-cyan-50 shadow-inner">
        <div className="absolute left-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 bg-rose-500" />
        <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-indigo-500" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800" />
        <span className="absolute right-1 top-10 text-[9px] font-black text-rose-700">r</span>
        <span className="absolute left-7 top-12 text-[9px] font-black text-indigo-700">d</span>
      </div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function VolumeVisual({ tokens }) {
  return (
    <div>
      <div className="relative mx-auto h-24 w-36">
        <div className="absolute bottom-1 left-3 h-16 w-24 border-2 border-indigo-500 bg-indigo-100/80" />
        <div className="absolute bottom-9 left-9 h-16 w-24 -skew-y-[20deg] border-2 border-indigo-400 bg-indigo-50/80" />
        <span className="absolute bottom-0 left-12 text-[9px] font-black text-indigo-800">dài</span>
        <span className="absolute bottom-8 right-0 text-[9px] font-black text-indigo-800">rộng</span>
        <span className="absolute left-0 top-8 text-[9px] font-black text-indigo-800">cao</span>
      </div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

function MotionVisual({ tokens }) {
  return (
    <div>
      <div className="relative rounded-2xl bg-slate-200 p-3">
        <div className="absolute left-4 right-4 top-1/2 border-t-2 border-dashed border-white" />
        <div className="relative flex items-center justify-between text-2xl"><span>🚗</span><span className="rounded-full bg-white px-3 py-1 text-[9px] font-black text-slate-700 shadow">quãng đường</span><span>🏁</span></div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px] font-black"><span className="rounded-lg bg-white p-2 shadow-xs">s</span><span className="rounded-lg bg-white p-2 shadow-xs">v</span><span className="rounded-lg bg-white p-2 shadow-xs">t</span></div>
      <GivenTokens tokens={tokens} />
    </div>
  );
}

export default function CurriculumConceptIllustration({ level }) {
  const match = level?.id?.match(/^g([2-5])_l(\d+)_/);
  if (!match) return null;
  const grade = Number(match[1]);
  const lessonGroup = Number(match[2]);
  const config = TOPIC_CONFIG[grade]?.[lessonGroup];
  if (!config) return null;

  const [family, title, icon] = config;
  const tokens = getGivenTokens(level.question);
  let visual = null;

  switch (family) {
    case 'place-value': visual = <PlaceValueVisual tokens={tokens} grade={grade} />; break;
    case 'operation': visual = <OperationVisual question={level.question} tokens={tokens} />; break;
    case 'polyline': visual = <PolylineVisual tokens={tokens} />; break;
    case 'measure': visual = <MeasureVisual tokens={tokens} />; break;
    case 'groups': visual = <GroupsVisual tokens={tokens} />; break;
    case 'fraction': visual = <FractionVisual tokens={tokens} />; break;
    case 'fraction-op': visual = <FractionVisual tokens={tokens} operation />; break;
    case 'solids': visual = <SolidsVisual />; break;
    case 'time': visual = <TimeVisual tokens={tokens} />; break;
    case 'angles': visual = <AnglesVisual />; break;
    case 'area': visual = <AreaVisual tokens={tokens} />; break;
    case 'money': visual = <MoneyVisual tokens={tokens} />; break;
    case 'data': visual = <DataVisual tokens={tokens} />; break;
    case 'ratio': visual = <RatioVisual tokens={tokens} />; break;
    case 'decimal': visual = <DecimalVisual tokens={tokens} />; break;
    case 'percent': visual = <PercentVisual question={level.question} tokens={tokens} />; break;
    case 'triangle': visual = <AreaVisual tokens={tokens} triangle />; break;
    case 'circle': visual = <CircleVisual tokens={tokens} />; break;
    case 'volume': visual = <VolumeVisual tokens={tokens} />; break;
    case 'motion': visual = <MotionVisual tokens={tokens} />; break;
    default: return null;
  }

  return (
    <div className={CARD_CLASS} aria-label={`Minh họa ${title}`}>
      <ConceptHeader icon={icon} title={title} />
      {visual}
    </div>
  );
}
