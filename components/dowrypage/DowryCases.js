"use client";
import React from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaBalanceScale,
  FaInfoCircle,
  FaChartBar,
  FaHeartBroken,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdWarningAmber } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function DowryCases() {
  const data = [
    { year: 2015, reported: 9876, convicted: 1320 },
    { year: 2017, reported: 10432, convicted: 1415 },
    { year: 2019, reported: 11234, convicted: 1502 },
    { year: 2021, reported: 12390, convicted: 1603 },
    { year: 2023, reported: 13120, convicted: 1680 },
  ];

  const rateData = data.map((item) => ({
    ...item,
    rate: ((item.convicted / item.reported) * 100).toFixed(1),
  }));

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-6 transition-all duration-300 hover:shadow-[0_0_20px_var(--accent)]">
      {/* 🧾 Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent)] flex items-center gap-2 leading-snug">
          <FaChartLine className="text-[var(--accent)]" />
          India Dowry Case Statistics (2015–2023)
        </h2>
        <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] bg-[var(--accent-light)] px-3 py-1 rounded-full">
          Source: NCRB Data (Reported & Conviction)
        </span>
      </div>

      {/* Intro */}
      <p className="text-[var(--text-secondary)] mb-10 leading-relaxed text-sm sm:text-base">
        Dowry-related crimes continue to be a serious issue in India. Reports from the{" "}
        <b>National Crime Records Bureau</b> show a steady rise in registered dowry cases,
        while conviction rates remain low — highlighting the gap between law and reality.
        <br />
        <br />
        Platforms like <b>DowryAI</b> (popularly known as the <b>Dahej Calculator</b>) use{" "}
        <b>AI-driven satire and data storytelling</b> to raise awareness about the persistence
        of the dowry mindset, promoting conversation through humor and insight.
      </p>

      {/* 📊 Chart + Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Card */}
        <div className="bg-[var(--card-bg-light)] rounded-2xl p-4 sm:p-6 border border-[var(--border)] shadow-md flex flex-col">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <FaBalanceScale className="text-[var(--accent)]" />
            Case Reports vs Convictions
          </h3>

          <div className="flex-1 min-h-[260px] sm:min-h-[360px] md:min-h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rateData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  tickMargin={8}
                />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 20]}
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 12 }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="reported"
                  stroke="#ef4444"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#ef4444" }}
                  name="Reported Cases"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="convicted"
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#3b82f6" }}
                  name="Convicted Cases"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="rate"
                  stroke="#10b981"
                  strokeDasharray="4 4"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#10b981" }}
                  name="Conviction Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Card */}
        <div className="bg-[var(--card-bg-light)] rounded-2xl p-4 sm:p-6 border border-[var(--border)] shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[var(--accent)] mb-3 flex items-center gap-2">
              <FaInfoCircle className="text-[var(--accent)]" />
              Key Insights
            </h3>
            <ul className="space-y-3 text-[var(--text-primary)] text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <FaChartBar className="text-[var(--accent)] flex-shrink-0 mt-1" />
                <span>
                  <b>Conviction Rate:</b> ~13.3% in 2015, slightly down to 12.8% in 2023.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaBalanceScale className="text-[var(--accent)] flex-shrink-0 mt-1" />
                <span>
                  <b>Reported Cases:</b> Rise steadily, but conviction progress is slow.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaHeartBroken className="text-[var(--accent)] flex-shrink-0 mt-1" />
                <span>
                  <b>Social Pressure:</b> Many cases are withdrawn due to stigma or family
                  coercion.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[var(--accent)] flex-shrink-0 mt-1" />
                <span>
                  <b>High-Incidence Regions:</b> Uttar Pradesh, Bihar, West Bengal & Madhya Pradesh.
                  <Link
                    href="https://www.thenewsminute.com/news/more-than-6000-dowry-death-cases-registered-in-2022-ncrb-data"
                    target="_blank"
                    className="text-[var(--accent)] hover:underline ml-1"
                  >
                    (Source)
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-start gap-3 text-xs sm:text-sm text-[var(--text-primary)] border-t border-[var(--border)] pt-3">
            <MdWarningAmber className="text-yellow-500 text-lg sm:text-xl mt-[2px]" />
            <p>
              Despite <b>Dowry Prohibition Act (1961)</b> & <b>Section 498A IPC</b>, conviction
              rates remain low — reflecting persistent cultural and institutional bias.
            </p>
          </div>
        </div>
      </div>

      {/* 💡 Awareness Footer */}
      <div className="mt-10 bg-[var(--card-bg-light)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 text-center shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--accent)] mb-3">
          Beyond Numbers — Dowry Awareness Through DowryAI
        </h3>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          <b>DowryAI</b> (also known as the <b>Dahej Calculator</b>) is not just a joke — it’s a
          movement. By blending AI, humor, and real data, it turns awareness into action. Each
          laugh is a reminder that <strong>change begins with consciousness</strong>.
        </p>
      </div>
    </div>
  );
}

export default DowryCases;
