"use client";

import { useEffect } from "react";

// Cherry patient-financing widget (withcherry.com). The loader script renders
// into the placeholder divs below by id. It's injected on mount rather than via
// next/script so it re-runs when someone navigates back to this page client-side.

const CONFIG = {
  debug: false,
  variables: {
    slug: "mlk-hair-idaho-falls-location",
    name: "MLK Hair- Idaho Falls Location",
    images: [26],
    customLogo: "",
    defaultPurchaseAmount: 750,
    customImage: "",
    imageCategory: "medspa",
    language: "en",
  },
  styles: {
    primaryColor: "#7a6f9b",
    secondaryColor: "#7a6f9b10",
    fontFamily: "Montserrat",
    headerFontFamily: "Montserrat",
  },
};

const SECTIONS = ["hero", "calculator", "howitworks", "faq"];

type HwQueue = ((...args: unknown[]) => void) & { q?: unknown[][] };

export default function CherryWidget() {
  useEffect(() => {
    const w = window as unknown as { _hw?: HwQueue };
    // Fresh command queue each mount, same as Cherry's embed stub.
    const hw: HwQueue = function (...args: unknown[]) {
      (hw.q = hw.q || []).push(args);
    };
    w._hw = hw;
    hw("init", CONFIG, SECTIONS);

    const js = document.createElement("script");
    js.id = "_hw";
    js.src = "https://files.withcherry.com/widgets/widget.js";
    js.async = true;
    document.body.appendChild(js);

    return () => {
      js.remove();
    };
  }, []);

  return (
    <>
      {/* Montserrat is the font Cherry's widget is styled with. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
      />
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </>
  );
}
