"use client";

import ScrollProgressBar from "./components/ScrollProgressBar";
import GlobalToaster from "./components/Toaster/GlobalToaster";
import CursorEffect from "./components/curserpointer/CursorEffect.jsx";
import BackToTopButton from "./components/BackToTopButton";

export default function ClientProviders() {
  return (
    <>
      <ScrollProgressBar />
      <GlobalToaster />
      <CursorEffect />
      <BackToTopButton />
    </>
  );
}
