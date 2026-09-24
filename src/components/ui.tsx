import type { ReactNode } from "react";

import { Settings, Layers, 
  ClipboardList, Users, MessageCircle, Calendar, BarChart2, 
  Sparkles, MapPin, Grid, ShieldCheck, Globe, Sliders, Badge, 
  CheckCircle, Search, PlayCircle, Store, FileText, FileSpreadsheet, 
  Mail, QrCode, PieChart, CreditCard, Code, Video, Zap, BarChart, GitBranch
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  settings: Settings,
  layers: Layers,
  plan: ClipboardList,
  people: Users,
  chat: MessageCircle,
  calendar: Calendar,
  chart: BarChart2,
  sparkle: Sparkles,
  pin: MapPin,
  grid: Grid,
  shield: ShieldCheck,
  globe: Globe,
  sliders: Sliders,
  badge: Badge,
  check: CheckCircle,
  search: Search,
  "play-circle": PlayCircle,
  store: Store,
  document: FileText,
  sheet: FileSpreadsheet,
  mail: Mail,
  qr: QrCode,
  pie: PieChart,
  users: Users,
  "credit-card": CreditCard,
  code: Code,
  video: Video,
  zap: Zap,
  "bar-chart": BarChart,
  "git-branch": GitBranch
};

export function Icon({ name = "sparkle", className = "" }: { name?: string; className?: string }) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={`icon ${className}`} strokeWidth={1.5} aria-hidden="true" />;
}
export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`section ${className}`}><div className="container w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">{children}</div></section>;
}
