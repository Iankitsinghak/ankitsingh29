import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full mt-24">
      <Separator className="bg-gradient-to-r from-transparent via-accent to-transparent h-[1px] opacity-50" />
      <div className="container py-6 text-center text-sm text-muted-foreground">
        © Ankit Singh 2025
      </div>
    </footer>
  );
}
