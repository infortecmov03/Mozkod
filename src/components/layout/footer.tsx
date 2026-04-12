"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-4 md:mb-0">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Open-source coding education platform for Mozambique.</p>
          </div>
          <div className="col-span-1 md:col-start-3 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Curriculum</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Levels</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Knowledge Areas</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Certificates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Community</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Forum</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Events</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contribute</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Mozkod. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
