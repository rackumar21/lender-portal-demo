"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import MergedPortal from "@/components/merged-portal"

type Stage = "login" | "portal"

export default function Home() {
  const [stage, setStage] = useState<Stage>("login")

  if (stage === "login") {
    return <LoginPage onLogin={() => setStage("portal")} />
  }

  return <MergedPortal onLogout={() => setStage("login")} />
}
