"use client";

import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Bhutan NDI Verification Demo</span>
            <span className="block text-2xl mb-2">National Digital Identity Service</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">
              Secure identity verification using Bhutan&apos;s National Digital Identity
            </p>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="text-6xl mb-4">🆔</div>
              <h3 className="text-xl font-bold mb-4">Identity Verification</h3>
              <p className="text-sm mb-6">
                Verify your Bhutan National ID using the official NDI wallet app. Secure, private, and instant
                verification.
              </p>
              <Link href="/verify" className="btn btn-primary btn-md px-8">
                Start Verification
              </Link>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Verification Dashboard</h3>
              <p className="text-sm mb-6">
                View verification history, check status, and manage your verification requests in a comprehensive
                dashboard.
              </p>
              <Link href="/dashboard" className="btn btn-secondary btn-md px-8">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8 px-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">1. Scan QR Code</h3>
                <p className="text-sm">Use your Bhutan NDI wallet app to scan the verification QR code</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔐</div>
                <h3 className="font-semibold mb-2">2. Share Credentials</h3>
                <p className="text-sm">Securely share your identity credentials through encrypted channels</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold mb-2">3. Get Verified</h3>
                <p className="text-sm">Receive instant verification confirmation with your identity details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
