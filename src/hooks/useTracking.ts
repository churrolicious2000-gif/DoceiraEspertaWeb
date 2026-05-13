"use client";

import { useEffect, useState } from "react";

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  grupo?: string;
  post?: string;
}

export function useTracking() {
  const [utmData, setUtmData] = useState<UtmData>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const data: UtmData = {
      utm_source: searchParams.get("utm_source") || undefined,
      utm_medium: searchParams.get("utm_medium") || undefined,
      utm_campaign: searchParams.get("utm_campaign") || undefined,
      utm_content: searchParams.get("utm_content") || undefined,
      utm_term: searchParams.get("utm_term") || undefined,
      grupo: searchParams.get("grupo") || undefined,
      post: searchParams.get("post") || undefined,
    };

    // Filter out undefined values
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );

    if (Object.keys(cleanData).length > 0) {
      setUtmData(cleanData);
      sessionStorage.setItem("utm_data", JSON.stringify(cleanData));
    } else {
      const stored = sessionStorage.getItem("utm_data");
      if (stored) {
        setUtmData(JSON.parse(stored));
      }
    }
  }, []);

  const trackWhatsAppClick = async () => {
    const eventData = {
      ...utmData,
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      eventName: "whatsapp_group_click",
    };

    // 1. Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
      (window as any).fbq("trackCustom", "WhatsAppGroupClick", eventData);
    }

    // 2. GA4
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_group_click", {
        ...eventData,
        page_path: window.location.pathname,
      });
    }

    // 3. Server-side tracking (API)
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error("Tracking API error:", error);
    }

    // Wait 300ms for tracking to complete
    await new Promise((resolve) => setTimeout(resolve, 300));

    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL;
    if (whatsappUrl) {
      window.location.href = whatsappUrl;
    } else {
      alert("Link do grupo ainda não configurado.");
    }
  };

  return { utmData, trackWhatsAppClick };
}
