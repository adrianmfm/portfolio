import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-10 border-t border-border/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
          Santiago, Chile
        </p>
      </div>
    </footer>
  );
}
