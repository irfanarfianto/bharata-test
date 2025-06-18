"use client";

import React from "react";
import { Card } from "../ui/card";

function DotsIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="text-primary" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

export default function EngagementRateCard() {
  return (
    <Card
      style={{
        borderRadius: 6,
        padding: 0,
        minHeight: 200,
        minWidth: 340,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dots icon */}
      <button
        aria-label="More"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          
        }}
      >
        <DotsIcon />
      </button>
      {/* Main Content */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            fontSize: "4.5rem",
            fontWeight: 700,
            color: "text-primary",
            marginTop: 14,
            marginBottom: 12,
            lineHeight: 1.05,
          }}
        >
          34%
        </div>
        <div
          style={{
            fontSize: "1.25rem",
            color: "text-primary",
            fontWeight: 500,
            marginBottom: 10,
          }}
        >
          Engagement rate
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            marginTop: 2,
          }}
        >
          <svg width={19} height={19} viewBox="0 0 19 19" fill="none">
            <path
              d="M9.5 14L4 8.5h11L9.5 14Z"
              fill="bg-secondary"
            />
          </svg>
          <span style={{ color: "text-secondary", fontWeight: 500, fontSize: "1.15rem" }}>
            12%
          </span>
        </div>
      </div>
    </Card>
  );
}