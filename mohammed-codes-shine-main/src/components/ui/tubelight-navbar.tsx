import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, Menu, X } from "lucide-react"
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
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // ScrollSpy functionality
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
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
    setIsOpen(false)
    const id = url.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.classList.remove('reveal-active')
      void element.offsetWidth 
      element.classList.add('reveal-active')
      
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
        "fixed top-4 left-4 z-[100] sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:mt-6 w-fit px-0",
        className,
      )}
    >
      <div className="relative flex items-center bg-transparent sm:bg-slate-900/80 border-none sm:border sm:border-slate-700/50 sm:backdrop-blur-xl py-1 px-1 rounded-full sm:shadow-2xl">
        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-1">
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
                  isActive && "bg-slate-800/80 text-cyan-400 font-bold",
                )}
              >
                <span>{item.name}</span>
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
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>

        {/* Mobile View Toggle */}
        <div className="md:hidden flex items-center justify-start w-full min-w-[50px] px-2">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Expanded */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 12, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 w-64 bg-slate-900/90 border border-slate-700/50 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl flex flex-col gap-2 origin-top overflow-hidden"
            >
              {items.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeTab === item.name
                return (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => scrollToSection(e, item.url, item.name)}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-2xl transition-all",
                      isActive ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-slate-400 hover:bg-slate-800"
                    )}
                  >
                    <Icon size={18} className={isActive ? "text-cyan-400" : "text-slate-500"} />
                    <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

