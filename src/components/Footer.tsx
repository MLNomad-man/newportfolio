import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">&copy; {new Date().getFullYear()} MD Meraj Ansari. All Rights Reserved.</p>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}
