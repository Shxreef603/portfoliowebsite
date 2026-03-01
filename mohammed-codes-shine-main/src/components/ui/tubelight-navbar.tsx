"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // ScrollSpy functionality
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect section when it's in the middle of the viewport
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const matchedItem = items.find(item => item.url === `#${id}`)
          if (matchedItem) {
            setActiveTab(matchedItem.name)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    items.forEach(item => {
      const id = item.url.replace('#', '')
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [items])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string, name: string) => {
    e.preventDefault()
    setActiveTab(name)
    const id = url.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      // Add reveal highlight effect
      element.classList.remove('reveal-active')
      // Trigger reflow to restart animation
      void element.offsetWidth 
      element.classList.add('reveal-active')
      
      // Remove class after animation finished
      setTimeout(() => {
        element.classList.remove('reveal-active')
      }, 2000)

      const offset = 80 
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-700/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => scrollToSection(e, item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-slate-400 hover:text-cyan-400",
                isActive && "bg-slate-800 text-cyan-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-cyan-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-cyan-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-cyan-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-cyan-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
