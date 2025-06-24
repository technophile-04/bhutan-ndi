"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [proofUrl, setProofUrl] = useState<string | null>(null);
  const [proofData, setProofData] = useState<any>(null);

  // Fetch QR code URL
  useEffect(() => {
    fetch("/api/proof")
      .then(res => res.json())
      .then(data => setProofUrl(data.url)); // expects { url: "https://..." }
  }, []);

  // Poll for proof result
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/webhook")
        .then(res => res.json())
        .then(data => {
          if (data.proof) {
            setProofData(data.proof);
            clearInterval(interval);
          }
        });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Bhutan NDI Verifier</h1>

      {!proofData && proofUrl && (
        <>
          <p>Scan this QR with the Bhutan NDI Wallet:</p>
          <QRCodeSVG value={proofUrl} size={256} />
          <p style={{ marginTop: "1rem", wordBreak: "break-word" }}>{proofUrl}</p>
        </>
      )}

      {proofData && (
        <div style={{ marginTop: "2rem" }}>
          <h2>✅ Proof Received</h2>
          <p>
            <strong>Full Name:</strong> {proofData.requested_presentation?.revealed_attrs?.["Full Name"]?.[0]?.value}
          </p>
          <p>
            <strong>ID Number:</strong> {proofData.requested_presentation?.revealed_attrs?.["ID Number"]?.[0]?.value}
          </p>
        </div>
      )}
    </main>
  );
}
