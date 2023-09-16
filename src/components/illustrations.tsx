"use client";

import React, { useState } from "react";
import IllustrationSignupDesktop from "./illustration-sign-up-desktop";
import IllustrationSignupMobile from "./illustration-sign-up-mobile";

export interface IllustrationsProps {}

export default function Illustrations({}: IllustrationsProps) {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="">
      {isMobile ? <IllustrationSignupMobile /> : <IllustrationSignupDesktop />}
    </div>
  );
}
